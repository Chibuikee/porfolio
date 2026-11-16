// Runs in front of every request so search engines see exactly one copy of
// the site, at the canonical host.
//   bytealpha.online/...      301 to https://www.bytealpha.online/... (path and query kept, with HSTS)
//   *.bytealpha.pages.dev     served as-is but marked noindex (preview and alias URLs)
//   Accept: text/markdown     gets the page's .md twin (see negotiate below)

const CANONICAL_HOST = 'www.bytealpha.online'

// Markdown for agents (Cloudflare's built-in version is paid-plan only).
// scripts/markdown.mjs writes a .md twin next to each indexable page at build
// time; here we serve it to clients that ask for text/markdown and advertise
// it on the HTML.

// Quality of a media type in an Accept header (exact match only, else 0).
function acceptQ(accept, type) {
  let q = 0
  for (const part of accept.split(',')) {
    const [name, ...params] = part.trim().split(';')
    if (name.trim().toLowerCase() !== type) continue
    const p = params.map((s) => s.trim().match(/^q=([\d.]+)$/i)).find(Boolean)
    q = Math.max(q, p ? Number(p[1]) || 0 : 1)
  }
  return q
}

function wantsMarkdown(request) {
  const accept = request.headers.get('Accept') ?? ''
  const md = acceptQ(accept, 'text/markdown')
  return md > 0 && md >= acceptQ(accept, 'text/html')
}

// Candidate .md paths for a URL path: /x/ -> /x/index.md, /x -> /x/index.md or /x.md.
function markdownPaths(pathname) {
  if (pathname.endsWith('/')) return [`${pathname}index.md`]
  if (/\.[^/]+$/.test(pathname)) return []
  return [`${pathname}/index.md`, `${pathname}.md`]
}

// Returns {path, res} for the first candidate ASSETS serves as a 200 markdown file.
async function findMarkdown(env, request, pathname) {
  for (const path of markdownPaths(pathname)) {
    const res = await env.ASSETS.fetch(new URL(path, request.url))
    if (res.status === 200 && !(res.headers.get('Content-Type') ?? '').includes('text/html')) return { path, res }
    await res.body?.cancel()
  }
  return null
}

// Serves the markdown twin when asked, else adds the Link/Vary headers to HTML.
async function negotiate({ request, next, env }, url) {
  if (url.pathname.startsWith('/api/') || (request.method !== 'GET' && request.method !== 'HEAD')) return next()

  const found = await findMarkdown(env, request, url.pathname)
  if (found && wantsMarkdown(request)) {
    const res = new Response(request.method === 'HEAD' ? null : found.res.body, found.res)
    res.headers.set('Content-Type', 'text/markdown; charset=utf-8')
    res.headers.set('Vary', 'Accept')
    res.headers.set('X-Robots-Tag', 'noindex')
    res.headers.set('Cache-Control', 'public, max-age=300')
    res.headers.set('Link', `<${url.pathname}>; rel="canonical"`)
    return res
  }
  await found?.res.body?.cancel()

  const res = await next()
  if (res.status !== 200 || !(res.headers.get('Content-Type') ?? '').includes('text/html')) return res
  const out = new Response(res.body, res)
  out.headers.append('Vary', 'Accept')
  const links = ['</llms.txt>; rel="describedby"; type="text/plain"']
  if (found) links.unshift(`<${found.path}>; rel="alternate"; type="text/markdown"`)
  out.headers.append('Link', links.join(', '))
  return out
}

export async function onRequest(ctx) {
  const { request } = ctx
  const url = new URL(request.url)

  if (url.hostname === 'bytealpha.online') {
    url.hostname = CANONICAL_HOST
    // The redirect carries HSTS too, so browsers pin HTTPS for the bare domain
    // (www gets it from public/_headers). No includeSubDomains here: that would
    // bind every subdomain of bytealpha.online, not just this site.
    return new Response(null, {
      status: 301,
      headers: {
        Location: url.href,
        'Strict-Transport-Security': 'max-age=31536000',
      },
    })
  }

  const res = await negotiate(ctx, url)
  if (url.hostname.endsWith('.pages.dev')) {
    const tagged = new Response(res.body, res)
    tagged.headers.set('X-Robots-Tag', 'noindex')
    return tagged
  }
  return res
}

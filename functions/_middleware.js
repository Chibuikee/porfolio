// Runs in front of every request so search engines see exactly one copy of
// the site, at the canonical host.
//   bytealpha.online/...      301 to https://www.bytealpha.online/... (path and query kept)
//   *.bytealpha.pages.dev     served as-is but marked noindex (preview and alias URLs)

const CANONICAL_HOST = 'www.bytealpha.online'

export async function onRequest({ request, next }) {
  const url = new URL(request.url)

  if (url.hostname === 'bytealpha.online') {
    url.hostname = CANONICAL_HOST
    return Response.redirect(url.href, 301)
  }

  const res = await next()
  if (url.hostname.endsWith('.pages.dev')) {
    const tagged = new Response(res.body, res)
    tagged.headers.set('X-Robots-Tag', 'noindex')
    return tagged
  }
  return res
}

// Post-build: write a markdown twin next to every indexable HTML page so the
// Pages middleware can answer `Accept: text/markdown` (Cloudflare's own
// "Markdown for Agents" needs a paid plan). foo/index.html -> foo/index.md,
// bar.html -> bar.md. Usage: node scripts/markdown.mjs <dir> [origin]
import { readFile, writeFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { parse } from 'node-html-parser'
import { NodeHtmlMarkdown } from 'node-html-markdown'

const root = path.resolve(process.argv[2] ?? 'dist')
const origin = process.argv[3] ?? 'https://www.bytealpha.online'
const DROP = 'script, style, noscript, svg, nav, header, footer, form, button, dialog, template, iframe, [aria-hidden="true"]'

const nhm = new NodeHtmlMarkdown({ useInlineLinks: true })

// Hrefs and srcs in markdown have no <base>, so make them absolute.
function absolutize(el, pageUrl) {
  for (const [sel, attr] of [['a[href]', 'href'], ['img[src]', 'src']]) {
    for (const n of el.querySelectorAll(sel)) {
      const v = n.getAttribute(attr)
      if (!v || /^(#|mailto:|tel:|data:|javascript:)/i.test(v)) continue
      try { n.setAttribute(attr, new URL(v, pageUrl).href) } catch { /* leave as is */ }
    }
  }
}

const files = (await readdir(root, { recursive: true })).filter((f) => f.endsWith('.html'))
let count = 0
let bytes = 0
for (const rel of files) {
  const html = await readFile(path.join(root, rel), 'utf8')
  const doc = parse(html)
  const robots = doc.querySelectorAll('meta[name="robots"]').map((m) => m.getAttribute('content') ?? '')
  if (robots.some((c) => /noindex/i.test(c))) continue
  if (/(^|\/)404\.html$/.test(rel)) continue

  const urlPath = '/' + rel.replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '')
  const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? origin + urlPath
  const title = doc.querySelector('title')?.text.trim()
  const desc = doc.querySelector('meta[name="description"]')?.getAttribute('content')?.trim()

  const content = doc.querySelector('main') ?? doc.querySelector('body')
  if (!content) continue
  for (const n of content.querySelectorAll(DROP)) n.remove()
  // Icon-only links would come out as [](url); label them so they survive.
  for (const a of content.querySelectorAll('a[href]')) {
    if (a.text.trim() || a.querySelector('img')) continue
    const href = a.getAttribute('href')
    a.set_content(a.getAttribute('aria-label') ?? a.getAttribute('title') ?? href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''))
  }
  absolutize(content, canonical)

  let body = nhm.translate(content.toString()).replace(/%5F/g, '_').replace(/\n{3,}/g, '\n\n').trim()
  const head = [title && `# ${title}`, desc, `Source: ${canonical}`].filter(Boolean).join('\n\n')
  const md = `${head}\n\n${body}\n`
  await writeFile(path.join(root, rel.replace(/\.html$/, '.md')), md)
  count++
  bytes += Buffer.byteLength(md)
}
console.log(`markdown: ${count} page(s), ${bytes} bytes`)

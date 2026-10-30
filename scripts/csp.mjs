// Post-build: hash every inline executable <script> in dist/**/*.html and write
// dist/_headers from public/_headers with those hashes in script-src.
// JSON-LD blocks are data, not scripts, so they are skipped.
import { createHash } from 'node:crypto';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve('dist');
const pages = (await readdir(dist, { recursive: true })).filter((f) => f.endsWith('.html'));

const hashes = new Set();
for (const file of pages) {
  const html = await readFile(path.join(dist, file), 'utf8');
  for (const m of html.matchAll(/<script(\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
    const attrs = m[1] ?? '';
    if (/\ssrc=/.test(attrs) || /type="application\/ld\+json"/.test(attrs) || !m[2]) continue;
    hashes.add(`'sha256-${createHash('sha256').update(m[2]).digest('base64')}'`);
  }
}

const template = await readFile('public/_headers', 'utf8');
const placeholder = /^(\s*Content-Security-Policy:.*?)__SCRIPT_HASHES__/m;
if (!placeholder.test(template)) throw new Error('public/_headers: no __SCRIPT_HASHES__ placeholder in the Content-Security-Policy line');
const out = template.replace(placeholder, `$1${[...hashes].join(' ')}`);
if (out.includes('__SCRIPT_HASHES__')) throw new Error('public/_headers: placeholder appears more than once');
await writeFile(path.join(dist, '_headers'), out);
console.log(`csp: ${hashes.size} inline script hash(es) written to dist/_headers`);

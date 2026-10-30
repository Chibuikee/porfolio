// Post-deploy: tell IndexNow (Bing, which feeds ChatGPT search and Copilot,
// plus Yandex, Seznam and Naver) that every URL in the built sitemap changed,
// so they recrawl now instead of on their own schedule.
// The key is public by design: IndexNow checks that /<key>.txt on the site
// holds the same string, which proves the ping comes from the site owner.
import { readFile } from 'node:fs/promises';

const KEY = '68c202c2fbced815cd6f6c1ed856befa';
const HOST = 'www.bytealpha.online';

const sitemap = await readFile('dist/sitemap-0.xml', 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
urlList.push(`https://${HOST}/llms.txt`, `https://${HOST}/llms-full.txt`);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
// 200 and 202 both mean accepted; 403 means the key file isn't live yet.
console.log(`indexnow: ${res.status} for ${urlList.length} URL(s)`);
if (!res.ok) {
  console.log(await res.text());
  process.exitCode = 1;
}

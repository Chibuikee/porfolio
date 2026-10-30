// Captures a 1280x800 viewport screenshot of each side project and writes it to
// src/assets/projects/<slug>.webp for the Projects section. Run: npm run screenshots
// Playwright comes from the global install (not a dependency of this repo).
import { chromium } from '/home/chibuike/.npm-global/lib/node_modules/playwright/index.mjs';
import sharp from 'sharp';
import { mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const outDir = fileURLToPath(new URL('../src/assets/projects/', import.meta.url));

// Mirrors sideProjects in src/data/cv.ts.
const sites = [
  { slug: 'dancedeal', url: 'https://dancedeal.org/', wait: 6000 },
  { slug: 'dancerapy', url: 'https://dancerapy.org/' },
  { slug: 'nuvoro', url: 'https://nuvoro.net/' },
  { slug: 'stalwartblue', url: 'https://opticap.stalwartblue.com/' },
  { slug: 'growthclub', url: 'https://growthclub.life/' },
];

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch();
const results = [];

// Optional slug arguments limit the run: node scripts/screenshots.mjs nuvoro
const only = process.argv.slice(2);

for (const { slug, url, wait = 1500 } of sites) {
  if (only.length && !only.includes(slug)) continue;
  const png = `${outDir}${slug}.png`;
  const webp = `${outDir}${slug}.webp`;
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 });
  try {
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 25000 });
    } catch (err) {
      // Some sites never go fully idle (analytics, video); fall back to what has loaded.
      // Anything other than a timeout (connection closed, DNS) is a real failure.
      if (err.name !== 'TimeoutError') throw err;
      console.warn(`${slug}: networkidle not reached (${err.message.split('\n')[0]}), capturing anyway`);
    }
    await page.waitForTimeout(wait);
    await page.screenshot({ path: png });
    await sharp(png).resize({ width: 960 }).webp({ quality: 78 }).toFile(webp);
    await rm(png, { force: true });
    console.log(`ok   ${slug} -> ${webp}`);
    results.push([slug, true]);
  } catch (err) {
    console.error(`FAIL ${slug}: ${err.message.split('\n')[0]}`);
    results.push([slug, false]);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log(`${results.filter(([, ok]) => ok).length}/${results.length} captured`);

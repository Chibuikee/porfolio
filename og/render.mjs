// Renders og/card.html to public/og.png (1200×630), the link-preview image.
// Run after changing the card: node og/render.mjs
import { chromium } from '/home/chibuike/.npm-global/lib/node_modules/playwright/index.mjs';
import { fileURLToPath } from 'node:url';

const card = new URL('./card.html', import.meta.url);
const out = fileURLToPath(new URL('../public/og.png', import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(card.href);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: out });
await browser.close();
console.log('wrote', out);

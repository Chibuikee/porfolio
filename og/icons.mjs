// Rasterises public/favicon.svg into the PNG icons and favicon.ico.
// Run after changing the mark: node og/icons.mjs
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

const svg = await readFile(new URL('../public/favicon.svg', import.meta.url));
const pub = (f) => new URL(`../public/${f}`, import.meta.url);
for (const [name, size] of [['apple-touch-icon.png', 180], ['android-chrome-192x192.png', 192], ['android-chrome-512x512.png', 512]]) {
  await sharp(svg, { density: 600 }).resize(size, size).png().toFile(pub(name).pathname);
}
// favicon.ico: a single 32×32 PNG wrapped in an ICO header (PNG-in-ICO is valid).
const png = await sharp(svg, { density: 300 }).resize(32, 32).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // one image
header.writeUInt8(32, 6); // width
header.writeUInt8(32, 7); // height
header.writeUInt8(0, 8); // palette
header.writeUInt8(0, 9); // reserved
header.writeUInt16LE(1, 10); // colour planes
header.writeUInt16LE(32, 12); // bits per pixel
header.writeUInt32LE(png.length, 14); // image size
header.writeUInt32LE(22, 18); // image offset
await writeFile(pub('favicon.ico'), Buffer.concat([header, png]));
console.log('icons written');

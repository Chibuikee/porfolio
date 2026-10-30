// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // The canonical origin. @astrojs/sitemap and Base.astro (canonical, og:url,
  // JSON-LD) all resolve absolute URLs against this, so it is the one place the
  // public hostname is declared.
  site: 'https://www.bytealpha.online',

  // Fully prerendered. The contact endpoint is a Cloudflare Pages Function in
  // functions/, not an Astro route, so no adapter is needed.
  output: 'static',

  // dist/projects/quickpharms.html served as /projects/quickpharms, with no
  // trailing-slash redirect hop.
  build: { format: 'file' },
  trailingSlash: 'never',

  // lastmod is the build time: every deploy rebuilds every page from cv.ts.
  integrations: [sitemap({ serialize: (item) => ({ ...item, lastmod: new Date().toISOString() }) })],

  vite: {
    plugins: [tailwindcss()],
  },
});

# bytealpha.online — Chibuike Ewenike's portfolio

Static Astro site with a single Cloudflare Pages Function for the contact form.

- Live: https://www.bytealpha.online (Cloudflare Pages project `bytealpha`)
- Stack: Astro 7 (`output: 'static'`), Tailwind CSS v4 (`@tailwindcss/vite`), TypeScript, no UI framework. Interactions are small vanilla scripts inside the `.astro` components.

## Content

Everything the site says comes from **`src/data/cv.ts`**, transcribed from `public/Chibuike_Ewenike_CV.pdf`.
When the CV changes, replace the PDF **and** update `cv.ts` (and `public/llms.txt`). StalwartBlue is on the site but not on the 2026 CV, on purpose.

| Path | What |
| --- | --- |
| `src/pages/index.astro` | Home: hero, work, experience, skills, about, contact |
| `src/pages/projects/[slug].astro` | Case studies for the four flagships in `cv.ts` |
| `src/layouts/Base.astro` | `<head>`: title, description, canonical, OG/Twitter, JSON-LD `Person` |
| `src/styles/global.css` | Design tokens (`@theme`) and the few shared classes |
| `src/components/` | Sections; `art/` holds the animated project illustrations |
| `functions/api/contact.js` | `POST /api/contact` (Turnstile, honeypot, ZeptoMail) |
| `public/_headers` | Security headers. `scripts/csp.mjs` fills in inline-script hashes after the build |
| `og/` | `node og/render.mjs` renders `public/og.png`; `node og/icons.mjs` rasterises `public/favicon.svg` |
| `scripts/screenshots.mjs` | `npm run screenshots` recaptures the "more shipped work" screenshots |

## Develop

    npm install
    npm run dev          # http://localhost:4321
    npm run build        # astro check + build + CSP hashes → dist/
    npm run preview

The contact form needs the Pages runtime. Build, then:

    npx wrangler pages dev dist --binding TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA \
      --binding ZEPTO_MAIL_API_KEY=... --binding MAIL_FROM=... --binding CONTACT_TO=...

(`1x0000000000000000000000000000000AA` is Cloudflare's always-pass test secret; pair it with the test site key
`1x00000000000000000000AA` in `PUBLIC_TURNSTILE_SITE_KEY` at build time.)

## Deploy

    npm run deploy       # build, then wrangler pages deploy dist --branch main

Run it from the repo root so `functions/` ships with `dist/`.

### Settings

Build-time variable (`.env`, or Pages → Settings → Variables for Git builds):

- `PUBLIC_TURNSTILE_SITE_KEY` — Turnstile site key for `bytealpha.online`

Secrets (`npx wrangler pages secret put <NAME> --project-name bytealpha`):

- `TURNSTILE_SECRET_KEY` — the matching Turnstile secret
- `ZEPTO_MAIL_API_KEY` — ZeptoMail send token (key only, without `Zoho-enczapikey`)
- `MAIL_FROM` — sender address on a domain verified in ZeptoMail
- `CONTACT_TO` — inbox that receives the messages

Any missing secret makes the form answer `502 contact_misconfigured`, and the page tells the visitor to email instead.

### Domain

Attach `www.bytealpha.online` (canonical) and `bytealpha.online` to the Pages project, and redirect the apex to `www`
with a Cloudflare redirect rule. `astro.config.mjs` `site` is the single place the hostname is declared.

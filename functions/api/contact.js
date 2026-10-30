// Cloudflare Pages Function behind the contact form (POST /api/contact).
// Verifies Turnstile, validates the message, and emails it through the
// ZeptoMail HTTP API with Reply-To set to the visitor.
//
// Pages → Settings → Variables and Secrets (Production), all as secrets:
//   TURNSTILE_SECRET_KEY  Turnstile widget secret for bytealpha.online
//   ZEPTO_MAIL_API_KEY    ZeptoMail send-mail token (key material only, no "Zoho-enczapikey" prefix)
//   MAIL_FROM             sender on a ZeptoMail-verified domain, e.g. hello@bytealpha.online
//   CONTACT_TO            inbox the messages go to
// Set with: npx wrangler pages secret put <NAME> --project-name bytealpha
//
// Spam: Turnstile, a hidden `website` honeypot and a minimum fill time. Bots
// that trip the honeypot or the timer get a normal-looking 200 and no email.

const MAX_BODY = 16 * 1024
const MIN_FILL_MS = 3000
const ZEPTO_ENDPOINT = 'https://api.zeptomail.com/v1.1/email'
const SITEVERIFY = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

const LIMITS = { name: [2, 100], email: [3, 254], subject: [3, 150], message: [10, 5000] }
const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]{2,}$/

const json = (status, body) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } })
const fail = (status, code, message, field) => json(status, { error: { code, message, ...(field && { field }) } })

export async function onRequestPost({ request, env }) {
  const missing = ['TURNSTILE_SECRET_KEY', 'ZEPTO_MAIL_API_KEY', 'MAIL_FROM', 'CONTACT_TO'].filter((k) => !env[k])
  if (missing.length) {
    console.error('contact: missing secrets', missing.join(', '))
    return fail(503, 'contact_misconfigured', 'The contact form is not set up yet. Email sopewenike@yahoo.com instead.')
  }
  if (!(request.headers.get('Content-Type') || '').startsWith('application/json')) {
    return fail(415, 'unsupported_media_type', 'Send the request as JSON')
  }
  const raw = await request.text()
  if (raw.length > MAX_BODY) return fail(413, 'too_large', 'That message is too long')

  let data
  try {
    data = JSON.parse(raw)
  } catch {
    return fail(400, 'bad_json', 'The request body is not valid JSON')
  }
  if (!data || typeof data !== 'object') return fail(400, 'bad_json', 'The request body is not valid JSON')

  // Honeypot, too fast, or no timer at all (NaN fails >=): pretend it worked.
  if (data.website || !(Number(data.elapsed_ms) >= MIN_FILL_MS)) return json(200, { ok: true })

  const fields = {}
  for (const [key, [min, max]] of Object.entries(LIMITS)) {
    const value = typeof data[key] === 'string' ? data[key].trim() : ''
    if (value.length < min) return fail(400, 'invalid_field', `Enter your ${key}`, key)
    if (value.length > max) return fail(400, 'invalid_field', `Your ${key} is longer than ${max} characters`, key)
    // Header-bound values must stay on one line.
    if (key !== 'message' && /[\r\n]/.test(value)) return fail(400, 'invalid_field', `Your ${key} can't contain line breaks`, key)
    fields[key] = value
  }
  if (!EMAIL_RE.test(fields.email)) return fail(400, 'invalid_field', 'Enter a valid email address', 'email')

  const token = typeof data.turnstile === 'string' ? data.turnstile : ''
  if (!token) return fail(400, 'turnstile_missing', 'Complete the spam check and send again')
  const verify = await fetch(SITEVERIFY, {
    method: 'POST',
    body: new URLSearchParams({
      secret: env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: request.headers.get('CF-Connecting-IP') || '',
    }),
  })
    .then((r) => r.json())
    .catch(() => null)
  if (!verify?.success) return fail(400, 'turnstile_failed', 'The spam check failed. Reload the page and try again')

  const text = [
    `From: ${fields.name} <${fields.email}>`,
    `Subject: ${fields.subject}`,
    '',
    fields.message,
    '',
    '--',
    'Sent from the contact form on bytealpha.online',
  ].join('\n')

  const res = await fetch(ZEPTO_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Zoho-enczapikey ${env.ZEPTO_MAIL_API_KEY}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      from: { address: env.MAIL_FROM, name: 'Portfolio contact form' },
      to: [{ email_address: { address: env.CONTACT_TO, name: 'Chibuike Ewenike' } }],
      reply_to: [{ address: fields.email, name: fields.name }],
      subject: `Portfolio: ${fields.subject}`,
      textbody: text,
      htmlbody: `<pre style="font:14px/1.5 ui-monospace,monospace;white-space:pre-wrap">${escapeHtml(text)}</pre>`,
    }),
  }).catch(() => null)

  if (!res || !res.ok) {
    // ZeptoMail's body is the only useful part of its failures ("domain not verified").
    const detail = res ? (await res.text()).slice(0, 500) : 'network error'
    console.error('contact: zeptomail', res?.status, detail)
    return fail(503, 'send_failed', "The message couldn't be sent. Email sopewenike@yahoo.com instead.")
  }
  return json(200, { ok: true })
}

export function onRequest() {
  return fail(405, 'method_not_allowed', 'Only POST is accepted here')
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])
}

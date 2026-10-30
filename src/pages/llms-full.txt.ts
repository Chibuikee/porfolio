// The whole CV as plain Markdown for AI assistants and answer engines, built
// from cv.ts so it can never drift from the site. /llms.txt (in public/) is the
// short index that points here.
import type { APIRoute } from 'astro';
import { profile, summary, skills, experience, flagships, sideProjects, education, certifications } from '@/data/cv';

export const GET: APIRoute = ({ site }) => {
  const origin = site!.origin;
  const caseStudy = (slug?: string) => {
    const f = flagships.find((x) => x.slug === slug);
    return f ? ` Case study: ${origin}/projects/${f.slug}. Live: ${f.url}` : '';
  };

  const lines = [
    `# ${profile.name}`,
    '',
    `> ${profile.headline}. ${profile.location}.`,
    '',
    `Full name: ${profile.fullName}`,
    `Website: ${origin}/`,
    `Email: ${profile.email}`,
    `Phone: ${profile.phone}`,
    `GitHub: ${profile.links.github}`,
    `LinkedIn: ${profile.links.linkedin}`,
    `X: ${profile.links.x}`,
    `CV (PDF): ${origin}${profile.cv}`,
    '',
    '## Summary',
    '',
    summary,
    '',
    '## Experience',
    '',
    ...experience.flatMap((r) => [
      `### ${r.title}, ${r.company} (${r.period})`,
      '',
      ...(r.context ? [`${r.context}${caseStudy(r.project)}`, ''] : []),
      ...r.bullets.map((b) => `- ${b}`),
      '',
      `Tech: ${r.tech.join(', ')}`,
      '',
    ]),
    '## Selected projects',
    '',
    ...flagships.map((f) => `- ${f.name} (${f.url}): ${f.description} Case study: ${origin}/projects/${f.slug}`),
    ...sideProjects.map((p) => `- ${p.name} (${p.url}): ${p.summary} Stack: ${p.tags.join(', ')}.`),
    '',
    '## Skills',
    '',
    ...skills.map((g) => `- ${g.name}: ${g.items.join(', ')}`),
    '',
    '## Education and admission',
    '',
    ...education.map((e) => `- ${e.title}, ${e.place} (${e.period})`),
    '',
    '## Certifications',
    '',
    ...certifications.map((c) => `- ${c.name}, ${c.issuer} (${c.year})${c.url ? `: ${c.url}` : ''}`),
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

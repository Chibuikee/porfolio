// Everything the site says about Chibuike comes from this file, transcribed from
// public/Chibuike_Ewenike_CV.pdf (the 2026 CV). StalwartBlue is the one addition
// the CV leaves out; it is kept on the site by request. Update the CV and this
// file together.

export const profile = {
  name: 'Chibuike Ewenike',
  fullName: 'Chibuike Sopuruchukwu Ewenike',
  headline: 'Software Engineer | Backend & Full-Stack | AI Systems & AI Agents',
  location: 'Lagos, Nigeria (Remote)',
  email: 'sopewenike@yahoo.com',
  phone: '+234 903 212 5576',
  phoneHref: 'tel:+2349032125576',
  cv: '/Chibuike_Ewenike_CV.pdf',
  links: {
    github: 'https://github.com/Chibuikee',
    linkedin: 'https://www.linkedin.com/in/chibuike-ewenike/',
    x: 'https://x.com/sopsy_c',
  },
};

export const summary =
  'Software Engineer with 3+ years of experience designing, building and deploying production SaaS platforms end to end in Python (FastAPI, Django), Go and TypeScript (React, Next.js, Node.js). Builds AI-powered products: LLM integration, retrieval-augmented generation (RAG), vector search, agentic data-extraction pipelines and AI agent evaluation. Shipped and operates multi-tenant systems in healthcare/pharmacy, logistics, edtech, legal-tech and fintech, owning system design, APIs, databases, payments, security, cloud deployment and observability. Also a lawyer, called to the Nigerian Bar in 2025.';

export type SkillGroup = { name: string; items: string[] };

export const skills: SkillGroup[] = [
  { name: 'Languages', items: ['Python', 'Go (Golang)', 'TypeScript', 'JavaScript', 'SQL', 'HTML/CSS'] },
  {
    name: 'Backend & frameworks',
    items: ['FastAPI', 'Django', 'Node.js', 'Express', 'Go chi', 'Gin', 'React', 'Next.js', 'TanStack', 'Tailwind CSS', 'Celery', 'REST APIs', 'Server-Sent Events (SSE)', 'WebSockets'],
  },
  {
    name: 'AI & data',
    items: ['LLM integration (OpenRouter, OpenAI-compatible APIs)', 'RAG', 'Qdrant vector search', 'Dense retrieval', 'Retrieval evaluation (nDCG)', 'Haystack', 'AI agents', 'LLM evaluation', 'Structured output extraction'],
  },
  { name: 'Databases & messaging', items: ['PostgreSQL (row-level security, multi-tenancy)', 'MySQL', 'MongoDB', 'Redis', 'RabbitMQ', 'Firebase'] },
  {
    name: 'Cloud & DevOps',
    items: ['Docker', 'nginx', 'Linux', 'Oracle Cloud', 'AWS', 'Google Cloud', 'DigitalOcean', 'Cloudflare (Pages, R2, Workers, Turnstile)', 'Vercel', 'MinIO/S3', 'CI/CD', 'Backups'],
  },
  {
    name: 'Security & payments',
    items: ['OAuth 2.0', 'JWT', 'TOTP/MFA', 'RBAC', 'Refresh-token rotation', 'CSRF protection', 'Stripe (Checkout, Billing, Connect)', 'Flutterwave'],
  },
  {
    name: 'Quality & observability',
    items: ['Pytest', 'Vitest', 'Playwright E2E', 'OpenTelemetry', 'Prometheus', 'Grafana', 'Structured logging', 'PWA/offline-first', 'Web push', 'HL7 FHIR R5'],
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  /** ISO-ish start for <time datetime>. */
  start: string;
  context?: string;
  bullets: string[];
  tech: string[];
  /** Slug of the matching project case study, if there is one. */
  project?: string;
};

export const experience: Role[] = [
  {
    company: 'QuickPharms',
    title: 'Founder & Lead Software Engineer',
    period: 'Aug 2026 – Present',
    start: '2026-08',
    context: 'Multi-tenant pharmacy management SaaS and point-of-sale (POS) platform for Nigerian pharmacies.',
    bullets: [
      'Architected and built a multi-tenant Go backend on PostgreSQL with row-level security, exposing ~275 REST API endpoints to an 86-route React Progressive Web App (PWA).',
      'Delivered an offline-first POS: barcode scanning, split-tender payments (cash, transfer, POS terminal, store credit) and a sync outbox that queues sales and stock changes offline and reconciles them on reconnect.',
      'Implemented per-batch (lot and expiry) inventory, multi-branch stock, purchase orders, reorder suggestions from search misses, and custom roles with server-enforced feature flags.',
      'Built AI features including voice-to-cart ordering and an analytics assistant with an intent router and automated accuracy evaluations.',
      'Integrated with PharmaChain, a pharmaceutical distribution platform, over HL7 FHIR R5, covering product recalls with disposal evidence, returns, and compliance and revenue reporting.',
      'Deployed to production on an Oracle Cloud VM (Docker, nginx, PostgreSQL) with the PWA on Cloudflare Pages, a custom domain, and automated backups.',
    ],
    tech: ['Go', 'PostgreSQL (RLS)', 'React', 'TypeScript', 'PWA', 'IndexedDB', 'Docker', 'nginx', 'Oracle Cloud', 'Cloudflare Pages/R2/Workers', 'HL7 FHIR R5', 'LLM APIs'],
    project: 'quickpharms',
  },
  {
    company: 'Eureka',
    title: 'Lead Full-Stack Engineer (Contract)',
    period: 'May 2026 – Present',
    start: '2026-05',
    context: 'AI-powered scholarship-matching and mentorship platform for international students (myeureka.app).',
    bullets: [
      'Designed a multi-stage matching pipeline: hard eligibility gates (destination, gender, age), dense vector retrieval in Qdrant (chosen over a hybrid BM25/RRF design after an nDCG A/B, 0.918 vs 0.844) and LLM scoring into three fit tiers.',
      'Built an agentic ETL pipeline that uses LLMs to extract structured eligibility criteria, deadlines and quotas from scholarship sources, with A/B evaluation of extraction quality.',
      'Implemented authentication end to end: email verification, Google OAuth, TOTP, refresh-token rotation, password reset, parental consent for minors, and audit logging.',
      'Built an asynchronous notification system on Celery and RabbitMQ (transactional email with circuit breaker, deadline reminders, web push) and mentor bookings with Google Meet links.',
      'Integrated Stripe Checkout, subscriptions, dunning, session credits and mentor payouts, with webhook handling and money analytics.',
      'Deployed to production on DigitalOcean with OpenTelemetry tracing, Prometheus metrics and Grafana Cloud, and resolved memory and latency issues in production.',
    ],
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Qdrant', 'Celery', 'RabbitMQ', 'Redis', 'React', 'TypeScript', 'TanStack', 'Stripe', 'Docker', 'OpenTelemetry', 'Grafana'],
    project: 'eureka',
  },
  {
    company: 'Green Rhino',
    title: 'Full-Stack Engineer (Contract)',
    period: 'Sep 2026 – Present',
    start: '2026-09',
    context: 'Fleet and trucking operations management platform for a US logistics client (cncgreenrhino.com).',
    bullets: [
      'Built a Go backend and React PWA covering dispatch, multi-stop loads, drivers, trucks, customers, documents and role-based dashboards for admin, office and driver users.',
      'Delivered live GPS tracking with Google Maps and Routes API, loaded vs. empty mileage, and realtime updates using PostgreSQL triggers, Server-Sent Events and web push notifications.',
      'Shipped operational reports with scheduled CSV email exports, a public quote request flow protected by Cloudflare Turnstile, a support inbox, and an LLM-assisted paperwork wizard.',
      'Took the platform to production for the client in Oct 2026 on Oracle Cloud (rootless Docker, nginx, MinIO file storage, automated backups with restore drills).',
    ],
    tech: ['Go', 'PostgreSQL', 'React', 'TypeScript', 'PWA', 'SSE', 'Web Push', 'Google Maps Platform', 'Docker', 'nginx', 'MinIO', 'Cloudflare Pages', 'Oracle Cloud'],
    project: 'green-rhino',
  },
  {
    company: 'Lexanalytics',
    title: 'Software Engineer',
    period: 'Feb 2024 – Present',
    start: '2024-02',
    context: 'AI-powered legal research, analytics and contract automation platform.',
    bullets: [
      'Designed and implemented metadata extraction algorithms for parsing law reports, enabling accurate indexing, search and analytics across legal documents.',
      'Maintained enterprise authentication systems providing secure access for law firms, researchers and institutional clients.',
      'Improved legal research tools for retrieval speed, relevance and usability, using AI models and Haystack retrieval pipelines.',
      'Built contract drafting and automation tools that generate structured documents and reduce manual drafting effort.',
      'Worked with cross-functional teams to translate complex legal workflows into scalable software.',
    ],
    tech: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'React', 'TypeScript', 'AI models', 'Haystack'],
    project: 'lexanalytics',
  },
  {
    company: 'Dancedeal',
    title: 'Full-Stack Engineer (Contract)',
    period: 'Dec 2025 – Present',
    start: '2025-12',
    bullets: [
      'Refactored an existing full-stack codebase, fixing critical bugs across backend APIs and frontend flows.',
      'Owned production deployment: provisioned AWS infrastructure, configured environments, deployed backend and frontend services, and set up DNS and domains.',
      'Strengthened authentication and authorization (token handling, edge-case auth fixes, email validation) and improved error handling, input validation and API contracts across users, courses, enrollments and transactions.',
      'Optimized Flutterwave and Stripe payment integrations, including webhook handling and transaction verification.',
    ],
    tech: ['TypeScript', 'Node.js', 'Next.js', 'React', 'PostgreSQL', 'Docker', 'AWS', 'Tailwind CSS', 'React Hook Form', 'Zod', 'Flutterwave', 'Stripe'],
  },
  {
    company: 'Nuvoro',
    title: 'Full-Stack Engineer (Contract)',
    period: 'Sep 2025 – Apr 2026',
    start: '2025-09',
    bullets: [
      'Refactored an AI-generated full-stack codebase to improve structure, stability and maintainability, and fixed production bugs across bookings, subscriptions and dashboards.',
      'Added Stripe payment-method updates, subscription auto-renewal and manual renewals with robust webhook handling.',
      'Improved authentication, subscription logic and API contracts, then redeployed and stabilized backend and frontend services.',
    ],
    tech: ['TypeScript', 'Node.js', 'Next.js', 'React', 'PostgreSQL', 'Stripe', 'Docker', 'RabbitMQ', 'AWS', 'Tailwind CSS'],
  },
  {
    company: 'BrainzCode',
    title: 'Backend Engineer',
    period: 'Jun 2025 – Jul 2025',
    start: '2025-06',
    bullets: [
      'Built Python backend services for AI applications, including voice cloning and voice synchronization systems.',
      'Implemented secure authentication and handled DevOps: server provisioning and production deployments on AWS and Google Cloud.',
    ],
    tech: ['Python', 'AWS', 'Google Cloud', 'Linux', 'AI models'],
  },
  {
    company: 'StalwartBlue',
    title: 'Full-Stack Engineer (Contract)',
    period: '2023 – 2025',
    start: '2023',
    bullets: [
      'Refactored core backend and frontend logic in an existing codebase to improve performance, stability and maintainability.',
      'Rewrote the full loan lifecycle (application, approval, repayment) to reduce bugs across business and admin workflows.',
      'Added real-time chat and a notification system (email and in-app) for users and administrators.',
      'Strengthened backend APIs, auth, cron jobs and notification services, and improved dashboard UX, table search and frontend performance.',
    ],
    tech: ['TypeScript', 'Node.js', 'Next.js', 'React', 'Express', 'MongoDB', 'Docker', 'Tailwind CSS'],
  },
  {
    company: 'Growthclub (Solid Fiction)',
    title: 'Lead Frontend / Full-Stack Engineer (Contract)',
    period: '2023',
    start: '2023',
    bullets: [
      'Led the Next.js frontend from setup to launch (authentication, dashboards, subscription and payment interfaces), then returned post-launch as a full-stack engineer on payments, webhooks and cron jobs.',
    ],
    tech: ['TypeScript', 'Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Stripe', 'Docker'],
  },
];

export type Flagship = {
  slug: string;
  /** Exhibit letter shown on the card: the lawyer's way of numbering evidence. */
  exhibit: string;
  name: string;
  tagline: string;
  role: string;
  period: string;
  url: string;
  urlLabel: string;
  /** Three headline points for the home page card; the case study shows the full role bullets. */
  highlights: string[];
  tags: string[];
  description: string;
};

export const flagships: Flagship[] = [
  {
    slug: 'quickpharms',
    exhibit: 'A',
    name: 'QuickPharms',
    tagline: 'Pharmacy management SaaS and offline-first POS.',
    role: 'Founder & Lead Software Engineer',
    period: 'Aug 2026 – Present',
    url: 'https://quickpharms.com/',
    urlLabel: 'quickpharms.com',
    highlights: [
      'Multi-tenant Go backend on PostgreSQL row-level security: ~275 REST endpoints behind an 86-route React PWA.',
      'Offline-first till with split-tender payments and a sync outbox that reconciles sales on reconnect.',
      'Voice-to-cart ordering and an analytics assistant with automated accuracy evaluations.',
    ],
    tags: ['Go', 'PostgreSQL RLS', 'PWA', 'HL7 FHIR R5', 'LLM'],
    description:
      'QuickPharms is a multi-tenant pharmacy management and point-of-sale platform for Nigerian pharmacies, built and run by Chibuike Ewenike: Go, PostgreSQL row-level security, an offline-first React PWA and HL7 FHIR R5 integration.',
  },
  {
    slug: 'eureka',
    exhibit: 'B',
    name: 'Eureka',
    tagline: 'AI scholarship matching and mentorship platform.',
    role: 'Lead Full-Stack Engineer (Contract)',
    period: 'May 2026 – Present',
    url: 'https://app.myeureka.app/',
    urlLabel: 'app.myeureka.app',
    highlights: [
      'Matching pipeline: hard eligibility gates, dense retrieval in Qdrant and LLM scoring into three fit tiers.',
      'Dense retrieval chosen over hybrid BM25/RRF after an nDCG A/B: 0.918 vs 0.844.',
      'Agentic ETL that extracts eligibility, deadlines and quotas from scholarship sources.',
    ],
    tags: ['Python', 'FastAPI', 'Qdrant', 'RAG', 'Stripe'],
    description:
      'Eureka matches international students to scholarships with hard eligibility gates, dense vector retrieval in Qdrant and LLM scoring. Chibuike Ewenike leads its full-stack engineering.',
  },
  {
    slug: 'green-rhino',
    exhibit: 'C',
    name: 'Green Rhino',
    tagline: 'Trucking fleet management with live tracking.',
    role: 'Full-Stack Engineer (Contract)',
    period: 'Sep 2026 – Present',
    url: 'https://app.cncgreenrhino.com/',
    urlLabel: 'app.cncgreenrhino.com',
    highlights: [
      'Dispatch, multi-stop loads and role-based dashboards for admin, office and driver users.',
      'Live GPS tracking with loaded vs. empty mileage over Server-Sent Events and web push.',
      'In production for a US logistics client since Oct 2026, with restore-drilled backups.',
    ],
    tags: ['Go', 'React PWA', 'SSE', 'Google Maps', 'MinIO'],
    description:
      'Green Rhino is a fleet and trucking operations platform for a US logistics client: dispatch, multi-stop loads and live GPS tracking, built by Chibuike Ewenike in Go and React.',
  },
  {
    slug: 'lexanalytics',
    exhibit: 'D',
    name: 'Lexanalytics',
    tagline: 'AI legal research, analytics and contract automation.',
    role: 'Software Engineer',
    period: 'Feb 2024 – Present',
    url: 'https://www.lexanalytics.ai/',
    urlLabel: 'lexanalytics.ai',
    highlights: [
      'Metadata extraction for parsing law reports into indexed, searchable records.',
      'Faster, more relevant legal research with AI models and Haystack retrieval pipelines.',
      'Contract drafting tools that generate structured documents.',
    ],
    tags: ['Python', 'Django', 'Haystack', 'AI', 'Legal-tech'],
    description:
      'Lexanalytics is an AI-powered legal research, analytics and contract automation platform. Chibuike Ewenike, a software engineer and lawyer, builds its extraction and retrieval systems.',
  },
];

export type SideProject = {
  slug: string;
  name: string;
  summary: string;
  url: string;
  urlLabel: string;
  tags: string[];
};

export const sideProjects: SideProject[] = [
  { slug: 'dancedeal', name: 'DanceDeal Training Foundation', summary: 'Online training and registration platform.', url: 'https://dancedeal.org/', urlLabel: 'dancedeal.org', tags: ['Next.js', 'Node.js', 'AWS', 'Stripe'] },
  { slug: 'dancerapy', name: 'Dancerapy', summary: 'Dance fitness video streaming platform.', url: 'https://dancerapy.org/', urlLabel: 'dancerapy.org', tags: ['Next.js', 'Video', 'Payments'] },
  { slug: 'nuvoro', name: 'Nuvoro', summary: 'Appointment booking and payments for service businesses.', url: 'https://nuvoro.net/', urlLabel: 'nuvoro.net', tags: ['Next.js', 'Stripe', 'RabbitMQ'] },
  { slug: 'stalwartblue', name: 'StalwartBlue', summary: 'Capital and funding management portal for loans.', url: 'https://opticap.stalwartblue.com/', urlLabel: 'opticap.stalwartblue.com', tags: ['Next.js', 'Express', 'MongoDB'] },
  { slug: 'growthclub', name: 'Growthclub', summary: 'Membership platform with subscriptions and dashboards.', url: 'https://growthclub.life/', urlLabel: 'growthclub.life', tags: ['Next.js', 'Stripe', 'MongoDB'] },
];

export const education = [
  { title: 'Bachelor of Laws (LLB)', place: 'University of Lagos, Nigeria', period: '2016 – 2023' },
  { title: 'Called to the Nigerian Bar', place: 'Barrister and Solicitor of the Supreme Court of Nigeria', period: 'Jul 2025' },
];

export const certifications = [
  { year: '2026', name: 'Introduction to Agents (AI Agent Evaluation)', issuer: 'Mercor', note: 'Credential ID MRC-2026-4N7VRR7L', url: 'https://work.mercor.com/learn/verify/MRC-2026-4N7VRR7L' },
  { year: '2025', name: 'AI Agents Fundamentals', issuer: 'Hugging Face', note: 'View certificate', url: 'https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/Chibuikee/2025-03-14.png' },
  { year: '2020', name: 'Python', issuer: 'IBM' },
  { year: '2020', name: 'Data Science Orientation', issuer: 'Coursera' },
];

export const testimonials = [
  {
    name: 'Adebayo Oluwafemi',
    title: 'Full-stack engineer',
    photo: 'femi',
    link: 'https://www.linkedin.com/in/adebayo-oluwafemi-46b87718b/',
    quote:
      "Great working with Chibuike. His frontend skills in JavaScript and Next.js are seriously impressive. He writes great mobile-responsive code and is always willing to learn. Plus, his positive attitude makes him a great team player. You'll love having him on board!",
  },
  {
    name: 'Folahan Areago',
    title: 'Full-stack engineer',
    photo: 'fola',
    link: 'https://www.linkedin.com/in/folahan-areago-0a7818164/',
    quote:
      'I am delighted to recommend Chibuike, a highly skilled Frontend Developer. His expertise in JavaScript, React, Next.js, TypeScript, Firebase, Tailwind and Git is truly impressive. Chibuike has an exceptional eye for detail and consistently delivers exceptional web experiences.',
  },
];

/** Production platforms listed on the site: the four flagships plus the five others. */
export const platformCount = flagships.length + sideProjects.length;

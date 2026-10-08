import type { Project, Role } from './types'

export const experience: Role[] = [
  {
    organisation: 'Pabau Clinic Software',
    title: 'Software Developer',
    period: 'October 2023 – present',
    context: 'Clinic-management SaaS · TypeScript and Node.js microservices, GraphQL, REST, RabbitMQ, MariaDB, React',
    highlights: [
      {
        text: 'Built SMS delivery-receipt ingestion: a public webhook service verifying two providers’ signatures (HMAC, Ed25519) at a stateless edge, feeding a queue consumer. Wrote the decision record.',
      },
      {
        text: 'Hardened message sending on an at-least-once queue with no provider idempotency key, using guarded writes, no retry after a send and timeouts treated as indeterminate.',
        variants: ['general'],
      },
      {
        text: 'Hardened email and SMS sending on an at-least-once queue with no provider idempotency key, using guarded writes, no retry after a send and timeouts treated as indeterminate.',
        variants: ['hornetsecurity'],
      },
      {
        text: 'Hardened patient-portal password reset against account enumeration with uniform responses, a latency floor and per-IP rate limits.',
      },
      {
        text: 'Designed observability events across a migration between two GraphQL engines, surfacing real payment bugs.',
      },
      {
        text: 'Earlier: search over 1.3 million clinical terminology rows, Stripe pricing per location, POS package accounting.',
      },
    ],
  },
  {
    organisation: 'Truckers Flow',
    title: 'Frontend Developer (freelance)',
    period: 'February 2023 – October 2023',
    context: 'Recruiting platform for trucking companies · Next.js, TypeScript, Material UI',
    highlights: [
      { text: 'Led the frontend of the recruiter web app, with responsive layouts across desktop and mobile.' },
      { text: 'Turned requirements into mockups, prototypes and functional documentation.' },
    ],
  },
  {
    organisation: 'Hidro-Konsult, Skopje',
    title: 'Mechanical Engineer',
    period: 'November 2019 – April 2022',
    context: 'Hydraulic modelling and design documentation',
    highlights: [],
  },
]

export const flagship: Project = {
  name: 'ATS Flow, applicant tracking for trucking recruiters',
  role: 'Sole engineer on the rebuild (freelance)',
  period: 'April 2025 – present (rebuild since July 2026)',
  stack: 'Next.js · Pothos GraphQL · Prisma · MariaDB · Docker',
  highlights: [
    {
      text: 'Rebuilt a WordPress backend on unindexed key-value tables as a multi-tenant GraphQL platform. Measured on production: slowest filter 14.4 s → 93 ms on the server, 15.2 s → 0.63 s on screen.',
    },
    {
      text: 'Tenant isolation by construction: tenant from the session, writes scoped by company, default-deny access, cross-tenant tests on a real database.',
    },
    {
      text: 'Run it in production myself: phased deploys with backup before migrate and rollback by tag, encrypted nightly backups, SOPS secrets, alerting added after a real disk incident.',
    },
    {
      text: 'Built a typed library of about fifty components whose design rules are enforced by the compiler.',
      variants: ['general'],
    },
    {
      text: 'About 4,000 tests and 32 decision records since July 2026, built with parallel AI agents under a protocol I wrote: isolated worktrees, a database per agent, verified landing.',
    },
  ],
}

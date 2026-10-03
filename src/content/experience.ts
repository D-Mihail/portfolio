import type { EarlierRole, Project, Role } from './types'

export const experience: Role[] = [
  {
    organisation: 'Pabau Clinic Software',
    title: 'Software Developer',
    period: 'January 2024 – present (intern from October 2023)',
    context: 'Clinic-management SaaS · TypeScript, Node.js, Rust, GraphQL, RabbitMQ, MariaDB, React',
    highlights: [
      {
        text: 'Built SMS delivery-receipt ingestion: a public webhook service verifying two providers’ signatures (HMAC, Ed25519) at a stateless edge, feeding a queue consumer. Wrote the decision record.',
      },
      {
        text: 'Made message sending safe on an at-least-once queue with no provider idempotency key — guarded writes, no retry after a send, timeouts treated as indeterminate — in TypeScript and Rust.',
      },
      {
        text: 'Hardened patient-portal password reset against account enumeration with uniform responses, a latency floor and per-IP rate limits.',
      },
      {
        text: 'Designed observability across a TypeScript-to-Rust GraphQL migration, which surfaced real payment and query bugs.',
      },
      {
        text: 'Earlier: search over 1.3 million clinical terminology rows, per-location pricing on Stripe, point-of-sale package accounting.',
      },
    ],
  },
]

export const flagship: Project = {
  name: 'ATS Flow — applicant tracking for trucking recruiters',
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

export const earlierRoles: EarlierRole[] = [
  { title: 'Frontend Developer (freelance)', organisation: 'Truckers Flow', period: '2023', note: 'Next.js, TypeScript, Material UI' },
  {
    title: 'Mechanical Engineer',
    organisation: 'Hidro-Konsult, Skopje',
    period: '2019 – 2022',
    note: 'hydraulic modelling and design documentation',
  },
]

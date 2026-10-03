import type { Project, Role } from './types'

export const flagship: Project = {
  name: 'ATS Flow — applicant tracking for trucking recruiters',
  role: 'Sole engineer on the rebuild, Truckers Flow (freelance, alongside Pabau)',
  period: 'April 2025 – present (rebuild since July 2026)',
  stack: 'Next.js · GraphQL · Prisma · MariaDB',
  highlights: [
    {
      text: 'Rebuilt a WordPress REST backend on unindexed key-value tables as a multi-tenant GraphQL platform. Measured on production with Playwright: the slowest filter went from 14.4 s to 93 ms on the server and from 15.2 s to 0.63 s on screen.',
    },
    {
      text: 'Built a typed library of about fifty components with a props-only API — no className escape hatch, every variant checked at compile time — and moved it from Tailwind to CSS Modules.',
      variants: ['hornetsecurity'],
    },
    {
      text: 'Made tenant isolation structural: the tenant comes from the session, every write is scoped by company, access is default-deny, and a cross-tenant suite runs against a real database.',
    },
    {
      text: 'Run it in production: phased deploys (backup, migrate, roll, smoke test) with rollback by tag, nightly encrypted on-server backups, SOPS-managed secrets, and disk and memory alerting added after a real full-disk incident.',
    },
    {
      text: 'Around 4,000 automated tests and 32 architecture decision records since July 2026, built with AI coding agents working in parallel under a written protocol — isolated worktrees, a database per agent, verified landing.',
    },
    {
      text: 'Earlier version (2025, with one other developer): the Next.js recruiter frontend on the legacy API. Our in-place backend migration stalled, which taught me to fix the data model first.',
      variants: ['general'],
    },
  ],
}

export const experience: Role[] = [
  {
    organisation: 'Pabau Clinic Software',
    title: 'Software Developer',
    period: 'January 2024 – present (intern from October 2023)',
    context: 'Clinic-management SaaS · Next.js, React, TypeScript, GraphQL',
    highlights: [],
  },
  {
    organisation: 'Truckers Flow',
    title: 'Frontend Developer (freelance)',
    period: 'February – October 2023',
    context: 'Next.js, TypeScript, Material UI',
    highlights: [
      { text: 'Led the frontend of the recruiter web app: responsive layouts, mockups and prototypes, and the functional documentation.' },
    ],
  },
  {
    organisation: 'Hidro-Konsult, Skopje',
    title: 'Mechanical Engineer',
    period: 'November 2019 – April 2022',
    highlights: [
      {
        text: 'Hydraulic modelling, flood-risk feasibility studies and full tender documentation — the habit of writing down constraints before designing came from here.',
      },
    ],
  },
]

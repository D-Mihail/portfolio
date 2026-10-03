import type { Education, Profile, SkillGroup } from './types'

export const profile: Profile = {
  name: 'Mihail Dimoski',
  location: 'Skopje, North Macedonia · open to remote EU and relocation',
  headline: {
    general: 'Full-Stack Engineer · TypeScript, React / Next.js, GraphQL',
    hornetsecurity: 'Frontend-focused Full-Stack Engineer · TypeScript, React, design systems',
  },
  summary: {
    general:
      'Full-stack engineer building production TypeScript products: a commercial clinic-management SaaS at Pabau, and an end-to-end rebuild of a multi-tenant recruiting platform that took its slowest filter from 15.2 s to 0.63 s on screen. I care about the data model, the tests and the operations as much as the interface, and I work with AI coding agents daily under rules that keep their output reviewable.',
    hornetsecurity:
      'Frontend-focused full-stack engineer. I built and maintain a typed library of about fifty components whose design rules are enforced by the compiler, on top of a production GraphQL platform I rebuilt end to end — its slowest filter went from 15.2 s to 0.63 s on screen. I enjoy the space where design, accessibility and engineering meet, and I write things down: 32 architecture decision records since July.',
  },
  links: [
    { label: 'mihaildimoski.dev', href: 'https://mihaildimoski.dev' },
    { label: 'mihaildimoski@gmail.com', href: 'mailto:mihaildimoski@gmail.com' },
    { label: '+389 71 332 559', href: 'tel:+38971332559' },
    { label: 'linkedin.com/in/mihail-di', href: 'https://www.linkedin.com/in/mihail-di/' },
    { label: 'gitlab.com/D.Mihail', href: 'https://gitlab.com/D.Mihail' },
  ],
}

export const skills: SkillGroup[] = [
  {
    label: 'Frontend',
    items:
      'TypeScript, React 19, Next.js App Router, TanStack Query and Table, React Hook Form, Zod, Radix UI, CSS Modules, Material UI, Apollo Client, accessibility',
  },
  { label: 'Backend', items: 'Node.js, Bun, GraphQL (Pothos, Apollo), Prisma, MariaDB / MySQL, REST, better-auth' },
  {
    label: 'Quality and delivery',
    items: 'Bun test, Testing Library, Playwright, Docker, GitLab, Woodpecker CI, Traefik, Vercel, SOPS, restic',
  },
  { label: 'AI workflow', items: 'Claude Code, parallel agent workflows with isolated worktrees and verified landing' },
]

export const education: Education[] = [
  { institution: 'Brainster', qualification: 'Front-End Development Academy', period: '2022 – 2023' },
  {
    institution: 'Ss. Cyril and Methodius University, Skopje',
    qualification: 'Bachelor of Engineering, Mechanical Engineering',
    period: '2014 – 2021',
  },
]

export const languages = 'Macedonian (native), English (fluent, daily working language)'

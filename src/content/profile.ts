import type { Education, Profile, SkillGroup } from './types'

const generalHeadline = 'Full-Stack Engineer · TypeScript, React / Next.js, Node.js, GraphQL'

const generalSummary =
  'Full-stack engineer with real backend depth. At Pabau I build the parts that must not fail quietly: webhook ingestion, queue consumers and security hardening. On my own I rebuilt and run a multi-tenant platform end to end. I write the failure mode down before the code, and use AI agents daily under guardrails I built.'

export const profile: Profile = {
  name: 'Mihail Dimoski',
  location: 'Skopje, North Macedonia · open to remote EU and relocation',
  headline: {
    general: generalHeadline,
    hornetsecurity: 'Software Developer · TypeScript, Node.js, GraphQL · backend services and delivery',
  },
  summary: {
    general: generalSummary,
    hornetsecurity:
      'Backend-leaning full-stack engineer working in containerised Node.js services: a public webhook ingress, a queue consumer, REST and GraphQL APIs, with CI/CD as daily practice. I rebuilt and run a multi-tenant platform on MariaDB and Docker end to end, including its deploy pipeline, and I write decisions down and challenge them.',
  },
  links: [
    { label: 'mihaildimoski.dev', href: 'https://mihaildimoski.dev' },
    { label: 'mihaildimoski@gmail.com', href: 'mailto:mihaildimoski@gmail.com' },
    { label: '+389 71 332 559', href: 'tel:+38971332559' },
    { label: 'linkedin.com/in/mihail-di', href: 'https://www.linkedin.com/in/mihail-di/' },
  ],
}

export const skills: SkillGroup[] = [
  {
    label: 'Backend',
    items: 'TypeScript, Node.js, GraphQL, REST, Prisma, SQL, MariaDB, Stripe, Twilio, SendGrid',
  },
  { label: 'Frontend', items: 'React, Next.js, TanStack, Zod' },
  {
    label: 'Delivery',
    items: 'Jest, Playwright, Docker, Helm, Git, CI/CD (Woodpecker CI), Traefik, Vercel, SOPS, Linux',
  },
  { label: 'AI workflow', items: 'Claude Code, parallel agents in isolated worktrees, commit guard hooks, AI review in the loop' },
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

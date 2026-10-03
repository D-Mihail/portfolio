import type { Education, Profile, SkillGroup } from './types'

const generalHeadline = 'Full-Stack Engineer · TypeScript, React / Next.js, Node.js, GraphQL'

const generalSummary =
  'Full-stack engineer with real backend depth. At Pabau I build the parts that must not fail quietly — webhook ingestion, queue consumers, security hardening — in TypeScript and Rust. On my own I rebuilt and run a multi-tenant platform end to end. I write the failure mode down before the code, and use AI agents daily under guardrails I built.'

export const profile: Profile = {
  name: 'Mihail Dimoski',
  location: 'Skopje, North Macedonia · open to remote EU and relocation',
  headline: {
    general: generalHeadline,
    hornetsecurity: 'Full-Stack Engineer · TypeScript, Node.js, Rust · backend reliability and security',
  },
  summary: {
    general: generalSummary,
    hornetsecurity:
      'Full-stack engineer focused on backend reliability and security — webhook ingestion, at-least-once queues, account-enumeration hardening — in TypeScript and Rust. I rebuilt and run a multi-tenant GraphQL platform on MariaDB and Docker, and practise AI-assisted development with guardrails I built.',
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
    items: 'TypeScript, Node.js, Rust, GraphQL (Pothos, Hasura, Apollo), Fastify, RabbitMQ, Prisma, MariaDB / MySQL, Stripe, Twilio, SendGrid',
  },
  { label: 'Frontend', items: 'React 19, Next.js App Router, TanStack Query and Table, React Hook Form, Zod, Radix UI, CSS Modules' },
  {
    label: 'Delivery',
    items: 'Jest, Bun test, Playwright, Docker, Helm, GitLab, Bitbucket, Woodpecker CI, Traefik, Vercel, SOPS, restic, Linux',
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

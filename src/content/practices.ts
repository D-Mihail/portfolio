import type { HeadlineFigure, Practice } from './types'

export const practices: Practice[] = [
  {
    title: 'Write the failure mode down first',
    body: 'Before the code, I name what it has to survive: a retried queue message, a missing environment variable, a provider that times out after it already sent. Most of the bugs I have fixed lived exactly there.',
  },
  {
    title: 'Decisions are written, not remembered',
    body: 'Anything with a trade-off gets an architecture decision record: the choice, why, and the alternatives rejected. 32 of them on the rebuild, and a habit I practise at Pabau too.',
  },
  {
    title: 'Invariants enforced by machines',
    body: 'If a rule matters, such as tenant scoping, one validation rule per concept or no ad-hoc styling, a test or the type checker enforces it. Memory and code review are not a control.',
  },
  {
    title: 'AI as a multiplier, with guardrails',
    body: 'I run coding agents in parallel every day, under rules I built: hooks that block bad commits, isolated worktrees and databases per agent, a verified landing loop, and AI review in the loop. An AI reviewer once flagged an unsigned webhook endpoint of mine as high severity, and I reversed my own design.',
  },
]

export const headlineFigures: HeadlineFigure[] = [
  { value: '15.2 s → 0.63 s', label: 'slowest filter, on screen' },
  { value: '14.4 s → 93 ms', label: 'same request, on the server' },
  { value: '~4,000', label: 'automated tests' },
]

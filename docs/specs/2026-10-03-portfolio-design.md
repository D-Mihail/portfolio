# Portfolio — CV, site, case study, demo

## Goal

Land an intermediate/senior full-stack, frontend or backend role within days. First target: Hornetsecurity,
Senior Frontend Engineer (UX/UI team), Skopje. Then remote-EU and relocation roles. Salary anchors: Skopje
€1,800–1,900 net (floor €1,700, up from €1,300), remote EU €2,500–3,000.

The material should let the work speak — no self-congratulation. Interviews are where Mihail sells; the
material's job is to earn the interview and give the interviewer good questions to ask.

## Positioning

Full-stack engineer (TypeScript, React/Next.js, GraphQL) who ships production systems with discipline and
uses AI to multiply output without dropping quality. Proof: the ATS rebuild (flagship, solo) and Pabau
(team, commercial codebase — the collaboration evidence the flagship cannot give).

Credit rules: ATS 2 is Mihail's, claimed fully. ATS 1 is "built with one other developer". Pabau work is
described public-safe only (no client names, codenames, URLs, ticket keys, figures marked confidential).

## Deliverables (in build order)

1. **CV** — one page A4, PDF, two variants: `general` and `hornetsecurity` (leads with design-system work,
   names Vitest/GitLab CI/Docker overlap, states openness on level). Photo `…-227`. Plus a short cover note
   for Hornetsecurity.
2. **Site** — `mihaildimoski.dev`: Hero (photo `…-251`, one-line positioning, CV download, contact) →
   Flagship card → Experience → How I work → Stack → Contact.
3. **Case study** — `/case/ats-rebuild`, Risklick shape: problem & constraints → what was wrong with the
   legacy system (WordPress key-value tables, no relations/indexes, tenant id in the URL, client-written
   event log) → the stalled in-place migration and why a rebuild won → architecture (diagram) → 2–3
   public code excerpts → testing & operations (backups, deploy phases, the 2026-09-09 disk incident) →
   measured results with methodology → honest gaps → what I'd do differently → live demo link.
4. **Demo tenant** — finish the `ats-flow-demo-account` worktree (ADR 0034) in the ats-flow repo: an
   isolated tenant with seeded fake data, login shown on the case page. Real applicant data is never
   reachable from the demo login. Gated: reviewed and landed through ats-flow's normal process, separately.
5. **LinkedIn copy** — headline, About, Pabau and Truckers Flow entries rewritten to match the CV.

## Architecture

- New private repo `~/projects/portfolio` (GitLab), deployed on Vercel. Separate from ats-flow so no IP
  ships in a public build.
- Next.js App Router, fully static (SSG), TypeScript, CSS Modules — no UI library, no CMS.
- **Single source of truth:** `src/content/` holds typed career data (roles, stories, stack, links). The
  site and the `/cv` route both render from it, so the CV and site cannot disagree.
- `/cv/<variant>` renders a print stylesheet (A4, one page). `scripts/export-cv.ts` (Playwright) prints
  each variant to `public/cv/mihail-dimoski-<variant>.pdf` and fails unless the PDF has exactly one page; the PDFs are committed so the download link is
  static. Text stays real text, so ATS parsers read it.
- Visual: off-white paper, ink text, cyan and peach accents taken from the photo; full dark mode; one sans
  for prose plus a mono for numbers and code. Images via `next/image`, EXIF stripped.

## Evidence rules for the case study

Only measured numbers, each with its method: Playwright headless Chromium, live production, 2026-09-26,
same machine/network, fresh session per run, medians of repeated runs, tenants of 758 vs 680 leads.
Headline: server request 14.4 s → 93 ms (filter by position), on-screen 15.2 s → 0.63 s. Include the
non-wins (job-board first paint roughly equal). Excluded: the 250k-lead scale claim (never run), uptime/SLA
figures, "can do" possibilities, all business/partnership material. Repo facts (tests, ADRs, commits) are
re-counted from git on the day of publishing, not copied from the decks.

## Out of scope

Blog, CMS, i18n, contact form (mailto + LinkedIn suffice), analytics beyond Vercel's built-in.

## Verification

`next build` green; `/cv` PDFs are exactly one page each; every external link resolves; screenshots at
375 px and desktop in light and dark; Lighthouse ≥ 95 on the home page; the published case study contains no
client secrets, PII or Pabau-confidential material (grep before deploy).

## Open inputs

- Pabau summary (from the Pabau-laptop Claude) — fills Experience and the interview stories.
- Domain purchase (Mihail, via Vercel dashboard).

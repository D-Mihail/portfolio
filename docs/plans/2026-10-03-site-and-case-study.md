# Site and Case Study Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** mihaildimoski.dev — a home page and one case study (`/case/ats-rebuild`) that earn the interview, rendered from the same content as the CV.

**Architecture:** Static Next.js App Router pages composed from small presentational components in `src/components/` (one `.tsx` + one `.module.css` each). Home sections read `src/content/`; the case study's prose lives in `src/content/case-study.ts` as typed blocks so numbers have one home. Charts and diagrams are inline SVG — no chart library.

**Tech Stack:** as the CV plan, plus `next/og` for the social image. No new runtime dependencies.

**Spec:** `docs/specs/2026-10-03-portfolio-design.md`

## Global Constraints

- Positioning: full-stack engineer, backend reliability and security, AI-assisted engineering with guardrails. Work speaks; no self-praise adjectives ("passionate", "rockstar", "expert").
- Pabau material at learning-journal level only: no client names, ticket keys, codenames, people's names, internal figures.
- Case-study numbers only from the 2026-09-26 production measurement, each shown with its method; include the non-win (job-board first paint about equal). Never cite: the 250k-lead scale claim, uptime, the "can do" roadmap as built, business or revenue material.
- Repo facts recounted from git on publish day: 384 spec files, about 4,000 tests, 32 committed decision records, about fifty components.
- Truckers Flow appears as the client of the case study, not as current employment on LinkedIn-facing copy.
- Phone number is public on the site and CV (Mihail's decision, 2026-10-03). Tailored CV variants are never deployed.
- Colors as tokens on `:root` with a dark set; 16px side gutter; no horizontal scroll at 375px; body has an explicit background.
- No `git commit` without the go-ahead in the same turn.

## Review Focus

- Dark mode: every token pair readable; SVG charts and diagrams use `currentColor` / tokens, never hard-coded black.
- 375px width: the performance table and code excerpts scroll inside their own box, never the page.
- Every outbound link (demo, CV PDF, LinkedIn, mailto) resolves; the demo link is hidden until the demo tenant exists, not a dead link.
- A code excerpt must not reveal secrets, hostnames, internal IPs or anything from `secrets.enc.yaml`.
- Keyboard: skip link, visible focus ring, headings in order (one `h1` per page).

---

### Task 1: Site shell and shared components

**Files:** `src/components/site-header.tsx`, `site-footer.tsx`, `section.tsx`, `prose.tsx` (+ `.module.css` each); modify `src/app/layout.tsx`, `src/app/globals.css`.

- [ ] Header: name (links home), nav `Work · Experience · How I work · Contact`, CV download. Footer: email, LinkedIn, GitLab, "Built with Next.js · source private".
- [ ] Tokens: extend `:root` with `--surface`, `--accent` (cyan), `--accent-warm` (peach), focus ring; dark set under `prefers-color-scheme` guarded by `:root:not([data-theme="light"])` and again under `:root[data-theme="dark"]`.
- [ ] Skip link to `#main`; `metadata` with `metadataBase: new URL('https://mihaildimoski.dev')`, Open Graph title/description.
- [ ] Verify: `bun run build` green; screenshot at 375 and 1280, light and dark.

### Task 2: Home page

**Files:** `src/app/page.tsx`, `src/components/hero.tsx`, `flagship-card.tsx`, `experience-list.tsx`, `practice-list.tsx`, `stack-list.tsx`, `contact-block.tsx`; `src/content/practices.ts`.

**Interfaces:** consumes `profile`, `experience`, `flagship`, `earlierRoles`, `skills`, `selectHighlights` with `variant: 'general'`. Produces `practices: Practice[]` (`interface Practice { title: string; body: string }`, added to `src/content/types.ts`).

- [ ] Hero: `site-portrait.jpg`, `h1` name, one-line positioning, two buttons (Read the case study · Download CV).
- [ ] Flagship card: title, three numbers (15.2 s → 0.63 s on screen · 14.4 s → 93 ms server · ~4,000 tests), link to the case study.
- [ ] Experience: Pabau highlights and earlier roles, from the same content as the CV.
- [ ] How I work (`practices.ts`, four items): write the failure mode before the code · decisions are written down (ADRs) · invariants enforced by machines, not memory · AI as a multiplier with guardrails (guard hooks, parallel-agent protocol, AI review that changed a design).
- [ ] Stack and contact.
- [ ] Verify: build; screenshots; grep the rendered HTML for `Pabau-confidential` terms list (`PABAU2-`, `palgraph`, `octopus`, `bridge-api`, people's names) → zero hits.

### Task 3: Case study page

**Files:** `src/app/case/ats-rebuild/page.tsx`, `src/content/case-study.ts`, `src/components/timing-chart.tsx`, `architecture-diagram.tsx`, `code-excerpt.tsx`, `callout.tsx`.

**Interfaces:** `interface Timing { action: string; legacySeconds: number; rebuiltSeconds: number; layer: 'screen' | 'server' }`; `timings: Timing[]` exported from `case-study.ts`.

- [ ] Sections, in order: Overview (problem, my role, stack) → The legacy system (WordPress key-value tables, company id in the URL, client-written event log, 3–14 s per request) → What I tried first (in-place Prisma/Pothos migration with one other developer, why it stalled) → Approaches considered (patch the WordPress API · migrate in place · rebuild data-model-first) with the reason for each → The architecture (diagram: browser → Vercel rewrite → Traefik → API → MariaDB) → Tenancy and integrity → Measured results (chart + table + method + the non-win) → How it ships and runs (deploy phases, backups, secrets, the disk incident) → Working with AI agents (the protocol, and what it took to keep quality) → Known gaps → What I'd do differently → Demo (hidden until it exists).
- [ ] `timing-chart.tsx`: horizontal paired bars per action, log scale, values labelled, `role="img"` with an `aria-label` summarising the numbers, table fallback below.
- [ ] Code excerpts (2–3, short, rewritten from ats-flow with identifiers kept): a tenant-scoped write (`where: { id, companyId }`), the default-deny auth scope, and the deploy phase list. Read each source file first; strip anything host- or secret-shaped.
- [ ] Verify: build; screenshots at 375/1280 light/dark including the chart; every number on the page matches `timings`.

### Task 4: Metadata, social image, crawl files

**Files:** `src/app/opengraph-image.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/icon.svg` (replace `favicon.ico`).

- [ ] OG image: name, positioning line, the 15.2 s → 0.63 s figure. Sitemap: `/`, `/case/ats-rebuild`. Robots: allow all, disallow `/cv/`.
- [ ] Verify: `curl` each route on `next start`; image renders.

### Task 5: Verify and ship

- [ ] `bun test`, `bun run typecheck`, `bun run build`; re-export CVs.
- [ ] Lighthouse (mobile) on `/` and the case study: ≥ 95 performance, 100 accessibility, best practices, SEO.
- [ ] Link check of every `href` on both pages.
- [ ] Final review by a fresh reviewer against the Review Focus.
- [ ] Ask for the go-ahead; commit; push; confirm the Vercel deployment and `mihaildimoski.dev` serve the new pages.

### Gated

- [ ] Demo tenant — separate plan in ats-flow (finish the `ats-flow-demo-account` worktree, ADR 0034). Unhide the demo section when it is live.
- [ ] GitLab profile README — publish once the site is live.
- [ ] Observability-initiative story from the Pabau follow-up → a fifth practice or a Pabau highlight.

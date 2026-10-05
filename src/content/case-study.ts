import type { Approach, CodeExcerpt, TimingSet } from './types'

export const measurementMethod =
  'Playwright, headless Chromium, on both live production systems on 26 September 2026, with the same machine and network, a fresh browser session per run, medians of 5 to 15 runs, tenants of 758 and 680 leads. Client caches were excluded so both systems had to answer from the server.'

export const timingSets: TimingSet[] = [
  {
    layer: 'On screen',
    description: 'From the click to results rendered and the network idle.',
    timings: [
      { action: 'Filter by position', legacySeconds: 15.2, rebuiltSeconds: 0.63 },
      { action: 'Filter by status', legacySeconds: 3.47, rebuiltSeconds: 0.22 },
      { action: 'Open the leads grid', legacySeconds: 7.25, rebuiltSeconds: 2.36 },
    ],
  },
  {
    layer: 'On the server',
    description: 'From request start to response end, for the request behind the same action.',
    timings: [
      { action: 'Filter by position', legacySeconds: 14.4, rebuiltSeconds: 0.093 },
      { action: 'Filter by status', legacySeconds: 3.34, rebuiltSeconds: 0.085 },
      { action: 'Open the leads grid', legacySeconds: 3.66, rebuiltSeconds: 0.128 },
    ],
  },
]

export const approaches: Approach[] = [
  {
    name: 'Optimise the WordPress endpoints',
    verdict: 'Rejected',
    reason:
      'The data lived in key-value rows with no relations and no indexes to use, so there was nothing for a faster query to stand on. The same WordPress install also served the job board, logins and every application, so any change put all of them at risk.',
  },
  {
    name: 'Rebuild, data model first',
    verdict: 'Chosen',
    reason:
      'Design the relational schema, tenancy and audit rules first, then the API, then the screens, and run both systems side by side until the new one is measurably better. It costs more up front and is the only option that fixes the cause.',
  },
]

export const excerpts: CodeExcerpt[] = [
  {
    title: 'Closed by default',
    file: 'apps/backend/src/runtime/builder.ts',
    language: 'ts',
    code: `// DEFAULT-DENY: closes every root field, including future ones, unless it
// opts out; the inverse of Pothos's fail-open default. Opting out needs BOTH
// skipTypeScopes and the field's own authScopes, so \`public\` alone is denied.
builder.queryType({ authScopes: { active: true } })
builder.mutationType({ authScopes: { active: true } })`,
    note: 'A new field someone forgets to protect is closed, not open. Nine fields are public, each on an allowlist a test pins.',
  },
  {
    title: 'The tenant can’t be overridden',
    file: 'apps/backend/src/schema/lead/lib.ts',
    language: 'ts',
    code: `// What a lead read may SEE. companyId and deletedAt are written AFTER the
// filter spread so a client value can never win.
export function leadScope(
  filter: Prisma.LeadWhereInput | null | undefined,
  companyId: string,
): Prisma.LeadWhereInput {
  return { ...(filter ?? {}), companyId, ...VISIBLE_LEAD }
}`,
    note: 'companyId comes from the session, never from the request. The legacy system carried it in the URL.',
  },
  {
    title: 'Scoped on the write itself',
    file: 'apps/backend/src/schema/lead/mutations/delete-lead.ts',
    language: 'ts',
    code: `// The tenant predicate ON THE WRITE, never a bare \`where: { id }\`,
// Lead ids are sequential Ints and therefore guessable.
const { count } = await tx.lead.updateMany({
  // UNSOURCED: only leads entered by hand may be deleted.
  where: { ...leadById({ id: args.id, companyId }), OR: UNSOURCED },
  // updatedById is what the audit trigger reads; without it the action
  // most worth attributing is logged against nobody.
  data: { deletedAt: new Date(), updatedById: userId },
})

// Same answer for "no such lead", "another tenant's" and "already deleted":
// telling them apart would turn a guessable Int into a cross-tenant probe.
if (count === 0) throw new NotFoundError('Lead')`,
    note: 'Checking first and writing second leaves a gap. The rule lives in the write, and a test counts every resolver that uses the helper.',
  },
]

export const deployPhases = ['stage', 'build', 'pull', 'backup', 'migrate', 'roll', 'smoke', 'stamp', 'prune']

export const jobBoardUrl = 'https://ats-flow-portal.vercel.app/'

export const demoUrl: string | null = null

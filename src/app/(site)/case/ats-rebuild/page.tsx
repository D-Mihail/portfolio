import { ExternalLink } from '@/components/external-link'
import type { Metadata } from 'next'
import { CodeExcerpt } from '@/components/code-excerpt'
import { formatSeconds, TimingChart } from '@/components/timing-chart'
import {
  approaches,
  demoUrl,
  deployPhases,
  excerpts,
  jobBoardUrl,
  measurementMethod,
  timingSets,
} from '@/content/case-study'
import styles from './case-study.module.css'

export const metadata: Metadata = {
  title: 'Rebuilding an applicant tracking system | Mihail Dimoski',
  description:
    'How a multi-tenant recruiting platform went from a 15-second WordPress backend to sub-second GraphQL responses: the options, the architecture, the measurements and the gaps.',
}

export default function AtsRebuildCaseStudy() {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Case study · 2025 – 2026</p>
        <h1 className={styles.title}>Rebuilding an applicant tracking system, data model first</h1>
        <p className={styles.lead}>
          A recruiting platform for trucking companies ran on WordPress. Filtering a list of leads took about fifteen
          seconds. I rebuilt it as a multi-tenant GraphQL platform, measured both systems side by side in production,
          and I run the new one, including deploys, backups, alerts and incidents.
        </p>
        <dl className={styles.facts}>
          <div>
            <dt>Role</dt>
            <dd>Sole engineer, covering design, build, deploy and operations</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>TypeScript, Bun, Next.js, Pothos GraphQL, Prisma, MariaDB, Docker</dd>
          </div>
          <div>
            <dt>Scale of the work</dt>
            <dd>About 4,000 tests in 384 spec files, 32 decision records, since July 2026</dd>
          </div>
        </dl>
      </header>

      <section className={styles.section} aria-labelledby="problem">
        <h2 id="problem">The system I inherited</h2>
        <p>
          Recruiters at trucking companies use the platform to work their leads, the drivers who applied through a job
          board, a Meta lead form or a recruiter’s own entry. One WordPress install served all of it: the recruiter
          app’s REST endpoints, the public job board, logins and every application.
        </p>
        <ul>
          <li>
            <strong>Key-value tables, no relations, no indexes.</strong> A lead was a bag of meta rows. Filtering by
            position or status had nothing to stand on, and requests took 3 to 14 seconds.
          </li>
          <li>
            <strong>The tenant travelled in the URL.</strong> Which company’s data you saw depended on a parameter the
            client sent, which is exactly what a multi-tenant system must never trust.
          </li>
          <li>
            <strong>The audit log was written by the client.</strong> It recorded only what the interface remembered
            to log.
          </li>
        </ul>
        <p>
          I didn’t profile WordPress internals, so I won’t claim exactly where its seconds went. What I can show is
          what the replacement does instead, and how much faster it is.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="approaches">
        <h2 id="approaches">The options</h2>
        <div className={styles.approaches}>
          {approaches.map((approach) => (
            <div key={approach.name} className={styles.approach}>
              <p className={styles.verdict} data-verdict={approach.verdict}>
                {approach.verdict}
              </p>
              <h3>{approach.name}</h3>
              <p>{approach.reason}</p>
            </div>
          ))}
        </div>
        <p>
          You can’t fix a data problem from the frontend. Rebuilding meant running two systems for a while, which is
          also what made an honest side-by-side measurement possible.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="architecture">
        <h2 id="architecture">The shape of the rebuild</h2>
        <p>
          Boring, typed, one language end to end. Two Next.js apps, the recruiter app and the public job board, talk
          to one GraphQL API and one database. The browser only ever talks to one origin:
        </p>
        <ol className={styles.flow}>
          <li>
            <strong>Browser</strong>
            <span>first-party session cookie, no CORS</span>
          </li>
          <li>
            <strong>Next.js on Vercel</strong>
            <span>rewrites the API call server-side</span>
          </li>
          <li>
            <strong>Traefik</strong>
            <span>TLS; the API is the only application it exposes</span>
          </li>
          <li>
            <strong>GraphQL API</strong>
            <span>session → company → scoped query</span>
          </li>
          <li>
            <strong>MariaDB</strong>
            <span>no public port; reachable only from the API</span>
          </li>
        </ol>
        <p>
          The schema is code-first with Pothos and both apps generate their types from it, so removing a field the
          frontend still uses fails the build by name, not production. Every rule that matters is enforced by a test or
          the type checker: one file per resolver, one shared validation object per domain concept, and components
          whose props simply don’t accept ad-hoc styling.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="tenancy">
        <h2 id="tenancy">Tenancy and integrity, by construction</h2>
        <p>
          The tenant comes from the session, never the request. Every write carries the company in its{' '}
          <code>where</code>, the schema is closed by default, and an isolation suite runs against a real MariaDB with two
          companies: every root field tries to touch the other’s rows, or carries an explicit exemption. The audit trail moved from the client into
          database triggers that record the old value, the new value and who changed it, deletes included.
        </p>
        <div className={styles.excerpts}>
          {excerpts.map((excerpt) => (
            <CodeExcerpt key={excerpt.title} excerpt={excerpt} />
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="results">
        <h2 id="results">Measured, not claimed</h2>
        <p>
          The speed comes from less work per query: composite indexes that lead with the tenant, one typed request per
          view selecting only the fields it shows, and cursor pagination instead of loading everything.
        </p>
        <div className={styles.charts}>
          {timingSets.map((timingSet) => (
            <TimingChart key={timingSet.layer} timingSet={timingSet} />
          ))}
        </div>
        <p className={styles.method}>
          <strong>Method.</strong> {measurementMethod}
        </p>
        <p>
          <strong>What didn’t improve:</strong> first paint of the public job board is about equal on both systems; the
          gain there is in full load, roughly 2.6 to 3 times faster.
        </p>
        <details className={styles.table}>
          <summary>The same numbers as a table</summary>
          <div className={styles.tableScroll}>
          <table>
            <thead>
              <tr>
                <th scope="col">Action</th>
                <th scope="col">Layer</th>
                <th scope="col">Legacy</th>
                <th scope="col">Rebuild</th>
              </tr>
            </thead>
            <tbody>
              {timingSets.flatMap((timingSet) =>
                timingSet.timings.map((timing) => (
                  <tr key={`${timingSet.layer}-${timing.action}`}>
                    <td>{timing.action}</td>
                    <td>{timingSet.layer}</td>
                    <td>{formatSeconds({ seconds: timing.legacySeconds })}</td>
                    <td>{formatSeconds({ seconds: timing.rebuiltSeconds })}</td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
          </div>
        </details>
      </section>

      <section className={styles.section} aria-labelledby="operations">
        <h2 id="operations">Shipping it and keeping it up</h2>
        <p>
          Every push to main ships to production, migrations included, so the deploy has to be safe by itself. One
          script runs it in phases under a lock, and the same script is the break-glass path over SSH, because a path used only
          in emergencies gets its first real test on the worst night of the year.
        </p>
        <ol className={styles.phases}>
          {deployPhases.map((phase) => (
            <li key={phase}>{phase}</li>
          ))}
        </ol>
        <p>
          A backup is taken before every migration; only a release that passes the smoke test is recorded as deployed;
          rollback is a tag. Secrets are committed encrypted with SOPS, so a configuration change is a reviewed diff
          rather than an SSH session nobody recorded.
        </p>
        <p>
          <strong>The incident that changed it.</strong> In September the disk filled for most of a day while every
          health check stayed green. The fix wasn’t only freeing space: disk and memory alerts every five minutes, a
          weekly clean-up that needs no secrets so it still runs on a full disk, and a rule to capture logs before any
          recovery, because that recovery had destroyed most of its own evidence.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="agents">
        <h2 id="agents">Building it with AI agents</h2>
        <p>
          Most of this was written with coding agents working in parallel. That only works with rules, and every rule
          came from something breaking: one isolated worktree and one database per agent, file-disjoint briefs, a landing
          loop that rebases, regenerates and re-runs the full suite before anything reaches main, and never killing a
          process by name pattern. The speed is the agents; the quality is the tests, types and decision records they
          have to get past.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="gaps">
        <h2 id="gaps">What isn’t done yet</h2>
        <ul>
          <li>Backups live on the same server, so the worst case is up to 24 hours of data and the server itself.</li>
          <li>One 2 GB server with no failover runs the API and the database.</li>
          <li>Hosted CI tests are off; the gate is a pre-push pipeline on the developer machine.</li>
          <li>No third-party penetration test yet, and no browser end-to-end suite, so a manual pass covers that class.</li>
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="differently">
        <h2 id="differently">What I’d do differently</h2>
        <ul>
          <li>Measure the legacy system on day one, not at the end, because the baseline is the cheapest number to get early.</li>
          <li>Move backups off the box before the first real customer data, not after.</li>
          <li>Put a staging environment in front of continuous deploys sooner.</li>
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="live">
        <h2 id="live">See it live</h2>
        <p>
          The public job board is the rebuild in production, and its offers are server-rendered from the same API and database
          the recruiters use: <ExternalLink href={jobBoardUrl}>{jobBoardUrl.replace('https://', '').replace(/\/$/, '')}</ExternalLink>
        </p>
        {demoUrl !== null && (
          <p>
            The recruiter app, as a demo company with seeded, fictional data:{' '}
            <ExternalLink href={demoUrl}>{demoUrl}</ExternalLink>
          </p>
        )}
      </section>
    </article>
  )
}

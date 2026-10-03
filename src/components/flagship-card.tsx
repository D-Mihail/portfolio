import Link from 'next/link'
import { flagship } from '@/content/experience'
import { headlineFigures } from '@/content/practices'
import styles from './flagship-card.module.css'

export function FlagshipCard() {
  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <h3 className={styles.title}>{flagship.name}</h3>
        <p className={styles.meta}>
          {flagship.role} · {flagship.period}
        </p>
      </div>
      <p className={styles.summary}>
        A recruiting platform for trucking companies ran on WordPress REST endpoints over unindexed key-value tables;
        filtering a list took up to fifteen seconds and the tenant id travelled in the URL. I rebuilt it data-model-first
        as a multi-tenant GraphQL platform, and I run it: deploys, backups, alerts, incidents.
      </p>
      <dl className={styles.figures}>
        {headlineFigures.map((figure) => (
          <div key={figure.label}>
            <dt>{figure.label}</dt>
            <dd>{figure.value}</dd>
          </div>
        ))}
      </dl>
      <Link className={styles.link} href="/case/ats-rebuild">
        How it was done — the full case study →
      </Link>
    </article>
  )
}

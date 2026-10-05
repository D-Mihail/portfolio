import Image from 'next/image'
import { notFound } from 'next/navigation'
import { education, languages, profile, skills } from '@/content/profile'
import { experience, flagship } from '@/content/experience'
import { selectHighlights } from '@/content/select-highlights'
import { isCvVariant, publishedCvVariants } from '@/content/variants'
import styles from './cv.module.css'

export const dynamicParams = false

// Tailored variants render only in the local export build; a deployed site must not serve them.
const includeTailored = process.env.CV_INCLUDE_TAILORED === '1'

export function generateStaticParams() {
  return publishedCvVariants({ includeTailored }).map((variant) => ({ variant }))
}

export const metadata = { title: 'Mihail Dimoski, CV', robots: { index: false } }

export default async function CvPage({ params }: PageProps<'/cv/[variant]'>) {
  const { variant } = await params
  if (!isCvVariant(variant) || !publishedCvVariants({ includeTailored }).includes(variant)) notFound()

  return (
    <article className={styles.sheet}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.headline}>{profile.headline[variant]}</p>
          <p className={styles.location}>{profile.location}</p>
          <ul className={styles.links}>
            {profile.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Image className={styles.portrait} src="/images/cv-portrait.jpg" alt="" width={96} height={115} priority />
      </header>

      <p className={styles.summary}>{profile.summary[variant]}</p>

      <section>
        <h2 className={styles.sectionTitle}>Experience</h2>
        {experience.map((role) => (
          <div key={role.organisation} className={styles.entry}>
            <div className={styles.entryHead}>
              <h3 className={styles.entryTitle}>
                {role.title}, {role.organisation}
              </h3>
              <span className={styles.period}>{role.period}</span>
            </div>
            {role.context && <p className={styles.entryMeta}>{role.context}</p>}
            {role.highlights.length > 0 && (
              <ul className={styles.highlights}>
                {selectHighlights({ highlights: role.highlights, variant }).map((highlight) => (
                  <li key={highlight.text}>{highlight.text}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.entryHead}>
          <h3 className={styles.entryTitle}>{flagship.name}</h3>
          <span className={styles.period}>{flagship.period}</span>
        </div>
        <p className={styles.entryMeta}>
          {flagship.role} · {flagship.stack}
        </p>
        <ul className={styles.highlights}>
          {selectHighlights({ highlights: flagship.highlights, variant }).map((highlight) => (
            <li key={highlight.text}>{highlight.text}</li>
          ))}
        </ul>
        <p className={styles.caseLink}>
          Case study: <a href="https://mihaildimoski.dev/case/ats-rebuild" target="_blank" rel="noopener noreferrer">
            mihaildimoski.dev/case/ats-rebuild
          </a>
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <dl className={styles.skills}>
          {skills.map((group) => (
            <div key={group.label}>
              <dt>{group.label}</dt>
              <dd>{group.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Education and languages</h2>
        {education.map((entry) => (
          <div key={entry.institution} className={styles.entryHead}>
            <span>
              <strong>{entry.qualification}</strong>, {entry.institution}
            </span>
            <span className={styles.period}>{entry.period}</span>
          </div>
        ))}
        <p className={styles.entryMeta}>{languages}</p>
      </section>
    </article>
  )
}

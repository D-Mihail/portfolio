import { earlierRoles, experience } from '@/content/experience'
import { education } from '@/content/profile'
import { selectHighlights } from '@/content/select-highlights'
import styles from './experience-list.module.css'

export function ExperienceList() {
  return (
    <div className={styles.list}>
      {experience.map((role) => (
        <article key={role.organisation} className={styles.role}>
          <div className={styles.head}>
            <h3 className={styles.title}>
              {role.title} · {role.organisation}
            </h3>
            <p className={styles.period}>{role.period}</p>
          </div>
          {role.context && <p className={styles.context}>{role.context}</p>}
          <ul className={styles.highlights}>
            {selectHighlights({ highlights: role.highlights, variant: 'general' }).map((highlight) => (
              <li key={highlight.text}>{highlight.text}</li>
            ))}
          </ul>
        </article>
      ))}
      <ul className={styles.earlier}>
        {earlierRoles.map((role) => (
          <li key={role.organisation}>
            <strong>{role.title}</strong> · {role.organisation} — {role.note} <span>{role.period}</span>
          </li>
        ))}
        {education.map((entry) => (
          <li key={entry.institution}>
            <strong>{entry.qualification}</strong> · {entry.institution} <span>{entry.period}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

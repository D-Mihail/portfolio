import type { ReactNode } from 'react'
import styles from './section.module.css'

interface SectionProperties {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, children }: SectionProperties) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={`${id}-title`} className={styles.title}>
        {title}
      </h2>
      {children}
    </section>
  )
}

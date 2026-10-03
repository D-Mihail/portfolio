import type { CodeExcerpt as CodeExcerptContent } from '@/content/types'
import styles from './code-excerpt.module.css'

interface CodeExcerptProperties {
  excerpt: CodeExcerptContent
}

export function CodeExcerpt({ excerpt }: CodeExcerptProperties) {
  return (
    <figure className={styles.figure}>
      <figcaption className={styles.caption}>
        <strong>{excerpt.title}</strong>
        <span className={styles.file}>{excerpt.file}</span>
      </figcaption>
      <pre className={styles.pre} tabIndex={0}>
        <code>{excerpt.code}</code>
      </pre>
      <p className={styles.note}>{excerpt.note}</p>
    </figure>
  )
}

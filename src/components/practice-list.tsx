import { practices } from '@/content/practices'
import styles from './practice-list.module.css'

export function PracticeList() {
  return (
    <ol className={styles.list}>
      {practices.map((practice) => (
        <li key={practice.title} className={styles.item}>
          <h3 className={styles.title}>{practice.title}</h3>
          <p className={styles.body}>{practice.body}</p>
        </li>
      ))}
    </ol>
  )
}

import { skills } from '@/content/profile'
import styles from './stack-list.module.css'

export function StackList() {
  return (
    <dl className={styles.list}>
      {skills.map((group) => (
        <div key={group.label} className={styles.row}>
          <dt>{group.label}</dt>
          <dd>{group.items}</dd>
        </div>
      ))}
    </dl>
  )
}

import { ExternalLink } from '@/components/external-link'
import styles from './site-footer.module.css'

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>Mihail Dimoski · Skopje, North Macedonia</p>
        <ul className={styles.links}>
          <li>
            <a href="mailto:mihaildimoski@gmail.com">Email</a>
          </li>
          <li>
            <ExternalLink href="https://www.linkedin.com/in/mihail-di/">LinkedIn</ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://gitlab.com/D.Mihail">GitLab</ExternalLink>
          </li>
        </ul>
      </div>
    </footer>
  )
}

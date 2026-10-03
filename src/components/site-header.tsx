import { ExternalLink } from '@/components/external-link'
import Link from 'next/link'
import styles from './site-header.module.css'

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.name}>
          Mihail Dimoski
        </Link>
        <nav aria-label="Primary" className={styles.nav}>
          <Link href="/#work">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#practice">How I work</Link>
          <Link href="/#contact">Contact</Link>
          <ExternalLink className={styles.cv} href="/cv/mihail-dimoski-general.pdf">
            CV
          </ExternalLink>
        </nav>
      </div>
    </header>
  )
}

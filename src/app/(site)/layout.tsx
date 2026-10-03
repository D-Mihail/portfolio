import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import styles from './site.module.css'

export default function SiteLayout({ children }: LayoutProps<'/'>) {
  return (
    <>
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className={styles.main}>
        {children}
      </main>
      <SiteFooter />
    </>
  )
}

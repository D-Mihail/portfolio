import { ExternalLink } from '@/components/external-link'
import Image from 'next/image'
import Link from 'next/link'
import styles from './hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.text}>
        <p className={styles.eyebrow}>Full-stack engineer · Skopje, open to remote EU</p>
        <h1 id="hero-title" className={styles.title}>
          I build the parts of a product that must not fail quietly.
        </h1>
        <p className={styles.lead}>
          I’m Mihail. At Pabau I work on messaging pipelines, queue consumers and security hardening. On my own I rebuilt
          a multi-tenant recruiting platform end to end, and I run it in production.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/case/ats-rebuild">
            Read the case study
          </Link>
          <ExternalLink className={styles.secondary} href="/cv/mihail-dimoski-general.pdf">
            Download CV
          </ExternalLink>
        </div>
      </div>
      <Image
        className={styles.portrait}
        src="/images/site-portrait.jpg"
        alt="Mihail Dimoski"
        width={1000}
        height={1500}
        priority
        sizes="(max-width: 760px) 60vw, 340px"
      />
    </section>
  )
}

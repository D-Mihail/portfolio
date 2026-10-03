import { ExternalLink } from '@/components/external-link'
import { profile } from '@/content/profile'
import styles from './contact-block.module.css'

export function ContactBlock() {
  return (
    <div className={styles.block}>
      <p className={styles.lead}>
        I’m looking for an intermediate or senior full-stack, backend or frontend role — in Skopje, remote in the EU, or
        with relocation. If you’re building something that has to stay correct under load, I’d like to hear about it.
      </p>
      <ul className={styles.links}>
        {profile.links
          .filter((link) => !link.href.startsWith('https://mihaildimoski.dev'))
          .map((link) => (
            <li key={link.href}>
              {link.href.startsWith('https://') ? (
                <ExternalLink href={link.href}>{link.label}</ExternalLink>
              ) : (
                <a href={link.href}>{link.label}</a>
              )}
            </li>
          ))}
      </ul>
    </div>
  )
}

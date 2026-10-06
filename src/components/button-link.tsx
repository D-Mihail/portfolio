import Link from 'next/link'
import type { ReactNode } from 'react'
import styles from './button-link.module.css'

type ButtonLinkVariant = 'primary' | 'secondary'

interface ButtonLinkProperties {
  href: string
  variant: ButtonLinkVariant
  external?: boolean
  children: ReactNode
}

const variantClasses: Record<ButtonLinkVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
}

export function ButtonLink({ href, variant, external = false, children }: ButtonLinkProperties) {
  const className = `${styles.button} ${variantClasses[variant]}`
  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

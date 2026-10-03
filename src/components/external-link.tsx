import type { ReactNode } from 'react'

interface ExternalLinkProperties {
  href: string
  className?: string
  children: ReactNode
}

export function ExternalLink({ href, className, children }: ExternalLinkProperties) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

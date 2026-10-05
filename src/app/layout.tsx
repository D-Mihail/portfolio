import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://mihaildimoski.dev'),
  title: 'Mihail Dimoski, Full-Stack Engineer',
  description:
    'Full-stack engineer focused on backend reliability and security, with a multi-tenant platform rebuilt and run end to end.',
  openGraph: { type: 'website', siteName: 'Mihail Dimoski' },
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}

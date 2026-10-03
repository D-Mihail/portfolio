import type { MetadataRoute } from 'next'

const allowSearchEngines = false

export default function robots(): MetadataRoute.Robots {
  if (!allowSearchEngines) return { rules: { userAgent: '*', disallow: '/' } }
  return { rules: { userAgent: '*', allow: '/', disallow: '/cv/' }, sitemap: 'https://mihaildimoski.dev/sitemap.xml' }
}

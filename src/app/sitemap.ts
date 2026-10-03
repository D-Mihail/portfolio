import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://mihaildimoski.dev', changeFrequency: 'monthly', priority: 1 },
    { url: 'https://mihaildimoski.dev/case/ats-rebuild', changeFrequency: 'monthly', priority: 0.8 },
  ]
}

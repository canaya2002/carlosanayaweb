import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { getAllPostSlugs } from '@/data/blog-posts'
import { getAllProjectSlugs } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url
  const locales = ['es', 'en']
  const now = new Date()

  const staticPages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/blog', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/projects', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/cv', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.6, changeFrequency: 'yearly' as const },
  ]

  const entries: MetadataRoute.Sitemap = []

  // Static pages in both locales
  for (const page of staticPages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            es: `${baseUrl}/es${page.path}`,
            en: `${baseUrl}/en${page.path}`,
          },
        },
      })
    }
  }

  // Blog posts in both locales
  const blogSlugs = getAllPostSlugs()
  for (const slug of blogSlugs) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}/blog/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            es: `${baseUrl}/es/blog/${slug}`,
            en: `${baseUrl}/en/blog/${slug}`,
          },
        },
      })
    }
  }

  // Project pages in both locales
  const projectSlugs = getAllProjectSlugs()
  for (const slug of projectSlugs) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}/projects/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            es: `${baseUrl}/es/projects/${slug}`,
            en: `${baseUrl}/en/projects/${slug}`,
          },
        },
      })
    }
  }

  return entries
}

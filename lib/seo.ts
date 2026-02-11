import { Metadata } from 'next'
import { SITE_CONFIG, getSiteConfig } from './constants'
import { Locale } from '@/data/types'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  path?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  noIndex?: boolean
  locale: Locale
}

export function generatePageMetadata({
  title,
  description,
  keywords,
  image,
  path = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  noIndex = false,
  locale,
}: SEOProps): Metadata {
  const config = getSiteConfig(locale)
  const metaTitle = title ? `${title} | ${config.name}` : config.title
  const metaDescription = description || config.description
  const metaImage = image || config.ogImage
  const metaUrl = `${config.url}/${locale}${path}`
  const metaKeywords = keywords ? [...config.keywords, ...keywords] : [...config.keywords]

  const alternateLocale = locale === 'es' ? 'en' : 'es'

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: [{ name: author || config.name }],
    creator: config.name,
    publisher: config.name,
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    alternates: {
      canonical: metaUrl,
      languages: {
        'es-MX': `${config.url}/es${path}`,
        'en-US': `${config.url}/en${path}`,
        'x-default': `${config.url}/es${path}`,
      },
    },
    openGraph: {
      type: type === 'article' ? 'article' : 'website',
      locale: config.locale,
      alternateLocale: alternateLocale === 'es' ? 'es_MX' : 'en_US',
      url: metaUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: config.name,
      images: [{ url: metaImage, width: 1200, height: 630, alt: metaTitle }],
      ...(type === 'article' && { publishedTime, modifiedTime, authors: [author || config.name] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
  }
}

export function generatePersonSchema(locale: Locale) {
  const jobTitle = locale === 'en' ? 'Software Development Manager' : 'Software Development Manager'
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Carlos Anaya Ruiz',
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/images/avatar-carlos.png`,
    jobTitle,
    worksFor: { '@type': 'Organization', name: 'Law Offices of Manuel Solis' },
    alumniOf: { '@type': 'EducationalOrganization', name: 'Tecnológico de Monterrey' },
    sameAs: [
      'https://www.linkedin.com/in/carlos-anaya-ruiz-732abb249/',
      'https://github.com/CArlos12002',
      'https://github.com/canaya2002',
    ],
    knowsAbout: locale === 'en'
      ? ['Software Development', 'Full Stack Development', 'Project Management', 'Artificial Intelligence', 'Cybersecurity']
      : ['Desarrollo de Software', 'Desarrollo Full Stack', 'Gestión de Proyectos', 'Inteligencia Artificial', 'Ciberseguridad'],
  }
}

export function generateWebSiteSchema(locale: Locale) {
  const config = getSiteConfig(locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.name,
    url: config.url,
    description: config.description,
    inLanguage: locale === 'en' ? 'en-US' : 'es-MX',
    author: { '@type': 'Person', name: 'Carlos Anaya Ruiz' },
  }
}

export function generateBlogPostSchema({
  title, description, slug, publishedAt, modifiedAt, author = 'Carlos Anaya Ruiz', locale,
}: {
  title: string; description: string; slug: string; publishedAt: string; modifiedAt?: string; author?: string; locale: Locale
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: `${SITE_CONFIG.url}/${locale}/blog/${slug}`,
    inLanguage: locale === 'en' ? 'en-US' : 'es-MX',
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    author: { '@type': 'Person', name: author, url: SITE_CONFIG.url },
    publisher: { '@type': 'Person', name: 'Carlos Anaya Ruiz' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_CONFIG.url}/${locale}/blog/${slug}` },
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[], locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}/${locale}${item.url}`,
    })),
  }
}

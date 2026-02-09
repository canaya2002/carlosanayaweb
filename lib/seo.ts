import { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const metaTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.title
  const metaDescription = description || SITE_CONFIG.description
  const metaImage = image || SITE_CONFIG.ogImage
  const metaUrl = url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url
  const metaKeywords: string[] = keywords
    ? [...SITE_CONFIG.keywords, ...keywords]
    : [...SITE_CONFIG.keywords]

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: [{ name: author || SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      type: type === 'article' ? 'article' : 'website',
      locale: SITE_CONFIG.locale,
      url: metaUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: [author || SITE_CONFIG.name],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: '@carlosanayaruiz',
    },
  }
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Carlos Anaya Ruiz',
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/images/avatar-carlos-placeholder.png`,
    jobTitle: 'Software Development Manager',
    worksFor: {
      '@type': 'Organization',
      name: 'Law Offices of Manuel Solis',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Tecnológico de Monterrey',
    },
    sameAs: [
      'https://www.linkedin.com/in/carlos-anaya-ruiz-732abb249/',
      'https://github.com/CArlos12002',
      'https://github.com/canaya2002',
    ],
    knowsAbout: [
      'Software Development',
      'Full Stack Development',
      'Project Management',
      'Artificial Intelligence',
      'Cybersecurity',
      'Next.js',
      'React',
      'TypeScript',
      'Python',
    ],
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    author: {
      '@type': 'Person',
      name: 'Carlos Anaya Ruiz',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

interface BlogPostSchemaProps {
  title: string
  description: string
  slug: string
  publishedAt: string
  modifiedAt?: string
  image?: string
  author?: string
}

export function generateBlogPostSchema({
  title,
  description,
  slug,
  publishedAt,
  modifiedAt,
  image,
  author = 'Carlos Anaya Ruiz',
}: BlogPostSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: image || `${SITE_CONFIG.url}/images/blog-cover-placeholder.png`,
    url: `${SITE_CONFIG.url}/blog/${slug}`,
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    author: {
      '@type': 'Person',
      name: author,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Person',
      name: 'Carlos Anaya Ruiz',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/images/avatar-carlos-placeholder.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/blog/${slug}`,
    },
  }
}

interface BreadcrumbItem {
  name: string
  url: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  }
}
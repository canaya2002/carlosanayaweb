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
  const configKeywords = Array.isArray(config.keywords) ? config.keywords : []
  const metaKeywords = keywords ? [...configKeywords, ...keywords] : configKeywords

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

// ============================================================
// ENRICHED PERSON SCHEMA — for Knowledge Panel
// ============================================================
export function generatePersonSchema(locale: Locale) {
  const jobTitle = 'Software Development Manager'
  const description = locale === 'en'
    ? 'Software development leader focused on innovation, full-stack solutions, AI/LLMs and cybersecurity. Experience at Amazon, Tec de Monterrey graduate.'
    : 'Líder en desarrollo de software con enfoque en innovación, soluciones full-stack, IA/LLMs y ciberseguridad. Experiencia en Amazon, egresado del Tec de Monterrey.'

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Carlos Anaya Ruiz',
    givenName: 'Carlos',
    familyName: 'Anaya Ruiz',
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/images/carlos-anaya-ruiz-software-development-manager.png`,
    description,
    email: 'mailto:carlosaremployment@hotmail.com',
    jobTitle,
    nationality: {
      '@type': 'Country',
      name: 'Mexico',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Law Offices of Manuel Solis',
      url: 'https://www.manuelsolis.com',
      description: locale === 'en'
        ? 'Immigration law firm based in the United States'
        : 'Firma de abogados de inmigración con sede en Estados Unidos',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Tecnológico de Monterrey',
        url: 'https://tec.mx',
        description: locale === 'en'
          ? 'Engineering in Computer Science & Technology'
          : 'Ingeniería en Tecnologías Computacionales',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Tecnológico de Monterrey',
        url: 'https://tec.mx',
        description: locale === 'en'
          ? 'Specialization in Cybersecurity'
          : 'Especialidad en Ciberseguridad',
      },
    ],
    knowsLanguage: [
      {
        '@type': 'Language',
        name: 'Spanish',
        alternateName: 'es',
      },
      {
        '@type': 'Language',
        name: 'English',
        alternateName: 'en',
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Cisco Certified Network Associate (CCNA)',
        credentialCategory: 'Professional Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Cisco',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'TOEFL (92 points)',
        credentialCategory: 'Language Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'ETS (Educational Testing Service)',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'PMP Certification Exam Prep Course 35 PDU',
        credentialCategory: 'Professional Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'PMI',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Cybersecurity Certification',
        credentialCategory: 'Professional Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Coderhouse',
        },
      },
    ],
    award: [
      locale === 'en'
        ? 'Galactic Problem Solver — NASA International Space Apps Challenge 2024 (AuraScope project)'
        : 'Galactic Problem Solver — NASA International Space Apps Challenge 2024 (proyecto AuraScope)',
      locale === 'en'
        ? '1st Place — LogiRoute AI, Hackathon Tec de Monterrey 2022'
        : '1er Lugar — LogiRoute AI, Hackathon Tec de Monterrey 2022',
    ],
    sameAs: [
      'https://www.linkedin.com/in/carlos-anaya-ruiz-732abb249/',
      'https://github.com/CArlos12002',
      'https://github.com/canaya2002',
    ],
    knowsAbout: locale === 'en'
      ? ['Software Development', 'Full Stack Development', 'Project Management', 'Artificial Intelligence', 'Large Language Models', 'Cybersecurity', 'Next.js', 'React', 'TypeScript', 'Python', 'AWS', 'Scrum', 'PMBOK']
      : ['Desarrollo de Software', 'Desarrollo Full Stack', 'Gestión de Proyectos', 'Inteligencia Artificial', 'Large Language Models', 'Ciberseguridad', 'Next.js', 'React', 'TypeScript', 'Python', 'AWS', 'Scrum', 'PMBOK'],
  }
}

// ============================================================
// ORGANIZATION SCHEMA — for current employer
// ============================================================
export function generateOrganizationSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Law Offices of Manuel Solis',
    url: 'https://www.manuelsolis.com',
    description: locale === 'en'
      ? 'Immigration law firm providing legal services in the United States.'
      : 'Firma de abogados de inmigración que brinda servicios legales en Estados Unidos.',
    employee: {
      '@type': 'Person',
      name: 'Carlos Anaya Ruiz',
      jobTitle: 'Software Development Manager',
      url: SITE_CONFIG.url,
    },
  }
}

// ============================================================
// WEBSITE SCHEMA
// ============================================================
export function generateWebSiteSchema(locale: Locale) {
  const config = getSiteConfig(locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.name,
    url: config.url,
    description: config.description,
    inLanguage: locale === 'en' ? 'en-US' : 'es-MX',
    author: {
      '@type': 'Person',
      name: 'Carlos Anaya Ruiz',
      url: SITE_CONFIG.url,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${config.url}/${locale}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

// ============================================================
// BLOG POST SCHEMA
// ============================================================
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
    author: {
      '@type': 'Person',
      name: author,
      url: SITE_CONFIG.url,
      image: `${SITE_CONFIG.url}/images/carlos-anaya-ruiz-software-development-manager.png`,
    },
    publisher: {
      '@type': 'Person',
      name: 'Carlos Anaya Ruiz',
      url: SITE_CONFIG.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/${locale}/blog/${slug}`,
    },
    image: `${SITE_CONFIG.url}/images/blog/carlos-anaya-ruiz-ia-etica-portada.png`,
  }
}

// ============================================================
// BREADCRUMB SCHEMA
// ============================================================
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
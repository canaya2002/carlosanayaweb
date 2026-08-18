import { Locale } from '@/data/types'

export const SITE_CONFIG = {
  name: 'Carlos Anaya Ruiz',
  url: 'https://carlosanayaweb.com',
  ogImage: '/images/og-default.png',
  locales: ['es', 'en'] as const,
  defaultLocale: 'es' as const,
} as const

export function getSiteConfig(locale: Locale) {
  const configs: Record<Locale, { title: string; description: string; locale: string; keywords: string[] }> = {
    es: {
      title: 'Carlos Anaya Ruiz — Portfolio de Ingeniería, Liderazgo Técnico e IA',
      description: 'Portfolio técnico de Carlos Anaya Ruiz. Software Development Manager con experiencia en Amazon. Proyectos de arquitectura full-stack, orquestación de IA/LLMs, ciberseguridad y liderazgo de equipos de ingeniería.',
      locale: 'es_MX',
      keywords: ['Carlos Anaya Ruiz', 'Software Development Manager', 'portfolio ingeniería', 'liderazgo técnico', 'arquitectura full-stack', 'Next.js', 'React', 'TypeScript', 'Python', 'inteligencia artificial', 'orquestación LLM', 'ciberseguridad', 'proyectos software', 'líder de ingeniería'],
    },
    en: {
      title: 'Carlos Anaya Ruiz — Engineering Portfolio, Technical Leadership & AI',
      description: 'Technical portfolio of Carlos Anaya Ruiz. Software Development Manager with experience at Amazon. Full-stack architecture projects, AI/LLM orchestration, cybersecurity, and engineering team leadership.',
      locale: 'en_US',
      keywords: ['Carlos Anaya Ruiz', 'Software Development Manager', 'engineering portfolio', 'technical leadership', 'full-stack architecture', 'Next.js', 'React', 'TypeScript', 'Python', 'artificial intelligence', 'LLM orchestration', 'cybersecurity', 'software projects', 'engineering leader'],
    },
  }
  return { ...SITE_CONFIG, ...configs[locale] }
}

export const NAVIGATION_LINKS = [
  { href: '/' as const, labelKey: 'nav.home' },
  { href: '/blog' as const, labelKey: 'nav.blog' },
  { href: '/projects' as const, labelKey: 'nav.projects' },
  { href: '/about' as const, labelKey: 'nav.about' },
  { href: '/cv' as const, labelKey: 'nav.cv' },
  { href: '/contact' as const, labelKey: 'nav.contact' },
] as const

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/carlos-anaya-ruiz-732abb249/',
  github1: 'https://github.com/CArlos12002',
  github2: 'https://github.com/canaya2002',
  email: 'carlosaremployment@hotmail.com',
} as const

export const PRIMARY_DOMAIN = 'https://carlosanayaruiz.com' as const
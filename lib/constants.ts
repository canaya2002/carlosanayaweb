import { Locale } from '@/data/types'

export const SITE_CONFIG = {
  name: 'Carlos Anaya Ruiz',
  url: 'https://carlosanaya.dev',
  ogImage: '/images/og-default.png',
  locales: ['es', 'en'] as const,
  defaultLocale: 'es' as const,
} as const

export function getSiteConfig(locale: Locale) {
  const configs: Record<Locale, { title: string; description: string; locale: string; keywords: string[] }> = {
    es: {
      title: 'Carlos Anaya Ruiz | Software Development Manager & Full Stack Developer',
      description: 'Portafolio profesional de Carlos Anaya Ruiz. Líder en desarrollo de software, innovación tecnológica, full-stack, IA/LLMs y ciberseguridad.',
      locale: 'es_MX',
      keywords: ['Carlos Anaya Ruiz', 'Software Development Manager', 'Full Stack Developer', 'Next.js', 'React', 'TypeScript', 'Python', 'IA', 'Ciberseguridad', 'México'],
    },
    en: {
      title: 'Carlos Anaya Ruiz | Software Development Manager & Full Stack Developer',
      description: 'Professional portfolio of Carlos Anaya Ruiz. Software development leader, technology innovation, full-stack, AI/LLMs and cybersecurity.',
      locale: 'en_US',
      keywords: ['Carlos Anaya Ruiz', 'Software Development Manager', 'Full Stack Developer', 'Next.js', 'React', 'TypeScript', 'Python', 'AI', 'Cybersecurity', 'Mexico'],
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

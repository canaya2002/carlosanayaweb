import { Locale } from './types'

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  startDate: string
  endDate: string | null
  current: boolean
  technologies: string[]
  images: string[]
  links?: {
    demo?: string
    github?: string
    website?: string
  }
  featured: boolean
  category: 'ai' | 'web' | 'mobile' | 'data' | 'other'
  highlights?: string[]
}

const projectsData: Record<Locale, Project[]> = {
  es: [
    {
      id: 'nora-ai',
      title: 'Nora AI',
      slug: 'nora-ai',
      description: 'Plataforma de orquestación de agentes/LLMs para automatizar flujos técnicos.',
      longDescription: `Nora AI es una plataforma avanzada de orquestación de agentes y modelos de lenguaje (LLMs) diseñada para automatizar flujos técnicos complejos.

El proyecto incluye un backend robusto desarrollado en Python que gestiona la comunicación entre múltiples agentes de IA, optimizando respuestas mediante técnicas de streaming y caching inteligente.

El frontend, construido con Next.js y TypeScript, ofrece una interfaz intuitiva para configurar y monitorear los flujos de trabajo automatizados. La arquitectura modular permite escalar horizontalmente y agregar nuevos agentes sin modificar el núcleo del sistema.

Se implementó un pipeline de CI/CD completo para garantizar la calidad del código y despliegues automatizados.`,
      startDate: '2025-01',
      endDate: null,
      current: true,
      technologies: ['Python', 'Next.js', 'TypeScript', 'OpenAI API', 'Redis', 'Docker', 'CI/CD'],
      images: ['/images/projects/nora-ai-hero.png', '/images/projects/nora-ai-dashboard.png', '/images/projects/nora-ai-agents.png'],
      featured: true,
      category: 'ai',
      highlights: [
        'Orquestación de múltiples agentes de IA con comunicación en tiempo real',
        'Pipeline de CI/CD completo con testing automatizado',
        'Arquitectura modular y escalable horizontalmente',
        'Interfaz intuitiva para configuración de flujos de trabajo',
      ],
    },
    {
      id: 'manuel-solis-web',
      title: 'Manuel Solis - Modernización Web',
      slug: 'manuel-solis-modernizacion',
      description: 'Modernización completa de infraestructura web para firma de abogados de inmigración.',
      longDescription: `Proyecto de modernización integral de la presencia web de Law Offices of Manuel Solis, una firma de abogados especializada en inmigración.

La implementación incluye un sitio web construido con Next.js utilizando SSR y SSG para optimizar rendimiento y SEO, fundamental para la captación de clientes en el sector legal.

Se desarrolló una integración con el CRM (HubSpot) mediante scripts en Python para sincronizar leads y automatizar flujos de comunicación con clientes potenciales.

El proyecto incluye soporte multilingüe (español/inglés) y un CMS dinámico que permite al equipo de marketing actualizar contenido sin intervención técnica.

Las optimizaciones de SEO y performance resultaron en mejoras significativas en posicionamiento orgánico y conversión.`,
      startDate: '2025-11',
      endDate: '2026-02',
      current: false,
      technologies: ['Next.js', 'TypeScript', 'Python', 'HubSpot', 'Tailwind CSS', 'Vercel', 'SEO'],
      images: ['/images/projects/solis-hero.png', '/images/projects/solis-dashboard.png', '/images/projects/solis-mobile.png'],
      featured: true,
      category: 'web',
      highlights: [
        'Mejora del 40% en velocidad de carga del sitio',
        'Integración completa con HubSpot CRM',
        'Soporte multilingüe español/inglés',
        'Optimización SEO con mejoras significativas en ranking orgánico',
      ],
    },
  ],
  en: [
    {
      id: 'nora-ai',
      title: 'Nora AI',
      slug: 'nora-ai',
      description: 'AI agents/LLMs orchestration platform for automating technical workflows.',
      longDescription: `Nora AI is an advanced agent and language model (LLMs) orchestration platform designed to automate complex technical workflows.

The project includes a robust backend developed in Python that manages communication between multiple AI agents, optimizing responses through streaming techniques and intelligent caching.

The frontend, built with Next.js and TypeScript, offers an intuitive interface for configuring and monitoring automated workflows. The modular architecture allows horizontal scaling and adding new agents without modifying the core system.

A complete CI/CD pipeline was implemented to ensure code quality and automated deployments.`,
      startDate: '2025-01',
      endDate: null,
      current: true,
      technologies: ['Python', 'Next.js', 'TypeScript', 'OpenAI API', 'Redis', 'Docker', 'CI/CD'],
      images: ['/images/projects/nora-ai-hero.png', '/images/projects/nora-ai-dashboard.png', '/images/projects/nora-ai-agents.png'],
      featured: true,
      category: 'ai',
      highlights: [
        'Multi-agent AI orchestration with real-time communication',
        'Complete CI/CD pipeline with automated testing',
        'Modular and horizontally scalable architecture',
        'Intuitive interface for workflow configuration',
      ],
    },
    {
      id: 'manuel-solis-web',
      title: 'Manuel Solis - Web Modernization',
      slug: 'manuel-solis-modernizacion',
      description: 'Complete web infrastructure modernization for immigration law firm.',
      longDescription: `Comprehensive modernization project for Law Offices of Manuel Solis web presence, an immigration law firm.

The implementation includes a website built with Next.js using SSR and SSG to optimize performance and SEO, critical for client acquisition in the legal sector.

A CRM integration with HubSpot was developed using Python scripts to synchronize leads and automate communication workflows with potential clients.

The project includes multilingual support (Spanish/English) and a dynamic CMS that allows the marketing team to update content without technical intervention.

SEO and performance optimizations resulted in significant improvements in organic ranking and conversion.`,
      startDate: '2025-11',
      endDate: '2026-02',
      current: false,
      technologies: ['Next.js', 'TypeScript', 'Python', 'HubSpot', 'Tailwind CSS', 'Vercel', 'SEO'],
      images: ['/images/projects/solis-hero.png', '/images/projects/solis-dashboard.png', '/images/projects/solis-mobile.png'],
      featured: true,
      category: 'web',
      highlights: [
        '40% improvement in site loading speed',
        'Complete HubSpot CRM integration',
        'Spanish/English multilingual support',
        'SEO optimization with significant organic ranking improvements',
      ],
    },
  ],
}

export function getProjects(locale: Locale): Project[] {
  return projectsData[locale] ?? projectsData.es
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return getProjects(locale).filter((p) => p.featured)
}

export function getProjectBySlug(locale: Locale, slug: string): Project | undefined {
  return getProjects(locale).find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projectsData.es.map((p) => p.slug)
}

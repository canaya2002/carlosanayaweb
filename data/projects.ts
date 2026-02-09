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
}

export const projects: Project[] = [
  {
    id: 'nora-ai',
    title: 'Nora AI',
    slug: 'nora-ai',
    description:
      'Plataforma de orquestación de agentes/LLMs para automatizar flujos técnicos.',
    longDescription: `Nora AI es una plataforma avanzada de orquestación de agentes y modelos de lenguaje (LLMs) diseñada para automatizar flujos técnicos complejos.

El proyecto incluye un backend robusto desarrollado en Python que gestiona la comunicación entre múltiples agentes de IA, optimizando respuestas mediante técnicas de streaming y caching inteligente.

El frontend, construido con Next.js y TypeScript, ofrece una interfaz intuitiva para configurar y monitorear los flujos de trabajo automatizados. La arquitectura modular permite escalar horizontalmente y agregar nuevos agentes sin modificar el núcleo del sistema.

Se implementó un pipeline de CI/CD completo para garantizar la calidad del código y despliegues automatizados.`,
    startDate: '2025-01',
    endDate: null,
    current: true,
    technologies: [
      'Python',
      'Next.js',
      'TypeScript',
      'OpenAI API',
      'Redis',
      'Docker',
      'CI/CD',
    ],
    images: ['/images/project-nora-ai.png', '/images/project-nora-ai-2.png'],
    featured: true,
    category: 'ai',
  },
  {
    id: 'manuel-solis-web',
    title: 'Manuel Solis - Modernización Web',
    slug: 'manuel-solis-modernizacion',
    description:
      'Modernización completa de infraestructura web para firma de abogados de inmigración.',
    longDescription: `Proyecto de modernización integral de la presencia web de Law Offices of Manuel Solis, una firma de abogados especializada en inmigración.

La implementación incluye un sitio web construido con Next.js utilizando SSR y SSG para optimizar rendimiento y SEO, fundamental para la captación de clientes en el sector legal.

Se desarrolló una integración con el CRM (HubSpot) mediante scripts en Python para sincronizar leads y automatizar flujos de comunicación con clientes potenciales.

El proyecto incluye soporte multilingüe (español/inglés) y un CMS dinámico que permite al equipo de marketing actualizar contenido sin intervención técnica.

Las optimizaciones de SEO y performance resultaron en mejoras significativas en posicionamiento orgánico y conversión.`,
    startDate: '2025-11',
    endDate: '2026-02',
    current: false,
    technologies: [
      'Next.js',
      'TypeScript',
      'Python',
      'HubSpot',
      'Tailwind CSS',
      'Vercel',
      'SEO',
    ],
    images: [
      '/images/project-manuel-solis.png',
      '/images/project-manuel-solis-2.png',
    ],
    featured: true,
    category: 'web',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

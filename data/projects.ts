import { Locale } from './types'

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  context?: string
  problem?: string
  architecture?: string
  challenges?: string[]
  learnings?: string[]
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
  category: 'ai' | 'web' | 'mobile' | 'data' | 'security' | 'automation' | 'leadership' | 'other'
  highlights?: string[]
}

const projectsData: Record<Locale, Project[]> = {
  es: [
    {
      id: 'nora-ai',
      title: 'Nora AI',
      slug: 'nora-ai',
      description: 'Plataforma de orquestación de agentes/LLMs para automatizar flujos técnicos complejos con streaming en tiempo real.',
      longDescription: `Nora AI es una plataforma avanzada de orquestación de agentes y modelos de lenguaje (LLMs) diseñada para automatizar flujos técnicos complejos.

El proyecto incluye un backend robusto desarrollado en Python que gestiona la comunicación entre múltiples agentes de IA, optimizando respuestas mediante técnicas de streaming y caching inteligente.

El frontend, construido con Next.js y TypeScript, ofrece una interfaz intuitiva para configurar y monitorear los flujos de trabajo automatizados. La arquitectura modular permite escalar horizontalmente y agregar nuevos agentes sin modificar el núcleo del sistema.

Se implementó un pipeline de CI/CD completo para garantizar la calidad del código y despliegues automatizados.`,
      context: 'Necesidad de automatizar flujos técnicos repetitivos y complejos que requerían coordinación entre múltiples fuentes de datos y modelos de lenguaje.',
      problem: 'Los flujos manuales consumían horas de trabajo técnico. Los modelos de lenguaje individuales no podían resolver tareas que requerían múltiples pasos de razonamiento ni acceso a sistemas externos.',
      architecture: 'Arquitectura de microservicios con un orquestador central en Python, agentes especializados por tarea, comunicación via streaming, frontend en Next.js con estado en tiempo real y cache distribuida con Redis.',
      challenges: [
        'Manejar la latencia de múltiples llamadas a LLMs encadenadas sin degradar la experiencia de usuario',
        'Diseñar una interfaz de configuración de flujos que fuera intuitiva para usuarios no técnicos',
        'Implementar un sistema de fallback robusto cuando un agente falla en medio de un flujo',
      ],
      learnings: [
        'El streaming de respuestas parciales mejora drásticamente la percepción de velocidad del usuario',
        'La modularidad del sistema de agentes permite escalar sin tocar el core del orquestador',
        'Los pipelines CI/CD con testing de integración son esenciales cuando múltiples agentes interactúan',
      ],
      startDate: '2025-01',
      endDate: null,
      current: true,
      technologies: ['Python', 'Next.js', 'TypeScript', 'OpenAI API', 'Redis', 'Docker', 'CI/CD'],
      images: [
        '/images/projects/carlos-anaya-ruiz-nora-ai-plataforma-orquestacion.png',
        '/images/projects/carlos-anaya-ruiz-nora-ai-dashboard-agentes.png',
        '/images/projects/carlos-anaya-ruiz-nora-ai-flujos-automatizados.png',
      ],
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
      description: 'Modernización completa de infraestructura web con Next.js, integración CRM y optimización SEO para firma legal.',
      longDescription: `Proyecto de modernización integral de la presencia web de Law Offices of Manuel Solis, una firma de abogados especializada en inmigración.

La implementación incluye un sitio web construido con Next.js utilizando SSR y SSG para optimizar rendimiento y SEO, fundamental para la captación de clientes en el sector legal.

Se desarrolló una integración con el CRM (HubSpot) mediante scripts en Python para sincronizar leads y automatizar flujos de comunicación con clientes potenciales.

El proyecto incluye soporte multilingüe (español/inglés) y un CMS dinámico que permite al equipo de marketing actualizar contenido sin intervención técnica.

Las optimizaciones de SEO y performance resultaron en mejoras significativas en posicionamiento orgánico y conversión.`,
      context: 'Firma legal con presencia web obsoleta que necesitaba modernizar su infraestructura para competir en búsquedas locales y mejorar conversión de leads online.',
      problem: 'El sitio anterior era lento, no estaba optimizado para móviles, carecía de integración con CRM y no tenía soporte multilingüe — crítico para una firma de inmigración que atiende clientes hispanohablantes.',
      architecture: 'Next.js con SSR para páginas dinámicas y SSG para contenido estático. Integración backend en Python con HubSpot API para sincronización bidireccional de leads. Deploy en Vercel con preview environments.',
      challenges: [
        'Migrar contenido legacy sin perder posicionamiento SEO existente',
        'Diseñar la integración con HubSpot para manejar flujos de comunicación automatizados sin duplicar contactos',
        'Implementar i18n que permitiera al equipo de marketing gestionar contenido en ambos idiomas de forma independiente',
      ],
      learnings: [
        'La combinación de SSR y SSG en Next.js ofrece lo mejor de ambos mundos para sitios con contenido mixto',
        'La automatización de flujos CRM puede reducir significativamente la carga operativa del equipo comercial',
        'SEO técnico bien ejecutado desde el inicio compensa con creces la inversión en meses posteriores',
      ],
      startDate: '2025-11',
      endDate: '2026-02',
      current: false,
      technologies: ['Next.js', 'TypeScript', 'Python', 'HubSpot', 'Tailwind CSS', 'Vercel', 'SEO'],
      images: [
        '/images/projects/carlos-anaya-ruiz-solis-web-modernizacion.png',
        '/images/projects/carlos-anaya-ruiz-solis-dashboard-crm.png',
        '/images/projects/carlos-anaya-ruiz-solis-web-responsive.png',
      ],
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
      description: 'AI agents/LLMs orchestration platform for automating complex technical workflows with real-time streaming.',
      longDescription: `Nora AI is an advanced agent and language model (LLMs) orchestration platform designed to automate complex technical workflows.

The project includes a robust backend developed in Python that manages communication between multiple AI agents, optimizing responses through streaming techniques and intelligent caching.

The frontend, built with Next.js and TypeScript, offers an intuitive interface for configuring and monitoring automated workflows. The modular architecture allows horizontal scaling and adding new agents without modifying the core system.

A complete CI/CD pipeline was implemented to ensure code quality and automated deployments.`,
      context: 'Need to automate repetitive and complex technical workflows that required coordination between multiple data sources and language models.',
      problem: 'Manual workflows consumed hours of technical work. Individual language models could not solve tasks requiring multiple reasoning steps or access to external systems.',
      architecture: 'Microservices architecture with a central Python orchestrator, task-specialized agents, streaming communication, Next.js frontend with real-time state, and distributed Redis cache.',
      challenges: [
        'Managing latency of multiple chained LLM calls without degrading user experience',
        'Designing a workflow configuration interface intuitive for non-technical users',
        'Implementing a robust fallback system when an agent fails mid-workflow',
      ],
      learnings: [
        'Streaming partial responses drastically improves the user\'s perception of speed',
        'Agent system modularity allows scaling without touching the orchestrator core',
        'CI/CD pipelines with integration testing are essential when multiple agents interact',
      ],
      startDate: '2025-01',
      endDate: null,
      current: true,
      technologies: ['Python', 'Next.js', 'TypeScript', 'OpenAI API', 'Redis', 'Docker', 'CI/CD'],
      images: [
        '/images/projects/carlos-anaya-ruiz-nora-ai-plataforma-orquestacion.png',
        '/images/projects/carlos-anaya-ruiz-nora-ai-dashboard-agentes.png',
        '/images/projects/carlos-anaya-ruiz-nora-ai-flujos-automatizados.png',
      ],
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
      description: 'Complete web infrastructure modernization with Next.js, CRM integration, and SEO optimization for a legal firm.',
      longDescription: `Comprehensive modernization project for Law Offices of Manuel Solis web presence, an immigration law firm.

The implementation includes a website built with Next.js using SSR and SSG to optimize performance and SEO, critical for client acquisition in the legal sector.

A CRM integration with HubSpot was developed using Python scripts to synchronize leads and automate communication workflows with potential clients.

The project includes multilingual support (Spanish/English) and a dynamic CMS that allows the marketing team to update content without technical intervention.

SEO and performance optimizations resulted in significant improvements in organic ranking and conversion.`,
      context: 'Legal firm with an outdated web presence that needed modernization to compete in local search and improve online lead conversion.',
      problem: 'The previous site was slow, not mobile-optimized, lacked CRM integration, and had no multilingual support — critical for an immigration firm serving Spanish-speaking clients.',
      architecture: 'Next.js with SSR for dynamic pages and SSG for static content. Python backend integration with HubSpot API for bidirectional lead synchronization. Deployed on Vercel with preview environments.',
      challenges: [
        'Migrating legacy content without losing existing SEO positioning',
        'Designing HubSpot integration to handle automated communication workflows without duplicating contacts',
        'Implementing i18n that allowed the marketing team to manage content in both languages independently',
      ],
      learnings: [
        'The combination of SSR and SSG in Next.js offers the best of both worlds for mixed-content sites',
        'CRM workflow automation can significantly reduce the operational burden on the sales team',
        'Well-executed technical SEO from the start pays off significantly in subsequent months',
      ],
      startDate: '2025-11',
      endDate: '2026-02',
      current: false,
      technologies: ['Next.js', 'TypeScript', 'Python', 'HubSpot', 'Tailwind CSS', 'Vercel', 'SEO'],
      images: [
        '/images/projects/carlos-anaya-ruiz-solis-web-modernizacion.png',
        '/images/projects/carlos-anaya-ruiz-solis-dashboard-crm.png',
        '/images/projects/carlos-anaya-ruiz-solis-web-responsive.png',
      ],
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
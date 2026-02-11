import { Locale } from './types'

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string | null
  current: boolean
  description: string
  highlights: string[]
  technologies?: string[]
}

const experienceData: Record<Locale, Experience[]> = {
  es: [
    {
      id: 'solis-manager',
      company: 'Law Offices of Manuel Solis',
      position: 'Software Development Manager',
      location: 'Estados Unidos (Remoto)',
      startDate: '2026-01',
      endDate: null,
      current: true,
      description: 'Liderazgo de proyectos de desarrollo de software, coordinación de equipos multidisciplinarios y entrega de soluciones tecnológicas alineadas a objetivos estratégicos del negocio.',
      highlights: [
        'Gestión integral del ciclo de vida de desarrollo de software',
        'Coordinación con stakeholders para definición de requerimientos y priorización',
        'Implementación de metodologías ágiles y mejores prácticas de desarrollo',
        'Supervisión de arquitectura técnica y estándares de calidad',
      ],
      technologies: ['Next.js', 'TypeScript', 'Python', 'HubSpot', 'Vercel'],
    },
    {
      id: 'solis-developer',
      company: 'Law Offices of Manuel Solis',
      position: 'Software Developer',
      location: 'Estados Unidos (Remoto)',
      startDate: '2025-10',
      endDate: '2026-02',
      current: false,
      description: 'Desarrollo full-stack de soluciones web, modernización de infraestructura y optimización de procesos mediante integración de sistemas.',
      highlights: [
        'Desarrollo de aplicaciones web con Next.js y TypeScript',
        'Integración de CRM y automatización de flujos de trabajo',
        'Optimización de rendimiento y SEO',
        'Implementación de arquitecturas escalables y mantenibles',
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Python', 'Tailwind CSS'],
    },
    {
      id: 'amazon-sde',
      company: 'Amazon',
      position: 'SDE II (Software Development Engineer)',
      location: 'Estados Unidos',
      startDate: '2023-11',
      endDate: '2025-04',
      current: false,
      description: 'Desarrollo de software a escala, analítica de datos y automatización de procesos en entornos de alta disponibilidad y rendimiento.',
      highlights: [
        'Desarrollo de soluciones de software escalables',
        'Implementación de pipelines de datos y analítica',
        'Colaboración cross-functional con equipos globales',
        'Enfoque en resultados y métricas de impacto',
      ],
      technologies: ['Java', 'Python', 'AWS', 'React', 'TypeScript'],
    },
    {
      id: 'wanhai-it',
      company: 'Wan Hai Lines',
      position: 'Gerente Nacional de TI',
      location: 'México',
      startDate: '2021-02',
      endDate: '2022-08',
      current: false,
      description: 'Liderazgo del departamento de TI a nivel nacional, gestión de infraestructura, soporte técnico y proyectos de transformación digital.',
      highlights: [
        'Dirección estratégica del área de tecnología',
        'Gestión de infraestructura y operaciones de TI',
        'Implementación de proyectos de modernización',
        'Coordinación con equipos regionales y globales',
      ],
      technologies: ['Networking', 'Infrastructure', 'Project Management'],
    },
    {
      id: 'ibm-intern',
      company: 'IBM',
      position: 'Interno en TI',
      location: 'México',
      startDate: '2020-04',
      endDate: '2020-10',
      current: false,
      description: 'Programa de internado en el área de tecnología, colaborando en proyectos de soporte y desarrollo.',
      highlights: [
        'Soporte técnico y resolución de incidencias',
        'Colaboración en proyectos de desarrollo interno',
        'Aprendizaje de metodologías empresariales',
      ],
      technologies: ['IT Support', 'Enterprise Systems'],
    },
  ],
  en: [
    {
      id: 'solis-manager',
      company: 'Law Offices of Manuel Solis',
      position: 'Software Development Manager',
      location: 'United States (Remote)',
      startDate: '2026-01',
      endDate: null,
      current: true,
      description: 'Leading software development projects, coordinating multidisciplinary teams, and delivering technology solutions aligned with strategic business objectives.',
      highlights: [
        'End-to-end software development lifecycle management',
        'Stakeholder coordination for requirements definition and prioritization',
        'Implementation of agile methodologies and development best practices',
        'Technical architecture oversight and quality standards',
      ],
      technologies: ['Next.js', 'TypeScript', 'Python', 'HubSpot', 'Vercel'],
    },
    {
      id: 'solis-developer',
      company: 'Law Offices of Manuel Solis',
      position: 'Software Developer',
      location: 'United States (Remote)',
      startDate: '2025-10',
      endDate: '2026-02',
      current: false,
      description: 'Full-stack development of web solutions, infrastructure modernization, and process optimization through systems integration.',
      highlights: [
        'Web application development with Next.js and TypeScript',
        'CRM integration and workflow automation',
        'Performance and SEO optimization',
        'Implementation of scalable and maintainable architectures',
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Python', 'Tailwind CSS'],
    },
    {
      id: 'amazon-sde',
      company: 'Amazon',
      position: 'SDE II (Software Development Engineer)',
      location: 'United States',
      startDate: '2023-11',
      endDate: '2025-04',
      current: false,
      description: 'Software development at scale, data analytics, and process automation in high-availability and high-performance environments.',
      highlights: [
        'Development of scalable software solutions',
        'Data pipeline and analytics implementation',
        'Cross-functional collaboration with global teams',
        'Focus on results and impact metrics',
      ],
      technologies: ['Java', 'Python', 'AWS', 'React', 'TypeScript'],
    },
    {
      id: 'wanhai-it',
      company: 'Wan Hai Lines',
      position: 'National IT Manager',
      location: 'Mexico',
      startDate: '2021-02',
      endDate: '2022-08',
      current: false,
      description: 'Leading the IT department at the national level, managing infrastructure, technical support, and digital transformation projects.',
      highlights: [
        'Strategic direction of the technology department',
        'IT infrastructure and operations management',
        'Implementation of modernization projects',
        'Coordination with regional and global teams',
      ],
      technologies: ['Networking', 'Infrastructure', 'Project Management'],
    },
    {
      id: 'ibm-intern',
      company: 'IBM',
      position: 'IT Intern',
      location: 'Mexico',
      startDate: '2020-04',
      endDate: '2020-10',
      current: false,
      description: 'Internship program in the technology department, collaborating on support and development projects.',
      highlights: [
        'Technical support and incident resolution',
        'Collaboration on internal development projects',
        'Learning enterprise methodologies',
      ],
      technologies: ['IT Support', 'Enterprise Systems'],
    },
  ],
}

export function getExperiences(locale: Locale): Experience[] {
  return experienceData[locale] ?? experienceData.es
}

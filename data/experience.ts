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

export const experiences: Experience[] = [
  {
    id: 'solis-manager',
    company: 'Law Offices of Manuel Solis',
    position: 'Software Development Manager',
    location: 'Estados Unidos (Remoto)',
    startDate: '2026-01',
    endDate: null,
    current: true,
    description:
      'Liderazgo de proyectos de desarrollo de software, coordinación de equipos multidisciplinarios y entrega de soluciones tecnológicas alineadas a objetivos estratégicos del negocio.',
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
    description:
      'Desarrollo full-stack de soluciones web, modernización de infraestructura y optimización de procesos mediante integración de sistemas.',
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
    description:
      'Desarrollo de software a escala, analítica de datos y automatización de procesos en entornos de alta disponibilidad y rendimiento.',
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
    description:
      'Liderazgo del departamento de TI a nivel nacional, gestión de infraestructura, soporte técnico y proyectos de transformación digital.',
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
    description:
      'Programa de internado en el área de tecnología, colaborando en proyectos de soporte y desarrollo.',
    highlights: [
      'Soporte técnico y resolución de incidencias',
      'Colaboración en proyectos de desarrollo interno',
      'Aprendizaje de metodologías empresariales',
    ],
    technologies: ['IT Support', 'Enterprise Systems'],
  },
]

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  location: string
  description?: string
  achievements?: string[]
}

export const education: Education[] = [
  {
    id: 'tec-cybersecurity',
    institution: 'Tecnológico de Monterrey',
    degree: 'Especialidad',
    field: 'Ciberseguridad',
    startDate: '2024-08',
    endDate: '2025-07',
    location: 'México',
    description:
      'Especialización en seguridad informática, análisis de vulnerabilidades, criptografía y gestión de riesgos de seguridad.',
    achievements: [
      'Análisis de vulnerabilidades y pentesting',
      'Criptografía aplicada',
      'Gestión de riesgos de seguridad',
      'Seguridad en redes y sistemas',
    ],
  },
  {
    id: 'tec-itc',
    institution: 'Tecnológico de Monterrey',
    degree: 'Ingeniería',
    field: 'Tecnologías Computacionales',
    startDate: '2019-08',
    endDate: '2025-05',
    location: 'México',
    description:
      'Formación integral en ciencias computacionales, desarrollo de software, arquitectura de sistemas e inteligencia artificial.',
    achievements: [
      'Desarrollo de software y sistemas',
      'Arquitectura de computadoras',
      'Inteligencia artificial y machine learning',
      'Bases de datos y estructuras de datos',
    ],
  },
]

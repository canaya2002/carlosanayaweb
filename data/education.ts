import { Locale } from './types'

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

const educationData: Record<Locale, Education[]> = {
  es: [
    {
      id: 'tec-cybersecurity',
      institution: 'Tecnológico de Monterrey',
      degree: 'Especialidad',
      field: 'Ciberseguridad',
      startDate: '2024-08',
      endDate: '2025-07',
      location: 'México',
      description: 'Especialización en seguridad informática, análisis de vulnerabilidades, criptografía y gestión de riesgos de seguridad.',
      achievements: ['Análisis de vulnerabilidades y pentesting', 'Criptografía aplicada', 'Gestión de riesgos de seguridad', 'Seguridad en redes y sistemas'],
    },
    {
      id: 'tec-itc',
      institution: 'Tecnológico de Monterrey',
      degree: 'Ingeniería',
      field: 'Tecnologías Computacionales',
      startDate: '2019-08',
      endDate: '2025-05',
      location: 'México',
      description: 'Formación integral en ciencias computacionales, desarrollo de software, arquitectura de sistemas e inteligencia artificial.',
      achievements: ['Desarrollo de software y sistemas', 'Arquitectura de computadoras', 'Inteligencia artificial y machine learning', 'Bases de datos y estructuras de datos'],
    },
  ],
  en: [
    {
      id: 'tec-cybersecurity',
      institution: 'Tecnológico de Monterrey',
      degree: 'Specialization',
      field: 'Cybersecurity',
      startDate: '2024-08',
      endDate: '2025-07',
      location: 'Mexico',
      description: 'Specialization in information security, vulnerability analysis, cryptography and security risk management.',
      achievements: ['Vulnerability analysis and pentesting', 'Applied cryptography', 'Security risk management', 'Network and systems security'],
    },
    {
      id: 'tec-itc',
      institution: 'Tecnológico de Monterrey',
      degree: 'Engineering',
      field: 'Computer Science & Technology',
      startDate: '2019-08',
      endDate: '2025-05',
      location: 'Mexico',
      description: 'Comprehensive training in computer science, software development, systems architecture and artificial intelligence.',
      achievements: ['Software and systems development', 'Computer architecture', 'Artificial intelligence and machine learning', 'Databases and data structures'],
    },
  ],
}

export function getEducation(locale: Locale): Education[] {
  return educationData[locale] ?? educationData.es
}

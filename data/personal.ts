import { Locale } from './types'

export interface PersonalInfo {
  name: string
  title: string
  email: string
  location: string
  summary: string
  shortBio: string
  linkedin: string
  github: string[]
  languages: Language[]
}

export interface Language {
  name: string
  level: string
  proficiency: number
}

const personalData: Record<Locale, PersonalInfo> = {
  es: {
    name: 'Carlos Anaya Ruiz',
    title: 'Software Development Manager',
    email: 'carlosaremployment@hotmail.com',
    location: 'México',
    summary: `Lidero equipos de ingeniería y entrego software escalable en entornos de alta exigencia. Mi trayectoria combina desarrollo hands-on como SDE II en Amazon con la gestión estratégica de proyectos y personas.

Mi stack técnico abarca arquitectura full-stack con Next.js, React y TypeScript; orquestación de agentes de IA y LLMs con Python; y ciberseguridad aplicada desde el diseño. Con formación en Ingeniería en Tecnologías Computacionales y una Especialidad en Ciberseguridad por el Tec de Monterrey, construyo sistemas que son rápidos, seguros y mantenibles.

He ganado reconocimientos como el NASA Space Apps Challenge (AuraScope) y hackathons de optimización logística con IA. Me motiva resolver problemas complejos donde la ingeniería se cruza con el impacto real.`,
    shortBio: 'Líder de ingeniería. Construyo y lidero equipos que entregan software escalable. Arquitectura full-stack, orquestación de IA/LLMs y ciberseguridad aplicada.',
    linkedin: 'https://www.linkedin.com/in/carlos-anaya-ruiz-732abb249/',
    github: ['https://github.com/CArlos12002', 'https://github.com/canaya2002'],
    languages: [
      { name: 'Español', level: 'Nativo', proficiency: 100 },
      { name: 'Inglés', level: 'Avanzado (TOEFL 92)', proficiency: 90 },
    ],
  },
  en: {
    name: 'Carlos Anaya Ruiz',
    title: 'Software Development Manager',
    email: 'carlosaremployment@hotmail.com',
    location: 'Mexico',
    summary: `I lead engineering teams and deliver scalable software in high-stakes environments. My trajectory combines hands-on development as SDE II at Amazon with strategic project and people management.

My technical stack spans full-stack architecture with Next.js, React, and TypeScript; AI agent and LLM orchestration with Python; and security-by-design practices. With a degree in Computer Science & Technology and a Cybersecurity Specialization from Tec de Monterrey, I build systems that are fast, secure, and maintainable.

I've earned recognition at the NASA Space Apps Challenge (AuraScope) and AI logistics optimization hackathons. I'm driven by solving complex problems where engineering meets real-world impact.`,
    shortBio: 'Engineering leader. I build and lead teams that ship scalable software. Full-stack architecture, AI/LLM orchestration, and applied cybersecurity.',
    linkedin: 'https://www.linkedin.com/in/carlos-anaya-ruiz-732abb249/',
    github: ['https://github.com/CArlos12002', 'https://github.com/canaya2002'],
    languages: [
      { name: 'Spanish', level: 'Native', proficiency: 100 },
      { name: 'English', level: 'Advanced (TOEFL 92)', proficiency: 90 },
    ],
  },
}

export function getPersonalInfo(locale: Locale): PersonalInfo {
  return personalData[locale] ?? personalData.es
}

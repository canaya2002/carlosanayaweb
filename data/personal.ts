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

export const personalInfo: PersonalInfo = {
  name: 'Carlos Anaya Ruiz',
  title: 'Software Development Manager',
  email: 'carlosaremployment@hotmail.com',
  location: 'México',
  summary: `Actualmente me desempeño como líder/manager de desarrollo de software con enfoque en innovación, alineación estratégica y entrega de soluciones tecnológicas. Background fuerte en full-stack, datos/BI, automatización y fundamentos de IA/LLMs, además de experiencia en metodologías ágiles como Scrum y gestión basada en PMBOK.

Objetivo: diseñar e implementar soluciones tecnológicas escalables y seguras que fortalezcan objetivos organizacionales.`,
  shortBio:
    'Líder en desarrollo de software con enfoque en innovación, soluciones full-stack, IA/LLMs y ciberseguridad. Apasionado por crear tecnología que genere impacto real.',
  linkedin: 'https://www.linkedin.com/in/carlos-anaya-ruiz-732abb249/',
  github: [
    'https://github.com/CArlos12002',
    'https://github.com/canaya2002',
  ],
  languages: [
    { name: 'Español', level: 'Nativo', proficiency: 100 },
    { name: 'Inglés', level: 'Avanzado (TOEFL 92)', proficiency: 90 },
  ],
}

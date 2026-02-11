import { Locale } from './types'

export interface Skill {
  name: string
  category: 'technical' | 'management' | 'soft'
}

const skillsData: Record<Locale, Skill[]> = {
  es: [
    { name: 'Desarrollo Full Stack', category: 'technical' },
    { name: 'Gestión de Proyectos', category: 'management' },
    { name: 'C++', category: 'technical' },
    { name: 'Python', category: 'technical' },
    { name: 'Desarrollo de iOS', category: 'technical' },
    { name: 'Next.js', category: 'technical' },
    { name: 'React', category: 'technical' },
    { name: 'TypeScript', category: 'technical' },
    { name: 'Node.js', category: 'technical' },
    { name: 'JavaScript', category: 'technical' },
    { name: 'SQL', category: 'technical' },
    { name: 'AWS', category: 'technical' },
    { name: 'Docker', category: 'technical' },
    { name: 'Git', category: 'technical' },
    { name: 'CI/CD', category: 'technical' },
    { name: 'Scrum', category: 'management' },
    { name: 'PMBOK', category: 'management' },
    { name: 'Liderazgo', category: 'soft' },
    { name: 'Comunicación', category: 'soft' },
    { name: 'Trabajo en Equipo', category: 'soft' },
  ],
  en: [
    { name: 'Full Stack Development', category: 'technical' },
    { name: 'Project Management', category: 'management' },
    { name: 'C++', category: 'technical' },
    { name: 'Python', category: 'technical' },
    { name: 'iOS Development', category: 'technical' },
    { name: 'Next.js', category: 'technical' },
    { name: 'React', category: 'technical' },
    { name: 'TypeScript', category: 'technical' },
    { name: 'Node.js', category: 'technical' },
    { name: 'JavaScript', category: 'technical' },
    { name: 'SQL', category: 'technical' },
    { name: 'AWS', category: 'technical' },
    { name: 'Docker', category: 'technical' },
    { name: 'Git', category: 'technical' },
    { name: 'CI/CD', category: 'technical' },
    { name: 'Scrum', category: 'management' },
    { name: 'PMBOK', category: 'management' },
    { name: 'Leadership', category: 'soft' },
    { name: 'Communication', category: 'soft' },
    { name: 'Teamwork', category: 'soft' },
  ],
}

export function getSkills(locale: Locale): Skill[] {
  return skillsData[locale] ?? skillsData.es
}

export function getSkillsByCategory(locale: Locale): Record<string, Skill[]> {
  return getSkills(locale).reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = []
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>
  )
}

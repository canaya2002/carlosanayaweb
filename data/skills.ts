export interface Skill {
  name: string
  category: 'technical' | 'management' | 'soft'
}

export const skills: Skill[] = [
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
]

export const skillsByCategory = skills.reduce(
  (acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  },
  {} as Record<string, Skill[]>
)

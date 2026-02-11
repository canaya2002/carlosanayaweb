import { Locale } from './types'

export interface Certification {
  id: string
  name: string
  issuer: string
  date?: string
  image: string
  link?: string
  category: 'development' | 'management' | 'ai' | 'infrastructure' | 'security'
}

// Certifications are mostly the same in both languages (names are standard)
const certifications: Certification[] = [
  { id: 'ccna', name: 'Cisco Certified Network Associate (CCNA)', issuer: 'Cisco', image: '/images/certs/ccna.png', category: 'infrastructure' },
  { id: 'scrum', name: 'Scrum Práctico en Proyectos de Software', issuer: 'Udemy', image: '/images/certs/scrum.png', category: 'management' },
  { id: 'pmp-prep', name: 'PMP Certification Exam Prep Course 35 PDU', issuer: 'Udemy', image: '/images/certs/pmp.png', category: 'management' },
  { id: 'nextjs', name: 'Next.js: El framework de React para producción', issuer: 'Udemy', image: '/images/certs/nextjs.png', category: 'development' },
  { id: 'react-master', name: 'Master en React: ReactJS, Hooks, MERN, NodeJS, JWT+', issuer: 'Udemy', image: '/images/certs/react.png', category: 'development' },
  { id: 'javascript-total', name: 'JavaScript TOTAL', issuer: 'Udemy', image: '/images/certs/javascript.png', category: 'development' },
  { id: 'ai-business', name: 'AI Applied to Business & Enterprises', issuer: 'SuperDataScience', image: '/images/certs/ai-business.png', category: 'ai' },
  { id: 'ai-python', name: 'AI & Deep Learning from Scratch in Python', issuer: 'Udemy', image: '/images/certs/ai-python.png', category: 'ai' },
  { id: 'fullstack', name: 'Full-Stack Web Development Bootcamp', issuer: 'Udemy', image: '/images/certs/fullstack.png', category: 'development' },
  { id: 'firebase', name: 'Firebase In Depth', issuer: 'Udemy', image: '/images/certs/firebase.png', category: 'development' },
  { id: 'docker-devops', name: 'Docker/DevOps', issuer: 'Udemy', image: '/images/certs/docker.png', category: 'infrastructure' },
  { id: 'cybersecurity', name: 'Cybersecurity', issuer: 'Coderhouse', image: '/images/certs/cybersecurity.png', category: 'security' },
  { id: 'cpp-advanced', name: 'C++ Advanced Developer', issuer: 'Udemy', image: '/images/certs/cpp.png', category: 'development' },
  { id: 'ios-swift', name: 'iOS & Swift Development', issuer: 'Udemy', image: '/images/certs/ios.png', category: 'development' },
]

export function getCertifications(_locale: Locale): Certification[] {
  return certifications
}

export function getCertificationsByCategory(locale: Locale): Record<string, Certification[]> {
  return getCertifications(locale).reduce(
    (acc, cert) => {
      if (!acc[cert.category]) acc[cert.category] = []
      acc[cert.category].push(cert)
      return acc
    },
    {} as Record<string, Certification[]>
  )
}

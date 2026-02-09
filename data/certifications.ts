export interface Certification {
  id: string
  name: string
  issuer: string
  date?: string
  image: string
  link?: string
  category: 'development' | 'management' | 'ai' | 'infrastructure' | 'security'
}

export const certifications: Certification[] = [
  {
    id: 'ccna',
    name: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    image: '/images/cert-ccna.png',
    category: 'infrastructure',
  },
  {
    id: 'scrum',
    name: 'Scrum Práctico en Proyectos de Software',
    issuer: 'Udemy',
    image: '/images/cert-scrum.png',
    category: 'management',
  },
  {
    id: 'pmp-prep',
    name: 'PMP Certification Exam Prep Course 35 PDU Contact Hours/PDU',
    issuer: 'Udemy',
    image: '/images/cert-pmp.png',
    category: 'management',
  },
  {
    id: 'nextjs',
    name: 'Next.js: El framework de React para producción',
    issuer: 'Udemy',
    image: '/images/cert-nextjs.png',
    category: 'development',
  },
  {
    id: 'react-master',
    name: 'Master en React: ReactJS, Hooks, MERN, NodeJS, JWT+',
    issuer: 'Udemy',
    image: '/images/cert-react.png',
    category: 'development',
  },
  {
    id: 'javascript-total',
    name: 'JavaScript TOTAL - De Cero a Programador Web en 18 Días',
    issuer: 'Udemy',
    image: '/images/cert-javascript.png',
    category: 'development',
  },
  {
    id: 'ai-business',
    name: 'Inteligencia Artificial aplicada a Negocios y Empresas',
    issuer: 'SuperDataScience',
    image: '/images/cert-ai-business.png',
    category: 'ai',
  },
  {
    id: 'ai-python',
    name: 'Inteligencia Artificial y Deep Learning desde cero en Python',
    issuer: 'Udemy',
    image: '/images/cert-ai-python.png',
    category: 'ai',
  },
  {
    id: 'fullstack',
    name: 'Full-Stack Web Development Bootcamp',
    issuer: 'Udemy',
    image: '/images/cert-fullstack.png',
    category: 'development',
  },
  {
    id: 'firebase',
    name: 'Firebase In Depth',
    issuer: 'Udemy',
    image: '/images/cert-firebase.png',
    category: 'development',
  },
  {
    id: 'docker-devops',
    name: 'Docker/DevOps',
    issuer: 'Udemy',
    image: '/images/cert-docker.png',
    category: 'infrastructure',
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    issuer: 'Coderhouse',
    image: '/images/cert-cybersecurity.png',
    category: 'security',
  },
  {
    id: 'cpp-advanced',
    name: 'C++ Advance Developer',
    issuer: 'Udemy',
    image: '/images/cert-cpp.png',
    category: 'development',
  },
  {
    id: 'ios-swift',
    name: 'iOS & Swift Development',
    issuer: 'Udemy',
    image: '/images/cert-ios.png',
    category: 'development',
  },
]

export const certificationsByCategory = certifications.reduce(
  (acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = []
    }
    acc[cert.category].push(cert)
    return acc
  },
  {} as Record<string, Certification[]>
)

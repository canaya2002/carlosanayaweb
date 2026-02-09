import {
  Code2,
  Database,
  Globe,
  Laptop,
  Smartphone,
  Users,
  TrendingUp,
  FileText,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'app-development',
    title: 'Desarrollo de Aplicaciones',
    description:
      'Creación de aplicaciones web y móviles robustas, escalables y con excelente experiencia de usuario.',
    icon: Code2,
  },
  {
    id: 'database-development',
    title: 'Desarrollo de Base de Datos',
    description:
      'Diseño, implementación y optimización de bases de datos relacionales y NoSQL.',
    icon: Database,
  },
  {
    id: 'information-management',
    title: 'Gestión de la Información',
    description:
      'Estrategias de gestión de datos, BI y analytics para toma de decisiones informadas.',
    icon: FileText,
  },
  {
    id: 'web-design',
    title: 'Diseño Web',
    description:
      'Interfaces modernas, accesibles y optimizadas para conversión y experiencia de usuario.',
    icon: Laptop,
  },
  {
    id: 'web-development',
    title: 'Desarrollo Web',
    description:
      'Sitios web y aplicaciones con las mejores tecnologías: Next.js, React, TypeScript.',
    icon: Globe,
  },
  {
    id: 'ios-development',
    title: 'Desarrollo de iOS',
    description:
      'Aplicaciones nativas para iPhone y iPad con Swift y las mejores prácticas de Apple.',
    icon: Smartphone,
  },
  {
    id: 'team-integration',
    title: 'Integración de Equipos',
    description:
      'Facilitación de trabajo colaborativo, metodologías ágiles y comunicación efectiva.',
    icon: Users,
  },
  {
    id: 'leadership-development',
    title: 'Desarrollo de Liderazgo',
    description:
      'Mentoría y desarrollo de habilidades de liderazgo técnico y gestión de equipos.',
    icon: TrendingUp,
  },
]

import { Code2, Database, Globe, Laptop, Smartphone, Users, TrendingUp, FileText, type LucideIcon } from 'lucide-react'
import { Locale } from './types'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

const servicesData: Record<Locale, Service[]> = {
  es: [
    { id: 'app-development', title: 'Desarrollo de Aplicaciones', description: 'Creación de aplicaciones web y móviles robustas, escalables y con excelente experiencia de usuario.', icon: Code2 },
    { id: 'database-development', title: 'Desarrollo de Base de Datos', description: 'Diseño, implementación y optimización de bases de datos relacionales y NoSQL.', icon: Database },
    { id: 'information-management', title: 'Gestión de la Información', description: 'Estrategias de gestión de datos, BI y analytics para toma de decisiones informadas.', icon: FileText },
    { id: 'web-design', title: 'Diseño Web', description: 'Interfaces modernas, accesibles y optimizadas para conversión y experiencia de usuario.', icon: Laptop },
    { id: 'web-development', title: 'Desarrollo Web', description: 'Sitios web y aplicaciones con las mejores tecnologías: Next.js, React, TypeScript.', icon: Globe },
    { id: 'ios-development', title: 'Desarrollo de iOS', description: 'Aplicaciones nativas para iPhone y iPad con Swift y las mejores prácticas de Apple.', icon: Smartphone },
    { id: 'team-integration', title: 'Integración de Equipos', description: 'Facilitación de trabajo colaborativo, metodologías ágiles y comunicación efectiva.', icon: Users },
    { id: 'leadership-development', title: 'Desarrollo de Liderazgo', description: 'Mentoría y desarrollo de habilidades de liderazgo técnico y gestión de equipos.', icon: TrendingUp },
  ],
  en: [
    { id: 'app-development', title: 'Application Development', description: 'Building robust, scalable web and mobile applications with excellent user experience.', icon: Code2 },
    { id: 'database-development', title: 'Database Development', description: 'Design, implementation and optimization of relational and NoSQL databases.', icon: Database },
    { id: 'information-management', title: 'Information Management', description: 'Data management strategies, BI and analytics for informed decision-making.', icon: FileText },
    { id: 'web-design', title: 'Web Design', description: 'Modern, accessible interfaces optimized for conversion and user experience.', icon: Laptop },
    { id: 'web-development', title: 'Web Development', description: 'Websites and applications with the best technologies: Next.js, React, TypeScript.', icon: Globe },
    { id: 'ios-development', title: 'iOS Development', description: 'Native applications for iPhone and iPad with Swift and Apple best practices.', icon: Smartphone },
    { id: 'team-integration', title: 'Team Integration', description: 'Collaborative work facilitation, agile methodologies and effective communication.', icon: Users },
    { id: 'leadership-development', title: 'Leadership Development', description: 'Mentoring and technical leadership skills development and team management.', icon: TrendingUp },
  ],
}

export function getServices(locale: Locale): Service[] {
  return servicesData[locale] ?? servicesData.es
}

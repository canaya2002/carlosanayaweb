import { Code2, Database, Globe, Shield, Brain, Users, TrendingUp, Layers, type LucideIcon } from 'lucide-react'
import { Locale } from './types'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

const servicesData: Record<Locale, Service[]> = {
  es: [
    { id: 'fullstack-architecture', title: 'Arquitectura Full-Stack', description: 'Diseño e implementación de sistemas escalables con Next.js, React, TypeScript, Python y bases de datos modernas.', icon: Layers },
    { id: 'ai-orchestration', title: 'Orquestación de IA / LLMs', description: 'Construcción de plataformas de agentes inteligentes, integración de modelos de lenguaje y automatización de flujos técnicos.', icon: Brain },
    { id: 'cybersecurity', title: 'Ciberseguridad Aplicada', description: 'Análisis de vulnerabilidades, hardening de aplicaciones web, headers de seguridad y prácticas de desarrollo seguro.', icon: Shield },
    { id: 'engineering-leadership', title: 'Liderazgo de Ingeniería', description: 'Gestión de equipos de desarrollo, definición de roadmaps técnicos, metodologías ágiles y entrega de software de alto impacto.', icon: TrendingUp },
    { id: 'web-performance', title: 'Performance Web', description: 'Optimización de Core Web Vitals, SSR/SSG, lazy loading, análisis de bundles y mejora de experiencia de usuario.', icon: Globe },
    { id: 'data-systems', title: 'Sistemas de Datos', description: 'Diseño de bases de datos, pipelines de datos, dashboards de BI y estrategias de gestión de información.', icon: Database },
    { id: 'system-modernization', title: 'Modernización de Sistemas', description: 'Migración de aplicaciones legacy, adopción de arquitecturas modernas, integración de CRMs y automatización de procesos.', icon: Code2 },
    { id: 'team-development', title: 'Desarrollo de Equipos', description: 'Mentoría técnica, integración de equipos multidisciplinarios, cultura de ingeniería y crecimiento profesional.', icon: Users },
  ],
  en: [
    { id: 'fullstack-architecture', title: 'Full-Stack Architecture', description: 'Design and implementation of scalable systems with Next.js, React, TypeScript, Python and modern databases.', icon: Layers },
    { id: 'ai-orchestration', title: 'AI / LLM Orchestration', description: 'Building intelligent agent platforms, language model integration, and technical workflow automation.', icon: Brain },
    { id: 'cybersecurity', title: 'Applied Cybersecurity', description: 'Vulnerability analysis, web application hardening, security headers, and secure development practices.', icon: Shield },
    { id: 'engineering-leadership', title: 'Engineering Leadership', description: 'Development team management, technical roadmap definition, agile methodologies, and high-impact software delivery.', icon: TrendingUp },
    { id: 'web-performance', title: 'Web Performance', description: 'Core Web Vitals optimization, SSR/SSG, lazy loading, bundle analysis, and user experience improvement.', icon: Globe },
    { id: 'data-systems', title: 'Data Systems', description: 'Database design, data pipelines, BI dashboards, and information management strategies.', icon: Database },
    { id: 'system-modernization', title: 'System Modernization', description: 'Legacy application migration, modern architecture adoption, CRM integration, and process automation.', icon: Code2 },
    { id: 'team-development', title: 'Team Development', description: 'Technical mentoring, multidisciplinary team integration, engineering culture, and professional growth.', icon: Users },
  ],
}

export function getServices(locale: Locale): Service[] {
  return servicesData[locale] ?? servicesData.es
}

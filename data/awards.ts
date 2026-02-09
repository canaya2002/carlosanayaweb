export interface Award {
  id: string
  title: string
  organization: string
  date: string
  description: string
  impact?: string
  image: string
  link?: string
}

export const awards: Award[] = [
  {
    id: 'nasa-spaceapps',
    title: 'AuraScope – Monitoreo de Calidad del Aire vía Satélite',
    organization: 'NASA International Space Apps Challenge',
    date: '2024-10',
    description:
      'Plataforma que procesa datos abiertos de NASA (Landsat/Sentinel) para identificar islas de calor y contaminación en zonas urbanas marginadas.',
    impact:
      'Reconocimiento "Galactic Problem Solver" por contribución técnica con datasets complejos y visualizaciones. Herramienta low-cost para decisiones de salud pública.',
    image: '/images/award-nasa-spaceapps.png',
  },
  {
    id: 'logiroute-ai',
    title: 'LogiRoute AI – Optimización de Logística Urbana',
    organization: 'Escuela de Ingeniería y Ciencias (Tec de Monterrey)',
    date: '2022-04',
    description:
      'Sistema de optimización de rutas de logística urbana utilizando inteligencia artificial.',
    impact:
      'Ganador 1er lugar hackathon 2022. Desarrollado con Python (motor de optimización) y React (visualización). Reducción proyectada del 15% en consumo de combustible. Seleccionado entre más de 40 equipos participantes.',
    image: '/images/award-logiroute.png',
  },
  {
    id: 'toefl',
    title: 'TOEFL - Certificación de Inglés',
    organization: 'ETS (Educational Testing Service)',
    date: '2023-12',
    description:
      'Calificación de 92 puntos demostrando dominio avanzado del idioma inglés.',
    impact:
      'Dominio avanzado en lectura, escucha, speaking y writing bajo estándares internacionales ETS.',
    image: '/images/award-toefl.png',
  },
]

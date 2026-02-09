export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: BlogSection[]
  coverImage: string
  author: {
    name: string
    avatar: string
    bio: string
  }
  publishedAt: string
  updatedAt: string
  readingTime: number
  tags: string[]
  featured: boolean
}

export interface BlogSection {
  id: string
  type: 'heading' | 'paragraph' | 'list' | 'callout' | 'quote'
  level?: 2 | 3 | 4
  content: string
  items?: string[]
  calloutType?: 'info' | 'warning' | 'tip'
}

export const blogPosts: BlogPost[] = [
  {
    id: 'ia-etica-sociedad',
    slug: 'inteligencia-artificial-etica-y-responsabilidad-social',
    title:
      'Inteligencia Artificial: Entre la Innovación Técnica y la Responsabilidad Social',
    excerpt:
      'Reflexión sobre el rol de los desarrolladores de IA en la construcción de tecnología ética, inclusiva y centrada en el ser humano. Un llamado a la acción para quienes diseñamos el futuro.',
    coverImage: '/images/blog-cover-placeholder.png',
    author: {
      name: 'Carlos Anaya Ruiz',
      avatar: '/images/avatar-carlos-placeholder.png',
      bio: 'Software Development Manager con enfoque en innovación, IA/LLMs y ciberseguridad.',
    },
    publishedAt: '2025-01-15',
    updatedAt: '2025-01-15',
    readingTime: 12,
    tags: [
      'Inteligencia Artificial',
      'Ética',
      'Tecnología',
      'Sociedad',
      'Ciberseguridad',
    ],
    featured: true,
    content: [
      {
        id: 'intro',
        type: 'paragraph',
        content:
          'La inteligencia artificial ha dejado de ser ciencia ficción para convertirse en una realidad que permea todos los aspectos de nuestra vida cotidiana. Desde los algoritmos que deciden qué contenido vemos en redes sociales hasta los sistemas que evalúan solicitudes de crédito o apoyan diagnósticos médicos, la IA está tomando decisiones que afectan profundamente a millones de personas.',
      },
      {
        id: 'intro-2',
        type: 'paragraph',
        content:
          'Como profesionales del desarrollo de software y la inteligencia artificial, nos encontramos en una posición única: somos los arquitectos de estas tecnologías. Esta posición conlleva una responsabilidad que va más allá de escribir código eficiente o entrenar modelos precisos.',
      },
      {
        id: 'heading-1',
        type: 'heading',
        level: 2,
        content: 'El Poder y la Responsabilidad del Desarrollador de IA',
      },
      {
        id: 'section-1-p1',
        type: 'paragraph',
        content:
          'Cuando desarrollamos sistemas de IA, estamos codificando decisiones que afectarán a personas reales. Un sesgo en los datos de entrenamiento puede perpetuar discriminación. Un modelo mal calibrado puede negar oportunidades a quienes más las necesitan. La falta de transparencia puede erosionar la confianza en instituciones enteras.',
      },
      {
        id: 'callout-1',
        type: 'callout',
        calloutType: 'info',
        content:
          'Según estudios recientes, los sistemas de IA utilizados en procesos de selección de personal pueden amplificar sesgos existentes hasta en un 30% si no se implementan correctamente medidas de equidad algorítmica.',
      },
      {
        id: 'section-1-p2',
        type: 'paragraph',
        content:
          'En mi experiencia trabajando con LLMs y sistemas de automatización, he aprendido que la pregunta no es solo "¿puede la IA hacer esto?" sino "¿debería hacerlo?" y "¿cómo podemos hacerlo de manera que beneficie a todos?"',
      },
      {
        id: 'heading-2',
        type: 'heading',
        level: 2,
        content: 'Principios para una IA Ética y Centrada en el Humano',
      },
      {
        id: 'section-2-p1',
        type: 'paragraph',
        content:
          'A lo largo de mi carrera, he identificado principios fundamentales que guían mi trabajo con tecnologías de IA:',
      },
      {
        id: 'list-1',
        type: 'list',
        content: '',
        items: [
          'Transparencia: Los usuarios deben saber cuándo están interactuando con IA y cómo se toman las decisiones que les afectan.',
          'Equidad: Debemos auditar activamente nuestros modelos para identificar y mitigar sesgos.',
          'Privacidad: La protección de datos personales no es negociable. La ciberseguridad es fundamental.',
          'Beneficio social: Cada proyecto debe preguntarse cómo puede contribuir positivamente a la sociedad.',
          'Supervisión humana: La IA debe aumentar las capacidades humanas, no reemplazar el juicio crítico.',
        ],
      },
      {
        id: 'heading-3',
        type: 'heading',
        level: 2,
        content: 'El Caso de la IA en Comunidades Vulnerables',
      },
      {
        id: 'section-3-p1',
        type: 'paragraph',
        content:
          'Un ejemplo que ilustra tanto el potencial como los riesgos de la IA es su aplicación en servicios para comunidades vulnerables. Durante mi participación en el NASA Space Apps Challenge con el proyecto AuraScope, experimenté de primera mano cómo la tecnología puede democratizar el acceso a información crítica sobre calidad del aire en zonas marginadas.',
      },
      {
        id: 'quote-1',
        type: 'quote',
        content:
          'La verdadera innovación no está en crear la IA más avanzada, sino en crear la IA que más personas puedan beneficiarse de ella.',
      },
      {
        id: 'section-3-p2',
        type: 'paragraph',
        content:
          'Este tipo de proyectos demuestra que la IA puede ser una herramienta de equidad social. Pero también nos recuerda que debemos ser especialmente cuidadosos cuando trabajamos con poblaciones vulnerables, donde los errores pueden tener consecuencias desproporcionadas.',
      },
      {
        id: 'heading-4',
        type: 'heading',
        level: 2,
        content: 'Ciberseguridad: El Guardián Silencioso de la IA Ética',
      },
      {
        id: 'section-4-p1',
        type: 'paragraph',
        content:
          'No podemos hablar de IA ética sin abordar la ciberseguridad. Un sistema de IA comprometido puede causar daños masivos. Mi especialización en ciberseguridad me ha enseñado que la seguridad debe ser un principio de diseño, no una ocurrencia tardía.',
      },
      {
        id: 'callout-2',
        type: 'callout',
        calloutType: 'warning',
        content:
          'Los ataques adversariales a modelos de IA pueden manipular decisiones críticas. Un sistema de reconocimiento facial puede ser engañado; un modelo de crédito puede ser explotado. La seguridad robusta es un requisito ético.',
      },
      {
        id: 'section-4-p2',
        type: 'paragraph',
        content:
          'La intersección entre IA y ciberseguridad crea nuevos desafíos: debemos proteger tanto los datos de entrenamiento como los modelos mismos, mientras aseguramos que estas protecciones no comprometan la transparencia y auditabilidad.',
      },
      {
        id: 'heading-5',
        type: 'heading',
        level: 2,
        content: 'Un Llamado a la Acción',
      },
      {
        id: 'section-5-p1',
        type: 'paragraph',
        content:
          'Como comunidad de desarrolladores, tenemos la oportunidad y la responsabilidad de definir cómo la IA transformará nuestra sociedad. Esto requiere:',
      },
      {
        id: 'list-2',
        type: 'list',
        content: '',
        items: [
          'Educación continua en ética de IA y sus implicaciones sociales',
          'Colaboración interdisciplinaria con expertos en ciencias sociales, filosofía y derecho',
          'Advocacy por regulaciones sensatas que promuevan la innovación responsable',
          'Compromiso personal con prácticas de desarrollo éticas',
          'Mentoría a nuevas generaciones sobre estos principios',
        ],
      },
      {
        id: 'callout-3',
        type: 'callout',
        calloutType: 'tip',
        content:
          'Si te interesa profundizar en estos temas, te invito a revisar mis proyectos donde aplico estos principios. También puedes contactarme para discutir colaboraciones en iniciativas de IA ética.',
      },
      {
        id: 'conclusion',
        type: 'heading',
        level: 2,
        content: 'Conclusión: Construyendo el Futuro que Queremos',
      },
      {
        id: 'conclusion-p1',
        type: 'paragraph',
        content:
          'El futuro de la IA no está predeterminado. Cada línea de código que escribimos, cada modelo que entrenamos, cada sistema que desplegamos es una elección. Podemos elegir construir tecnología que amplíe las brechas existentes o que las cierre. Que concentre el poder o que lo democratice. Que deshumanice o que empodere.',
      },
      {
        id: 'conclusion-p2',
        type: 'paragraph',
        content:
          'Yo elijo construir tecnología que ponga al ser humano en el centro. Te invito a hacer lo mismo.',
      },
    ],
  },
]

export const featuredPosts = blogPosts.filter((post) => post.featured)

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}

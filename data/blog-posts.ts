import { Locale } from './types'

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

const blogData: Record<Locale, BlogPost[]> = {
  es: [
    {
      id: 'ia-etica-sociedad',
      slug: 'inteligencia-artificial-etica-y-responsabilidad-social',
      title: 'Inteligencia Artificial: Entre la Innovación Técnica y la Responsabilidad Social',
      excerpt: 'Reflexión sobre el rol de los desarrolladores de IA en la construcción de tecnología ética, inclusiva y centrada en el ser humano. Un llamado a la acción para quienes diseñamos el futuro.',
      coverImage: '/images/blog/ai-ethics-cover.png',
      author: {
        name: 'Carlos Anaya Ruiz',
        avatar: '/images/avatar-carlos.png',
        bio: 'Software Development Manager con enfoque en innovación, IA/LLMs y ciberseguridad.',
      },
      publishedAt: '2025-01-15',
      updatedAt: '2025-01-15',
      readingTime: 12,
      tags: ['Inteligencia Artificial', 'Ética', 'Tecnología', 'Sociedad', 'Ciberseguridad'],
      featured: true,
      content: [
        { id: 'intro', type: 'paragraph', content: 'La inteligencia artificial ha dejado de ser ciencia ficción para convertirse en una realidad que permea todos los aspectos de nuestra vida cotidiana. Desde los algoritmos que deciden qué contenido vemos en redes sociales hasta los sistemas que evalúan solicitudes de crédito o apoyan diagnósticos médicos, la IA está tomando decisiones que afectan profundamente a millones de personas.' },
        { id: 'intro-2', type: 'paragraph', content: 'Como profesionales del desarrollo de software y la inteligencia artificial, nos encontramos en una posición única: somos los arquitectos de estas tecnologías. Esta posición conlleva una responsabilidad que va más allá de escribir código eficiente o entrenar modelos precisos.' },
        { id: 'heading-1', type: 'heading', level: 2, content: 'El Poder y la Responsabilidad del Desarrollador de IA' },
        { id: 'section-1-p1', type: 'paragraph', content: 'Cuando desarrollamos sistemas de IA, estamos codificando decisiones que afectarán a personas reales. Un sesgo en los datos de entrenamiento puede perpetuar discriminación. Un modelo mal calibrado puede negar oportunidades a quienes más las necesitan. La falta de transparencia puede erosionar la confianza en instituciones enteras.' },
        { id: 'callout-1', type: 'callout', calloutType: 'info', content: 'Según estudios recientes, los sistemas de IA utilizados en procesos de selección de personal pueden amplificar sesgos existentes hasta en un 30% si no se implementan correctamente medidas de equidad algorítmica.' },
        { id: 'section-1-p2', type: 'paragraph', content: 'En mi experiencia trabajando con LLMs y sistemas de automatización, he aprendido que la pregunta no es solo "¿puede la IA hacer esto?" sino "¿debería hacerlo?" y "¿cómo podemos hacerlo de manera que beneficie a todos?"' },
        { id: 'heading-2', type: 'heading', level: 2, content: 'Principios para una IA Ética y Centrada en el Humano' },
        { id: 'section-2-p1', type: 'paragraph', content: 'A lo largo de mi carrera, he identificado principios fundamentales que guían mi trabajo con tecnologías de IA:' },
        { id: 'list-1', type: 'list', content: '', items: ['Transparencia: Los usuarios deben saber cuándo están interactuando con IA y cómo se toman las decisiones que les afectan.', 'Equidad: Debemos auditar activamente nuestros modelos para identificar y mitigar sesgos.', 'Privacidad: La protección de datos personales no es negociable. La ciberseguridad es fundamental.', 'Beneficio social: Cada proyecto debe preguntarse cómo puede contribuir positivamente a la sociedad.', 'Supervisión humana: La IA debe aumentar las capacidades humanas, no reemplazar el juicio crítico.'] },
        { id: 'heading-3', type: 'heading', level: 2, content: 'El Caso de la IA en Comunidades Vulnerables' },
        { id: 'section-3-p1', type: 'paragraph', content: 'Un ejemplo que ilustra tanto el potencial como los riesgos de la IA es su aplicación en servicios para comunidades vulnerables. Durante mi participación en el NASA Space Apps Challenge con el proyecto AuraScope, experimenté de primera mano cómo la tecnología puede democratizar el acceso a información crítica sobre calidad del aire en zonas marginadas.' },
        { id: 'quote-1', type: 'quote', content: 'La verdadera innovación no está en crear la IA más avanzada, sino en crear la IA que más personas puedan beneficiarse de ella.' },
        { id: 'section-3-p2', type: 'paragraph', content: 'Este tipo de proyectos demuestra que la IA puede ser una herramienta de equidad social. Pero también nos recuerda que debemos ser especialmente cuidadosos cuando trabajamos con poblaciones vulnerables, donde los errores pueden tener consecuencias desproporcionadas.' },
        { id: 'heading-4', type: 'heading', level: 2, content: 'Ciberseguridad: El Guardián Silencioso de la IA Ética' },
        { id: 'section-4-p1', type: 'paragraph', content: 'No podemos hablar de IA ética sin abordar la ciberseguridad. Un sistema de IA comprometido puede causar daños masivos. Mi especialización en ciberseguridad me ha enseñado que la seguridad debe ser un principio de diseño, no una ocurrencia tardía.' },
        { id: 'callout-2', type: 'callout', calloutType: 'warning', content: 'Los ataques adversariales a modelos de IA pueden manipular decisiones críticas. Un sistema de reconocimiento facial puede ser engañado; un modelo de crédito puede ser explotado. La seguridad robusta es un requisito ético.' },
        { id: 'section-4-p2', type: 'paragraph', content: 'La intersección entre IA y ciberseguridad crea nuevos desafíos: debemos proteger tanto los datos de entrenamiento como los modelos mismos, mientras aseguramos que estas protecciones no comprometan la transparencia y auditabilidad.' },
        { id: 'heading-5', type: 'heading', level: 2, content: 'Un Llamado a la Acción' },
        { id: 'section-5-p1', type: 'paragraph', content: 'Como comunidad de desarrolladores, tenemos la oportunidad y la responsabilidad de definir cómo la IA transformará nuestra sociedad. Esto requiere:' },
        { id: 'list-2', type: 'list', content: '', items: ['Educación continua en ética de IA y sus implicaciones sociales', 'Colaboración interdisciplinaria con expertos en ciencias sociales, filosofía y derecho', 'Advocacy por regulaciones sensatas que promuevan la innovación responsable', 'Compromiso personal con prácticas de desarrollo éticas', 'Mentoría a nuevas generaciones sobre estos principios'] },
        { id: 'callout-3', type: 'callout', calloutType: 'tip', content: 'Si te interesa profundizar en estos temas, te invito a revisar mis proyectos donde aplico estos principios. También puedes contactarme para discutir colaboraciones en iniciativas de IA ética.' },
        { id: 'conclusion', type: 'heading', level: 2, content: 'Conclusión: Construyendo el Futuro que Queremos' },
        { id: 'conclusion-p1', type: 'paragraph', content: 'El futuro de la IA no está predeterminado. Cada línea de código que escribimos, cada modelo que entrenamos, cada sistema que desplegamos es una elección. Podemos elegir construir tecnología que amplíe las brechas existentes o que las cierre. Que concentre el poder o que lo democratice. Que deshumanice o que empodere.' },
        { id: 'conclusion-p2', type: 'paragraph', content: 'Yo elijo construir tecnología que ponga al ser humano en el centro. Te invito a hacer lo mismo.' },
      ],
    },
  ],
  en: [
    {
      id: 'ia-etica-sociedad',
      slug: 'inteligencia-artificial-etica-y-responsabilidad-social',
      title: 'Artificial Intelligence: Between Technical Innovation and Social Responsibility',
      excerpt: 'A reflection on the role of AI developers in building ethical, inclusive, and human-centered technology. A call to action for those of us designing the future.',
      coverImage: '/images/blog/ai-ethics-cover.png',
      author: {
        name: 'Carlos Anaya Ruiz',
        avatar: '/images/avatar-carlos.png',
        bio: 'Software Development Manager focused on innovation, AI/LLMs and cybersecurity.',
      },
      publishedAt: '2025-01-15',
      updatedAt: '2025-01-15',
      readingTime: 12,
      tags: ['Artificial Intelligence', 'Ethics', 'Technology', 'Society', 'Cybersecurity'],
      featured: true,
      content: [
        { id: 'intro', type: 'paragraph', content: 'Artificial intelligence has moved beyond science fiction to become a reality that permeates every aspect of our daily lives. From algorithms that decide what content we see on social media to systems that evaluate credit applications or support medical diagnoses, AI is making decisions that profoundly affect millions of people.' },
        { id: 'intro-2', type: 'paragraph', content: 'As software development and artificial intelligence professionals, we find ourselves in a unique position: we are the architects of these technologies. This position carries a responsibility that goes beyond writing efficient code or training accurate models.' },
        { id: 'heading-1', type: 'heading', level: 2, content: 'The Power and Responsibility of the AI Developer' },
        { id: 'section-1-p1', type: 'paragraph', content: 'When we develop AI systems, we are coding decisions that will affect real people. Bias in training data can perpetuate discrimination. A poorly calibrated model can deny opportunities to those who need them most. Lack of transparency can erode trust in entire institutions.' },
        { id: 'callout-1', type: 'callout', calloutType: 'info', content: 'According to recent studies, AI systems used in hiring processes can amplify existing biases by up to 30% if algorithmic fairness measures are not properly implemented.' },
        { id: 'section-1-p2', type: 'paragraph', content: 'In my experience working with LLMs and automation systems, I\'ve learned that the question is not just "can AI do this?" but "should it?" and "how can we do it in a way that benefits everyone?"' },
        { id: 'heading-2', type: 'heading', level: 2, content: 'Principles for Ethical, Human-Centered AI' },
        { id: 'section-2-p1', type: 'paragraph', content: 'Throughout my career, I have identified fundamental principles that guide my work with AI technologies:' },
        { id: 'list-1', type: 'list', content: '', items: ['Transparency: Users should know when they are interacting with AI and how decisions that affect them are made.', 'Fairness: We must actively audit our models to identify and mitigate biases.', 'Privacy: Personal data protection is non-negotiable. Cybersecurity is essential.', 'Social benefit: Every project should ask how it can positively contribute to society.', 'Human oversight: AI should augment human capabilities, not replace critical judgment.'] },
        { id: 'heading-3', type: 'heading', level: 2, content: 'The Case of AI in Vulnerable Communities' },
        { id: 'section-3-p1', type: 'paragraph', content: 'An example that illustrates both the potential and risks of AI is its application in services for vulnerable communities. During my participation in the NASA Space Apps Challenge with the AuraScope project, I experienced firsthand how technology can democratize access to critical air quality information in marginalized areas.' },
        { id: 'quote-1', type: 'quote', content: 'True innovation is not about creating the most advanced AI, but about creating the AI that the most people can benefit from.' },
        { id: 'section-3-p2', type: 'paragraph', content: 'This type of project demonstrates that AI can be a tool for social equity. But it also reminds us that we must be especially careful when working with vulnerable populations, where errors can have disproportionate consequences.' },
        { id: 'heading-4', type: 'heading', level: 2, content: 'Cybersecurity: The Silent Guardian of Ethical AI' },
        { id: 'section-4-p1', type: 'paragraph', content: 'We cannot talk about ethical AI without addressing cybersecurity. A compromised AI system can cause massive damage. My specialization in cybersecurity has taught me that security must be a design principle, not an afterthought.' },
        { id: 'callout-2', type: 'callout', calloutType: 'warning', content: 'Adversarial attacks on AI models can manipulate critical decisions. A facial recognition system can be fooled; a credit model can be exploited. Robust security is an ethical requirement.' },
        { id: 'section-4-p2', type: 'paragraph', content: 'The intersection of AI and cybersecurity creates new challenges: we must protect both training data and the models themselves, while ensuring these protections don\'t compromise transparency and auditability.' },
        { id: 'heading-5', type: 'heading', level: 2, content: 'A Call to Action' },
        { id: 'section-5-p1', type: 'paragraph', content: 'As a developer community, we have the opportunity and responsibility to define how AI will transform our society. This requires:' },
        { id: 'list-2', type: 'list', content: '', items: ['Continuing education in AI ethics and its social implications', 'Interdisciplinary collaboration with experts in social sciences, philosophy, and law', 'Advocacy for sensible regulations that promote responsible innovation', 'Personal commitment to ethical development practices', 'Mentoring new generations on these principles'] },
        { id: 'callout-3', type: 'callout', calloutType: 'tip', content: 'If you\'re interested in diving deeper into these topics, I invite you to check out my projects where I apply these principles. You can also contact me to discuss collaborations on ethical AI initiatives.' },
        { id: 'conclusion', type: 'heading', level: 2, content: 'Conclusion: Building the Future We Want' },
        { id: 'conclusion-p1', type: 'paragraph', content: 'The future of AI is not predetermined. Every line of code we write, every model we train, every system we deploy is a choice. We can choose to build technology that widens existing gaps or closes them. That concentrates power or democratizes it. That dehumanizes or empowers.' },
        { id: 'conclusion-p2', type: 'paragraph', content: 'I choose to build technology that puts humans at the center. I invite you to do the same.' },
      ],
    },
  ],
}

export function getBlogPosts(locale: Locale): BlogPost[] {
  return blogData[locale] ?? blogData.es
}

export function getFeaturedPosts(locale: Locale): BlogPost[] {
  return getBlogPosts(locale).filter((post) => post.featured)
}

export function getPostBySlug(locale: Locale, slug: string): BlogPost | undefined {
  return getBlogPosts(locale).find((post) => post.slug === slug)
}

export function getAllPostSlugs(): string[] {
  return blogData.es.map((post) => post.slug)
}

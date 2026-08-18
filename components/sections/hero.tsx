import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Github, Linkedin, Mail, Award, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getPersonalInfo } from '@/data/personal'
import { getFeaturedProjects } from '@/data/projects'
import { SOCIAL_LINKS } from '@/lib/constants'
import { Locale } from '@/data/types'
import { useTranslations } from 'next-intl'

interface HeroProps {
  locale: Locale
}

export function HeroSection({ locale }: HeroProps) {
  const personal = getPersonalInfo(locale)
  const featuredProjects = getFeaturedProjects(locale)
  const t = useTranslations('hero')

  const avatarAlt = locale === 'en'
    ? 'Carlos Anaya Ruiz - Software Development Manager, Engineering Leader and Full-Stack Architect'
    : 'Carlos Anaya Ruiz - Software Development Manager, Líder de Ingeniería y Arquitecto Full-Stack'

  const trustSignals = locale === 'en'
    ? ['Ex-Amazon SDE II', 'Tec de Monterrey', 'NASA Space Apps Winner', 'CCNA Certified']
    : ['Ex-Amazon SDE II', 'Tec de Monterrey', 'Ganador NASA Space Apps', 'Certificado CCNA']

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Identity */}
          <div className="mb-8 flex items-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-primary/20 bg-muted">
              <Image
                src="/images/carlos-anaya-ruiz-software-development-manager.png"
                alt={avatarAlt}
                fill
                className="object-cover"
                sizes="80px"
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                {personal.name}
              </h1>
              <p className="text-lg font-medium text-primary">{personal.title}</p>
            </div>
          </div>

          {/* Positioning statement */}
          <p className="mb-6 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
            {locale === 'en'
              ? 'I build and lead engineering teams that ship scalable software. Full-stack architecture, AI/LLM orchestration, and applied cybersecurity.'
              : 'Construyo y lidero equipos de ingeniería que entregan software escalable. Arquitectura full-stack, orquestación de IA/LLMs y ciberseguridad aplicada.'}
          </p>

          {/* Trust signals */}
          <div className="mb-8 flex flex-wrap gap-2">
            {trustSignals.map((signal) => (
              <Badge key={signal} variant="secondary" className="px-3 py-1 text-sm">
                {signal}
              </Badge>
            ))}
          </div>

          {/* CTAs — Projects first (portfolio identity) */}
          <div className="mb-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2 text-base">
              <Link href="/projects">
                <Briefcase className="h-5 w-5" />
                {t('cta')}
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="gap-2 text-base">
              <Link href="/blog">
                {t('ctaSecondary')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" asChild size="lg" className="text-base">
              <Link href="/cv">{t('ctaTertiary')}</Link>
            </Button>
          </div>

          {/* Featured Project Card (instead of blog) */}
          {featuredProjects[0] && (
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-primary">
                <Award className="h-4 w-4" />
                {locale === 'en' ? 'Featured Project' : 'Proyecto Destacado'}
              </div>
              <Link href={`/projects/${featuredProjects[0].slug}`}>
                <h2 className="mb-3 text-xl font-bold tracking-tight transition-colors hover:text-primary md:text-2xl">
                  {featuredProjects[0].title}
                </h2>
                <p className="mb-4 line-clamp-2 text-base text-muted-foreground md:text-lg">
                  {featuredProjects[0].description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {featuredProjects[0].technologies.slice(0, 5).map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  {locale === 'en' ? 'View case study' : 'Ver caso de estudio'}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          )}

          {/* Social */}
          <div className="mt-8 flex gap-4">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary" aria-label="LinkedIn de Carlos Anaya Ruiz">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={SOCIAL_LINKS.github1} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary" aria-label="GitHub de Carlos Anaya Ruiz">
              <Github className="h-5 w-5" />
            </a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary" aria-label="Email de Carlos Anaya Ruiz">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

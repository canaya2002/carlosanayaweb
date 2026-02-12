import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getFeaturedProjects } from '@/data/projects'
import { Locale } from '@/data/types'
import { useTranslations } from 'next-intl'

interface Props {
  locale: Locale
}

export function ProjectsPreview({ locale }: Props) {
  const projects = getFeaturedProjects(locale)
  const t = useTranslations('projects')

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t('featured')}</h2>
            <p className="mt-2 text-lg text-muted-foreground">{t('someWorks')}</p>
          </div>
          <Button variant="ghost" asChild className="hidden gap-2 md:flex">
            <Link href="/projects">
              {t('viewAll')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <Card className="group h-full overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={project.images[0]}
                    alt={`Carlos Anaya Ruiz - ${locale === 'en' ? 'Project' : 'Proyecto'}: ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {project.current && (
                    <Badge className="absolute right-4 top-4">{t('inDevelopment')}</Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="transition-colors group-hover:text-primary">{project.title}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 line-clamp-2 text-base text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline">+{project.technologies.length - 4}</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild className="gap-2">
            <Link href="/projects">
              {t('viewAllProjects')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
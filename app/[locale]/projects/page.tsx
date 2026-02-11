import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getProjects } from '@/data/projects'
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo'
import { formatShortDate } from '@/lib/utils'
import { Locale } from '@/data/types'

interface Props { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    title: locale === 'en' ? 'Projects' : 'Proyectos',
    description: locale === 'en' ? 'Featured projects by Carlos Anaya Ruiz.' : 'Proyectos destacados de Carlos Anaya Ruiz.',
    path: '/projects',
    locale: locale as Locale,
  })
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <ProjectsContent locale={locale as Locale} />
}

function ProjectsContent({ locale }: { locale: Locale }) {
  const t = useTranslations('projects')
  const projects = getProjects(locale)

  return (
    <div className="container mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateBreadcrumbSchema([
          { name: locale === 'en' ? 'Home' : 'Inicio', url: '/' },
          { name: t('title'), url: '/projects' },
        ], locale)),
      }} />

      <Breadcrumbs items={[{ label: t('title') }]} />

      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{t('title')}</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{t('subtitle')}</p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <Card className="group overflow-hidden transition-shadow hover:shadow-lg">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="grid h-full grid-cols-2 gap-2 p-4">
                      {[0, 1].map((imgIndex) => (
                        <div key={imgIndex} className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
                          <div className="flex h-full w-full items-center justify-center text-4xl text-primary/20">
                            {imgIndex === 0 ? '🖥️' : '📱'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">{t(`categories.${project.category}`)}</Badge>
                      {project.current && <Badge>{t('inDevelopment')}</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {formatShortDate(project.startDate, locale)} – {project.endDate ? formatShortDate(project.endDate, locale) : (locale === 'en' ? 'Present' : 'Presente')}
                    </p>
                    <h2 className="mt-1 text-2xl font-bold transition-colors group-hover:text-primary">{project.title}</h2>
                    <p className="mt-3 text-base text-muted-foreground">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => <Badge key={tech} variant="outline">{tech}</Badge>)}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <Separator className="my-12" />

        <div className="rounded-lg border bg-card p-8 text-center">
          <h2 className="mb-2 text-xl font-semibold">{t('interestedInCollaborating')}</h2>
          <p className="mb-6 text-muted-foreground">{t('openToProjects')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="gap-2">
              <Link href="/contact">{t('contactMe')}<ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/cv">{t('viewCV')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

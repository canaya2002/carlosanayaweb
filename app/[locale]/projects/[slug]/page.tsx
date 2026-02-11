import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowLeft, ExternalLink, Github, Calendar, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects'
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo'
import { formatShortDate } from '@/lib/utils'
import { Locale } from '@/data/types'

interface PageProps {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const project = getProjectBySlug(locale as Locale, slug)
  if (!project) return generatePageMetadata({ title: 'Not Found', locale: locale as Locale })
  return generatePageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${slug}`,
    locale: locale as Locale,
  })
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const project = getProjectBySlug(locale as Locale, slug)
  if (!project) notFound()

  return <ProjectDetailContent project={project} locale={locale as Locale} />
}

function ProjectDetailContent({ project, locale }: { project: NonNullable<ReturnType<typeof getProjectBySlug>>; locale: Locale }) {
  const t = useTranslations('projects')

  return (
    <div className="container mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateBreadcrumbSchema([
          { name: locale === 'en' ? 'Home' : 'Inicio', url: '/' },
          { name: t('title'), url: '/projects' },
          { name: project.title, url: `/projects/${project.slug}` },
        ], locale)),
      }} />

      <Breadcrumbs items={[{ label: t('title'), href: '/projects' }, { label: project.title }]} />

      <div className="mx-auto max-w-5xl">
        {/* Back */}
        <Button variant="ghost" asChild className="mb-6 gap-2">
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
            {t('backToProjects')}
          </Link>
        </Button>

        {/* Header */}
        <header className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Badge variant="secondary" className="text-sm">{t(`categories.${project.category}`)}</Badge>
            {project.current && <Badge>{t('inDevelopment')}</Badge>}
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl">{project.description}</p>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>
              {formatShortDate(project.startDate, locale)} – {project.endDate ? formatShortDate(project.endDate, locale) : (locale === 'en' ? 'Present' : 'Presente')}
            </span>
          </div>
        </header>

        {/* Image Gallery */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">{t('gallery')}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {project.images.map((img, index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 shadow-sm">
                <div className="flex h-full w-full items-center justify-center text-5xl text-primary/20">
                  {index === 0 ? '🖥️' : index === 1 ? '📊' : '📱'}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground italic">
            {locale === 'en' ? 'Place your project screenshots in /public/images/projects/' : 'Coloca tus capturas de proyecto en /public/images/projects/'}
          </p>
        </section>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">{t('overview')}</h2>
          <div className="space-y-4">
            {project.longDescription.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground md:text-lg">{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="mb-12">
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle className="text-xl">
                  {locale === 'en' ? 'Key Highlights' : 'Logros Destacados'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-muted-foreground">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">{t('techStack')}</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">{tech}</Badge>
            ))}
          </div>
        </section>

        {/* Links */}
        {project.links && (
          <section className="mb-12">
            <div className="flex flex-wrap gap-4">
              {project.links.demo && (
                <Button asChild className="gap-2">
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />{t('demo')}
                  </a>
                </Button>
              )}
              {project.links.github && (
                <Button variant="outline" asChild className="gap-2">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />{t('code')}
                  </a>
                </Button>
              )}
              {project.links.website && (
                <Button variant="outline" asChild className="gap-2">
                  <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />{t('website')}
                  </a>
                </Button>
              )}
            </div>
          </section>
        )}

        <Separator className="my-12" />

        {/* CTA */}
        <div className="rounded-lg border bg-card p-8 text-center">
          <h2 className="mb-2 text-xl font-semibold">{t('interestedInCollaborating')}</h2>
          <p className="mb-6 text-muted-foreground">{t('openToProjects')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="gap-2">
              <Link href="/contact">{t('contactMe')}<ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/projects">{t('viewAll')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

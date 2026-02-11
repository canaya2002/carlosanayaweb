import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getPersonalInfo } from '@/data/personal'
import { getAwards } from '@/data/awards'
import { getSkillsByCategory } from '@/data/skills'
import { SOCIAL_LINKS } from '@/lib/constants'
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo'
import { Locale } from '@/data/types'

interface Props { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    title: locale === 'en' ? 'About Me' : 'Sobre Mí',
    path: '/about',
    locale: locale as Locale,
  })
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <AboutContent locale={locale as Locale} />
}

function AboutContent({ locale }: { locale: Locale }) {
  const t = useTranslations('about')
  const personal = getPersonalInfo(locale)
  const awards = getAwards(locale)
  const skillsByCategory = getSkillsByCategory(locale)

  return (
    <div className="container mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateBreadcrumbSchema([
          { name: locale === 'en' ? 'Home' : 'Inicio', url: '/' },
          { name: t('title'), url: '/about' },
        ], locale)),
      }} />

      <Breadcrumbs items={[{ label: t('title') }]} />

      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-primary/20 bg-muted">
              <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-muted-foreground">CA</div>
            </div>
          </div>
          <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">{personal.name}</h1>
          <p className="text-xl text-primary">{personal.title}</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            <a href={SOCIAL_LINKS.github1} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary" aria-label="GitHub"><Github className="h-5 w-5" /></a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary" aria-label="Email"><Mail className="h-5 w-5" /></a>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">{t('professionalSummary')}</h2>
          {personal.summary.split('\n\n').map((p, i) => (
            <p key={i} className="mb-4 text-lg leading-relaxed text-muted-foreground">{p}</p>
          ))}
        </section>

        <Separator className="my-12" />

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">{t('skills')}</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-lg font-medium">{t('technical')}</h3>
              <div className="flex flex-wrap gap-2">
                {skillsByCategory.technical?.map((s) => <Badge key={s.name}>{s.name}</Badge>)}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-medium">{t('management')}</h3>
              <div className="flex flex-wrap gap-2">
                {skillsByCategory.management?.map((s) => <Badge key={s.name} variant="secondary">{s.name}</Badge>)}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-medium">{t('soft')}</h3>
              <div className="flex flex-wrap gap-2">
                {skillsByCategory.soft?.map((s) => <Badge key={s.name} variant="outline">{s.name}</Badge>)}
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">{t('languages')}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {personal.languages.map((lang) => (
              <Card key={lang.name}>
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-medium">{lang.name}</p>
                    <p className="text-sm text-muted-foreground">{lang.level}</p>
                  </div>
                  <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">
                    <div className="h-full bg-primary transition-all" style={{ width: `${lang.proficiency}%` }} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">{t('awards')}</h2>
          <div className="grid gap-4">
            {awards.slice(0, 2).map((award) => (
              <Card key={award.id}>
                <CardHeader>
                  <p className="text-sm text-muted-foreground">{award.organization}</p>
                  <CardTitle className="text-lg">{award.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="rounded-lg border bg-card p-8 text-center">
          <h2 className="mb-2 text-xl font-semibold">{t('wantToKnowMore')}</h2>
          <p className="mb-6 text-muted-foreground">{t('exploreCV')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild><Link href="/cv">{t('viewCV')}</Link></Button>
            <Button variant="outline" asChild><Link href="/projects">{t('viewProjects')}</Link></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Metadata } from 'next'
import Image from 'next/image'
import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Download, Github, Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getPersonalInfo } from '@/data/personal'
import { getExperiences } from '@/data/experience'
import { getEducation } from '@/data/education'
import { getFeaturedProjects } from '@/data/projects'
import { getCertificationsByCategory } from '@/data/certifications'
import { getAwards } from '@/data/awards'
import { getSkillsByCategory } from '@/data/skills'
import { SOCIAL_LINKS } from '@/lib/constants'
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo'
import { formatShortDate } from '@/lib/utils'
import { Locale } from '@/data/types'

interface Props { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    title: 'CV',
    description: locale === 'en'
      ? 'Carlos Anaya Ruiz — Full CV. Professional experience at Amazon, education at Tec de Monterrey, certifications, projects and technical skills in software development, AI and cybersecurity.'
      : 'Carlos Anaya Ruiz — CV completo. Experiencia profesional en Amazon, educación en Tec de Monterrey, certificaciones, proyectos y habilidades técnicas en desarrollo de software, IA y ciberseguridad.',
    path: '/cv',
    locale: locale as Locale,
  })
}

export default async function CVPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <CVContent locale={locale as Locale} />
}

function CVContent({ locale }: { locale: Locale }) {
  const t = useTranslations('cv')
  const personal = getPersonalInfo(locale)
  const experiences = getExperiences(locale)
  const education = getEducation(locale)
  const featuredProjects = getFeaturedProjects(locale)
  const certsByCategory = getCertificationsByCategory(locale)
  const awards = getAwards(locale)
  const skillsByCategory = getSkillsByCategory(locale)

  const avatarAlt = locale === 'en'
    ? 'Carlos Anaya Ruiz - CV photo, Software Development Manager'
    : 'Carlos Anaya Ruiz - Foto de CV, Software Development Manager'

  return (
    <div className="container mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateBreadcrumbSchema([
          { name: locale === 'en' ? 'Home' : 'Inicio', url: '/' },
          { name: 'CV', url: '/cv' },
        ], locale)),
      }} />

      <Breadcrumbs items={[{ label: 'CV' }]} />

      <div className="mx-auto max-w-5xl">
        {/* Header Card */}
        <div className="mb-12 rounded-xl border bg-card p-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-primary/20 bg-muted">
              <Image
                src="/images/carlos-anaya-ruiz-software-development-manager.png"
                alt={avatarAlt}
                fill
                className="object-cover"
                sizes="112px"
                priority
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="mb-1 text-3xl font-bold tracking-tight md:text-4xl">{personal.name}</h1>
              <p className="mb-3 text-xl text-primary">{personal.title}</p>
              <div className="mb-4 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground md:justify-start">
                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{personal.location}</span>
                <a href={`mailto:${personal.email}`} className="flex items-center gap-1 transition-colors hover:text-primary"><Mail className="h-4 w-4" />{personal.email}</a>
              </div>
              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                <Button variant="outline" size="sm" asChild>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2 h-4 w-4" />LinkedIn</a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={SOCIAL_LINKS.github1} target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" />GitHub</a>
                </Button>
                <Button size="sm"><Download className="mr-2 h-4 w-4" />{t('downloadPDF')}</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">{t('summary')}</h2>
          <div className="rounded-lg border bg-muted/30 p-6">
            {personal.summary.split('\n\n').map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground [&:not(:last-child)]:mb-4">{p}</p>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Experience */}
        <section className="mb-12">
          <h2 className="mb-8 text-2xl font-bold">{t('experience')}</h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card key={exp.id}>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {formatShortDate(exp.startDate, locale)} – {exp.endDate ? formatShortDate(exp.endDate, locale) : (locale === 'en' ? 'Present' : 'Presente')}
                    </span>
                    {exp.current && <Badge>{t('current')}</Badge>}
                  </div>
                  <CardTitle className="text-xl">{exp.position}</CardTitle>
                  <p className="text-primary">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{exp.description}</p>
                  {exp.highlights.length > 0 && (
                    <ul className="mb-4 space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Education */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">{t('education')}</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.id}>
                <CardHeader>
                  <p className="text-sm text-muted-foreground">{formatShortDate(edu.startDate, locale)} – {formatShortDate(edu.endDate, locale)}</p>
                  <CardTitle className="text-xl">{edu.degree} {locale === 'en' ? 'in' : 'en'} {edu.field}</CardTitle>
                  <p className="text-primary">{edu.institution}</p>
                </CardHeader>
                <CardContent>
                  {edu.description && <p className="mb-4 text-muted-foreground">{edu.description}</p>}
                  {edu.achievements && (
                    <ul className="space-y-2">
                      {edu.achievements.map((a, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{a}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Skills */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">{t('skills')}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {(['technical', 'management', 'soft'] as const).map((cat) => (
              <Card key={cat}>
                <CardHeader><CardTitle className="text-lg">{locale === 'en' ? (cat === 'technical' ? 'Technical' : cat === 'management' ? 'Management' : 'Soft Skills') : (cat === 'technical' ? 'Técnicas' : cat === 'management' ? 'Gestión' : 'Blandas')}</CardTitle></CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skillsByCategory[cat]?.map((s) => <Badge key={s.name} variant={cat === 'technical' ? 'default' : cat === 'management' ? 'secondary' : 'outline'}>{s.name}</Badge>)}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">{t('certifications')}</h2>
          <div className="space-y-8">
            {Object.entries(certsByCategory).map(([category, certs]) => (
              <div key={category}>
                <h3 className="mb-4 text-lg font-medium text-muted-foreground">
                  {t(`certCategories.${category}`)}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {certs.map((cert) => (
                    <Card key={cert.id} className="group">
                      <div className="relative h-32 overflow-hidden bg-muted">
                        <Image
                          src={cert.image}
                          alt={`Carlos Anaya Ruiz - ${locale === 'en' ? 'Certification' : 'Certificación'}: ${cert.name} - ${cert.issuer}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="line-clamp-2 font-medium transition-colors group-hover:text-primary">{cert.name}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Download CTA */}
        <div className="rounded-lg border bg-card p-8 text-center">
          <h2 className="mb-2 text-xl font-semibold">{t('needPrintable')}</h2>
          <p className="mb-6 text-muted-foreground">{t('downloadDescription')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg"><Download className="mr-2 h-5 w-5" />{t('downloadPDF')}</Button>
            <Button variant="outline" size="lg" asChild><Link href="/contact">{t('contactMe')}</Link></Button>
          </div>
        </div>
      </div>
    </div>
  )
}
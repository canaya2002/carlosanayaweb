import { Metadata } from 'next'
import Link from 'next/link'
import { Download, Github, Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Timeline } from '@/components/cv/timeline'
import { CertificationCard } from '@/components/cv/certification-card'
import { AwardCard } from '@/components/cv/award-card'
import { SkillChip } from '@/components/cv/skill-chip'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { personalInfo } from '@/data/personal'
import { experiences } from '@/data/experience'
import { education } from '@/data/education'
import { projects, featuredProjects } from '@/data/projects'
import { certifications, certificationsByCategory } from '@/data/certifications'
import { awards } from '@/data/awards'
import { skills, skillsByCategory } from '@/data/skills'
import { SOCIAL_LINKS } from '@/lib/constants'
import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'CV - Curriculum Vitae',
  description: `CV completo de ${personalInfo.name}. Experiencia profesional, educación, certificaciones, proyectos y habilidades.`,
  url: '/cv',
})

const breadcrumbItems = [{ label: 'CV' }]

const categoryLabels: Record<string, string> = {
  development: 'Desarrollo',
  management: 'Gestión',
  ai: 'Inteligencia Artificial',
  infrastructure: 'Infraestructura',
  security: 'Seguridad',
}

export default function CVPage() {
  const formatEducationDate = (date: string) => {
    const [year, month] = date.split('-')
    const months = [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ]
    return `${months[parseInt(month) - 1]}. ${year}`
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Inicio', url: '/' },
              { name: 'CV', url: '/cv' },
            ])
          ),
        }}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 rounded-lg border bg-card p-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            {/* Avatar */}
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-primary/20 bg-muted">
              <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-muted-foreground">
                CA
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="mb-1 text-3xl font-bold tracking-tight md:text-4xl">
                {personalInfo.name}
              </h1>
              <p className="mb-3 text-xl text-primary">{personalInfo.title}</p>

              <div className="mb-4 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground md:justify-start">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {personalInfo.location}
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={SOCIAL_LINKS.github1}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar PDF
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <section id="resumen" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 text-2xl font-bold">Resumen Profesional</h2>
          <div className="rounded-lg border bg-muted/30 p-6">
            {personalInfo.summary.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-relaxed text-muted-foreground [&:not(:last-child)]:mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Experience */}
        <section id="experiencia" className="mb-12 scroll-mt-24">
          <h2 className="mb-8 text-2xl font-bold">Experiencia Profesional</h2>
          <Timeline items={experiences} />
        </section>

        <Separator className="my-12" />

        {/* Education */}
        <section id="educacion" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 text-2xl font-bold">Educación</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.id}>
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {formatEducationDate(edu.startDate)} –{' '}
                        {formatEducationDate(edu.endDate)}
                      </p>
                      <CardTitle className="text-xl">
                        {edu.degree} en {edu.field}
                      </CardTitle>
                      <p className="text-primary">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">
                        {edu.location}
                      </p>
                    </div>
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-muted">
                      <div className="flex h-full w-full items-center justify-center text-2xl text-muted-foreground/30">
                        🎓
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {edu.description && (
                    <p className="mb-4 text-muted-foreground">
                      {edu.description}
                    </p>
                  )}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {achievement}
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

        {/* Projects */}
        <section id="proyectos" className="mb-12 scroll-mt-24">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Proyectos Destacados</h2>
            <Button variant="ghost" asChild>
              <Link href="/projects">
                Ver todos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden">
                {/* Image */}
                <div className="relative h-40 bg-muted">
                  <div className="flex h-full w-full items-center justify-center text-4xl text-muted-foreground/30">
                    {project.category === 'ai' ? '🤖' : '🌐'}
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center gap-2">
                    {project.current && (
                      <Badge variant="default" className="text-xs">
                        En desarrollo
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Awards */}
        <section id="reconocimientos" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 text-2xl font-bold">Reconocimientos y Premios</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {awards.map((award) => (
              <AwardCard key={award.id} award={award} />
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Certifications */}
        <section id="certificaciones" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 text-2xl font-bold">Certificaciones</h2>

          <div className="space-y-8">
            {Object.entries(certificationsByCategory).map(([category, certs]) => (
              <div key={category}>
                <h3 className="mb-4 text-lg font-medium text-muted-foreground">
                  {categoryLabels[category] || category}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {certs.map((cert) => (
                    <CertificationCard key={cert.id} certification={cert} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Skills */}
        <section id="habilidades" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 text-2xl font-bold">Habilidades</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Técnicas</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skillsByCategory.technical?.map((skill) => (
                  <SkillChip key={skill.name} skill={skill} />
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Gestión</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skillsByCategory.management?.map((skill) => (
                  <SkillChip key={skill.name} skill={skill} />
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Blandas</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skillsByCategory.soft?.map((skill) => (
                  <SkillChip key={skill.name} skill={skill} />
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Languages */}
        <section id="idiomas" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 text-2xl font-bold">Idiomas</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {personalInfo.languages.map((lang) => (
              <Card key={lang.name}>
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <p className="text-lg font-medium">{lang.name}</p>
                    <p className="text-sm text-muted-foreground">{lang.level}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-32 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${lang.proficiency}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {lang.proficiency}%
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Download CTA */}
        <div className="rounded-lg border bg-muted/30 p-8 text-center">
          <h2 className="mb-2 text-xl font-semibold">
            ¿Necesitas una versión imprimible?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Descarga mi CV en formato PDF para tenerlo siempre disponible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              <Download className="mr-2 h-5 w-5" />
              Descargar CV en PDF
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contáctame</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Para habilitar la descarga, coloca tu archivo PDF en{' '}
            <code className="rounded bg-muted px-1 py-0.5">
              /public/carlos-anaya-cv.pdf
            </code>{' '}
            y actualiza los enlaces.
          </p>
        </div>
      </div>
    </div>
  )
}

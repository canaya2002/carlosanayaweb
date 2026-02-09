import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { personalInfo } from '@/data/personal'
import { awards } from '@/data/awards'
import { skills, skillsByCategory } from '@/data/skills'
import { SOCIAL_LINKS, SITE_CONFIG } from '@/lib/constants'
import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Sobre Mí',
  description: `Conoce más sobre ${personalInfo.name}. ${personalInfo.shortBio}`,
  url: '/about',
})

const breadcrumbItems = [{ label: 'Sobre Mí' }]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Inicio', url: '/' },
              { name: 'Sobre Mí', url: '/about' },
            ])
          ),
        }}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          {/* Avatar */}
          <div className="mb-6 flex justify-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-primary/20 bg-muted">
              <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-muted-foreground">
                CA
              </div>
            </div>
          </div>

          <h1 className="mb-2 text-4xl font-bold tracking-tight">
            {personalInfo.name}
          </h1>
          <p className="text-xl text-primary">{personalInfo.title}</p>

          {/* Social Links */}
          <div className="mt-6 flex justify-center gap-4">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.github1}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Resumen Profesional</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {personalInfo.summary.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Skills */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Habilidades</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-lg font-medium">Técnicas</h3>
              <div className="flex flex-wrap gap-2">
                {skillsByCategory.technical?.map((skill) => (
                  <Badge key={skill.name} variant="default">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">Gestión</h3>
              <div className="flex flex-wrap gap-2">
                {skillsByCategory.management?.map((skill) => (
                  <Badge key={skill.name} variant="secondary">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">Blandas</h3>
              <div className="flex flex-wrap gap-2">
                {skillsByCategory.soft?.map((skill) => (
                  <Badge key={skill.name} variant="outline">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Languages */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Idiomas</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {personalInfo.languages.map((lang) => (
              <Card key={lang.name}>
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-medium">{lang.name}</p>
                    <p className="text-sm text-muted-foreground">{lang.level}</p>
                  </div>
                  <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: `${lang.proficiency}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Awards Preview */}
        <section className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Reconocimientos</h2>
            <Button variant="ghost" asChild>
              <Link href="/cv#reconocimientos">
                Ver todos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4">
            {awards.slice(0, 2).map((award) => (
              <Card key={award.id}>
                <CardHeader>
                  <p className="text-sm text-muted-foreground">
                    {award.organization}
                  </p>
                  <CardTitle className="text-lg">{award.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-lg border bg-muted/30 p-8 text-center">
          <h2 className="mb-2 text-xl font-semibold">¿Quieres saber más?</h2>
          <p className="mb-6 text-muted-foreground">
            Explora mi CV completo o revisa mis proyectos recientes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/cv">Ver CV Completo</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/projects">Ver Proyectos</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

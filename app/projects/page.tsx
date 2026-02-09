import { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { projects } from '@/data/projects'
import { personalInfo } from '@/data/personal'
import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Proyectos',
  description: `Proyectos destacados de ${personalInfo.name}. Desarrollo de software, IA, y soluciones tecnológicas innovadoras.`,
  url: '/projects',
})

const breadcrumbItems = [{ label: 'Proyectos' }]

const categoryLabels: Record<string, string> = {
  ai: 'Inteligencia Artificial',
  web: 'Desarrollo Web',
  mobile: 'Móvil',
  data: 'Datos',
  other: 'Otros',
}

const categoryColors: Record<string, string> = {
  ai: 'bg-purple-500/10 text-purple-700 dark:text-purple-400',
  web: 'bg-blue-500/10 text-blue-700 dark:text-blue-400',
  mobile: 'bg-green-500/10 text-green-700 dark:text-green-400',
  data: 'bg-orange-500/10 text-orange-700 dark:text-orange-400',
  other: 'bg-gray-500/10 text-gray-700 dark:text-gray-400',
}

export default function ProjectsPage() {
  const formatDate = (date: string) => {
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
              { name: 'Proyectos', url: '/projects' },
            ])
          ),
        }}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Proyectos
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Una selección de proyectos en los que he trabajado, desde plataformas
            de IA hasta modernización de infraestructura web.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="grid gap-6 md:grid-cols-2">
                {/* Image Gallery */}
                <div
                  className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <div className="grid h-full grid-cols-2 gap-2 p-4">
                    {project.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative aspect-video overflow-hidden rounded-lg bg-muted"
                      >
                        <div className="flex h-full w-full items-center justify-center text-4xl text-muted-foreground/30">
                          {imgIndex === 0 ? '🖥️' : '📱'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        categoryColors[project.category]
                      }`}
                    >
                      {categoryLabels[project.category]}
                    </span>
                    {project.current && (
                      <Badge variant="default">En desarrollo</Badge>
                    )}
                  </div>

                  <CardHeader className="p-0">
                    <p className="text-sm text-muted-foreground">
                      {formatDate(project.startDate)} –{' '}
                      {project.endDate ? formatDate(project.endDate) : 'Presente'}
                    </p>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="mt-4 p-0">
                    <p className="mb-4 text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mb-6 space-y-4 text-sm text-muted-foreground">
                      {project.longDescription
                        .split('\n\n')
                        .slice(0, 2)
                        .map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    {project.links && (
                      <div className="flex flex-wrap gap-3">
                        {project.links.demo && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={project.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        )}
                        {project.links.github && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Código
                            </a>
                          </Button>
                        )}
                        {project.links.website && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={project.links.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Sitio Web
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Separator className="my-12" />

        {/* CTA Section */}
        <div className="rounded-lg border bg-muted/30 p-8 text-center">
          <h2 className="mb-2 text-xl font-semibold">
            ¿Interesado en colaborar?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Estoy abierto a nuevos proyectos y oportunidades de colaboración.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/contact">
                Contáctame
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/cv">Ver CV Completo</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

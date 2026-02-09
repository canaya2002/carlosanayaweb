import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { featuredProjects } from '@/data/projects'

export function ProjectsPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Proyectos Destacados
            </h2>
            <p className="mt-2 text-muted-foreground">
              Algunos de mis trabajos más recientes e impactantes.
            </p>
          </div>
          <Button variant="ghost" asChild className="hidden md:flex">
            <Link href="/projects">
              Ver todos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden transition-shadow hover:shadow-lg"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-muted">
                <div className="flex h-full items-center justify-center text-6xl text-muted-foreground/30">
                  {project.category === 'ai' ? '🤖' : '🌐'}
                </div>
                {project.current && (
                  <Badge className="absolute right-4 top-4">
                    En desarrollo
                  </Badge>
                )}
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="transition-colors group-hover:text-primary">
                    {project.title}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="mb-4 line-clamp-2 text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link href="/projects">
              Ver todos los proyectos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

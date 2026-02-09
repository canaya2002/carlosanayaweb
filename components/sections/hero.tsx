import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/personal'
import { SOCIAL_LINKS } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-primary/20 bg-muted">
              <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-muted-foreground">
                CA
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="mb-6 text-xl text-primary md:text-2xl">
            {personalInfo.title}
          </p>

          {/* Short Bio */}
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            {personalInfo.shortBio}
          </p>

          {/* CTA Buttons */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/projects">
                Ver Proyectos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/contact">Contactar</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
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
      </div>
    </section>
  )
}

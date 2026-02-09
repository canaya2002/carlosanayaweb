import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { SOCIAL_LINKS, NAVIGATION_LINKS } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight"
            >
              Carlos Anaya Ruiz
            </Link>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Software Development Manager con enfoque en innovación,
              soluciones full-stack, IA/LLMs y ciberseguridad.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.github1}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold">Navegación</h3>
            <ul className="mt-4 space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">Contacto</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {SOCIAL_LINKS.email}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Carlos Anaya Ruiz. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

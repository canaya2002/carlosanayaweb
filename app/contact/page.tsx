'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { personalInfo } from '@/data/personal'
import { SOCIAL_LINKS } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/seo'

const breadcrumbItems = [{ label: 'Contacto' }]

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Contacto', url: '/contact' },
  ])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission - en producción conectar a un backend o servicio como Formspree
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Contacto
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            ¿Tienes un proyecto en mente o quieres colaborar? Me encantaría
            escucharte. Completa el formulario o contáctame directamente.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{personalInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-lg p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Redes Sociales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
                    <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">
                      Conecta conmigo
                    </p>
                  </div>
                </a>

                <a
                  href={SOCIAL_LINKS.github1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500/10">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">
                      Ve mis proyectos
                    </p>
                  </div>
                </a>

                <a
                  href={SOCIAL_LINKS.github2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500/10">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub (Alt)</p>
                    <p className="text-sm text-muted-foreground">
                      Cuenta secundaria
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Envíame un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Gracias por contactarme. Te responderé lo antes posible.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ name: '', email: '', subject: '', message: '' })
                    }}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none"
                      >
                        Nombre
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none"
                    >
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="¿Sobre qué quieres hablar?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none"
                    >
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuéntame más sobre tu proyecto o idea..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full sm:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensaje
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    Este formulario es una demostración (mock). Para habilitarlo,
                    conecta con un servicio como{' '}
                    <a
                      href="https://formspree.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Formspree
                    </a>
                    ,{' '}
                    <a
                      href="https://www.emailjs.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      EmailJS
                    </a>
                    , o tu propio backend.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="mt-12 rounded-lg border bg-muted/30 p-8 text-center">
          <h2 className="mb-2 text-xl font-semibold">
            ¿Prefieres ver mi trabajo primero?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Explora mis proyectos y revisa mi experiencia profesional.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/projects">Ver Proyectos</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/cv">Ver CV</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">Leer Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

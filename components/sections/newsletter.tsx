'use client'

import { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="border-t bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h2 className="mb-2 text-2xl font-bold tracking-tight">
            Suscríbete al Newsletter
          </h2>
          <p className="mb-6 text-muted-foreground">
            Recibe actualizaciones sobre nuevos proyectos, artículos y
            reflexiones sobre tecnología.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-primary">
              <CheckCircle className="h-5 w-5" />
              <span>¡Gracias por suscribirte!</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit">Suscribirse</Button>
            </form>
          )}

          <p className="mt-4 text-xs text-muted-foreground">
            Sin spam. Puedes cancelar en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useTranslations } from 'next-intl'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const t = useTranslations('newsletter')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubmitted(true); setEmail('') }
  }

  return (
    <section className="border-t bg-muted/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
          </div>
          <h2 className="mb-2 text-2xl font-bold tracking-tight">{t('title')}</h2>
          <p className="mb-6 text-muted-foreground">{t('subtitle')}</p>
          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-primary">
              <CheckCircle className="h-5 w-5" />
              <span>{t('thankYou')}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <Input type="email" placeholder={t('placeholder')} value={email} onChange={(e) => setEmail(e.target.value)} required className="flex-1" />
              <Button type="submit">{t('subscribe')}</Button>
            </form>
          )}
          <p className="mt-4 text-xs text-muted-foreground">{t('noSpam')}</p>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { getPersonalInfo } from '@/data/personal'
import { SOCIAL_LINKS } from '@/lib/constants'
import { sendContactMessage } from '@/lib/firebase-services'
import { Locale } from '@/data/types'

export default function ContactClient() {
  const t = useTranslations('contact')
  const locale = useLocale() as Locale
  const personal = getPersonalInfo(locale)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const result = await sendContactMessage({ ...formData, locale })

    if (result.success) {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } else {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: t('title') }]} />

      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{t('title')}</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{t('subtitle')}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <Card>
              <CardHeader><CardTitle className="text-lg">{t('contactInfo')}</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <a href={`mailto:${personal.email}`} className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10"><Mail className="h-5 w-5 text-primary" /></div>
                  <div><p className="text-sm text-muted-foreground">{t('email')}</p><p className="font-medium">{personal.email}</p></div>
                </a>
                <div className="flex items-center gap-3 rounded-lg p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10"><MapPin className="h-5 w-5 text-primary" /></div>
                  <div><p className="text-sm text-muted-foreground">{t('location')}</p><p className="font-medium">{personal.location}</p></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-lg">{t('socialMedia')}</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10"><Linkedin className="h-5 w-5 text-blue-600" /></div>
                  <div><p className="font-medium">LinkedIn</p><p className="text-sm text-muted-foreground">{t('connectWithMe')}</p></div>
                </a>
                <a href={SOCIAL_LINKS.github1} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary"><Github className="h-5 w-5" /></div>
                  <div><p className="font-medium">GitHub</p><p className="text-sm text-muted-foreground">{t('seeMyProjects')}</p></div>
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="lg:col-span-2">
            <CardHeader><CardTitle>{t('sendMessage')}</CardTitle></CardHeader>
            <CardContent>
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{t('messageSent')}</h3>
                  <p className="mb-6 text-muted-foreground">{t('thankYou')}</p>
                  <Button variant="outline" onClick={() => setStatus('idle')}>
                    {t('sendAnother')}
                  </Button>
                </div>
              ) : status === 'error' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
                    <AlertCircle className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{t('errorTitle')}</h3>
                  <p className="mb-6 text-muted-foreground">{t('errorDescription')}</p>
                  <Button variant="outline" onClick={() => setStatus('idle')}>
                    {t('tryAgain')}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">{t('name')}</label>
                      <Input id="name" name="name" placeholder={t('namePlaceholder')} value={formData.name} onChange={handleChange} required disabled={status === 'loading'} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">{t('email')}</label>
                      <Input id="email" name="email" type="email" placeholder={t('emailPlaceholder')} value={formData.email} onChange={handleChange} required disabled={status === 'loading'} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">{t('subject')}</label>
                    <Input id="subject" name="subject" placeholder={t('subjectPlaceholder')} value={formData.subject} onChange={handleChange} required disabled={status === 'loading'} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">{t('message')}</label>
                    <Textarea id="message" name="message" placeholder={t('messagePlaceholder')} value={formData.message} onChange={handleChange} rows={6} required disabled={status === 'loading'} />
                  </div>
                  <Button type="submit" className="w-full gap-2 sm:w-auto" disabled={status === 'loading'}>
                    {status === 'loading' ? (
                      <><Loader2 className="h-4 w-4 animate-spin" />{t('sending')}</>
                    ) : (
                      <><Send className="h-4 w-4" />{t('send')}</>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 rounded-lg border bg-card p-8 text-center">
          <h2 className="mb-2 text-xl font-semibold">{t('preferToSeeWork')}</h2>
          <p className="mb-6 text-muted-foreground">{t('exploreDescription')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild><Link href="/projects">{t('viewProjects')}</Link></Button>
            <Button variant="outline" asChild><Link href="/cv">{t('viewCV')}</Link></Button>
            <Button variant="outline" asChild><Link href="/blog">{t('readBlog')}</Link></Button>
          </div>
        </div>
      </div>
    </div>
  )
}
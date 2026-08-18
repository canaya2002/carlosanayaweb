import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { generatePageMetadata } from '@/lib/seo'
import { Locale } from '@/data/types'
import ContactClient from './ContactClient'

interface Props { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    title: locale === 'en' ? 'Contact' : 'Contacto',
    description: locale === 'en'
      ? 'Carlos Anaya Ruiz — Connect for technical collaborations, engineering projects, or professional opportunities.'
      : 'Carlos Anaya Ruiz — Conecta para colaboraciones técnicas, proyectos de ingeniería u oportunidades profesionales.',
    path: '/contact',
    locale: locale as Locale,
  })
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <ContactClient />
}
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
      ? 'Carlos Anaya Ruiz — Contact me for projects, collaborations or consulting. Software Development Manager available for new opportunities.'
      : 'Carlos Anaya Ruiz — Contáctame para proyectos, colaboraciones o consultoría. Software Development Manager disponible para nuevas oportunidades.',
    path: '/contact',
    locale: locale as Locale,
  })
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <ContactClient />
}
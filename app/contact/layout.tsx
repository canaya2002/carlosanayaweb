import { Metadata } from 'next'
import { personalInfo } from '@/data/personal'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Contacto',
  description: `Contacta a ${personalInfo.name}. ¿Tienes un proyecto en mente o quieres colaborar? Me encantaría escucharte.`,
  url: '/contact',
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

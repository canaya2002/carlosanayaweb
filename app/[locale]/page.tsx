import { setRequestLocale } from 'next-intl/server'
import { Locale } from '@/data/types'
import { HeroSection } from '@/components/sections/hero'
import { BlogPreview } from '@/components/sections/blog-preview'
import { ProjectsPreview } from '@/components/sections/projects-preview'
import { Services } from '@/components/sections/services'
import { AboutPreview } from '@/components/sections/about-preview'
import { Newsletter } from '@/components/sections/newsletter'

interface Props {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <HeroSection locale={locale as Locale} />
      <BlogPreview locale={locale as Locale} />
      <ProjectsPreview locale={locale as Locale} />
      <Services locale={locale as Locale} />
      <AboutPreview locale={locale as Locale} />
      <Newsletter />
    </>
  )
}

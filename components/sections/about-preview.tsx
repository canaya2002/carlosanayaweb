import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getPersonalInfo } from '@/data/personal'
import { Locale } from '@/data/types'
import { useTranslations } from 'next-intl'

interface Props { locale: Locale }

export function AboutPreview({ locale }: Props) {
  const personal = getPersonalInfo(locale)
  const t = useTranslations('about')

  const careerHighlights = locale === 'en'
    ? ['Amazon SDE II', 'Tec de Monterrey', 'Cybersecurity Specialization', 'NASA Space Apps']
    : ['Amazon SDE II', 'Tec de Monterrey', 'Especialidad en Ciberseguridad', 'NASA Space Apps']

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            {locale === 'en' ? 'About Me' : 'Sobre Mí'}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            {personal.summary.split('\n\n')[0]}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {careerHighlights.map((highlight) => (
              <Badge key={highlight} variant="outline" className="px-3 py-1">
                {highlight}
              </Badge>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="outline" asChild className="gap-2">
              <Link href="/about">
                {locale === 'en' ? 'Full professional journey' : 'Trayectoria profesional completa'}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" asChild className="gap-2">
              <Link href="/cv">
                {locale === 'en' ? 'View CV' : 'Ver CV'}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

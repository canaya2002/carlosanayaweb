import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getPersonalInfo } from '@/data/personal'
import { Locale } from '@/data/types'
import { useTranslations } from 'next-intl'

interface Props { locale: Locale }

export function AboutPreview({ locale }: Props) {
  const personal = getPersonalInfo(locale)
  const t = useTranslations('about')

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">{t('title')}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            {personal.summary.split('\n\n')[0]}
          </p>
          <div className="mt-8">
            <Button variant="outline" asChild className="gap-2">
              <Link href="/about">
                {t('viewAll')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Github, Linkedin, Mail, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getPersonalInfo } from '@/data/personal'
import { getFeaturedPosts } from '@/data/blog-posts'
import { SOCIAL_LINKS } from '@/lib/constants'
import { Locale } from '@/data/types'
import { useTranslations } from 'next-intl'

interface HeroProps {
  locale: Locale
}

export function HeroSection({ locale }: HeroProps) {
  const personal = getPersonalInfo(locale)
  const featuredPosts = getFeaturedPosts(locale)
  const t = useTranslations('hero')

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Identity */}
          <div className="mb-8 flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary/20 bg-muted">
              <Image src="/images/avatar-carlos.png" alt={personal.name} fill className="object-cover" sizes="64px" priority />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                {personal.name}
              </h1>
              <p className="text-lg text-primary">{personal.title}</p>
            </div>
          </div>

          {/* Bio */}
          <p className="mb-8 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
            {personal.shortBio}
          </p>

          {/* CTA - Blog First */}
          <div className="mb-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2 text-base">
              <Link href="/blog">
                <BookOpen className="h-5 w-5" />
                {t('cta')}
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="gap-2 text-base">
              <Link href="/projects">
                {t('ctaSecondary')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" asChild size="lg" className="text-base">
              <Link href="/contact">{t('ctaTertiary')}</Link>
            </Button>
          </div>

          {/* Featured Blog Post Preview */}
          {featuredPosts[0] && (
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-primary">
                <BookOpen className="h-4 w-4" />
                {t('latestPosts')}
              </div>
              <Link href={`/blog/${featuredPosts[0].slug}`}>
                <h2 className="mb-3 text-xl font-bold tracking-tight transition-colors hover:text-primary md:text-2xl">
                  {featuredPosts[0].title}
                </h2>
                <p className="mb-4 line-clamp-2 text-base text-muted-foreground md:text-lg">
                  {featuredPosts[0].excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  {t('readMore')}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          )}

          {/* Social */}
          <div className="mt-8 flex gap-4">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={SOCIAL_LINKS.github1} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

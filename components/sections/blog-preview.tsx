import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getBlogPosts } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'
import { Locale } from '@/data/types'
import { useTranslations } from 'next-intl'

interface Props {
  locale: Locale
}

export function BlogPreview({ locale }: Props) {
  const posts = getBlogPosts(locale)
  const t = useTranslations('blog')
  const tn = useTranslations('nav')

  return (
    <section className="bg-muted/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{tn('blog')}</h2>
            <p className="mt-2 text-lg text-muted-foreground">{t('subtitle')}</p>
          </div>
          <Button variant="ghost" asChild className="hidden gap-2 md:flex">
            <Link href="/blog">
              {t('allPosts')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="group overflow-hidden transition-shadow hover:shadow-lg">
              <Link href={`/blog/${post.slug}`}>
                <div className="md:flex">
                  <div className="relative h-48 overflow-hidden bg-muted md:h-auto md:w-72 md:shrink-0">
                    <Image
                      src={post.coverImage}
                      alt={`Carlos Anaya Ruiz - ${locale === 'en' ? 'Article' : 'Artículo'}: ${post.title}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 288px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <CardHeader>
                      <div className="mb-2 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold tracking-tight transition-colors group-hover:text-primary md:text-2xl">
                        {post.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="line-clamp-2 text-base text-muted-foreground">{post.excerpt}</p>
                      <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.publishedAt, locale)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readingTime} {t('readingTime')}
                        </span>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild className="gap-2">
            <Link href="/blog">
              {t('allPosts')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
import { Metadata } from 'next'
import Image from 'next/image'
import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Clock, Calendar } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getBlogPosts } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo'
import { Locale } from '@/data/types'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    title: locale === 'en' ? 'Blog' : 'Blog',
    description: locale === 'en' ? 'Articles on technology, AI, cybersecurity and software development.' : 'Artículos sobre tecnología, IA, ciberseguridad y desarrollo de software.',
    path: '/blog',
    locale: locale as Locale,
  })
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const posts = getBlogPosts(locale as Locale)

  return <BlogPageContent locale={locale as Locale} posts={posts} />
}

function BlogPageContent({ locale, posts }: { locale: Locale; posts: ReturnType<typeof getBlogPosts> }) {
  const t = useTranslations('blog')

  return (
    <div className="container mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(
            [{ name: locale === 'en' ? 'Home' : 'Inicio', url: '/' }, { name: 'Blog', url: '/blog' }],
            locale
          )),
        }}
      />

      <Breadcrumbs items={[{ label: 'Blog' }]} />

      <div className="mx-auto max-w-4xl">
        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{t('title')}</h1>
          <p className="text-lg text-muted-foreground md:text-xl">{t('subtitle')}</p>
        </header>

        <div className="space-y-8">
          {posts.map((post) => (
            <Card key={post.id} className="group overflow-hidden transition-shadow hover:shadow-lg">
              <Link href={`/blog/${post.slug}`} className="md:flex">
                <div className="relative h-48 overflow-hidden bg-muted md:h-auto md:w-72 md:shrink-0">
                  <Image src={post.coverImage} alt={post.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 288px" />
                </div>
                <div className="flex flex-1 flex-col">
                  <CardHeader>
                    <div className="mb-2 flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold tracking-tight transition-colors group-hover:text-primary md:text-2xl">
                      {post.title}
                    </h2>
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
              </Link>
            </Card>
          ))}
        </div>

        {posts.length <= 1 && (
          <div className="mt-12 rounded-lg border bg-card p-8 text-center">
            <p className="text-muted-foreground">{t('comingSoon')}</p>
          </div>
        )}
      </div>
    </div>
  )
}

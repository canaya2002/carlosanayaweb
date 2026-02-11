import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Clock, Calendar, ArrowLeft } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { TableOfContents } from '@/components/blog/table-of-contents'
import { AuthorCard } from '@/components/blog/author-card'
import { Callout } from '@/components/blog/callout'
import { getPostBySlug, getAllPostSlugs, BlogSection } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'
import { generatePageMetadata, generateBlogPostSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { Locale } from '@/data/types'

interface PageProps {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const post = getPostBySlug(locale as Locale, slug)
  if (!post) return generatePageMetadata({ title: 'Not Found', locale: locale as Locale })
  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    type: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    author: post.author.name,
    keywords: post.tags,
    locale: locale as Locale,
  })
}

function renderHeading(section: BlogSection) {
  const baseClass = 'scroll-mt-24 font-bold tracking-tight'
  const sizeClass = section.level === 2 ? 'mb-4 mt-10 text-2xl md:text-3xl' : section.level === 3 ? 'mb-3 mt-8 text-xl md:text-2xl' : 'mb-2 mt-6 text-lg md:text-xl'
  const Tag = `h${section.level || 2}` as 'h2' | 'h3' | 'h4'
  return <Tag key={section.id} id={section.id} className={`${baseClass} ${sizeClass}`}>{section.content}</Tag>
}

function renderSection(section: BlogSection) {
  switch (section.type) {
    case 'heading': return renderHeading(section)
    case 'paragraph': return <p key={section.id} className="mb-4 text-base leading-relaxed text-muted-foreground md:text-lg">{section.content}</p>
    case 'list': return (
      <ul key={section.id} className="mb-6 space-y-2">
        {section.items?.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-base text-muted-foreground">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
    case 'callout': return <Callout key={section.id} type={section.calloutType || 'info'}>{section.content}</Callout>
    case 'quote': return (
      <blockquote key={section.id} className="my-6 border-l-4 border-primary pl-6 italic text-lg text-muted-foreground">
        {section.content}
      </blockquote>
    )
    default: return null
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const post = getPostBySlug(locale as Locale, slug)
  if (!post) notFound()

  return <BlogPostContent post={post} locale={locale as Locale} slug={slug} />
}

function BlogPostContent({ post, locale, slug }: { post: NonNullable<ReturnType<typeof getPostBySlug>>; locale: Locale; slug: string }) {
  const t = useTranslations('blog')

  return (
    <div className="container mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateBlogPostSchema({ title: post.title, description: post.excerpt, slug, publishedAt: post.publishedAt, modifiedAt: post.updatedAt, author: post.author.name, locale })),
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateBreadcrumbSchema([
          { name: locale === 'en' ? 'Home' : 'Inicio', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${slug}` },
        ], locale)),
      }} />

      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />

      <div className="mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="mb-6 gap-2">
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4" />
            {t('backToBlog')}
          </Link>
        </Button>

        <article>
          <header className="mb-8">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.publishedAt, locale)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime} {t('readingTime')}
              </span>
            </div>
          </header>

          <div className="relative mb-8 aspect-video overflow-hidden rounded-lg bg-muted">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 800px" priority />
          </div>

          <div className="lg:grid lg:grid-cols-[1fr_250px] lg:gap-12">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {post.content.map(renderSection)}
              <Separator className="my-8" />
              <div className="not-prose rounded-lg border bg-card p-6">
                <p className="text-base text-muted-foreground">
                  <Link href="/projects" className="text-primary hover:underline">
                    {locale === 'en' ? 'Explore my projects' : 'Explora mis proyectos'}
                  </Link>
                  {' '}{locale === 'en' ? 'or' : 'o'}{' '}
                  <Link href="/contact" className="text-primary hover:underline">
                    {locale === 'en' ? 'contact me' : 'contáctame'}
                  </Link>.
                </p>
              </div>
            </div>
            <aside className="hidden lg:block">
              <TableOfContents sections={post.content} />
            </aside>
          </div>

          <div className="mt-12">
            <AuthorCard author={post.author} />
          </div>
        </article>
      </div>
    </div>
  )
}

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, Calendar, ArrowLeft } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { TableOfContents } from '@/components/blog/table-of-contents'
import { AuthorCard } from '@/components/blog/author-card'
import { ReadLaterButton } from '@/components/blog/read-later-button'
import { Callout } from '@/components/blog/callout'
import { RelatedPosts } from '@/components/blog/related-posts'
import {
  blogPosts,
  getPostBySlug,
  getAllPostSlugs,
  BlogSection,
} from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'
import {
  generateMetadata as genMeta,
  generateBlogPostSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return genMeta({ title: 'Post no encontrado' })
  }

  return genMeta({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${slug}`,
    type: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    author: post.author.name,
    keywords: post.tags,
  })
}

function renderHeading(section: BlogSection) {
  const className = `scroll-mt-24 font-bold tracking-tight ${
    section.level === 2
      ? 'mb-4 mt-10 text-2xl'
      : section.level === 3
      ? 'mb-3 mt-8 text-xl'
      : 'mb-2 mt-6 text-lg'
  }`

  switch (section.level) {
    case 2:
      return (
        <h2 key={section.id} id={section.id} className={className}>
          {section.content}
        </h2>
      )
    case 3:
      return (
        <h3 key={section.id} id={section.id} className={className}>
          {section.content}
        </h3>
      )
    case 4:
      return (
        <h4 key={section.id} id={section.id} className={className}>
          {section.content}
        </h4>
      )
    default:
      return (
        <h2 key={section.id} id={section.id} className={className}>
          {section.content}
        </h2>
      )
  }
}

function renderSection(section: BlogSection) {
  switch (section.type) {
    case 'heading':
      return renderHeading(section)

    case 'paragraph':
      return (
        <p
          key={section.id}
          className="mb-4 leading-relaxed text-muted-foreground"
        >
          {section.content}
        </p>
      )

    case 'list':
      return (
        <ul key={section.id} className="mb-6 space-y-2">
          {section.items?.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )

    case 'callout':
      return (
        <Callout key={section.id} type={section.calloutType || 'info'}>
          {section.content}
        </Callout>
      )

    case 'quote':
      return (
        <blockquote
          key={section.id}
          className="my-6 border-l-4 border-primary pl-6 italic text-muted-foreground"
        >
          {section.content}
        </blockquote>
      )

    default:
      return null
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: post.title },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBlogPostSchema({
              title: post.title,
              description: post.excerpt,
              slug: post.slug,
              publishedAt: post.publishedAt,
              modifiedAt: post.updatedAt,
              author: post.author.name,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Inicio', url: '/' },
              { name: 'Blog', url: '/blog' },
              { name: post.title, url: `/blog/${slug}` },
            ])
          ),
        }}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="mx-auto max-w-4xl">
        {/* Back Link */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Link>
        </Button>

        <article>
          {/* Header */}
          <header className="mb-8">
            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime} min de lectura
              </span>
              <ReadLaterButton slug={post.slug} showText />
            </div>
          </header>

          {/* Cover Image Placeholder */}
          <div className="mb-8 aspect-video overflow-hidden rounded-lg bg-muted">
            <div className="flex h-full items-center justify-center text-6xl text-muted-foreground/30">
              📝
            </div>
          </div>

          {/* Content Grid */}
          <div className="lg:grid lg:grid-cols-[1fr_250px] lg:gap-12">
            {/* Main Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {post.content.map(renderSection)}

              {/* CTA */}
              <Separator className="my-8" />

              <div className="not-prose rounded-lg border bg-muted/30 p-6">
                <p className="mb-4 text-muted-foreground">
                  ¿Te interesa saber más sobre mis{' '}
                  <Link href="/projects" className="text-primary hover:underline">
                    proyectos
                  </Link>{' '}
                  o mi{' '}
                  <Link href="/cv" className="text-primary hover:underline">
                    experiencia profesional
                  </Link>
                  ? Explora mi portafolio o{' '}
                  <Link href="/contact" className="text-primary hover:underline">
                    contáctame
                  </Link>{' '}
                  directamente.
                </p>
              </div>
            </div>

            {/* Sidebar - TOC */}
            <aside className="hidden lg:block">
              <TableOfContents sections={post.content} />
            </aside>
          </div>

          {/* Author */}
          <div className="mt-12">
            <AuthorCard author={post.author} />
          </div>

          {/* Related Posts */}
          <RelatedPosts />
        </article>
      </div>
    </div>
  )
}
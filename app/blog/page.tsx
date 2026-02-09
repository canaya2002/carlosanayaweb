import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { PostCard } from '@/components/blog/post-card'
import { blogPosts } from '@/data/blog-posts'
import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Blog',
  description:
    'Artículos sobre tecnología, inteligencia artificial, ciberseguridad y desarrollo de software. Reflexiones y aprendizajes de Carlos Anaya Ruiz.',
  url: '/blog',
})

const breadcrumbItems = [{ label: 'Blog' }]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Inicio', url: '/' },
              { name: 'Blog', url: '/blog' },
            ])
          ),
        }}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="mx-auto max-w-4xl">
        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Reflexiones sobre tecnología, innovación, inteligencia artificial y
            su impacto en la sociedad.
          </p>
        </header>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <PostCard key={post.id} post={post} featured />
          ))}
        </div>

        {blogPosts.length === 1 && (
          <div className="mt-12 rounded-lg border bg-muted/30 p-8 text-center">
            <p className="text-muted-foreground">
              Próximamente más artículos. ¡Mantente al tanto!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

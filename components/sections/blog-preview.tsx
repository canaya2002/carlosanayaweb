import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { blogPosts } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'

export function BlogPreview() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Blog</h2>
            <p className="mt-2 text-muted-foreground">
              Reflexiones sobre tecnología, innovación y sociedad.
            </p>
          </div>
          <Button variant="ghost" asChild className="hidden md:flex">
            <Link href="/blog">
              Ver todos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden transition-shadow hover:shadow-lg"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="md:flex">
                  {/* Cover Image Placeholder */}
                  <div className="relative h-48 bg-muted md:h-auto md:w-72 md:shrink-0">
                    <div className="flex h-full items-center justify-center text-4xl text-muted-foreground/50">
                      📝
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <CardHeader>
                      <div className="mb-2 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                        {post.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="line-clamp-2 text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readingTime} min de lectura
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
          <Button variant="outline" asChild>
            <Link href="/blog">
              Ver todos los posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

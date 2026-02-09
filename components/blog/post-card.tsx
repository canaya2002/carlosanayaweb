import Link from 'next/link'
import { Clock, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BlogPost } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'
import { ReadLaterButton } from './read-later-button'

interface PostCardProps {
  post: BlogPost
  featured?: boolean
}

export function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <Card
      className={`group overflow-hidden transition-shadow hover:shadow-lg ${
        featured ? 'md:flex' : ''
      }`}
    >
      <Link href={`/blog/${post.slug}`} className={featured ? 'md:flex' : ''}>
        {/* Cover Image Placeholder */}
        <div
          className={`relative bg-muted ${
            featured ? 'h-48 md:h-auto md:w-72 md:shrink-0' : 'h-48'
          }`}
        >
          <div className="flex h-full items-center justify-center text-4xl text-muted-foreground/50">
            📝
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <CardHeader>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <ReadLaterButton slug={post.slug} />
            </div>
            <h3
              className={`font-semibold tracking-tight transition-colors group-hover:text-primary ${
                featured ? 'text-xl' : 'text-lg'
              }`}
            >
              {post.title}
            </h3>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="line-clamp-2 text-muted-foreground">{post.excerpt}</p>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime} min
              </span>
            </div>
          </CardContent>
        </div>
      </Link>
    </Card>
  )
}

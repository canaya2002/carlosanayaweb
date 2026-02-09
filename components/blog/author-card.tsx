import Link from 'next/link'
import { BlogPost } from '@/data/blog-posts'

interface AuthorCardProps {
  author: BlogPost['author']
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
      {/* Avatar Placeholder */}
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-muted">
        <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-muted-foreground">
          {author.name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .slice(0, 2)}
        </div>
      </div>

      <div className="flex-1">
        <Link
          href="/about"
          className="font-semibold transition-colors hover:text-primary"
        >
          {author.name}
        </Link>
        <p className="text-sm text-muted-foreground">{author.bio}</p>
      </div>
    </div>
  )
}

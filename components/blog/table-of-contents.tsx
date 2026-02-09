'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { BlogSection } from '@/data/blog-posts'

interface TableOfContentsProps {
  sections: BlogSection[]
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  const headings = sections.filter(
    (section) => section.type === 'heading' && section.level === 2
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav aria-label="Tabla de contenidos" className="sticky top-24">
      <h4 className="mb-4 text-sm font-semibold">En este artículo</h4>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={cn(
                'block border-l-2 py-1 pl-3 transition-colors hover:text-primary',
                activeId === heading.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground'
              )}
            >
              {heading.content}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

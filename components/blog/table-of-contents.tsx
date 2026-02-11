'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { BlogSection } from '@/data/blog-posts'
import { useTranslations } from 'next-intl'

interface TableOfContentsProps {
  sections: BlogSection[]
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')
  const t = useTranslations('blog')

  const headings = sections.filter((s) => s.type === 'heading' && s.level === 2)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveId(entry.target.id) }) },
      { rootMargin: '-80px 0px -80% 0px' }
    )
    headings.forEach((h) => { const el = document.getElementById(h.id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav aria-label={t('tableOfContents')} className="sticky top-24">
      <h4 className="mb-4 text-sm font-semibold">{t('tableOfContents')}</h4>
      <ul className="space-y-2 text-sm">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={cn(
                'block border-l-2 py-1 pl-3 transition-colors hover:text-primary',
                activeId === h.id ? 'border-primary text-primary' : 'border-transparent text-muted-foreground'
              )}
            >
              {h.content}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

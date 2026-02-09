'use client'

import { Bookmark, BookmarkCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useReadLater } from '@/hooks/use-read-later'

interface ReadLaterButtonProps {
  slug: string
  showText?: boolean
}

export function ReadLaterButton({
  slug,
  showText = false,
}: ReadLaterButtonProps) {
  const { togglePost, isPostSaved, isLoaded } = useReadLater()

  const saved = isPostSaved(slug)

  if (!isLoaded) {
    return (
      <Button
        variant="ghost"
        size={showText ? 'sm' : 'icon'}
        disabled
        className="opacity-50"
      >
        <Bookmark className="h-4 w-4" />
        {showText && <span className="ml-2">Guardar</span>}
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size={showText ? 'sm' : 'icon'}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        togglePost(slug)
      }}
      aria-label={saved ? 'Quitar de guardados' : 'Guardar para leer después'}
      title={saved ? 'Quitar de guardados' : 'Leer después'}
    >
      {saved ? (
        <BookmarkCheck className="h-4 w-4 text-primary" />
      ) : (
        <Bookmark className="h-4 w-4" />
      )}
      {showText && (
        <span className="ml-2">{saved ? 'Guardado' : 'Leer después'}</span>
      )}
    </Button>
  )
}

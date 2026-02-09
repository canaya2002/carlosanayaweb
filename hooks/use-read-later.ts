'use client'

import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'carlos-anaya-read-later'

export function useReadLater() {
  const [savedPosts, setSavedPosts] = useState<string[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        try {
          setSavedPosts(JSON.parse(stored))
        } catch {
          setSavedPosts([])
        }
      }
      setIsLoaded(true)
    }
  }, [])

  const savePost = useCallback((slug: string) => {
    setSavedPosts((prev) => {
      if (prev.includes(slug)) return prev
      const updated = [...prev, slug]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }, [])

  const removePost = useCallback((slug: string) => {
    setSavedPosts((prev) => {
      const updated = prev.filter((s) => s !== slug)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }, [])

  const togglePost = useCallback((slug: string) => {
    setSavedPosts((prev) => {
      const updated = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }, [])

  const isPostSaved = useCallback(
    (slug: string) => savedPosts.includes(slug),
    [savedPosts]
  )

  return {
    savedPosts,
    isLoaded,
    savePost,
    removePost,
    togglePost,
    isPostSaved,
  }
}

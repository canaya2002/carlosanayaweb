'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme()
  const t = useTranslations('theme')

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label={t('toggle')}>
        <Sun className="h-5 w-5" />
        <span className="sr-only">{t('toggle')}</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? t('light') : t('dark')}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">{t('toggle')}</span>
    </Button>
  )
}

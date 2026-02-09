'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  // Evitar mismatch de hidratación
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Cambiar tema">
        <Sun className="h-5 w-5" />
        <span className="sr-only">Cambiar tema</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={
        theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
      }
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Cambiar tema</span>
    </Button>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Download } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { NAVIGATION_LINKS } from '@/lib/constants'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight transition-colors hover:text-primary"
        >
          Carlos Anaya Ruiz
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                pathname === link.href
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="/cv">
              <Download className="mr-2 h-4 w-4" />
              Descargar CV
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-2">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent',
                    pathname === link.href
                      ? 'bg-accent text-primary'
                      : 'text-muted-foreground'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="sm" className="mt-2">
                <Link href="/cv" onClick={() => setMobileMenuOpen(false)}>
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

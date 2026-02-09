import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/personal'

export function AboutPreview() {
  return (
    <section id="sobre-mi" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold tracking-tight">
            Sobre Mí
          </h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {personalInfo.summary.split('\n\n')[0]}
            </p>
          </div>
          <div className="mt-8">
            <Button variant="outline" asChild>
              <Link href="/about">
                Conocer más
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

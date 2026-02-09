import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function RelatedPosts() {
  // Placeholder for future posts
  const placeholderPosts = [
    {
      title: 'Próximamente: Ciberseguridad en la Era de la IA',
      tags: ['Ciberseguridad', 'IA'],
    },
    {
      title: 'Próximamente: Liderazgo Técnico en Equipos Distribuidos',
      tags: ['Liderazgo', 'Gestión'],
    },
  ]

  return (
    <section className="mt-12 border-t pt-12">
      <h3 className="mb-6 text-xl font-semibold">Posts Relacionados</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {placeholderPosts.map((post, index) => (
          <Card
            key={index}
            className="bg-muted/50 opacity-60 transition-opacity hover:opacity-80"
          >
            <CardHeader className="pb-2">
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-muted-foreground">{post.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

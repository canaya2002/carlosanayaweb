import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Award } from '@/data/awards'

interface AwardCardProps {
  award: Award
}

export function AwardCard({ award }: AwardCardProps) {
  const formatDate = (date: string) => {
    const [year, month] = date.split('-')
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ]
    return `${months[parseInt(month) - 1]} ${year}`
  }

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      {/* Image Placeholder */}
      <div className="relative h-48 bg-muted">
        <div className="flex h-full items-center justify-center text-5xl text-muted-foreground/30">
          🏆
        </div>
      </div>

      <CardHeader>
        <p className="text-sm text-muted-foreground">{formatDate(award.date)}</p>
        <CardTitle className="text-lg">{award.title}</CardTitle>
        <p className="text-sm text-primary">{award.organization}</p>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">{award.description}</p>
        {award.impact && (
          <p className="mt-2 text-sm font-medium">{award.impact}</p>
        )}
      </CardContent>
    </Card>
  )
}

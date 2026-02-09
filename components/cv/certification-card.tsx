import { Card, CardContent } from '@/components/ui/card'
import { Certification } from '@/data/certifications'

interface CertificationCardProps {
  certification: Certification
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-md">
      {/* Image Placeholder */}
      <div className="relative h-32 bg-muted">
        <div className="flex h-full items-center justify-center text-3xl text-muted-foreground/30">
          🏆
        </div>
      </div>

      <CardContent className="p-4">
        <h4 className="line-clamp-2 font-medium transition-colors group-hover:text-primary">
          {certification.name}
        </h4>
        <p className="mt-1 text-sm text-muted-foreground">
          {certification.issuer}
        </p>
        {certification.date && (
          <p className="mt-1 text-xs text-muted-foreground">
            {certification.date}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

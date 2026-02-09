import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { services } from '@/data/services'

export function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Servicios</h2>
          <p className="mt-2 text-muted-foreground">
            Áreas en las que puedo ayudarte a alcanzar tus objetivos.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.id}
                className="group transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

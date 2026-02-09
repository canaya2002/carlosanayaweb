import { Badge } from '@/components/ui/badge'
import { Experience } from '@/data/experience'

interface TimelineProps {
  items: Experience[]
}

export function Timeline({ items }: TimelineProps) {
  const formatDate = (date: string) => {
    const [year, month] = date.split('-')
    const months = [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ]
    return `${months[parseInt(month) - 1]}. ${year}`
  }

  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-border md:before:mx-auto md:before:translate-x-0">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`relative flex items-start gap-6 md:gap-8 ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Timeline dot */}
          <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border bg-background md:left-1/2 md:-translate-x-1/2">
            <div
              className={`h-3 w-3 rounded-full ${
                item.current ? 'bg-primary' : 'bg-muted-foreground'
              }`}
            />
          </div>

          {/* Content */}
          <div
            className={`ml-16 flex-1 rounded-lg border bg-card p-6 shadow-sm md:ml-0 ${
              index % 2 === 0 ? 'md:mr-[50%] md:pr-8' : 'md:ml-[50%] md:pl-8'
            }`}
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {formatDate(item.startDate)} –{' '}
                {item.endDate ? formatDate(item.endDate) : 'Presente'}
              </span>
              {item.current && <Badge>Actual</Badge>}
            </div>

            <h3 className="text-lg font-semibold">{item.position}</h3>
            <p className="text-primary">{item.company}</p>
            <p className="text-sm text-muted-foreground">{item.location}</p>

            <p className="mt-4 text-muted-foreground">{item.description}</p>

            {item.highlights && item.highlights.length > 0 && (
              <ul className="mt-4 space-y-2">
                {item.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            )}

            {item.technologies && item.technologies.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

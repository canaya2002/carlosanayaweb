import { Info, AlertTriangle, Lightbulb } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CalloutProps {
  type: 'info' | 'warning' | 'tip'
  children: React.ReactNode
}

const calloutConfig = {
  info: { icon: Info, className: 'border-blue-500/30 bg-blue-500/5 dark:bg-blue-500/10', iconClassName: 'text-blue-600 dark:text-blue-400' },
  warning: { icon: AlertTriangle, className: 'border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10', iconClassName: 'text-amber-600 dark:text-amber-400' },
  tip: { icon: Lightbulb, className: 'border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10', iconClassName: 'text-emerald-600 dark:text-emerald-400' },
}

export function Callout({ type, children }: CalloutProps) {
  const config = calloutConfig[type]
  const Icon = config.icon
  return (
    <div className={cn('my-6 flex gap-4 rounded-lg border p-4', config.className)} role="note">
      <Icon className={cn('mt-0.5 h-5 w-5 shrink-0', config.iconClassName)} aria-hidden="true" />
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )
}

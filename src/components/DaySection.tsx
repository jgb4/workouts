import { Badge } from '@/components/ui/badge'
import type { Day, WorkoutType } from '@/data/types'
import { cn } from '@/lib/utils'

// Literal class names so Tailwind picks them up.
const DOT: Record<WorkoutType, string> = {
  push: 'bg-push',
  cardio: 'bg-cardio',
  pull: 'bg-pull',
  legs: 'bg-legs',
  athletic: 'bg-athletic',
}

export function DaySection({ day, isToday }: { day: Day; isToday: boolean }) {
  return (
    <section aria-label={day.day} className={cn('border-t pt-4', isToday && 'border-primary')}>
      <div className="flex items-center gap-2">
        <span className={cn('size-2 shrink-0 rounded-full', DOT[day.type])} aria-hidden />
        <h3 className={cn('font-semibold', isToday && 'text-primary')}>{day.day}</h3>
        {isToday && <Badge className="h-5 rounded-sm px-1.5">Today</Badge>}
        <span className="text-muted-foreground ml-auto text-sm">{day.title}</span>
      </div>
      <ul className="mt-2">
        {day.exercises.map((ex, i) => (
          <li key={i} className="flex items-baseline gap-3 border-b py-2 last:border-b-0">
            <span className="min-w-0 flex-1">{ex.name}</span>
            <span className="text-muted-foreground shrink-0 text-right font-mono text-xs">{ex.sets}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

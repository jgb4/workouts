import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DaySection } from '@/components/DaySection'
import { PLAN } from '@/data/plan'
import type { Plan } from '@/data/types'
import { splitWeekLabel, weekdayName } from '@/lib/plan'

export function Workouts({ plan = PLAN, today = new Date() }: { plan?: Plan; today?: Date }) {
  const todayName = weekdayName(today)

  return (
    <main className="mx-auto max-w-2xl px-4 pt-8 pb-16 sm:pt-12">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Cycle 2</h1>
      <p className="text-muted-foreground mt-1 text-sm">
        <span className="text-primary font-medium">Cut</span> · Mon Tue Thu Fri Sat · 30–40 min
      </p>

      <Tabs defaultValue="0" className="mt-6 gap-0">
        <TabsList className="grid w-full grid-cols-4">
          {plan.weeks.map((_, i) => (
            <TabsTrigger key={i} value={String(i)} className="group">
              Week <span className="group-data-[state=active]:text-primary">{i + 1}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {plan.weeks.map((w, wi) => {
          const { name } = splitWeekLabel(w.label)
          return (
            <TabsContent key={wi} value={String(wi)} className="mt-6">
              <h2 className="font-semibold tracking-tight">{name}</h2>
              {w.note && <p className="text-muted-foreground mt-1 text-sm">{w.note}</p>}
              <div className="mt-6 grid gap-7">
                {w.days.map((d, di) => (
                  <DaySection key={di} day={d} isToday={d.day === todayName} />
                ))}
              </div>
            </TabsContent>
          )
        })}
      </Tabs>
    </main>
  )
}

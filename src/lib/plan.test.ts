import { PLAN } from '@/data/plan'
import { splitWeekLabel, weekdayName } from '@/lib/plan'

describe('splitWeekLabel', () => {
  it('splits number and name', () => {
    expect(splitWeekLabel('Week 4 — Test & Reset')).toEqual({ num: '4', name: 'Test & Reset' })
  })
})

describe('weekdayName', () => {
  it('names the local weekday', () => {
    expect(weekdayName(new Date(2026, 10, 20))).toBe('Friday')
  })
})

describe('PLAN', () => {
  const TYPES = ['push', 'cardio', 'pull', 'legs', 'athletic']
  const DAYS = ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday']

  it('has 4 weeks of the same 5 days', () => {
    expect(PLAN.weeks).toHaveLength(4)
    for (const w of PLAN.weeks) {
      expect(w.days.map(d => d.day)).toEqual(DAYS)
      expect(w.days.map(d => d.type)).toEqual(TYPES)
      for (const d of w.days) expect(d.exercises.length).toBeGreaterThan(0)
    }
  })

  it('has no Nordics on Saturdays', () => {
    for (const w of PLAN.weeks) {
      const sat = w.days.find(d => d.day === 'Saturday')!
      expect(sat.exercises.some(e => /nordic/i.test(e.name))).toBe(false)
    }
  })

  it('deloads week 4 lifting accessories to 2 sets', () => {
    const lifts = PLAN.weeks[3].days.filter(d => ['push', 'pull', 'legs'].includes(d.type))
    for (const d of lifts) {
      for (const e of d.exercises.slice(1)) expect(e.sets).toMatch(/^2 ×/)
    }
  })
})

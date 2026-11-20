
/** "Week 1 — Foundation" → { num: "1", name: "Foundation" } */
export function splitWeekLabel(label: string): { num: string; name: string } {
  const [head, ...rest] = label.split(' — ')
  return { num: head.replace(/^Week\s*/i, ''), name: rest.join(' — ') }
}

export function weekdayName(date: Date): string {
  return date.toLocaleDateString('en-US', { weekday: 'long' })
}



export type WorkoutType = 'push' | 'cardio' | 'pull' | 'legs' | 'athletic'

export interface Exercise {
  name: string
  sets: string
}

export interface Day {
  day: string
  type: WorkoutType
  title: string
  exercises: Exercise[]
}

export interface Week {
  label: string
  note?: string
  days: Day[]
}

export interface Plan {
  weeks: Week[]
}

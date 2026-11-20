import { fireEvent, render, screen, within } from '@testing-library/react'
import { Workouts } from '@/components/Workouts'

const FRIDAY = new Date(2026, 10, 20)
const day = (name: string) => screen.getByRole('region', { name })

describe('Workouts', () => {
  beforeEach(() => render(<Workouts today={FRIDAY} />))

  it('lists week 1 by default', () => {
    expect(screen.getByRole('heading', { name: 'Foundation' })).toBeInTheDocument()
    expect(within(day('Monday')).getByText('Flat barbell bench press')).toBeInTheDocument()
    expect(within(day('Monday')).getByText('4 × 8–10')).toBeInTheDocument()
  })

  it('switches weeks with the tabs', () => {
    // Radix tabs activate on mousedown.
    fireEvent.mouseDown(screen.getByRole('tab', { name: 'Week 4' }))
    expect(screen.getByRole('heading', { name: 'Test & Reset' })).toBeInTheDocument()
    expect(within(day('Friday')).getByText('Back squat 5RM')).toBeInTheDocument()
  })

  it('marks only today', () => {
    expect(within(day('Friday')).getByText('Today')).toBeInTheDocument()
    expect(screen.getAllByText('Today')).toHaveLength(1)
  })

  it('has no form fields', () => {
    expect(document.querySelectorAll('input, textarea, button:not([role="tab"])')).toHaveLength(0)
  })
})

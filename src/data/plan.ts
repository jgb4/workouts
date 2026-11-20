import type { Plan } from './types'

export const PLAN: Plan = {
  weeks: [
    {
      label: 'Week 1 — Foundation',
      note: '~2,400 cal, 160g+ protein. Rest 90s on big lifts, 45–60s on accessories.',
      days: [
        {
          day: 'Monday', type: 'push',
          title: 'Chest, Shoulders, Triceps',
          exercises: [
            { name: 'Flat barbell bench press', sets: '4 × 8–10' },
            { name: 'Incline dumbbell press', sets: '3 × 10–12' },
            { name: 'Overhead dumbbell press', sets: '3 × 10–12' },
            { name: 'Cable lateral raise', sets: '3 × 15' },
            { name: 'Tricep rope pushdown', sets: '3 × 15' },
          ],
        },
        {
          day: 'Tuesday', type: 'cardio',
          title: 'Run + Core',
          exercises: [
            { name: 'Reservoir run, moderate', sets: '25 min' },
            { name: 'Plank', sets: '3 × 60s' },
            { name: 'Dead bug', sets: '3 × 10/side' },
            { name: 'Hanging knee raise', sets: '3 × 12' },
            { name: 'Pallof press', sets: '3 × 12/side' },
          ],
        },
        {
          day: 'Thursday', type: 'pull',
          title: 'Back, Biceps',
          exercises: [
            { name: 'Barbell row', sets: '4 × 10' },
            { name: 'Lat pulldown, wide grip', sets: '3 × 12' },
            { name: 'Seated cable row, narrow grip', sets: '3 × 12' },
            { name: 'Face pull', sets: '3 × 15' },
            { name: 'Barbell curl', sets: '3 × 12' },
          ],
        },
        {
          day: 'Friday', type: 'legs',
          title: 'Quads, Hamstrings, Glutes',
          exercises: [
            { name: 'Back squat', sets: '4 × 10' },
            { name: 'Romanian deadlift', sets: '3 × 10' },
            { name: 'Goblet squat', sets: '3 × 12' },
            { name: 'Nordic hamstring curl', sets: '3 × 6' },
            { name: 'Lateral band walk', sets: '3 × 15/side' },
          ],
        },
        {
          day: 'Saturday', type: 'athletic',
          title: 'Conditioning + Power',
          exercises: [
            { name: 'Box jump', sets: '3 × 5' },
            { name: 'Battle ropes', sets: '5 × 30s on/off' },
            { name: 'Lateral shuffle + sprint', sets: '4 × 30s' },
            { name: 'Reservoir sprints, 200m', sets: '6 × 90s rest' },
          ],
        },
      ],
    },
    {
      label: 'Week 2 — Load Up',
      note: '+5 lbs on barbell lifts.',
      days: [
        {
          day: 'Monday', type: 'push',
          title: 'Chest, Shoulders, Triceps',
          exercises: [
            { name: 'Flat barbell bench press', sets: '4 × 8–10 +5' },
            { name: 'Incline dumbbell press', sets: '3 × 10–12 ↑' },
            { name: 'Arnold press', sets: '3 × 12' },
            { name: 'Cable lateral raise', sets: '3 × 15' },
            { name: 'Close-grip bench press', sets: '3 × 10' },
          ],
        },
        {
          day: 'Tuesday', type: 'cardio',
          title: 'Run + Core',
          exercises: [
            { name: 'Reservoir run, moderate-hard', sets: '30 min' },
            { name: 'Plank shoulder taps', sets: '3 × 20' },
            { name: 'Dead bug', sets: '3 × 12/side' },
            { name: 'Hanging leg raise', sets: '3 × 10' },
            { name: 'Cable wood chop', sets: '3 × 12/side' },
          ],
        },
        {
          day: 'Thursday', type: 'pull',
          title: 'Back, Biceps',
          exercises: [
            { name: 'Barbell row', sets: '4 × 10 +5' },
            { name: 'Pull-up (assisted ok)', sets: '3 × 6–8' },
            { name: 'Seated cable row, narrow grip', sets: '3 × 12' },
            { name: 'Face pull', sets: '3 × 15' },
            { name: 'Incline dumbbell curl', sets: '3 × 12' },
          ],
        },
        {
          day: 'Friday', type: 'legs',
          title: 'Quads, Hamstrings, Glutes',
          exercises: [
            { name: 'Back squat', sets: '4 × 10 +5' },
            { name: 'Romanian deadlift', sets: '3 × 10 ↑' },
            { name: 'Bulgarian split squat', sets: '3 × 10/side' },
            { name: 'Nordic hamstring curl', sets: '3 × 6' },
            { name: 'Lateral band walk', sets: '3 × 15/side' },
          ],
        },
        {
          day: 'Saturday', type: 'athletic',
          title: 'Conditioning + Power',
          exercises: [
            { name: 'Depth drop to broad jump', sets: '3 × 5' },
            { name: 'Battle ropes', sets: '5 × 30s on/off' },
            { name: 'Lateral shuffle + sprint', sets: '5 × 30s' },
            { name: 'Reservoir sprints, 200m', sets: '8 × 90s rest' },
          ],
        },
      ],
    },
    {
      label: 'Week 3 — Intensity',
      note: 'Heaviest week.',
      days: [
        {
          day: 'Monday', type: 'push',
          title: 'Chest, Shoulders, Triceps',
          exercises: [
            { name: 'Bench press, top set', sets: '1 × 5 near-max' },
            { name: 'Bench press, back-off', sets: '3 × 10 @ 80%' },
            { name: 'Incline dumbbell press', sets: '3 × 10–12' },
            { name: 'Overhead barbell press', sets: '3 × 8' },
            { name: 'Dip, weighted if possible', sets: '3 × 10' },
          ],
        },
        {
          day: 'Tuesday', type: 'cardio',
          title: 'Tempo Run + Core',
          exercises: [
            { name: 'Run: 10 easy / 15 tempo / 5 easy', sets: '30 min' },
            { name: 'Hanging leg raise, straight', sets: '3 × 10' },
            { name: 'Ab wheel rollout', sets: '3 × 8' },
            { name: 'Side plank hip dip', sets: '3 × 10/side' },
            { name: 'Hollow body hold', sets: '3 × 30s' },
          ],
        },
        {
          day: 'Thursday', type: 'pull',
          title: 'Back, Biceps',
          exercises: [
            { name: 'Barbell row, top set', sets: '1 × 5' },
            { name: 'Barbell row, back-off', sets: '3 × 10' },
            { name: 'Pull-up', sets: '4 × max' },
            { name: 'Face pull', sets: '3 × 15' },
            { name: 'Barbell curl', sets: '3 × 10 ↑' },
          ],
        },
        {
          day: 'Friday', type: 'legs',
          title: 'Quads, Hamstrings, Glutes',
          exercises: [
            { name: 'Back squat', sets: '4 × 8 ↑' },
            { name: 'Trap bar deadlift', sets: '3 × 6' },
            { name: 'Bulgarian split squat', sets: '3 × 10/side' },
            { name: 'Nordic hamstring curl', sets: '3 × 6' },
            { name: 'Farmer carry', sets: '3 × 30m' },
          ],
        },
        {
          day: 'Saturday', type: 'athletic',
          title: 'Conditioning + Power',
          exercises: [
            { name: 'Single-leg box jump', sets: '3 × 4/side' },
            { name: 'Banded lateral sprint', sets: '4 × 20m' },
            { name: 'Battle ropes', sets: '4 × 30s on/off' },
            { name: 'Reservoir sprints, 200m', sets: '8 × 75s rest' },
          ],
        },
      ],
    },
    {
      label: 'Week 4 — Test & Reset',
      note: 'Deload. Log bench 1RM, pull-up total, squat 5RM.',
      days: [
        {
          day: 'Monday', type: 'push',
          title: 'Bench Test',
          exercises: [
            { name: 'Bench press 1RM', sets: '5, 3, 2, 1 → max' },
            { name: 'Incline dumbbell press', sets: '2 × 10' },
            { name: 'Overhead barbell press', sets: '2 × 8' },
            { name: 'Tricep rope pushdown', sets: '2 × 15' },
          ],
        },
        {
          day: 'Tuesday', type: 'cardio',
          title: 'Easy Run + Core',
          exercises: [
            { name: 'Reservoir run, easy', sets: '20 min' },
            { name: 'Plank', sets: '3 × 60s' },
            { name: 'Hanging leg raise', sets: '3 × 12' },
            { name: 'Bird dog', sets: '3 × 10/side' },
          ],
        },
        {
          day: 'Thursday', type: 'pull',
          title: 'Pull-up Test',
          exercises: [
            { name: 'Pull-up, log total', sets: '3 × max' },
            { name: 'Barbell row', sets: '2 × 10' },
            { name: 'Seated cable row', sets: '2 × 12' },
            { name: 'Face pull', sets: '2 × 15' },
          ],
        },
        {
          day: 'Friday', type: 'legs',
          title: 'Squat Test',
          exercises: [
            { name: 'Back squat 5RM', sets: '8, 5, 3 → 5RM' },
            { name: 'Romanian deadlift', sets: '2 × 10' },
            { name: 'Bulgarian split squat', sets: '2 × 8/side' },
            { name: 'Nordic hamstring curl', sets: '2 × 6' },
          ],
        },
        {
          day: 'Saturday', type: 'athletic',
          title: 'Game Sim',
          exercises: [
            { name: 'Box jump', sets: '3 × 5' },
            { name: 'Cone figure 8', sets: '5 × 30s' },
            { name: 'Lateral shuffle + sprint', sets: '4 × 30s' },
            { name: 'Sprint 30m, walk back', sets: '10 × 30s rest' },
          ],
        },
      ],
    },
  ],
}

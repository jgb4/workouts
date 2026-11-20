# Project Instructions

## UI / Design
- Use shadcn/ui as the default component system.
- Before creating a UI primitive, check whether an appropriate existing component exists.
- Aim for restrained product UI similar in spirit to Linear and Vercel.
- Favor typography, spacing, alignment, and subtle borders over decoration.
- Keep layouts compact.
- Use neutral colors with one accent color.
- Avoid gradients, glows, oversized radii, decorative icons, and excessive shadows.
- Cards are not the default container. Prefer sections, rows, whitespace, and dividers.
- Deliberately under-design first implementations. Establish hierarchy and usability before adding visual personality.

## Engineering
- Reuse existing components before creating new ones.
- Keep changes scoped to the requested task.
- Run relevant tests after changes.

## Commands
- `npm run dev` — dev server (app at `/v1/`)
- `npm test` — Vitest unit + component tests
- `npm run build` — typecheck and build to `dist/` (deployed to GitHub Pages by `.github/workflows/deploy.yml`)

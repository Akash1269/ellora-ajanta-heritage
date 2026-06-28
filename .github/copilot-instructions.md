# Copilot Instructions — Ellora Ajanta Heritage

## Project Overview

This is a **React + TypeScript** tourism web application for the Aurangabad (Chhatrapati Sambhajinagar) district. It showcases UNESCO World Heritage Sites, curated itineraries, hotels/restaurants, and rich historical content with a heritage-inspired UI.

## Tech Stack

- **React 18.2** with functional components and hooks
- **TypeScript 5.8** — strict mode enabled, zero `any` usage
- **Vite 6.4** — build tool and dev server (port 5175)
- **React Router DOM 6.30** — HashRouter for static deployment
- **Tailwind CSS 4** (via @tailwindcss/vite plugin) — utility-first styling
- **Leaflet 1.9** — interactive maps (lazy-loaded via dynamic import)
- **ESLint 10 + Prettier** — flat config format (`eslint.config.js`)
- **GitHub Actions** — CI pipeline (lint → type-check → build) + GitHub Pages deploy

## Architecture & Conventions

### Component Structure
- All components are **functional components** using React hooks (`useState`, `useEffect`, `useCallback`, `useRef`)
- Source code lives in `src/` with feature-based organization:
  - `src/components/layout/` — Header, Footer
  - `src/components/common/` — LoadingSpinner, ErrorMessage, Hero, MapSection
  - `src/components/attractions/` — AttractionCard, AttractionDetailModal
  - `src/components/itineraries/` — ItineraryCard, ItineraryDetailModal
  - `src/components/places/` — PlaceCard, PlacesSection
  - `src/components/icons/` — Shared SVG icon components
  - `src/pages/` — Page-level route components
  - `src/hooks/` — Custom React hooks (useAppData)
  - `src/services/` — Data/API service layer
  - `src/data/` — Static fallback data
  - `src/styles/` — Global CSS (Tailwind)
- Use **TypeScript interfaces** from `src/types.ts` for all props and data structures
- Props-based data flow: App.tsx → Pages → Components

### Styling
- Use **Tailwind CSS classes** exclusively (no CSS modules or styled-components)
- Heritage color palette: Parchment (`#fdf8f0`), Gold (`#b8860b`), Ink (`#2c1810`), Terracotta (`#a0522d`)
- Typography: `font-heading` (Cormorant Garamond) for headings, `font-body` (Spectral) for text
- Mobile-first responsive design with `sm:`, `md:`, `lg:` breakpoints
- Decorative patterns: jaali backgrounds, corner borders, gradient overlays

### Data Flow
- Global state managed via `useAppData` custom hook in `src/hooks/useAppData.ts`
- Service layer in `src/services/dataService.ts` wraps data access
- All services return fallback data from `src/data/fallbackData.ts` if API fails
- Data fetched on mount with `Promise.all()` for parallel loading

### Routing
- Uses `HashRouter` (not BrowserRouter) for static hosting compatibility
- Routes: `/`, `/attractions`, `/itineraries`, `/places`, `/history`
- Navigation via `NavLink` with active state styling

### Naming Conventions
- Components: PascalCase (`AttractionCard.tsx`)
- Types/Interfaces: PascalCase (`Attraction`, `ItinerarySummary`)
- Constants: UPPER_SNAKE_CASE (`ATTRACTION_NAMES`)
- Files: PascalCase for components, camelCase for services/data

## Code Quality Rules

1. **Always type** function parameters, return values, and component props
2. **Never use `any`** — use proper interfaces from `types.ts`
3. **Keep components focused** — extract reusable UI into separate components
4. **Use semantic HTML** — proper headings, nav, main, section elements
5. **Include alt text** for all images
6. **Handle loading and error states** using `LoadingSpinner` and `ErrorMessage` components
7. **Prefer `useCallback`** for functions passed as props to prevent unnecessary re-renders

## File References

- Types: `src/types.ts` — all interfaces and type definitions
- Constants: `src/constants.ts` — attraction names and app constants
- Fallback Data: `src/data/fallbackData.ts` — comprehensive static content
- Services: `src/services/dataService.ts` — data access layer
- Hooks: `src/hooks/useAppData.ts` — global data loading hook
- Icons: `src/components/icons/index.tsx` — shared SVG icon components
- Entry: `src/App.tsx` — root component with routing and global state
- Styles: `src/styles/globals.css` — Tailwind CSS with heritage theme

## When Adding New Features

- Add new types to `src/types.ts`
- Add fallback data to `src/data/fallbackData.ts`
- Add service functions to `src/services/dataService.ts`
- Create components in `src/components/` (pages in `src/pages/`)
- Add shared icons to `src/components/icons/index.tsx`
- Register new routes in `src/App.tsx`
- Maintain the heritage visual theme consistently

## CI/CD Pipeline

### Workflows (`.github/workflows/`)

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `ci.yml` | Push to `main` + Pull Requests | Quality gate: lint → type-check → build |
| `deploy.yml` | Push to `main` only | Build → Deploy to GitHub Pages |

### CI runs these steps:
1. `npm ci` — Install dependencies
2. `npm run lint` — ESLint (flat config, `eslint.config.js`)
3. `npx tsc --noEmit` — TypeScript strict check
4. `npm run build` — Vite production build

### Deploy:
- Target: GitHub Pages at `https://akash1269.github.io/ellora-ajanta-heritage/`
- Base path: `/ellora-ajanta-heritage/` (set in `vite.config.ts`)
- The `deploy.yml` only runs on `main` branch pushes (not PRs)
- Uses `actions/upload-pages-artifact` + `actions/deploy-pages`

### Key Config:
- ESLint config: `eslint.config.js` (flat format, ESLint v10+)
- Prettier config: `.prettierrc.json`
- TypeScript: `tsconfig.json` with `strict: true`
- Vite: `vite.config.ts` with `base: '/ellora-ajanta-heritage/'`

## Performance Patterns

- **Code splitting** — All pages lazy-loaded via `React.lazy()` + `Suspense`
- **Lazy Leaflet** — Map library loaded on scroll via `IntersectionObserver` + dynamic `import('leaflet')`
- **React.memo** — Card components memoized to prevent unnecessary re-renders
- **useCallback** — Event handlers wrapped to maintain stable references
- **Image fallback** — `onError` handler with SVG placeholder (`PLACEHOLDER_IMAGE` constant)
- **Min loading delay** — 400ms prevents UI flicker on fast data resolution

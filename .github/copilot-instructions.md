# Copilot Instructions — Ellora Ajanta Heritage

## Project Overview

This is a **React + TypeScript** tourism web application for the Aurangabad (Chhatrapati Sambhajinagar) district. It showcases UNESCO World Heritage Sites, curated itineraries, hotels/restaurants, and rich historical content with a heritage-inspired UI.

## Tech Stack

- **React 18.2** with functional components and hooks
- **TypeScript 5.8** — strict typing required for all new code
- **Vite 6.2** — build tool and dev server (port 3000)
- **React Router DOM 6.30** — HashRouter for static deployment
- **Tailwind CSS 4** (via @tailwindcss/vite plugin) — utility-first styling
- **Leaflet 1.9** — interactive maps
- **ESLint + Prettier** — code quality and formatting
- **Google Gemini API** (@google/genai) — AI content generation with static fallback

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
- Heritage color palette: Floral White (`#fffaf0`), Amber 700 (`#b45309`), Warm Brown (`#431407`)
- Typography: `font-heading` (Rozha One) for headings, `font-body` (Lora) for text
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

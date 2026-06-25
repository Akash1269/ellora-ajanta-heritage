# Copilot Instructions — Aurangabad Tourism Guide

## Project Overview

This is a **React + TypeScript** tourism web application for the Aurangabad (Chhatrapati Sambhajinagar) district. It showcases UNESCO World Heritage Sites, curated itineraries, hotels/restaurants, and rich historical content with a heritage-inspired UI.

## Tech Stack

- **React 18.2** with functional components and hooks
- **TypeScript 5.8** — strict typing required for all new code
- **Vite 6.2** — build tool and dev server (port 3000)
- **React Router DOM 6.22** — HashRouter for static deployment
- **Tailwind CSS** (CDN) — utility-first styling
- **Leaflet 1.9** — interactive maps
- **Google Gemini API** (@google/genai) — AI content generation with static fallback

## Architecture & Conventions

### Component Structure
- All components are **functional components** using React hooks (`useState`, `useEffect`, `useCallback`, `useRef`)
- Components live in `components/` with page-level components in `components/pages/`
- Use **TypeScript interfaces** from `types.ts` for all props and data structures
- Props-based data flow: App.tsx → Pages → Components

### Styling
- Use **Tailwind CSS classes** exclusively (no CSS modules or styled-components)
- Heritage color palette: Floral White (`#fffaf0`), Amber 700 (`#b45309`), Warm Brown (`#431407`)
- Typography: `font-heading` (Rozha One) for headings, `font-body` (Lora) for text
- Mobile-first responsive design with `sm:`, `md:`, `lg:` breakpoints
- Decorative patterns: jaali backgrounds, corner borders, gradient overlays

### Data Flow
- Global state managed in `App.tsx` with `useState` hooks
- Service layer in `services/geminiService.ts` wraps API calls
- All services return fallback data from `data/fallbackData.ts` if API fails
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

- Types: `types.ts` — all interfaces and type definitions
- Constants: `constants.ts` — attraction names and app constants
- Fallback Data: `data/fallbackData.ts` — comprehensive static content
- Services: `services/geminiService.ts` — API integration layer
- Entry: `App.tsx` — root component with routing and global state

## When Adding New Features

- Add new types to `types.ts`
- Add fallback data to `data/fallbackData.ts`
- Add service functions to `services/geminiService.ts`
- Create components in `components/` (pages in `components/pages/`)
- Register new routes in `App.tsx`
- Maintain the heritage visual theme consistently

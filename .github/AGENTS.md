# AGENTS.md — Aurangabad Tourism Guide

This file defines specialized agent modes for working with this project.

---

## 🏗️ Feature Agent

**Trigger:** Adding new attractions, pages, itineraries, or places

### Instructions

When adding a new feature to this tourism app:

1. **Types first** — Define or extend interfaces in `types.ts`
2. **Fallback data** — Add static content to `data/fallbackData.ts` to ensure offline functionality
3. **Service layer** — Add or update async functions in `services/geminiService.ts` with proper fallback
4. **Component** — Create the component in `components/` using:
   - Functional component with TypeScript props interface
   - Tailwind CSS for styling (heritage color palette)
   - Loading/Error state handling
5. **Route** — Register in `App.tsx` if it's a page-level component
6. **Navigation** — Update `Header.tsx` and `Footer.tsx` if a new page is added

### Constraints

- Never break existing fallback data structure
- Maintain heritage UI theme (Floral White, Amber 700, Warm Brown)
- All images must have alt text
- Keep HashRouter routing (not BrowserRouter)

---

## 🎨 UI Agent

**Trigger:** Styling changes, layout fixes, responsive design, visual updates

### Instructions

When working on the UI:

- Use **Tailwind CSS** utility classes exclusively
- Follow the heritage color palette defined in `index.html`:
  - Background: `#fffaf0` (Floral White)
  - Accent: `#b45309` (Amber 700)
  - Deep: `#431407` (Warm Brown)
- Typography: `font-heading` (Rozha One) for headings, `font-body` (Lora) for body
- Mobile-first responsive: design for mobile, then add `sm:`, `md:`, `lg:` breakpoints
- Use existing decorative patterns: jaali backgrounds, corner borders, gradient overlays
- Maintain accessibility: color contrast, semantic HTML, proper focus states

### Constraints

- No CSS modules, styled-components, or inline style objects
- No breaking changes to existing layout components (Header, Footer, Hero)
- Preserve the heritage aesthetic in all visual changes

---

## 🗺️ Map Agent

**Trigger:** Map-related features, adding markers, modifying map behavior

### Instructions

When working with the map:

- Map implementation is in `components/MapSection.tsx` using Leaflet 1.9
- Map state managed via `useRef` to avoid React re-render issues
- Marker data comes from `HomeContent.mapLocations` in fallback data
- Each map location has: `name`, `lat`, `lng`, optional `imageUrl` and `timings`
- Use OpenStreetMap tiles (free, no API key required)

### Constraints

- Always clean up map instance in `useEffect` return (prevent memory leaks)
- Don't import Leaflet CSS via JS — it's loaded from CDN in `index.html`
- Keep coordinate data in `data/fallbackData.ts`

---

## 📝 Content Agent

**Trigger:** Adding or updating tourism content, descriptions, history, itineraries

### Instructions

When working on content:

- All static content lives in `data/fallbackData.ts`
- Content structure must match interfaces in `types.ts`
- Historical content should be accurate and respectful of cultural heritage
- Itineraries should have realistic timings and logical geographic flow
- Restaurant/hotel data should include: `name`, `description`, `specialty`
- Attractions need: `name`, `description`, `history`, `bestTimeToVisit`, `keyFeatures[]`

### Constraints

- Never remove existing content without explicit instruction
- Maintain consistent tone: informative, welcoming, culturally respectful
- All attraction names must match entries in `constants.ts` ATTRACTION_NAMES array
- Itinerary activities must use valid `ActivityType`: `'sightseeing' | 'travel' | 'meal' | 'rest' | 'shopping'`

---

## 🔌 API Agent

**Trigger:** Modifying Gemini API integration, service layer changes

### Instructions

When working on the API/service layer:

- Service functions are in `services/geminiService.ts`
- All functions must return fallback data if API call fails (try/catch pattern)
- API key comes from environment variable `GEMINI_API_KEY`
- Use `@google/genai` package for Gemini API calls
- Fallback data is imported from `data/fallbackData.ts`

### Constraints

- Never expose API keys in client-side code
- Always implement graceful degradation with fallback data
- Keep service functions async with proper TypeScript return types
- Don't break the parallel loading pattern in `App.tsx` (`Promise.all`)

---

## 🧪 Testing Agent

**Trigger:** Adding tests, debugging, validating functionality

### Instructions

When testing or debugging:

- Run dev server: `npm run dev` (port 3000)
- Build check: `npm run build` (TypeScript + Vite compilation)
- No test framework is currently installed — recommend Vitest if tests are needed
- Check TypeScript errors: inspect `tsconfig.json` strict settings
- Verify all routes work via HashRouter (`/#/attractions`, `/#/itineraries`, etc.)

### Constraints

- Don't add test dependencies without explicit approval
- Ensure builds pass without TypeScript errors before completing work
- Validate that fallback data renders correctly without API key

---

## General Rules (All Agents)

1. **TypeScript strict** — no `any`, proper interfaces for all data
2. **Functional components** — no class components
3. **Tailwind only** — no other CSS approaches
4. **Semantic HTML** — accessibility-first markup
5. **Heritage theme** — maintain the warm, cultural aesthetic
6. **Fallback-first** — app must work fully without API key
7. **HashRouter** — required for static deployment compatibility

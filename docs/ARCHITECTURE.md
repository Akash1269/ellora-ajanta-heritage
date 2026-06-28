# Architecture

## Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| UI Library | React | 18.2 |
| Language | TypeScript | 5.8 (strict mode) |
| Build Tool | Vite | 6.4 |
| Routing | React Router DOM | 6.30 (HashRouter) |
| Styling | Tailwind CSS | 4.x (@tailwindcss/vite plugin) |
| Maps | Leaflet | 1.9 (lazy-loaded) |
| Fonts | Self-hosted WOFF2 | Cormorant Garamond, Spectral |
| Linting | ESLint + Prettier | Latest |
| CI | GitHub Actions | Lint → Type-check → Build |

## Project Structure

```
ellora-ajanta-heritage/
├── index.html                  # Entry HTML with SEO meta, OG tags, security headers
├── vite.config.ts              # Vite config (port 5175, base path, plugins)
├── tsconfig.json               # TypeScript config (strict: true)
├── package.json                # Dependencies and scripts
├── .eslintrc.json              # ESLint rules
├── .prettierrc.json            # Prettier formatting
├── .env.example                # Environment variable documentation
├── public/
│   ├── manifest.json           # PWA manifest
│   ├── robots.txt              # Search engine rules
│   └── sitemap.xml             # Site map for crawlers
├── .github/
│   ├── workflows/
│   │   ├── ci.yml              # CI pipeline (lint, type-check, build)
│   │   └── deploy.yml          # GitHub Pages deployment
│   ├── copilot-instructions.md # AI coding assistant context
│   └── AGENTS.md               # Agent mode instructions
├── src/
│   ├── index.tsx               # React DOM mount point
│   ├── App.tsx                 # Root component (Router, ErrorBoundary, Suspense)
│   ├── types.ts                # All TypeScript interfaces
│   ├── constants.ts            # App constants (MAP_CENTER, PLACEHOLDER_IMAGE, etc.)
│   ├── styles/
│   │   └── globals.css         # Tailwind imports + heritage theme
│   ├── hooks/
│   │   └── useAppData.ts       # Global data loading hook
│   ├── services/
│   │   └── dataService.ts      # Data access layer (static fallback)
│   ├── data/
│   │   └── fallbackData.ts     # Comprehensive static content
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── common/             # LoadingSpinner, ErrorMessage, Hero, MapSection, ErrorBoundary
│   │   ├── attractions/        # AttractionCard, AttractionDetailModal
│   │   ├── itineraries/        # ItineraryCard, ItineraryDetailModal
│   │   ├── places/             # PlaceCard, PlacesSection
│   │   └── icons/              # Shared SVG icon components
│   └── pages/                  # Route-level page components
│       ├── Home.tsx
│       ├── Attractions.tsx
│       ├── Itineraries.tsx
│       ├── Places.tsx
│       ├── History.tsx
│       └── NotFound.tsx
└── docs/                       # Documentation
```

## Data Flow

```
App.tsx
  └─ useAppData() hook
       └─ dataService.ts (fetches all data in parallel)
            └─ fallbackData.ts (static content, always resolves)
                 │
                 ▼
       State: attractions, hotels, restaurants, itineraries, homeContent
                 │
                 ▼
       Props passed down to Page components
                 │
                 ▼
       Pages render Card components (memoized)
```

1. `useAppData` calls all service functions via `Promise.all` on mount
2. A 400ms minimum loading delay prevents UI flicker
3. All services return static fallback data (no external API calls currently)
4. Page components receive data as props from `App.tsx`
5. Card components are wrapped in `React.memo()` to avoid unnecessary re-renders

## Routing

Uses `HashRouter` for GitHub Pages compatibility (no server-side routing needed).

| Route | Page | Lazy-loaded |
|-------|------|-------------|
| `/` | Home | Yes |
| `/attractions` | Attractions | Yes |
| `/itineraries` | Itineraries | Yes |
| `/places` | Places | Yes |
| `/history` | History | Yes |
| `*` | NotFound (404) | Yes |

All pages are code-split with `React.lazy()` and wrapped in a `Suspense` boundary.

## Performance Optimizations

- **Code splitting** — Each page is a separate chunk (~2-17KB each)
- **Lazy Leaflet** — Map library (150KB) loads only when map section scrolls into viewport
- **React.memo** — Card components skip re-renders when props unchanged
- **useCallback** — Event handlers maintain stable references
- **Image lazy loading** — All images use `loading="lazy"`
- **Image fallback** — SVG placeholder shown if external images fail
- **Local images** — 23 free-license photos served from `public/images/` (no external CDN dependency)
- **Self-hosted fonts** — WOFF2 files in `public/fonts/` with `@font-face` declarations (no Google Fonts CDN)
- **Preconnect** — DNS prefetch for unpkg CDN (Leaflet)

## Security

- XSS-safe map popups (DOM methods, no innerHTML)
- No API keys in client bundle
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- Strict referrer policy
- React Error Boundary catches render failures

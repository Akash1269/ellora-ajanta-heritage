# 🚀 Publish Plan — Ellora Ajanta Heritage

This document tracks all issues, improvements, and tasks required to make the project production-ready.

---

## 📌 Open Items

| # | Status | Task | Priority | Category | Details |
|:--|:------:|------|:--------:|----------|---------|
| 1 | ⬜ | Enable GitHub Pages | High | Infrastructure | Repo Settings → Pages → Source: GitHub Actions |
| 2 | ⬜ | Add build config for staging/production | Medium | Infrastructure | Environment-specific variables |
| 3 | ⬜ | Add Lighthouse CI performance budgets | Medium | QA | Target: Performance > 90, Accessibility = 100 |
| 4 | ⬜ | Service worker for offline caching | Medium | PWA | Decide cache strategy (cache-first vs network-first) first |
| 5 | ⬜ | Create Sentry project | Low | Monitoring | Sign up at sentry.io, add DSN to `.env` |
| 6 | ⬜ | Set up analytics | Low | Monitoring | Choose provider (Plausible / Umami / GA) |
| 7 | ⬜ | Set up performance monitoring | Low | Monitoring | Web Vitals, Sentry Performance, or Datadog RUM |
| 8 | ⬜ | Staging environment | Low | Infrastructure | Decide if needed; preview deploy URLs |
| 9 | ⬜ | Custom domain | Low | Infrastructure | Purchase and configure DNS if not using `*.github.io` |
| 10 | ⬜ | Gemini API integration | Low | Infrastructure | If re-enabling AI features, set up API key management |

---

## 🔮 Future Plans (Post-Release)

| # | Status | Task | Priority | Category | Details |
|:--|:------:|------|:--------:|----------|---------|
| 1 | ⬜ | i18n / Translations | — | Feature | Add Marathi/Hindi support with react-i18next or similar |
| 2 | ⬜ | Data refresh mechanism | — | Feature | Auto-refresh or manual trigger for long-lived sessions |

---

## ✅ Completed

| # | Status | Task | Priority | Category | Details |
|:--|:------:|------|:--------:|----------|---------|
| 1 | ✅ | Remove API key from client bundle | Critical | Security | Removed `define` block from `vite.config.ts`. Service layer is fully static. |
| 2 | ✅ | Fix XSS in map popups | Critical | Security | `MapSection.tsx` uses DOM methods (`createElement`, `textContent`) instead of template literals. |
| 3 | ✅ | Add React Error Boundary | Critical | Reliability | `ErrorBoundary` component wraps all routes in `App.tsx`. |
| 4 | ✅ | Fix Leaflet memory leak | Critical | Reliability | `MapSection.tsx` cleans up markers via `markersRef` before re-adding and on unmount. |
| 5 | ✅ | Add mobile hamburger menu | Critical | UI/UX | `Header.tsx` has responsive mobile nav with toggle button. |
| 6 | ✅ | Install Tailwind via PostCSS | High | Performance | Installed via `@tailwindcss/vite` plugin with CSS in `src/styles/globals.css`. |
| 7 | ✅ | Add SEO meta tags | High | SEO | `<meta name="description">`, Open Graph, and Twitter Card tags in `index.html`. |
| 8 | ✅ | Fix modal accessibility | High | Accessibility | ARIA roles, `aria-modal`, `aria-labelledby`, ESC close, focus on open. |
| 9 | ✅ | Add 404 route | High | UI/UX | Catch-all `NotFound` page with `<Route path="*">`. |
| 10 | ✅ | Add `loading="lazy"` to images | High | Performance | All `<img>` elements use native lazy loading. |
| 11 | ✅ | Fix silent error catching | High | Reliability | `Itineraries.tsx` shows `ErrorMessage` with retry option on failure. |
| 12 | ✅ | Add `@types/leaflet` | High | DX | Installed as devDependency. |
| 13 | ✅ | Add `.env.example` | High | DX | Created with `VITE_GEMINI_API_KEY` documentation. |
| 14 | ✅ | Add security headers (CSP, X-Frame-Options, HSTS) | High | Security | Configured in deployment config. |
| 15 | ✅ | Enable strict TypeScript | High | Code Quality | `strict: true` in tsconfig, zero `any` usage. |
| 16 | ✅ | Set up GitHub Actions CI | High | DX | Lint → type-check → build on every push + PRs. |
| 17 | ✅ | Configure GitHub Pages deploy | High | DX | Auto-deploy to GitHub Pages on `main` push. |
| 18 | ✅ | Add ESLint configuration | High | DX | Flat config format (`eslint.config.js`). |
| 19 | ✅ | Replace picsum.photos images | High | Design | 23 free-license photos from Pexels/Unsplash in `public/images/`. |
| 20 | ✅ | Add code splitting with `React.lazy()` | Medium | Performance | All 5 pages lazy-loaded with `Suspense` fallback. Each page is a separate chunk. |
| 21 | ✅ | Add `React.memo()` on card components | Medium | Performance | All three card components wrapped to prevent unnecessary re-renders. |
| 22 | ✅ | Add `useCallback` for event handlers | Medium | Performance | `handleSelect` wrapped in Attractions and Itineraries pages. |
| 23 | ✅ | Add image fallback/placeholder | Medium | UI/UX | `onError` handler with SVG placeholder. `PLACEHOLDER_IMAGE` constant exported. |
| 24 | ✅ | Self-host fonts (WOFF2) | Medium | Performance | woff2 files in `public/fonts/`, `@font-face` in globals.css, Google Fonts CDN removed. |
| 25 | ✅ | Optimize font loading | Medium | Performance | `font-display: swap` on all `@font-face` declarations. |
| 26 | ✅ | Fix modal scroll lock edge cases | Medium | UI/UX | Modals save/restore original `overflow` value. |
| 27 | ✅ | Standardize error handling | Medium | Reliability | All pages use `ErrorMessage` component with retry functionality. |
| 28 | ✅ | Extract magic numbers to constants | Medium | Code Quality | `MAP_CENTER`, `MAP_ZOOM` in `constants.ts`. |
| 29 | ✅ | Add `robots.txt` | Medium | SEO | Added to `/public`. |
| 30 | ✅ | Add `sitemap.xml` | Medium | SEO | Added to `/public`. |
| 31 | ✅ | Add `manifest.json` | Medium | PWA | PWA manifest for app installation. |
| 32 | ✅ | Add app icons (192×192, 512×512) | Medium | PWA | Generated PNG icons from heritage SVG favicon. |
| 33 | ✅ | Add Prettier configuration | Medium | DX | `.prettierrc.json` with consistent formatting rules. |
| 34 | ✅ | Add pre-commit hooks (Husky + lint-staged) | Medium | DX | Auto-lint and format on commit. |
| 35 | ✅ | Set up Vitest with tests | Medium | QA | 16 tests covering constants and all dataService functions. |
| 36 | ✅ | Replace placeholder favicon | Medium | Design | Custom heritage-themed SVG favicon. |
| 37 | ✅ | Deduplicate inline SVG icons | Low | Code Quality | All icons consolidated in `src/components/icons/index.tsx`. |
| 38 | ✅ | Add loading delay simulation | Low | UI/UX | 400ms minimum prevents UI flicker on fast loads. |
| 39 | ✅ | Remove unused CSS styles | Low | Code Quality | Removed `.bg-mandala-opacity`. `.arch-mask` retained. |
| 40 | ✅ | Add `<link rel="preconnect">` for CDNs | Low | Performance | DNS prefetch for unpkg (Leaflet). |
| 41 | ✅ | Add `<meta name="theme-color">` | Low | PWA | Theme color tag in `index.html`. |
| 42 | ✅ | Comprehensive fallback data | High | Data | Offline-ready static content for all sections. |
| 43 | ✅ | Responsive layout | High | UI/UX | Mobile-first with breakpoints. |
| 44 | ✅ | Heritage-themed UI | High | Design | Jaali patterns, arch clip-paths, warm amber palette. |
| 45 | ✅ | HashRouter for static deploy | Medium | Routing | Compatible with GitHub Pages. |
| 46 | ✅ | TypeScript throughout | High | Code Quality | Strict mode, all files typed. |
| 47 | ✅ | Interactive map with Leaflet | High | Feature | Lazy-loaded, markers with popups. |
| 48 | ✅ | Modal system for detailed views | Medium | Feature | Attraction and itinerary detail modals. |
| 49 | ✅ | Multi-page routing | Medium | Routing | React Router with 5 routes. |
| 50 | ✅ | README documentation | Medium | Docs | Project overview, setup, architecture. |
| 51 | ✅ | Copilot instructions & AGENTS.md | Low | DX | AI-assisted development config. |

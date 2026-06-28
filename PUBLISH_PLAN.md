# 🚀 Publish Plan — Ellora Ajanta Heritage

This document tracks all issues, improvements, and tasks required to make the project production-ready.

---

## 🔴 Critical Issues (Must Fix Before Publishing)

- [x] **Remove API key from client bundle** — Removed `define` block from `vite.config.ts`. Service layer is fully static.
- [x] **Fix XSS in map popups** — `MapSection.tsx` now uses DOM methods (`createElement`, `textContent`) instead of template literals.
- [x] **Add React Error Boundary** — `ErrorBoundary` component wraps all routes in `App.tsx`.
- [x] **Fix Leaflet memory leak** — `MapSection.tsx` properly cleans up markers via `markersRef` before re-adding and on unmount.
- [x] **Add mobile hamburger menu** — `Header.tsx` now has a responsive mobile nav with toggle button.

---

## 🟠 High Severity (Should Fix Before Publishing)

- [x] **Install Tailwind CSS properly** — Installed via `@tailwindcss/vite` plugin with CSS in `src/styles/globals.css`.
- [x] **Add SEO meta tags** — Added `<meta name="description">`, Open Graph, and Twitter Card tags to `index.html`.
- [x] **Fix modal accessibility** — Both modals now have `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, ESC key close, and focus on open.
- [x] **Add 404 route** — Catch-all `NotFound` page added with `<Route path="*">` in App.tsx.
- [x] **Add `loading="lazy"` to images** — All `<img>` elements now have `loading="lazy"` for better LCP.
- [x] **Fix silent error catching** — `Itineraries.tsx` now shows `ErrorMessage` with retry option on failure.
- [x] **Add `@types/leaflet`** — Installed as devDependency.
- [x] **Add `.env.example`** — Created with `VITE_GEMINI_API_KEY` documentation.

---

## 🟡 Medium Severity (Production Quality)

- [x] **Add `React.memo()` on card components** — All three card components wrapped with `React.memo()` to prevent unnecessary re-renders.
- [x] **Add code splitting with `React.lazy()`** — All 5 pages lazy-loaded with `Suspense` fallback. Each page is a separate chunk.
- [x] **Extract magic numbers to constants** — Map center coordinates and zoom level moved to `constants.ts` (`MAP_CENTER`, `MAP_ZOOM`).
- [x] **Standardize error handling** — All pages now use `ErrorMessage` component with retry functionality.
- [x] **Add image fallback/placeholder** — `onError` handler with SVG placeholder on all images. `PLACEHOLDER_IMAGE` constant exported.
- [x] **Fix modal scroll lock edge cases** — Modals save/restore original `overflow` value instead of hardcoding `'unset'`.
- [x] **Add `useCallback` for event handlers** — `handleSelect` wrapped with `useCallback` in Attractions and Itineraries pages.

---

## 🔵 Low Severity (Polish)

- [x] **Deduplicate inline SVG icons** — All icons consolidated in `src/components/icons/index.tsx`.
- [x] **Add loading delay simulation** — 400ms minimum display time for loading state prevents UI flicker.
- [x] **Unused CSS styles** — Removed unused `.bg-mandala-opacity`. `.arch-mask` is used and retained.

---

## 🔮 Future Plans (Post-Release)

- [ ] **i18n / Translations** — Add Marathi/Hindi support with react-i18next or similar
- [ ] **Data refresh mechanism** — Auto-refresh or manual trigger for long-lived sessions

---

## 📋 Production Readiness Checklist

### Infrastructure & Deployment

- [x] Set up GitHub Actions CI (lint + type-check + build)
- [ ] Add build configuration for staging/production environments
- [x] Configure deployment target (Vercel, Netlify, GitHub Pages, etc.)
- [x] Add `robots.txt` to `/public`
- [x] Add basic `sitemap.xml` to `/public`
- [x] Add security headers (CSP, X-Frame-Options, HSTS) in deployment config

### Quality Assurance

- [x] Add ESLint configuration (`.eslintrc.json`)
- [x] Add Prettier configuration (`.prettierrc`)
- [x] Add pre-commit hooks (Husky + lint-staged)
- [x] Set up Vitest with basic component tests
- [ ] Add Lighthouse CI performance budgets
- [x] Enable strict TypeScript (`strict: true` in tsconfig)

### Performance Optimization

- [x] Install Tailwind via PostCSS (replace CDN)
- [x] Add code splitting for route-level components
- [x] Add image lazy loading (`loading="lazy"`)
- [x] Optimize font loading (font-display: swap, preconnect)
- [x] Add `<link rel="preconnect">` for external CDNs
- [x] Self-host fonts (woff2 in `public/fonts/`, Google Fonts CDN removed)

### PWA & Offline

- [x] Add `manifest.json` for app installation
- [x] Add `<meta name="theme-color">` tag
- [ ] Consider service worker for offline caching
- [x] Add app icons (192x192, 512x512)

### Monitoring & Analytics

- [ ] Add error tracking (Sentry)
- [ ] Add analytics (Google Analytics / Plausible)
- [ ] Add performance monitoring

---

## ✅ Already Done

- [x] Comprehensive fallback data (offline-ready content)
- [x] Responsive layout (except mobile nav)
- [x] Heritage-themed UI with consistent design system
- [x] HashRouter for static deployment compatibility
- [x] TypeScript throughout the codebase
- [x] Interactive map with Leaflet
- [x] Modal system for detailed views
- [x] Multi-page routing with React Router
- [x] README documentation
- [x] Copilot instructions & AGENTS.md

---

## 🧑‍💻 Manual Tasks (Requires Developer Action)

These items cannot be fully completed by AI and need human decisions, credentials, or external setup.

### Account & Service Setup
- [ ] **Create Sentry project** — Sign up at sentry.io, create a React project, add DSN to `.env`
- [ ] **Set up analytics** — Choose provider (Google Analytics / Plausible / Umami), create property, add tracking snippet
- [ ] **Enable GitHub Pages** — Go to repo Settings → Pages → Source: GitHub Actions

### Design Assets
- [x] **Create app icons** — Generated 192x192 and 512x512 PNG icons from heritage SVG favicon
- [x] **Replace placeholder favicon** — Replaced `vite.svg` with custom heritage-themed SVG favicon
- [x] **Replace picsum.photos images** — 23 free-license photos from Pexels/Unsplash downloaded to `public/images/`

### Product Decisions
- [x] **Self-host fonts** — woff2 files in `public/fonts/`, @font-face in globals.css, Google Fonts CDN link removed
- [ ] **Service worker scope** — Decide caching strategy (cache-first, network-first) before implementing

### Testing & Monitoring
- [x] **Write Vitest test cases** — 16 tests covering constants and all dataService functions
- [ ] **Define Lighthouse budgets** — Set target scores (e.g., Performance > 90, Accessibility = 100)
- [ ] **Set up performance monitoring** — Choose tool (Web Vitals, Sentry Performance, Datadog RUM)

### Infrastructure
- [ ] **Staging environment** — Decide if needed; configure separate deployment branch/preview URLs
- [ ] **Custom domain** — Purchase and configure DNS if not using `*.github.io`
- [ ] **Gemini API integration** — If re-enabling AI features, set up API key management and rate limiting

# 🚀 Publish Plan — Aurangabad Tourism Guide

This document tracks all issues, improvements, and tasks required to make the project production-ready.

---

## 🔴 Critical Issues (Must Fix Before Publishing)

- [ ] **Remove API key from client bundle** — `vite.config.ts` injects `GEMINI_API_KEY` into the browser bundle via `define`. Remove it or proxy through a backend.
- [ ] **Fix XSS in map popups** — `MapSection.tsx` uses unsanitized template literals for Leaflet popup HTML. Sanitize with DOMPurify or use DOM methods.
- [ ] **Add React Error Boundary** — No error boundary exists. If any component throws, the entire app white-screens. Wrap routes in an ErrorBoundary component.
- [ ] **Fix Leaflet memory leak** — `MapSection.tsx` doesn't properly clean up old map instances/markers when `locations` prop changes. Tile layers and event listeners accumulate.
- [ ] **Add mobile hamburger menu** — `Header.tsx` uses `hidden md:flex` on nav — mobile users cannot navigate to any page.

---

## 🟠 High Severity (Should Fix Before Publishing)

- [ ] **Install Tailwind CSS properly** — Replace CDN script (~100KB runtime) with PostCSS/CLI build-time integration with CSS purging.
- [ ] **Add SEO meta tags** — `index.html` is missing `<meta name="description">`, Open Graph, and Twitter Card tags.
- [ ] **Fix modal accessibility** — Modals lack `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, ESC key close, and focus trapping (WCAG violations).
- [ ] **Add 404 route** — Invalid routes show blank content. Add a catch-all "Not Found" page.
- [ ] **Add `loading="lazy"` to images** — All images load upfront, hurting Largest Contentful Paint (LCP).
- [ ] **Fix silent error catching** — `Itineraries.tsx` swallows errors with `console.error()` only. Show user feedback and retry option.
- [ ] **Add `@types/leaflet`** — Missing from devDependencies; Leaflet usage is untyped.
- [ ] **Add `.env.example`** — No documentation of required environment variables for developers.

---

## 🟡 Medium Severity (Production Quality)

- [ ] **Add `React.memo()` on card components** — `AttractionCard`, `PlaceCard`, `ItineraryCard` re-render on every parent update.
- [ ] **Add code splitting with `React.lazy()`** — All 5 pages bundled together. Lazy-load page components for faster initial load.
- [ ] **Extract magic numbers to constants** — Map center coordinates (`19.8762, 75.3433`), zoom level (`9`) hardcoded inline.
- [ ] **Standardize error handling** — Inconsistent patterns: some pages show `ErrorMessage`, others just `console.log`.
- [ ] **Add image fallback/placeholder** — All images from `picsum.photos`; no fallback if CDN is down.
- [ ] **Fix modal scroll lock edge cases** — Multiple mount/unmount cycles could leave `body.style.overflow` in wrong state.
- [ ] **Add `useCallback` for event handlers** — Functions passed as props (e.g., `onSelect`) create new references every render.

---

## 🔵 Low Severity (Polish)

- [ ] **Deduplicate inline SVG icons** — Icons repeated across components. Create shared icon components or use a library.
- [ ] **Add loading delay simulation** — Instant data resolution causes UI flicker. Add minimum display time for loading states.
- [ ] **Hardcoded strings (i18n)** — All text in English with no translation support.
- [ ] **No data refresh mechanism** — Data loaded once on mount; stale if app stays open for hours.
- [ ] **Unused CSS styles** — `.arch-mask`, `.bg-mandala-opacity` defined in `index.html` but potentially unused.

---

## 📋 Production Readiness Checklist

### Infrastructure & Deployment

- [ ] Set up GitHub Actions CI (lint + type-check + build)
- [ ] Add build configuration for staging/production environments
- [ ] Configure deployment target (Vercel, Netlify, GitHub Pages, etc.)
- [ ] Add `robots.txt` to `/public`
- [ ] Add basic `sitemap.xml` to `/public`
- [ ] Add security headers (CSP, X-Frame-Options, HSTS) in deployment config

### Quality Assurance

- [ ] Add ESLint configuration (`.eslintrc.json`)
- [ ] Add Prettier configuration (`.prettierrc`)
- [ ] Add pre-commit hooks (Husky + lint-staged)
- [ ] Set up Vitest with basic component tests
- [ ] Add Lighthouse CI performance budgets
- [ ] Enable strict TypeScript (`strict: true` in tsconfig)

### Performance Optimization

- [ ] Install Tailwind via PostCSS (replace CDN)
- [ ] Add code splitting for route-level components
- [ ] Add image lazy loading (`loading="lazy"`)
- [ ] Optimize font loading (font-display: swap, preconnect)
- [ ] Add `<link rel="preconnect">` for external CDNs
- [ ] Consider self-hosting fonts instead of Google Fonts CDN

### PWA & Offline

- [ ] Add `manifest.json` for app installation
- [ ] Add `<meta name="theme-color">` tag
- [ ] Consider service worker for offline caching
- [ ] Add app icons (192x192, 512x512)

### Monitoring & Analytics

- [ ] Add error tracking (Sentry)
- [ ] Add analytics (Google Analytics / Plausible)
- [ ] Add performance monitoring

---

## 🎯 Recommended Implementation Order

### Phase 1: Critical Fixes (Do First)
1. Add mobile hamburger menu (blocks all mobile users)
2. Add React Error Boundary + 404 page
3. Remove API key from client bundle
4. Fix map XSS vulnerability & memory leak

### Phase 2: Production Build
5. Install Tailwind via PostCSS (replace CDN)
6. Add SEO meta tags + Open Graph
7. Add ESLint + Prettier config
8. Add `.env.example`

### Phase 3: Accessibility & UX
9. Fix modal accessibility (ARIA, ESC, focus trap)
10. Add image lazy loading
11. Fix error handling consistency
12. Add loading states & retry mechanisms

### Phase 4: Performance
13. Add `React.lazy()` code splitting
14. Add `React.memo()` to card components
15. Optimize fonts and preconnect hints
16. Add Lighthouse CI budgets

### Phase 5: DevOps & Polish
17. Set up GitHub Actions CI pipeline
18. Configure deployment (Vercel/Netlify)
19. Add Vitest with basic tests
20. Add PWA manifest + icons

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

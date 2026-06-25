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
- [ ] **Hardcoded strings (i18n)** — All text in English with no translation support.
- [ ] **No data refresh mechanism** — Data loaded once on mount; stale if app stays open for hours.
- [x] **Unused CSS styles** — Removed unused `.bg-mandala-opacity`. `.arch-mask` is used and retained.

---

## 📋 Production Readiness Checklist

### Infrastructure & Deployment

- [x] Set up GitHub Actions CI (lint + type-check + build)
- [ ] Add build configuration for staging/production environments
- [ ] Configure deployment target (Vercel, Netlify, GitHub Pages, etc.)
- [x] Add `robots.txt` to `/public`
- [x] Add basic `sitemap.xml` to `/public`
- [ ] Add security headers (CSP, X-Frame-Options, HSTS) in deployment config

### Quality Assurance

- [x] Add ESLint configuration (`.eslintrc.json`)
- [x] Add Prettier configuration (`.prettierrc`)
- [ ] Add pre-commit hooks (Husky + lint-staged)
- [ ] Set up Vitest with basic component tests
- [ ] Add Lighthouse CI performance budgets
- [ ] Enable strict TypeScript (`strict: true` in tsconfig)

### Performance Optimization

- [x] Install Tailwind via PostCSS (replace CDN)
- [x] Add code splitting for route-level components
- [x] Add image lazy loading (`loading="lazy"`)
- [x] Optimize font loading (font-display: swap, preconnect)
- [x] Add `<link rel="preconnect">` for external CDNs
- [ ] Consider self-hosting fonts instead of Google Fonts CDN

### PWA & Offline

- [x] Add `manifest.json` for app installation
- [x] Add `<meta name="theme-color">` tag
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

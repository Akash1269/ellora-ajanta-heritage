<div align="center">

# 🏛️ Ellora Ajanta Heritage

**An interactive tourism web app exploring Aurangabad's UNESCO heritage — built with React, TypeScript, and a custom heritage-inspired design system**

[![Live Demo](https://img.shields.io/badge/Live-Demo-b45309?style=for-the-badge)](https://akash1269.github.io/ellora-ajanta-heritage/)
[![CI](https://github.com/Akash1269/ellora-ajanta-heritage/actions/workflows/ci.yml/badge.svg)](https://github.com/Akash1269/ellora-ajanta-heritage/actions/workflows/ci.yml)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## About

This app brings the historic Aurangabad (Chhatrapati Sambhajinagar) district to life — showcasing Ellora Caves, Ajanta Caves, Bibi Ka Maqbara, Daulatabad Fort, and more through interactive maps, curated multi-day itineraries, and a visual language inspired by Mughal-era Jaali lattice screens.

Built with a component-driven architecture, strict TypeScript, and performance-first patterns like code splitting and lazy-loaded maps.

> **[→ View Live Demo](https://akash1269.github.io/ellora-ajanta-heritage/)**

---

## What You'll Find

- **6 Heritage Attractions** — Bibi Ka Maqbara, Ajanta Caves, Ellora Caves, Daulatabad Fort, Grishneshwar Temple, Panchakki
- **Interactive Map** — Explore all sites with markers, directions, and timings
- **Curated Itineraries** — 4 multi-day travel plans with activity timelines
- **Places Directory** — Recommended hotels and restaurants
- **Rich History** — From ancient dynasties to the modern era
- **Works Offline** — Full content available without internet

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| UI Library | React 18.2 (functional components + hooks) |
| Language | TypeScript 5.8 (strict mode) |
| Build Tool | Vite 6.4 |
| Routing | React Router DOM 6.30 (HashRouter) |
| Styling | Tailwind CSS 4 (@tailwindcss/vite plugin) |
| Maps | Leaflet 1.9 (lazy-loaded) |
| Fonts | Google Fonts (Rozha One + Lora) |
| CI/CD | GitHub Actions → GitHub Pages |
| Linting | ESLint + Prettier |

---

## Highlights

- **Strict TypeScript** — `strict: true`, zero `any` usage
- **Route-level code splitting** — Pages lazy-loaded via `React.lazy()` + `Suspense`
- **Lazy Leaflet** — 150KB map library loads only when scrolled into view (IntersectionObserver + dynamic import)
- **XSS-safe map popups** — DOM `createElement` + `textContent` instead of innerHTML
- **Heritage design system** — Jaali lattice patterns, arch clip-paths, ornamental dividers, warm amber palette — all Tailwind utility classes
- **Resilient images** — `loading="lazy"` + `onError` fallback to SVG placeholder
- **Memoized rendering** — `React.memo()` on cards + `useCallback` for stable handler references
- **Accessible modals** — ARIA roles, ESC close, focus management, scroll lock with restore
- **Offline-ready** — Comprehensive static fallback data, no external API required
- **CI/CD** — Lint → type-check → build on every push; auto-deploy to GitHub Pages

### Bundle Output

```
index.js       200 KB (React + Router core)
leaflet.js     150 KB (loaded on scroll only)
Home.js         17 KB (page content)
Other pages   2-8 KB each (code-split)
```

---

## Quick Start

```bash
git clone https://github.com/Akash1269/ellora-ajanta-heritage.git
cd ellora-ajanta-heritage
npm install
npm run dev
```

Open [http://localhost:5175](http://localhost:5175) in your browser.

---

## Documentation

| Document | Description |
|----------|-------------|
| [Architecture](docs/ARCHITECTURE.md) | Project structure, data flow, performance details |
| [Features](docs/FEATURES.md) | Feature breakdown and design system |
| [Getting Started](docs/GETTING_STARTED.md) | Developer setup, conventions, CI/CD guide |

---

## What I Learned

This project was a deep dive into:

- **Component architecture** — Feature-based folder structure, shared primitives, and clean data flow (hooks → services → components)
- **Performance budgeting** — Measuring bundle size impact and optimizing with code splitting, dynamic imports, and viewport-triggered loading
- **Accessibility in practice** — Focus management, scroll lock lifecycle, and keyboard nav that survives mount/unmount cycles
- **Design systems in Tailwind** — Building a cohesive visual identity (patterns, clip-paths, layered backgrounds) without a component library
- **CI/CD for frontend** — Reliable pipeline catching type errors, lint issues, and build failures before deploy
- **Client-side security** — XSS prevention in dynamic content, safe image handling, and keeping secrets out of bundles

---

## Contributing

Contributions are welcome! Whether it's fixing a bug, adding a feature, improving documentation, or suggesting ideas — all help is appreciated.

### How to contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes and commit
4. Push to your fork and open a Pull Request

### Want to discuss something first?

Open an [issue](https://github.com/Akash1269/ellora-ajanta-heritage/issues) to propose changes, report bugs, or ask questions. For larger features, it's best to discuss in an issue before starting work so we can align on approach.

---

## Author

**Akash** — [GitHub](https://github.com/Akash1269)

---

<div align="center">

**Built with ❤️ for the heritage of Aurangabad**

</div>

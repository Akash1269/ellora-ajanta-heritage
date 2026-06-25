<div align="center">

# 🏛️ Ellora Ajanta Heritage

**A digital tourism platform for the historic Aurangabad (Chhatrapati Sambhajinagar) district**

[![Live Demo](https://img.shields.io/badge/Live-Demo-b45309?style=for-the-badge)](https://akash1269.github.io/ellora-ajanta-heritage/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## About

Ellora Ajanta Heritage showcases the UNESCO World Heritage Sites, historic monuments, curated travel itineraries, and local hospitality of the Aurangabad district in Maharashtra, India.

Whether you're planning a trip or exploring from afar, the app provides everything you need — interactive maps, detailed attraction info, multi-day itineraries, hotel/restaurant guides, and a rich historical narrative.

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

- **Strict TypeScript** — Full `strict: true` with zero `any` usage across the codebase
- **Route-level code splitting** — Every page lazy-loaded via `React.lazy()` + `Suspense`, producing separate chunks
- **Lazy Leaflet** — The 150KB map library loads only when the map section scrolls into viewport (IntersectionObserver)
- **XSS-safe map popups** — DOM `createElement` + `textContent` instead of innerHTML templates
- **Heritage design system** — Custom Jaali lattice patterns, arch clip-paths, ornamental dividers, and warm amber palette — all in Tailwind utility classes
- **Resilient images** — All images have `loading="lazy"` + `onError` fallback to inline SVG placeholder
- **Memoized components** — Card components wrapped in `React.memo()` with `useCallback` handlers to minimize re-renders
- **Accessible modals** — ARIA roles, keyboard navigation (ESC close), focus management, scroll lock with proper restore
- **Zero external API dependency** — Ships with comprehensive static fallback data; works fully offline
- **CI pipeline** — Every push runs lint → type-check → build before deploy

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

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes
4. Push and open a Pull Request

---

## License

This project is private. All rights reserved.

---

<div align="center">

**Built with ❤️ for the heritage of Aurangabad**

</div>

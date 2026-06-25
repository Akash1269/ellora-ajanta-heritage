# Developer Onboarding

## Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+
- **Git**
- A code editor (VS Code recommended — project includes Copilot instructions)

## Setup

```bash
# Clone
git clone https://github.com/Akash1269/ellora-ajanta-heritage.git
cd ellora-ajanta-heritage

# Install
npm install

# Start dev server
npm run dev
```

The app runs at **http://localhost:5175**.

## Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all TypeScript files |
| `npm run format` | Auto-format with Prettier |

## Project Conventions

### File Naming
- Components: `PascalCase.tsx` (e.g., `AttractionCard.tsx`)
- Services/hooks: `camelCase.ts` (e.g., `dataService.ts`)
- Constants: exported as `UPPER_SNAKE_CASE`

### Component Rules
- All components are **functional** using React hooks
- Props must be typed with an interface
- Never use `any` — define proper types in `src/types.ts`
- Wrap components receiving props-as-callbacks with `React.memo()`
- Use `useCallback` for functions passed as props

### Styling
- **Tailwind CSS only** — no CSS modules or styled-components
- Mobile-first: base styles, then `sm:`, `md:`, `lg:` breakpoints
- Use heritage theme colors: `amber-700`, `stone-900`, `[#fffaf0]`
- Use `font-heading` for headings (Rozha One), `font-serif` for body (Lora)

### Adding a New Page
1. Create component in `src/pages/NewPage.tsx`
2. Add lazy import in `src/App.tsx`:
   ```tsx
   const NewPage = lazy(() => import('./pages/NewPage').then(m => ({ default: m.NewPage })));
   ```
3. Add route inside `<Routes>`:
   ```tsx
   <Route path="/new-page" element={<NewPage />} />
   ```
4. Add nav link in `src/components/layout/Header.tsx`

### Adding New Data
1. Define types in `src/types.ts`
2. Add static data in `src/data/fallbackData.ts`
3. Add service function in `src/services/dataService.ts`
4. Consume in `useAppData` hook or directly in the page component

### Adding Icons
Add to `src/components/icons/index.tsx` as a functional component:
```tsx
export const MyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} /* ... */ ></svg>
);
```

## Code Quality

### TypeScript
- Strict mode enabled (`strict: true` in tsconfig)
- All function parameters and return values must be typed
- Use interfaces from `src/types.ts`

### Linting
```bash
npm run lint        # Check for issues
npm run format      # Auto-fix formatting
```

### Before Committing
Run these to catch issues:
```bash
npm run lint
npx tsc --noEmit
npm run build
```

## CI/CD

### GitHub Actions
- **CI** (`.github/workflows/ci.yml`): Runs on every push/PR to `main`
  - Lint → Type-check → Build
- **Deploy** (`.github/workflows/deploy.yml`): Deploys to GitHub Pages on push to `main`

### Deployment
The app deploys to GitHub Pages at:
```
https://akash1269.github.io/ellora-ajanta-heritage/
```

The `base` path in `vite.config.ts` is set to `/ellora-ajanta-heritage/` for this.

## Key Files to Know

| File | Purpose |
|------|---------|
| `src/types.ts` | All TypeScript interfaces — start here to understand data shapes |
| `src/data/fallbackData.ts` | All static content — the "database" of the app |
| `src/hooks/useAppData.ts` | Global data loading — controls what pages receive |
| `src/App.tsx` | Routing, layout, error boundary setup |
| `src/constants.ts` | Map config, placeholder image, attraction names |
| `src/styles/globals.css` | Tailwind config + heritage theme classes |

## Troubleshooting

**Port conflict?** Change `server.port` in `vite.config.ts`.

**Type errors?** Run `npx tsc --noEmit` to see full error list.

**Stale build?** Delete `dist/` and `node_modules/.vite/`, then rebuild.

**Leaflet map not showing?** Ensure the leaflet CSS is loaded in `index.html` and the container has a fixed height.

# Design System — Ellora Ajanta Heritage

A heritage-inspired design system for the Aurangabad tourism web application. Every visual decision draws from Mughal architecture, Buddhist cave art, and ancient Indian craft traditions.

---

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Components](#components)
5. [Icons](#icons)
6. [Imagery](#imagery)
7. [Patterns & Textures](#patterns--textures)
8. [Motion & Animation](#motion--animation)
9. [Responsive Strategy](#responsive-strategy)

---

## Color Palette

All colors are defined as CSS custom properties in `src/styles/globals.css` under `@theme`.

| Token | Value | Usage |
|-------|-------|-------|
| `parchment` | `#fdf8f0` | Primary background — aged paper feel |
| `parchment-dark` | `#f5ead6` | Alternate section backgrounds |
| `ink` | `#2c1810` | Primary text — deep brown-black |
| `gold` | `#b8860b` | Accent, links, CTAs, borders |
| `gold-light` | `#d4a84b` | Decorative highlights, hover states |
| `gold-muted` | `#b8860b20` | Subtle gold tint for borders/backgrounds |
| `terracotta` | `#a0522d` | Error states, warm accents |
| `stone-warm` | `#8b7d6b` | Secondary text, captions |

### Usage Guidelines

- **Backgrounds:** Always use `parchment` or `parchment-dark`. Never pure white (#fff) for full sections.
- **Text:** Default body text is `ink`. Secondary/caption text uses `stone-warm`.
- **Interactive elements:** `gold` for borders/text, fills to `gold` on hover with white text.
- **Errors:** `terracotta` for error icons and border highlights.
- **Opacity modifiers:** Use Tailwind opacity syntax (`gold/30`, `ink/80`) for layered effects.

---

## Typography

### Font Families

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Headings | Cormorant Garamond | 600 | `h1`–`h5`, `.font-heading` |
| Body | Spectral | 300–700 | Body text, buttons, captions |

Both self-hosted as WOFF2 files in `public/fonts/` with `@font-face` declarations in `globals.css`.

### Scale (Mobile → Desktop)

| Element | Mobile | sm (640px) | lg (1024px) |
|---------|--------|-----------|-------------|
| Body | 15px | 16px | 17px |
| Section Heading (`h2`) | 2rem | 2.75rem | 3.25rem |
| Hero Title (`h1`) | 2.25rem | 3.75rem | 5.5rem |
| Card Title | 1.125rem | 1.25rem | — |
| Caption/Label | 0.625rem | 0.75rem | — |

### Heading Properties

```css
font-family: 'Cormorant Garamond', serif;
font-weight: 600;
letter-spacing: -0.02em;
line-height: 1.15;
```

### Body Properties

```css
font-family: 'Spectral', serif;
line-height: 1.7;
letter-spacing: 0.01em;
```

---

## Spacing & Layout

### Container Strategy

- Max-width containers: `max-w-5xl` (content), `max-w-7xl` (grid layouts)
- Section padding: `py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8`
- Card padding: `p-4 sm:p-5 lg:p-6`

### Grid Patterns

| Context | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Card grids | 1 col | 2 cols | 3 cols |
| Food items | 2 cols | 2 cols | 4 cols |
| Gallery mosaic | 2 cols | 4 cols | 4 cols |
| Travel info | 1 col | 2 cols | 3 cols |

---

## Components

### `Hero`

**File:** `src/components/common/Hero.tsx`

Full-viewport hero banner with background image, gradient overlay, and centered content.

```tsx
<Hero />
```

| Property | Detail |
|----------|--------|
| Height | 75vh (mobile) → 85vh (desktop) |
| Background | `IMAGES.hero` with gradient overlay (`from-ink/40 via-ink/20 to-ink/80`) |
| Content | Subtitle → Title → Diamond divider → Quote → CTA buttons |

---

### `SectionHeading`

**File:** `src/components/common/SectionHeading.tsx`

Centered section header with ornate divider.

```tsx
<SectionHeading 
  title="Echoes of Time" 
  subtitle="A glance at the pivotal moments."
  symbol="◆"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Heading text |
| `subtitle` | `string?` | — | Italic description below |
| `symbol` | `string?` | `◆` | Center ornament character |

---

### `SectionDivider`

**File:** `src/components/common/SectionDivider.tsx`

Visual separator between major page sections.

```tsx
<SectionDivider symbol="◆" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `symbol` | `string?` | `◆` | Center ornament |
| `className` | `string?` | `''` | Additional classes |

**Structure:** Two horizontal lines (`h-px w-16 bg-gold/30`) flanking a centered symbol.

---

### `HeritageButton`

**File:** `src/components/common/HeritageButton.tsx`

Pill-shaped button in outline or filled variant. Renders as `<Link>` or `<button>`.

```tsx
<HeritageButton to="/attractions" variant="filled">
  Explore Monuments
</HeritageButton>

<HeritageButton onClick={handleClick} variant="outline">
  Try Again
</HeritageButton>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `to` | `string?` | — | Route path (renders as `<Link>`) |
| `onClick` | `() => void` | — | Click handler (renders as `<button>`) |
| `variant` | `'outline' \| 'filled'` | `'outline'` | Visual style |
| `children` | `ReactNode` | — | Button label |
| `className` | `string?` | `''` | Additional classes |

**CSS Classes:**
- `.btn-heritage` — Gold outline, transparent fill, gold text → gold fill on hover
- `.btn-heritage-filled` — Gold fill, white text → darker gold on hover
- Both: `border-radius: 9999px`, `min-height: 44px`, `letter-spacing: 0.05em`

---

### `LoadingSpinner`

**File:** `src/components/common/LoadingSpinner.tsx`

Centered loading state with spinning ring and italic message.

```tsx
<LoadingSpinner />
```

**Visual:** Gold-accented spinning border (`border-t-gold`), centered with `py-20`. Message: *"Unveiling history..."*

---

### `ErrorMessage`

**File:** `src/components/common/ErrorMessage.tsx`

Inline error card with retry action.

```tsx
<ErrorMessage 
  message="Failed to load attractions." 
  onRetry={() => refetch()} 
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `message` | `string` | Error description text |
| `onRetry` | `() => void` | Retry callback |

**Visual:** White card with `border-terracotta/20`, `AlertTriangleIcon`, heading, message, and `.btn-heritage` retry button.

---

### `ErrorBoundary`

**File:** `src/components/common/ErrorBoundary.tsx`

React class component wrapping the app to catch unhandled errors.

```tsx
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

**Recovery:** "Try Again" button resets error state. Full-screen centered layout with `bg-heritage-pattern`.

---

### `MapSection`

**File:** `src/components/common/MapSection.tsx`

Interactive Leaflet map with lazy loading via `IntersectionObserver`.

```tsx
<MapSection locations={content.mapLocations} />
```

| Prop | Type | Description |
|------|------|-------------|
| `locations` | `MapLocation[]` | Array of `{ name, lat, lng, timings?, imageUrl? }` |

**Features:**
- Lazy-loaded: Leaflet JS imported only when map container enters viewport (200px root margin)
- Custom marker: Gold dome/arch SVG icon (DivIcon)
- Popups: Image thumbnail, title, timings, "Get Directions" link
- Tile layer: OpenStreetMap
- Aspect ratio: `aspect-square sm:aspect-[4/3]`
- Container: `max-w-5xl mx-auto`

---

### `card-heritage` (CSS Class)

Not a React component but a reusable CSS class applied to card containers.

```html
<div class="card-heritage p-5">...</div>
```

| State | Styles |
|-------|--------|
| Default | White bg, `border: 1px solid gold-muted`, `border-radius: 0.75rem`, subtle shadow |
| Hover | Gold border, stronger gold-tinted shadow |

---

## Icons

**File:** `src/components/icons/index.tsx`

All icons are inline SVG components accepting standard `SVGProps`. Rendered at 16–24px.

### Navigation Icons

| Icon | Component | Usage |
|------|-----------|-------|
| Home | `HomeIcon` | Nav link — Home |
| History scroll | `ScrollIcon` | Nav link — History |
| Layers/columns | `ColumnsIcon` | Nav link — Attractions |
| Route path | `RouteIcon` | Nav link — Itineraries |
| Map pin | `MapPinIcon` | Nav link — Places |
| Fork & knife | `UtensilsIcon` | Nav link — Places (restaurants) |

### Utility Icons

| Icon | Component | Size | Usage |
|------|-----------|------|-------|
| Close (X) | `CloseIcon` | 24px | Modal dismiss |
| Alert triangle | `AlertTriangleIcon` | 24px | Error states |
| Star (filled) | `StarIcon` | 16px | Ratings |
| Landmark | `LandmarkIcon` | 24px | Attraction headers |
| Sun | `SunIcon` | 20px | Season indicator |
| Compass | `CompassIcon` | 20px | Exploration theme |
| Bed | `BedIcon` | 24px | Hotels section |

### Transport Icons

| Icon | Component | Usage |
|------|-----------|-------|
| Plane | `PlaneIcon` | Flight info |
| Train/bolt | `TrainIcon` | Rail info |
| Arrows (bus) | `BusIcon` | Road travel |

### Weather Icons

| Icon | Component | Usage |
|------|-----------|-------|
| Sun (large) | `WeatherSunIcon` | Winter season card |
| Cloud+rain | `RainIcon` | Monsoon season card |

### Activity Icons

| Component | Props | Usage |
|-----------|-------|-------|
| `ActivityIcon` | `type: ActivityType` | Itinerary timeline items |

Renders different icons based on `type`: `'sightseeing'` (camera), `'meal'` (book), `'travel'` (bolt), `'shopping'` (bag), `'rest'` (moon).

---

## Imagery

### Image Constants

Defined in `src/constants.ts` as the `IMAGES` object. All paths resolve to `public/images/` via `import.meta.env.BASE_URL`.

```ts
import { IMAGES } from '../constants';

// Usage
<img src={IMAGES.elloraKailasa} alt="Kailasa Temple" />
```

### Available Images

| Key | File | Subject |
|-----|------|---------|
| `hero` | `hero-bg.jpg` | Ellora caves at sunset (1600w) |
| `bibiKaMaqbara` | `bibi-ka-maqbara.jpg` | The Maqbara monument |
| `ajantaCaves` | `ajanta-caves.jpg` | Ajanta exterior landscape |
| `elloraKailasa` | `ellora-kailasa.jpg` | Kailasa Temple aerial |
| `daulatabad` | `daulatabad-fort.jpg` | Daulatabad fortifications |
| `grishneshwar` | `grishneshwar-temple.jpg` | Temple architecture |
| `panchakki` | `panchakki.jpg` | Historical archway |
| `biryani` | `biryani.jpg` | Biryani dish |
| `naan` | `naan.jpg` | Assorted Indian breads |
| `jalebi` | `jalebi.jpg` | Jalebi sweet |
| `tahri` | `tahri.jpg` | Rice dish |
| `lonarLake` | `lonar-lake.jpg` | Crater lake |
| `caveInterior` | `cave-interior.jpg` | Buddhist cave temple |
| `cavePaintings` | `cave-paintings.jpg` | Ajanta stone carvings |
| `templeCarvings` | `temple-carvings.jpg` | Ellora cave carvings |
| `elloraArchitecture` | `ellora-architecture.jpg` | Rock-cut architecture |
| `ajantaStupa` | `ajanta-stupa.jpg` | Ajanta stupa interior |
| `daulatadabWalls` | `daulatabad-walls.jpg` | Fort walls |
| `elloraOverview` | `ellora-overview.jpg` | Caves under blue sky |
| `paithaniWeaving` | `paithani-weaving.jpg` | Ancient temple / textile |
| `fortLandscape` | `fort-landscape.jpg` | Sunset landscape |
| `shirdiTemple` | `shirdi-temple.jpg` | Temple architecture |
| `elloraSunset` | `ellora-sunset.jpg` | Monumental sunset |

### Image Treatment

All images receive the `.img-heritage` CSS class:

```css
.img-heritage {
  filter: sepia(12%) saturate(1.1) brightness(0.97);  /* aged patina */
}
.img-heritage:hover,
.group:hover .img-heritage {
  filter: sepia(0%) saturate(1.15) brightness(1);  /* reveal true color */
}
```

### Fallback Strategy

```tsx
import { PLACEHOLDER_IMAGE } from '../constants';

<img
  src={imageUrl}
  onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE; }}
/>
```

`PLACEHOLDER_IMAGE` is an inline SVG data URI showing "Image unavailable" text on a neutral background.

---

## Patterns & Textures

### Background Variants

| Class | Effect |
|-------|--------|
| `.bg-parchment` | Solid `#fdf8f0` |
| `.bg-parchment-dark` | Solid `#f5ead6` |
| `.bg-heritage-pattern` | Subtle radial gradients (gold + terracotta at 3% opacity) |
| `.bg-jaali` | Dark background (`#1c1512`) with dotted overlay pattern (Mughal jaali) |

### Decorative Elements

| Element | CSS/Class | Description |
|---------|-----------|-------------|
| Ornate divider | `.divider-ornate` | Flexbox with `::before`/`::after` gold lines and center ornament |
| Arch mask | `.arch-mask` | CSS `clip-path` polygon simulating a Mughal arch silhouette |
| Diamond ornament | Inline `◆` / `❋` | Unicode characters used as section separators |
| Gold accent bar | `w-1 h-6 bg-gold rounded-full` | Vertical bar preceding sub-headings |
| Corner flourishes | `h-px w-8 bg-gold-light/60` | Flanking lines around diamond symbols |

---

## Motion & Animation

### Fade In (Page Load)

```css
.fade-in {
  opacity: 0;
  transform: translateY(16px);
  animation: fadeInUp 0.6s ease forwards;
}
```

Applied to page-level wrappers. Content slides up 16px while fading in.

### Hover Transitions

| Element | Property | Duration |
|---------|----------|----------|
| Cards | border-color, box-shadow | 300ms ease |
| Images | filter (sepia removal) | 400ms ease |
| Image scale | transform: scale(1.05) | 700ms ease |
| Buttons | background, color, box-shadow | 300ms ease |
| Links/nav | color | 300ms ease |

### Loading Spinner

Standard CSS `animate-spin` (360° rotation) on a circular border element.

---

## Responsive Strategy

### Breakpoints (Tailwind defaults)

| Prefix | Min-width | Target |
|--------|-----------|--------|
| (none) | 0px | Mobile phones |
| `sm:` | 640px | Large phones / small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Desktops |

### Mobile-First Principles

1. **Base styles target mobile** — all unprefixed classes serve 320px+
2. **Progressive enhancement** — `sm:` and `lg:` add complexity for larger viewports
3. **Touch targets** — Minimum 44px height for all interactive elements (`min-height: 44px`)
4. **Horizontal scroll** — Used for card carousels (`.hide-scrollbar`, `snap-x`)
5. **Content priority** — Hero quote hidden on smallest screens, full timeline on desktop

### Common Responsive Patterns

```tsx
// Text scaling
className="text-sm sm:text-base lg:text-lg"

// Padding scaling
className="p-4 sm:p-5 lg:p-6"

// Grid column shifts
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"

// Aspect ratio shifts
className="aspect-square sm:aspect-[4/3]"
```

---

## File Reference

| File | Purpose |
|------|---------|
| `src/styles/globals.css` | Design tokens, component classes, utilities |
| `src/constants.ts` | `IMAGES`, `PLACEHOLDER_IMAGE`, map config |
| `src/components/common/` | Reusable UI components |
| `src/components/icons/index.tsx` | All SVG icon components |
| `src/types.ts` | TypeScript interfaces for props/data |
| `public/images/` | Local image assets (Pexels/Unsplash, free license) |

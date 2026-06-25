# Features

## Pages

### Home
- Hero banner with heritage imagery and call-to-action
- Historical timeline with alternating left/right layout
- Best time to visit (seasonal weather guide)
- How to reach (flights, trains, roads)
- Nearby excursions (horizontal scroll cards)
- Interactive map with all attraction markers
- Culinary highlights (local food guide)

### Attractions
- Grid gallery of 6 heritage sites
- Click-to-open detail modal with:
  - Full-width image
  - Historical significance
  - Visitor information (timings, entry fees)
  - Highlights list
  - Architectural style details

### Itineraries
- 4 curated multi-day travel plans
- Each card shows duration, theme, and summary
- Detail modal with:
  - Day-by-day breakdown
  - Hourly activity timeline
  - Activity type badges (sightseeing, food, transport, rest)

### Places
- Hotels section (Royal Stays)
- Restaurants section (Fine Dining)
- Each card shows name, specialty rating, and description

### History
- Long-form historical narrative
- Sectioned by era with numbered progression
- Styled as a heritage document with ornamental borders

### 404 Not Found
- Heritage-styled error page
- Link back to home

## Interactive Map

- Powered by Leaflet (lazy-loaded on scroll)
- Custom sepia filter for heritage aesthetic
- Markers for all attractions with popups showing:
  - Attraction name
  - Opening times
  - "Get Directions" link (Google Maps)
- Decorative corner borders on map container

## Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Floral White | `#fffaf0` | Page backgrounds |
| Amber 700 | `#b45309` | Accent, links, borders |
| Warm Brown | `#431407` | Deep accent |
| Stone 900 | `#1c1917` | Dark sections |
| Amber 50 | `#fffbeb` | Light section backgrounds |

### Typography

| Font | Role | Style |
|------|------|-------|
| Rozha One | Headings | Serif, display weight |
| Lora | Body text | Serif, 400-700, italic support |

### Decorative Elements

- **Jaali pattern** — Radial gradient dots simulating lattice screens
- **Heritage pattern** — Subtle double-dot background for page sections
- **Arch mask** — CSS clip-path creating pointed arch shape on images
- **Divider ornate** — Double-line dividers with centered emoji ornaments
- **Corner borders** — Decorative L-shaped borders on map and cards
- **Double border** — Inner + outer border on card components

### Component Patterns

- **Cards** — Hover states with scale, shadow, and color transitions
- **Modals** — Full accessibility (ARIA, ESC close, focus trap, scroll lock)
- **Loading** — Spinner with minimum 400ms display time
- **Errors** — Consistent ErrorMessage component with retry button
- **Images** — Lazy loading + SVG fallback on error

## Accessibility

- Semantic HTML (nav, main, section, headings hierarchy)
- `role="dialog"` and `aria-modal` on modals
- `aria-labelledby` linking modal titles
- ESC key closes modals
- Focus management on modal open
- Alt text on all images
- Color contrast meets WCAG AA standards

## Mobile Experience

- Responsive grid layouts (1 → 2 → 3 columns)
- Hamburger menu with slide-in navigation
- Touch-friendly tap targets
- Horizontal scroll for nearby places section
- Full-screen modals on mobile, centered on desktop

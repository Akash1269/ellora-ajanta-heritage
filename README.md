<div align="center">

# 🏛️ Ellora Ajanta Heritage

**An elegant, heritage-themed web application for exploring the historic Aurangabad (Chhatrapati Sambhajinagar) district**

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900?logo=leaflet&logoColor=white)](https://leafletjs.com/)

</div>

---

## 📖 About

Ellora Ajanta Heritage is a comprehensive digital tourism platform showcasing UNESCO World Heritage Sites, historic monuments, curated travel itineraries, and local hospitality of the Aurangabad district in Maharashtra, India. It features AI-powered content generation via the Google Gemini API with graceful fallback to pre-built static data.

### ✨ Key Features

- **6 Heritage Attractions** — Bibi Ka Maqbara, Ajanta Caves, Ellora Caves, Daulatabad Fort, Grishneshwar Temple, Panchakki
- **Interactive Map** — Leaflet-powered map with markers, timings, and coordinates for all sites
- **Curated Itineraries** — 4 multi-day travel plans with hourly timelines and activity types
- **Places Directory** — Hotels and restaurants with descriptions and specialties
- **Rich History** — Detailed historical narrative spanning Ancient to Modern eras
- **Heritage UI** — Custom Jaali patterns, Rozha One & Lora typography, warm amber palette
- **Responsive Design** — Mobile-first layout adapting to all screen sizes
- **Offline Ready** — Comprehensive fallback data ensures full functionality without API

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **UI Library** | React 18.2 |
| **Language** | TypeScript 5.8 |
| **Build Tool** | Vite 6.2 |
| **Routing** | React Router DOM 6.22 (HashRouter) |
| **Styling** | Tailwind CSS (CDN) |
| **Maps** | Leaflet 1.9 |
| **AI/Content** | Google Gemini API (@google/genai) |
| **Fonts** | Google Fonts (Rozha One, Lora) |

---

## 📁 Project Structure

```
awb-tour/
├── index.html              # Entry point with meta tags & theme styles
├── index.tsx               # React DOM mount
├── App.tsx                 # Root component with routing & global state
├── types.ts                # TypeScript interfaces & types
├── constants.ts            # Attraction names & app constants
├── vite.config.ts          # Vite configuration (port 3000, aliases)
├── components/
│   ├── Header.tsx          # Navigation bar with active states
│   ├── Footer.tsx          # Footer with links & ornaments
│   ├── Hero.tsx            # Landing hero section
│   ├── LoadingSpinner.tsx  # Loading indicator
│   ├── ErrorMessage.tsx    # Error display with retry
│   ├── AttractionCard.tsx  # Attraction summary card
│   ├── AttractionDetailModal.tsx  # Full attraction details modal
│   ├── PlaceCard.tsx       # Hotel/restaurant card
│   ├── PlacesSection.tsx   # Places grid layout
│   ├── MapSection.tsx      # Interactive Leaflet map
│   ├── ItinerariesSection.tsx  # Itinerary grid
│   ├── ItineraryCard.tsx   # Itinerary summary card
│   ├── ItineraryDetailModal.tsx  # Multi-day timeline modal
│   └── pages/
│       ├── Home.tsx        # Homepage (hero, timeline, map, food, gallery)
│       ├── Attractions.tsx # Attractions gallery
│       ├── Itineraries.tsx # All travel plans
│       ├── Places.tsx      # Hotels & restaurants
│       └── History.tsx     # Historical narrative
├── services/
│   └── geminiService.ts    # AI content service (Gemini API + fallback)
└── data/
    └── fallbackData.ts     # Comprehensive static content
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or later recommended)
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/Akash1269/ellora-ajanta-heritage.git
cd ellora-ajanta-heritage

# Install dependencies
npm install
```

### Environment Setup

Create a `.env.local` file in the project root:

```env
GEMINI_API_KEY=your_google_gemini_api_key_here
```

> **Note:** The app works fully without an API key using built-in fallback data.

### Development

```bash
# Start development server (http://localhost:3000)
npm run dev
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🗺️ Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, historical timeline, map, food culture |
| `/attractions` | Attractions | Gallery of 6 UNESCO & heritage sites |
| `/itineraries` | Itineraries | 4 curated multi-day travel plans |
| `/places` | Places | Hotels and restaurants directory |
| `/history` | History | Detailed historical narrative |

---

## 🎨 Design System

- **Color Palette:** Floral White (`#fffaf0`), Amber 700 (`#b45309`), Warm Brown (`#431407`)
- **Typography:** Rozha One (headings), Lora (body text)
- **Patterns:** Heritage Jaali lattice backgrounds, decorative corner borders
- **Components:** Card system, modal architecture, timeline layouts

---

## 📦 Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Dev | `npm run dev` | Start Vite dev server on port 3000 |
| Build | `npm run build` | Production build |
| Preview | `npm run preview` | Preview production build |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is private. All rights reserved.

---

<div align="center">

**Built with ❤️ for the heritage of Aurangabad**

*Exploring centuries of history through modern technology*

</div>

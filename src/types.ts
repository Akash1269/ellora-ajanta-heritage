

export interface Attraction {
  name: string;
  description: string;
  history: string;
  bestTimeToVisit: string;
  keyFeatures: string[];
  imageUrl: string;
}

export interface Place {
  name: string;
  description: string;
  specialty: string; // e.g., "Multi-cuisine", "Rooftop Pool"
}

export interface ItinerarySummary {
  title: string;
  summary: string;
  duration: string; // e.g. "2 Days"
  theme: string; // e.g. "History", "Spiritual"
  imageUrl: string;
}

export type ActivityType = 'sightseeing' | 'travel' | 'meal' | 'rest' | 'shopping';

export interface ItineraryActivity {
  time: string;
  title: string;
  description: string;
  type: ActivityType;
  duration?: string;
  imageUrl?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: ItineraryActivity[];
}

export interface ItineraryDetail {
  title: string;
  days: ItineraryDay[];
}

export interface HistoryEra {
  era: string;
  period: string;
  title: string;
  summary: string;
  details: string[];
  keyFigures?: string[];
  monuments?: string[];
}

export interface HistoryContent {
  title: string;
  introduction: string;
  eras: HistoryEra[];
  culinaryHistory: {
    title: string;
    description: string;
    influences: { name: string; detail: string }[];
  };
  legacy: {
    title: string;
    content: string;
  };
}

/* --- New Home Page Types --- */

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface NearbyPlace {
  name: string;
  distance: string; // e.g. "110 km"
  description: string;
}

export interface FoodItem {
  name: string;
  description: string;
}

export interface TravelOption {
  mode: string; // Flight, Train, Bus
  details: string;
}

export interface MapLocation {
  name: string;
  lat: number;
  lng: number;
  imageUrl?: string;
  timings?: string;
}

export interface Season {
  name: string;       // e.g. "Winter"
  type: string;       // e.g. "Peak Season"
  months: string;     // e.g. "Oct - Mar"
  temperature: string;// e.g. "12°C - 30°C"
  description: string;
}

export interface HomeContent {
  historyTimeline: TimelineEvent[];
  seasons: Season[];
  travelInfo: TravelOption[];
  nearbyPlaces: NearbyPlace[];
  foodItems: FoodItem[];
  mapLocations: MapLocation[];
}

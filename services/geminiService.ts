
import type { Attraction, Place, ItinerarySummary, ItineraryDetail, HistoryContent, HomeContent } from '../types';
import { 
  FALLBACK_HOME_CONTENT, 
  FALLBACK_ATTRACTIONS, 
  FALLBACK_PLACES, 
  FALLBACK_ITINERARIES, 
  FALLBACK_HISTORY,
  FALLBACK_ITINERARY_DETAILS
} from '../data/fallbackData';

// Service is now strictly static to ensure reliability and speed.

export async function fetchAttractionDetails(attractionName: string): Promise<Omit<Attraction, 'imageUrl'> | null> {
    // Simulate async fetch for consistency
    return Promise.resolve(FALLBACK_ATTRACTIONS[attractionName] || null);
}

export async function fetchAttractionImage(attractionName: string): Promise<string> {
  // Use high-quality static seed images
  return Promise.resolve(`https://picsum.photos/seed/${encodeURIComponent(attractionName)}/800/600`);
}

export async function fetchPlaces(placeType: 'hotels' | 'restaurants'): Promise<Place[]> {
    return Promise.resolve(FALLBACK_PLACES[placeType] || []);
}

export async function fetchItinerarySummaries(): Promise<ItinerarySummary[]> {
    return Promise.resolve(FALLBACK_ITINERARIES);
}

export async function fetchItineraryDetails(itineraryTitle: string): Promise<ItineraryDetail | null> {
    return Promise.resolve(FALLBACK_ITINERARY_DETAILS[itineraryTitle] || null);
}

export async function fetchHistory(): Promise<HistoryContent> {
    return Promise.resolve(FALLBACK_HISTORY);
}

export async function fetchHomeContent(): Promise<HomeContent | null> {
    return Promise.resolve(FALLBACK_HOME_CONTENT);
}

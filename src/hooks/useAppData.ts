import { useState, useEffect, useCallback } from 'react';
import { fetchAttractionDetails, fetchAttractionImage, fetchPlaces, fetchItinerarySummaries, fetchHomeContent } from '../services/dataService';
import { ATTRACTION_NAMES } from '../constants';
import type { Attraction, Place, ItinerarySummary, HomeContent } from '../types';

interface AppData {
  attractions: Attraction[];
  hotels: Place[];
  restaurants: Place[];
  streetFood: Place[];
  itineraries: ItinerarySummary[];
  homeContent: HomeContent | null;
  loading: boolean;
  error: string | null;
}

export function useAppData(): AppData {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [hotels, setHotels] = useState<Place[]>([]);
  const [restaurants, setRestaurants] = useState<Place[]>([]);
  const [streetFood, setStreetFood] = useState<Place[]>([]);
  const [itineraries, setItineraries] = useState<ItinerarySummary[]>([]);
  const [homeContent, setHomeContent] = useState<HomeContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const minDelay = new Promise((r) => setTimeout(r, 400));

      const [homeData, itins, h, r, sf] = await Promise.all([
        fetchHomeContent(),
        fetchItinerarySummaries(),
        fetchPlaces('hotels'),
        fetchPlaces('restaurants'),
        fetchPlaces('streetFood')
      ]);

      setHomeContent(homeData);
      setItineraries(itins);
      setHotels(h);
      setRestaurants(r);
      setStreetFood(sf);

      const attractionData = await Promise.all(
        ATTRACTION_NAMES.map(async (name) => {
          const detail = await fetchAttractionDetails(name);
          const imageUrl = await fetchAttractionImage(name);
          if (detail) {
            return { ...detail, imageUrl } as Attraction;
          }
          return null;
        })
      );

      setAttractions(attractionData.filter((a): a is Attraction => a !== null));
      await minDelay;
      setLoading(false);
    } catch (err) {
      console.error("Error loading data:", err);
      setError("We couldn't fetch the tourist information. Please refresh.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { attractions, hotels, restaurants, streetFood, itineraries, homeContent, loading, error };
}


import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/pages/Home';
import { Attractions } from './components/pages/Attractions';
import { Itineraries } from './components/pages/Itineraries';
import { Places } from './components/pages/Places';
import { History } from './components/pages/History';
import { fetchAttractionDetails, fetchAttractionImage, fetchPlaces, fetchItinerarySummaries, fetchHomeContent } from './services/geminiService';
import { ATTRACTION_NAMES } from './constants';
import type { Attraction, Place, ItinerarySummary, HomeContent } from './types';
import { LoadingSpinner } from './components/LoadingSpinner';

const App: React.FC = () => {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [hotels, setHotels] = useState<Place[]>([]);
  const [restaurants, setRestaurants] = useState<Place[]>([]);
  const [itineraries, setItineraries] = useState<ItinerarySummary[]>([]);
  const [homeContent, setHomeContent] = useState<HomeContent | null>(null);
  
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Load all static content in parallel
      const [homeData, itins, h, r] = await Promise.all([
        fetchHomeContent(),
        fetchItinerarySummaries(),
        fetchPlaces('hotels'),
        fetchPlaces('restaurants')
      ]);

      setHomeContent(homeData);
      setItineraries(itins);
      setHotels(h);
      setRestaurants(r);

      // Load attractions
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

  if (loading) {
      return (
          <div className="min-h-screen flex items-center justify-center bg-heritage-pattern">
              <LoadingSpinner />
          </div>
      )
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-heritage-pattern text-stone-800 font-serif">
        <Header />
        <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Home content={homeContent} />} />
                <Route path="/attractions" element={<Attractions attractions={attractions} loading={attractions.length === 0} error={error} />} />
                <Route path="/itineraries" element={<Itineraries itineraries={itineraries} />} />
                <Route path="/places" element={<Places hotels={hotels} restaurants={restaurants} />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import { ItineraryCard } from '../components/itineraries/ItineraryCard';
import { ItineraryDetailModal } from '../components/itineraries/ItineraryDetailModal';
import { fetchItineraryDetails } from '../services/dataService';
import type { ItinerarySummary, ItineraryDetail } from '../types';

interface ItinerariesPageProps {
  itineraries: ItinerarySummary[];
}

export const Itineraries: React.FC<ItinerariesPageProps> = ({ itineraries }) => {
    const [selectedItinerary, setSelectedItinerary] = useState<ItinerarySummary | null>(null);
    const [itineraryDetails, setItineraryDetails] = useState<ItineraryDetail | null>(null);
    const [loadingDetails, setLoadingDetails] = useState(false);

    const handleSelect = async (itinerary: ItinerarySummary) => {
        setSelectedItinerary(itinerary);
        setLoadingDetails(true);
        setItineraryDetails(null);
        try {
            const details = await fetchItineraryDetails(itinerary.title);
            setItineraryDetails(details);
        } catch (e) {
            console.error(e);
        } finally {
            setLoadingDetails(false);
        }
    };

    return (
        <div className="bg-amber-50 min-h-screen py-16">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl text-stone-900 font-heading mb-4">Journeys Through Time</h2>
                    <div className="divider-ornate max-w-md mx-auto"><span>⚜</span></div>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {itineraries.map((item) => (
                        <ItineraryCard key={item.title} itinerary={item} onSelect={handleSelect} />
                    ))}
                </div>
            </div>
            {selectedItinerary && (
                <ItineraryDetailModal 
                    itinerary={itineraryDetails} 
                    loading={loadingDetails} 
                    onClose={() => setSelectedItinerary(null)} 
                />
            )}
        </div>
    );
};
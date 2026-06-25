import React, { useState, useCallback } from 'react';
import { ItineraryCard } from '../components/itineraries/ItineraryCard';
import { ItineraryDetailModal } from '../components/itineraries/ItineraryDetailModal';
import { fetchItineraryDetails } from '../services/dataService';
import { ErrorMessage } from '../components/common/ErrorMessage';
import type { ItinerarySummary, ItineraryDetail } from '../types';

interface ItinerariesPageProps {
  itineraries: ItinerarySummary[];
}

export const Itineraries: React.FC<ItinerariesPageProps> = ({ itineraries }) => {
    const [selectedItinerary, setSelectedItinerary] = useState<ItinerarySummary | null>(null);
    const [itineraryDetails, setItineraryDetails] = useState<ItineraryDetail | null>(null);
    const [loadingDetails, setLoadingDetails] = useState(false);
    const [detailError, setDetailError] = useState<string | null>(null);

    const handleSelect = useCallback(async (itinerary: ItinerarySummary) => {
        setSelectedItinerary(itinerary);
        setLoadingDetails(true);
        setItineraryDetails(null);
        setDetailError(null);
        try {
            const details = await fetchItineraryDetails(itinerary.title);
            setItineraryDetails(details);
        } catch (e) {
            console.error(e);
            setDetailError("Could not load itinerary details. Please try again.");
        } finally {
            setLoadingDetails(false);
        }
    }, []);

    const handleRetry = useCallback(() => {
        if (selectedItinerary) {
            handleSelect(selectedItinerary);
        }
    }, [selectedItinerary, handleSelect]);

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
            {selectedItinerary && !detailError && (
                <ItineraryDetailModal 
                    itinerary={itineraryDetails} 
                    loading={loadingDetails} 
                    onClose={() => setSelectedItinerary(null)} 
                />
            )}
            {detailError && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 p-4">
                    <div className="max-w-md w-full">
                        <ErrorMessage message={detailError} onRetry={handleRetry} />
                        <button
                            onClick={() => { setSelectedItinerary(null); setDetailError(null); }}
                            className="mt-4 w-full text-center text-stone-400 hover:text-white transition-colors text-sm"
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
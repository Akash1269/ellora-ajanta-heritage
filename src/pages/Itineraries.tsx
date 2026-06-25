import React, { useState, useCallback } from 'react';
import { ItineraryCard } from '../components/itineraries/ItineraryCard';
import { ItineraryDetailModal } from '../components/itineraries/ItineraryDetailModal';
import { fetchItineraryDetails } from '../services/dataService';
import { ErrorMessage } from '../components/common/ErrorMessage';
import { SectionHeading } from '../components/common/SectionHeading';
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
        <div className="bg-parchment-dark min-h-screen py-12 sm:py-20">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading 
                    title="Journeys Through Time" 
                    subtitle="Curated travel plans to make the most of your heritage exploration."
                    symbol="⚜"
                />
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
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 backdrop-blur-sm p-4">
                    <div className="max-w-md w-full">
                        <ErrorMessage message={detailError} onRetry={handleRetry} />
                        <button
                            onClick={() => { setSelectedItinerary(null); setDetailError(null); }}
                            className="mt-4 w-full text-center text-stone-warm hover:text-ink transition-colors text-sm"
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
import React from 'react';
import type { ItinerarySummary } from '../types';
import { ItineraryCard } from './ItineraryCard';

interface ItinerariesSectionProps {
    itineraries: ItinerarySummary[];
    onSelect: (itinerary: ItinerarySummary) => void;
}

export const ItinerariesSection: React.FC<ItinerariesSectionProps> = ({ itineraries, onSelect }) => {
    return (
        <section id="itineraries" className="py-16 sm:py-24 bg-amber-50 relative">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-amber-800 uppercase tracking-widest text-sm font-bold">Planned Journeys</span>
                    <h2 className="text-3xl sm:text-4xl font-heading text-stone-900 mt-2">
                        Curated Itineraries
                    </h2>
                     <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full mt-4"></div>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-stone-700 italic">
                        Follow in the footsteps of kings and pilgrims.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {itineraries.map((itinerary) => (
                        <ItineraryCard 
                            key={itinerary.title} 
                            itinerary={itinerary} 
                            onSelect={onSelect}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
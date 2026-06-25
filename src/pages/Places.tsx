import React from 'react';
import { PlaceCard } from '../components/places/PlaceCard';
import type { Place } from '../types';

interface PlacesPageProps {
    hotels: Place[];
    restaurants: Place[];
}

export const Places: React.FC<PlacesPageProps> = ({ hotels, restaurants }) => {
    return (
        <div className="bg-stone-800 text-stone-100 min-h-screen py-16 bg-jaali relative z-0">
             {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-stone-900/80 -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl text-amber-50 font-heading mb-2">Hospitality & Cuisine</h2>
                     <div className="w-24 h-px bg-amber-500 mx-auto mt-6"></div>
                </div>

                <div className="space-y-24">
                     <section>
                        <h3 className="text-3xl font-heading text-amber-400 mb-8 border-l-4 border-amber-600 pl-4">Royal Stays</h3>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                             {hotels.map(h => <PlaceCard key={h.name} place={h} />)}
                        </div>
                     </section>
                     
                     <section>
                        <h3 className="text-3xl font-heading text-amber-400 mb-8 border-l-4 border-amber-600 pl-4">Fine Dining</h3>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                             {restaurants.map(r => <PlaceCard key={r.name} place={r} />)}
                        </div>
                     </section>
                </div>
            </div>
        </div>
    );
};
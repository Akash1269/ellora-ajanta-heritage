import React from 'react';
import { PlaceCard } from '../components/places/PlaceCard';
import { SectionHeading } from '../components/common/SectionHeading';
import type { Place } from '../types';

interface PlacesPageProps {
    hotels: Place[];
    restaurants: Place[];
    streetFood: Place[];
}

export const Places: React.FC<PlacesPageProps> = ({ hotels, restaurants, streetFood }) => {
    return (
        <div className="bg-parchment min-h-screen py-8 sm:py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading 
                    title="Hospitality & Cuisine" 
                    subtitle="Where to stay and dine during your heritage journey."
                />

                <div className="space-y-10 sm:space-y-16 lg:space-y-24">
                     <section>
                        <h3 className="text-xl sm:text-2xl font-heading text-ink mb-5 sm:mb-8 flex items-center gap-2 sm:gap-3">
                            <span className="w-1 h-6 sm:h-8 bg-gold rounded-full"></span>
                            Royal Stays
                        </h3>
                        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                             {hotels.map(h => <PlaceCard key={h.name} place={h} />)}
                        </div>
                     </section>
                     
                     <section>
                        <h3 className="text-xl sm:text-2xl font-heading text-ink mb-5 sm:mb-8 flex items-center gap-2 sm:gap-3">
                            <span className="w-1 h-6 sm:h-8 bg-gold rounded-full"></span>
                            Fine Dining
                        </h3>
                        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                             {restaurants.map(r => <PlaceCard key={r.name} place={r} />)}
                        </div>
                     </section>

                     <section>
                        <h3 className="text-xl sm:text-2xl font-heading text-ink mb-5 sm:mb-8 flex items-center gap-2 sm:gap-3">
                            <span className="w-1 h-6 sm:h-8 bg-gold rounded-full"></span>
                            Street Food & Iconic Shops
                        </h3>
                        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                             {streetFood.map(sf => <PlaceCard key={sf.name} place={sf} />)}
                        </div>
                     </section>
                </div>
            </div>
        </div>
    );
};
import React from 'react';
import type { Place } from '../../types';
import { PlaceCard } from './PlaceCard';
import { BedIcon, UtensilsIcon } from '../icons';


interface PlacesSectionProps {
    hotels: Place[];
    restaurants: Place[];
}

export const PlacesSection: React.FC<PlacesSectionProps> = ({ hotels, restaurants }) => {
    return (
        <section id="places" className="py-16 sm:py-24 bg-parchment-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                     <span className="text-gold uppercase tracking-widest text-xs font-bold">Hospitality</span>
                    <h2 className="text-3xl sm:text-4xl font-heading text-ink mt-2">
                        Royal Stays & Culinary Delights
                    </h2>
                    <div className="flex items-center justify-center gap-3 mt-4">
                        <span className="h-px w-10 bg-gold/30"></span>
                        <span className="text-gold/50 text-sm">◆</span>
                        <span className="h-px w-10 bg-gold/30"></span>
                    </div>
                </div>

                <div className="space-y-16">
                    {hotels.length > 0 && (
                        <div>
                            <div className="flex items-center mb-8">
                                <span className="p-2 border border-gold/30 rounded-full bg-white mr-4">
                                    <BedIcon className="w-5 h-5 text-gold"/>
                                </span>
                                <h3 className="text-2xl font-heading text-ink">Heritage Hotels & Luxury Stays</h3>
                            </div>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {hotels.map((hotel) => (
                                    <PlaceCard key={hotel.name} place={hotel} />
                                ))}
                            </div>
                        </div>
                    )}

                    {restaurants.length > 0 && (
                        <div>
                            <div className="flex items-center mb-8">
                                 <span className="p-2 border border-gold/30 rounded-full bg-white mr-4">
                                    <UtensilsIcon className="w-5 h-5 text-gold"/>
                                </span>
                                <h3 className="text-2xl font-heading text-ink">Gastronomic Experiences</h3>
                            </div>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {restaurants.map((restaurant) => (
                                    <PlaceCard key={restaurant.name} place={restaurant} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
import React from 'react';
import type { Place } from '../types';
import { PlaceCard } from './PlaceCard';

const BedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2 4v16h20V4Z" /><path d="M2 10h20" /><path d="M6 14v-4" />
    </svg>
);

const UtensilsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Z" />
    </svg>
);


interface PlacesSectionProps {
    hotels: Place[];
    restaurants: Place[];
}

export const PlacesSection: React.FC<PlacesSectionProps> = ({ hotels, restaurants }) => {
    return (
        <section id="places" className="py-16 sm:py-24 bg-stone-800 text-stone-100 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#d6d3d1 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                     <span className="text-amber-500 uppercase tracking-widest text-sm font-bold">Hospitality</span>
                    <h2 className="text-3xl sm:text-4xl font-heading text-amber-50 mt-2">
                        Royal Stays & Culinary Delights
                    </h2>
                     <div className="w-16 h-px bg-amber-500 mx-auto mt-6"></div>
                </div>

                <div className="space-y-20">
                    {hotels.length > 0 && (
                        <div>
                            <div className="flex items-center mb-8">
                                <span className="p-2 border border-amber-500/50 rounded-full bg-stone-700 mr-4">
                                    <BedIcon className="w-6 h-6 text-amber-400"/>
                                </span>
                                <h3 className="text-2xl font-serif text-amber-100">Heritage Hotels & Luxury Stays</h3>
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
                                 <span className="p-2 border border-amber-500/50 rounded-full bg-stone-700 mr-4">
                                    <UtensilsIcon className="w-6 h-6 text-amber-400"/>
                                </span>
                                <h3 className="text-2xl font-serif text-amber-100">Gastronomic Experiences</h3>
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
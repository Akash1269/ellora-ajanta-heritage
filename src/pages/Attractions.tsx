import React, { useState } from 'react';
import { AttractionCard } from '../components/attractions/AttractionCard';
import { AttractionDetailModal } from '../components/attractions/AttractionDetailModal';
import type { Attraction } from '../types';

interface AttractionsPageProps {
  attractions: Attraction[];
  loading: boolean;
  error: string | null;
}

export const Attractions: React.FC<AttractionsPageProps> = ({ attractions, loading, error }) => {
    const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

    return (
        <div className="bg-heritage-pattern min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl text-stone-900 font-heading mb-4">Architectural Marvels</h2>
                    <div className="divider-ornate max-w-md mx-auto"><span>❖</span></div>
                    <p className="mt-6 text-xl text-stone-600 font-serif italic max-w-2xl mx-auto">
                        Witness the grandeur of history etched in stone.
                    </p>
                </div>
                
                {loading ? (
                    <div className="text-center py-20 text-stone-500 font-serif text-xl animate-pulse">Summoning the spirits of the past...</div>
                ) : error ? (
                    <div className="text-center text-red-600 font-serif">{error}</div>
                ) : (
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {attractions.map((attraction) => (
                        <AttractionCard
                            key={attraction.name}
                            attraction={attraction}
                            onSelect={setSelectedAttraction}
                        />
                        ))}
                    </div>
                )}
            </div>
            {selectedAttraction && (
                <AttractionDetailModal
                attraction={selectedAttraction}
                onClose={() => setSelectedAttraction(null)}
                />
            )}
        </div>
    );
};
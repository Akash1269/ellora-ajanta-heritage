import React, { useState, useCallback } from 'react';
import { AttractionCard } from '../components/attractions/AttractionCard';
import { AttractionDetailModal } from '../components/attractions/AttractionDetailModal';
import { ErrorMessage } from '../components/common/ErrorMessage';
import { SectionHeading } from '../components/common/SectionHeading';
import type { Attraction } from '../types';

interface AttractionsPageProps {
  attractions: Attraction[];
  loading: boolean;
  error: string | null;
}

export const Attractions: React.FC<AttractionsPageProps> = ({ attractions, loading, error }) => {
    const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
    const handleSelect = useCallback((attraction: Attraction) => setSelectedAttraction(attraction), []);

    return (
        <div className="bg-parchment min-h-screen py-12 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading 
                    title="Architectural Marvels" 
                    subtitle="Witness the grandeur of history etched in stone."
                    symbol="❖"
                />
                
                {loading ? (
                    <div className="text-center py-20 text-stone-warm font-serif text-lg">Summoning the spirits of the past...</div>
                ) : error ? (
                    <ErrorMessage message={error} onRetry={() => window.location.reload()} />
                ) : (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {attractions.map((attraction) => (
                        <AttractionCard
                            key={attraction.name}
                            attraction={attraction}
                            onSelect={handleSelect}
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

import React from 'react';
import type { ItinerarySummary } from '../../types';
import { PLACEHOLDER_IMAGE } from '../../constants';

interface ItineraryCardProps {
  itinerary: ItinerarySummary;
  onSelect: (itinerary: ItinerarySummary) => void;
}

export const ItineraryCard: React.FC<ItineraryCardProps> = React.memo(({ itinerary, onSelect }) => {
  return (
    <div 
      className="bg-white border-2 border-stone-200 p-1 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group flex flex-col h-full"
      onClick={() => onSelect(itinerary)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
            src={itinerary.imageUrl || `https://picsum.photos/seed/${itinerary.title}/400/300`} 
            alt={itinerary.title}
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE; }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-2 right-2 bg-stone-900/80 text-amber-400 text-xs font-bold px-3 py-1 uppercase tracking-widest border border-amber-500">
            {itinerary.duration}
        </div>
      </div>

      <div className="flex-grow border-x border-b border-stone-300 p-6 flex flex-col bg-stone-50 group-hover:bg-orange-50/50 transition-colors">
        <div className="mb-2">
            <span className="text-amber-700 text-xs font-serif italic tracking-wider">{itinerary.theme}</span>
        </div>
        <div className="flex items-start justify-between mb-4 border-b border-stone-300 pb-4 border-dashed">
            <h3 className="text-xl font-heading text-stone-900 leading-tight group-hover:text-amber-800 transition-colors">
                {itinerary.title}
            </h3>
        </div>
        <p className="text-stone-600 flex-grow mb-6 font-serif leading-relaxed italic text-sm">
          "{itinerary.summary}"
        </p>
        <button
          className="w-full py-2 border border-amber-600 text-amber-800 font-bold uppercase text-xs tracking-widest hover:bg-amber-700 hover:text-white transition-all duration-300"
        >
          View Plan
        </button>
      </div>
    </div>
  );
});

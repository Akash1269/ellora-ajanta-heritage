
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
      className="card-heritage overflow-hidden cursor-pointer group flex flex-col h-full"
      onClick={() => onSelect(itinerary)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
            src={itinerary.imageUrl || `https://picsum.photos/seed/${itinerary.title}/400/300`} 
            alt={itinerary.title}
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE; }}
            className="w-full h-full object-cover img-heritage transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gold text-xs font-bold px-3 py-1.5 rounded-full border border-gold/30">
            {itinerary.duration}
        </div>
      </div>

      <div className="flex-grow p-6 flex flex-col">
        <span className="text-gold text-xs font-serif italic tracking-wider mb-2 block">{itinerary.theme}</span>
        <h3 className="text-xl font-heading text-ink leading-tight mb-3 group-hover:text-gold transition-colors duration-300">
            {itinerary.title}
        </h3>
        <div className="h-px w-full bg-gold/20 mb-3"></div>
        <p className="text-stone-warm flex-grow mb-5 font-serif leading-relaxed italic text-sm">
          "{itinerary.summary}"
        </p>
        <button className="btn-heritage w-full text-sm py-2.5">
          View Plan
        </button>
      </div>
    </div>
  );
});

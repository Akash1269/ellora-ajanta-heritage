import React from 'react';
import type { Attraction } from '../types';

interface AttractionCardProps {
  attraction: Attraction;
  onSelect: (attraction: Attraction) => void;
}

export const AttractionCard: React.FC<AttractionCardProps> = ({ attraction, onSelect }) => {
  return (
    <div 
      className="group relative bg-white pb-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-heritage"
      onClick={() => onSelect(attraction)}
    >
      <div className="p-4 pb-0">
          <div className="relative h-64 overflow-hidden arch-mask shadow-inner bg-stone-200">
            <img 
            src={attraction.imageUrl} 
            alt={attraction.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-amber-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
      </div>
      
      <div className="pt-6 px-6 text-center">
        <h3 className="text-2xl font-heading text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
          {attraction.name}
        </h3>
        <div className="divider-ornate opacity-50 w-2/3 mx-auto mb-3"></div>
        <p className="text-stone-600 line-clamp-3 text-sm leading-relaxed mb-4 font-serif italic">
          {attraction.description}
        </p>
        <button
          className="text-amber-700 text-xs font-bold uppercase tracking-[0.2em] border-b border-amber-300 pb-1 hover:text-amber-900 hover:border-amber-600 transition-all"
        >
          View Details
        </button>
      </div>
    </div>
  );
};
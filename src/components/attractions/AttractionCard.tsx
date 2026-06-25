import React from 'react';
import type { Attraction } from '../../types';
import { PLACEHOLDER_IMAGE } from '../../constants';

interface AttractionCardProps {
  attraction: Attraction;
  onSelect: (attraction: Attraction) => void;
}

export const AttractionCard: React.FC<AttractionCardProps> = React.memo(({ attraction, onSelect }) => {
  return (
    <div 
      className="group card-heritage overflow-hidden cursor-pointer flex flex-col"
      onClick={() => onSelect(attraction)}
    >
      <div className="p-3 sm:p-4 pb-0">
        <div className="relative h-44 sm:h-52 lg:h-56 overflow-hidden arch-mask bg-parchment-dark">
          <img 
            src={attraction.imageUrl} 
            alt={attraction.name} 
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE; }}
            className="w-full h-full object-cover img-heritage transition-transform duration-700 group-hover:scale-105" 
          />
        </div>
      </div>
      
      <div className="pt-4 sm:pt-5 px-4 sm:px-6 pb-4 sm:pb-6 text-center flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-heading text-ink mb-1.5 sm:mb-2 group-hover:text-gold transition-colors duration-300">
          {attraction.name}
        </h3>
        <div className="divider-ornate w-2/3 mx-auto mb-2 sm:mb-3"><span>◆</span></div>
        <p className="text-stone-warm line-clamp-3 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 italic flex-grow">
          {attraction.description}
        </p>
        <button className="btn-heritage text-xs sm:text-sm py-2 px-5 sm:px-6 mx-auto">
          View Details
        </button>
      </div>
    </div>
  );
});
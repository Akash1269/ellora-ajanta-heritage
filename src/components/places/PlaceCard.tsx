import React from 'react';
import type { Place } from '../../types';
import { StarIcon } from '../icons';

interface PlaceCardProps {
  place: Place;
}

export const PlaceCard: React.FC<PlaceCardProps> = React.memo(({ place }) => {
  return (
    <div className="card-heritage p-4 sm:p-5 lg:p-6 flex flex-col items-start text-left h-full group">
      <div className="w-full flex justify-between items-start mb-2 sm:mb-3">
        <h3 className="text-lg sm:text-xl font-heading text-ink group-hover:text-gold transition-colors duration-300">{place.name}</h3>
      </div>
      <div className="mb-3 sm:mb-4 w-full">
        <div className="h-px w-full bg-gold/20 mb-2 sm:mb-3 group-hover:bg-gold/50 transition-colors duration-300"></div>
        <p className="text-gold font-medium flex items-center text-[10px] sm:text-xs uppercase tracking-wider">
          <StarIcon className="w-3 h-3 mr-1.5" /> {place.specialty}
        </p>
      </div>
      <p className="text-stone-warm text-xs sm:text-sm leading-relaxed">
        {place.description}
      </p>
    </div>
  );
});
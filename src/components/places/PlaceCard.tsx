import React from 'react';
import type { Place } from '../../types';
import { StarIcon } from '../icons';

interface PlaceCardProps {
  place: Place;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  return (
    <div className="bg-stone-900 border border-stone-700 p-6 flex flex-col items-start text-left h-full hover:border-amber-600 transition-colors duration-300 shadow-lg group">
      <div className="w-full flex justify-between items-start mb-2">
        <h3 className="text-xl font-heading text-amber-50 group-hover:text-amber-400 transition-colors">{place.name}</h3>
      </div>
      <div className="mb-4 w-full">
         <div className="h-px w-full bg-stone-700 mb-3 group-hover:bg-amber-800 transition-colors"></div>
        <p className="text-amber-500 font-semibold flex items-center text-xs uppercase tracking-wider">
          <StarIcon className="w-3 h-3 mr-1.5" /> {place.specialty}
        </p>
      </div>
      <p className="text-stone-400 text-sm leading-relaxed font-serif">
        {place.description}
      </p>
    </div>
  );
};
import React from 'react';
import type { Place } from '../types';

interface PlaceCardProps {
  place: Place;
}

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
  </svg>
);


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
import React, { useEffect } from 'react';
import type { Attraction } from '../../types';
import { CloseIcon, HistoryIcon, SunIcon, CompassIcon } from '../icons';

interface AttractionDetailModalProps {
  attraction: Attraction;
  onClose: () => void;
}

export const AttractionDetailModal: React.FC<AttractionDetailModalProps> = ({ attraction, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center sm:p-4 md:p-6"
    >
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container - Responsive Split Layout */}
      <div 
        className="relative w-full max-w-6xl h-full sm:h-auto sm:max-h-[90vh] bg-[#fffaf0] shadow-2xl overflow-hidden flex flex-col md:flex-row rounded-none sm:rounded-lg animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Mobile Close Button (Sticky) */}
        <button 
            onClick={onClose}
            className="md:hidden absolute top-4 right-4 z-20 bg-stone-900/50 hover:bg-stone-900 text-white p-2 rounded-full backdrop-blur-md transition-all"
            aria-label="Close"
        >
            <CloseIcon className="w-6 h-6" />
        </button>

        {/* LEFT COLUMN: Hero Image */}
        <div className="w-full md:w-2/5 lg:w-1/2 h-64 md:h-auto relative bg-stone-800 shrink-0">
           <img 
            src={attraction.imageUrl} 
            alt={attraction.name} 
            className="w-full h-full object-cover opacity-90" 
           />
           {/* Gradient overlays for text readability/aesthetics */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#fffaf0] via-transparent to-transparent md:hidden" />
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#fffaf0] hidden md:block opacity-20" />
           
           {/* Decoration */}
           <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/20 pointer-events-none hidden md:block"></div>
        </div>

        {/* RIGHT COLUMN: Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto bg-heritage-pattern relative">
           
           {/* Desktop Close Button */}
           <div className="sticky top-0 right-0 z-10 flex justify-end p-4 pointer-events-none">
              <button 
                onClick={onClose}
                className="hidden md:flex pointer-events-auto items-center justify-center bg-white/80 hover:bg-amber-600 hover:text-white text-stone-500 p-2 rounded-full shadow-md transition-all border border-amber-100/50 backdrop-blur-sm"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
           </div>

           <div className="px-6 pb-12 md:px-10 md:pt-2 md:pb-16 -mt-12 md:mt-0 relative z-0">
               {/* Title Section */}
               <div className="mb-8">
                   <h2 className="text-3xl md:text-5xl font-heading text-stone-900 mb-3 leading-tight text-shadow-sm">
                    {attraction.name}
                   </h2>
                   <div className="h-1 w-24 bg-amber-500 rounded-full mb-6"></div>
                   
                   {/* Description with Drop Cap */}
                   <p className="text-lg text-stone-700 font-serif leading-relaxed italic">
                    <span className="float-left text-5xl font-heading text-amber-800 mr-2 mt-[-6px] leading-none">
                        {attraction.description.charAt(0)}
                    </span>
                    {attraction.description.slice(1)}
                   </p>
               </div>

               {/* Quick Info Grid */}
               <div className="grid grid-cols-1 gap-6 mb-10">
                  {/* Best Time Card */}
                  <div className="flex items-start p-4 bg-amber-50 border border-amber-100 rounded-sm shadow-sm">
                      <div className="p-2 bg-white rounded-full text-amber-600 mr-4 shadow-sm border border-amber-100">
                          <SunIcon className="w-5 h-5"/>
                      </div>
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-1">Best Time to Visit</h4>
                          <p className="text-stone-700 text-sm font-medium">{attraction.bestTimeToVisit}</p>
                      </div>
                  </div>
               </div>

               {/* History Section */}
               <div className="mb-10 relative">
                  <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-stone-300 to-transparent rounded-full"></div>
                  <div className="pl-6">
                      <h3 className="flex items-center text-xl font-heading text-stone-800 mb-3">
                          <span className="text-2xl mr-2">📜</span> Historical Significance
                      </h3>
                      <p className="text-stone-600 leading-loose text-justify text-md border-l-2 border-stone-200 pl-4 py-2 italic bg-white/40 rounded-r-lg">
                          {attraction.history}
                      </p>
                  </div>
               </div>

               {/* Highlights Section */}
               <div className="bg-stone-800 text-stone-200 p-6 md:p-8 rounded-lg shadow-inner relative overflow-hidden">
                   {/* Decorative background for dark section */}
                   <div className="absolute top-0 right-0 p-10 opacity-5">
                       <CompassIcon className="w-32 h-32" />
                   </div>

                   <h3 className="text-xl font-heading text-amber-400 mb-6 flex items-center relative z-10">
                       <CompassIcon className="w-5 h-5 mr-3" /> Key Highlights
                   </h3>
                   
                   <ul className="grid sm:grid-cols-2 gap-4 relative z-10">
                       {attraction.keyFeatures.map((feature, idx) => (
                           <li key={idx} className="flex items-start text-sm md:text-base group">
                               <span className="text-amber-500 mr-2 mt-1 group-hover:scale-125 transition-transform duration-300">❖</span>
                               <span className="border-b border-stone-700 pb-1 group-hover:border-stone-500 transition-colors">{feature}</span>
                           </li>
                       ))}
                   </ul>
               </div>

           </div>
        </div>
      </div>
    </div>
  );
};

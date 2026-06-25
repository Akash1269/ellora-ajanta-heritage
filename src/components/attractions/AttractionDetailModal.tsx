import React, { useEffect, useRef } from 'react';
import type { Attraction } from '../../types';
import { CloseIcon, SunIcon, CompassIcon } from '../icons';

interface AttractionDetailModalProps {
  attraction: Attraction;
  onClose: () => void;
}

export const AttractionDetailModal: React.FC<AttractionDetailModalProps> = ({ attraction, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Focus the modal on open
    modalRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="attraction-modal-title"
      ref={modalRef}
      tabIndex={-1}
    >
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container - Responsive Split Layout */}
      <div 
        className="relative w-full max-w-6xl h-full sm:h-auto sm:max-h-[90vh] bg-parchment shadow-2xl overflow-hidden flex flex-col md:flex-row rounded-none sm:rounded-xl fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Mobile Close Button (Sticky) */}
        <button 
            onClick={onClose}
            className="md:hidden absolute top-4 right-4 z-20 bg-ink/50 hover:bg-ink text-white p-2 rounded-full backdrop-blur-md transition-all"
            aria-label="Close"
        >
            <CloseIcon className="w-6 h-6" />
        </button>

        {/* LEFT COLUMN: Hero Image */}
        <div className="w-full md:w-2/5 lg:w-1/2 h-64 md:h-auto relative bg-parchment-dark shrink-0">
           <img 
            src={attraction.imageUrl} 
            alt={attraction.name} 
            className="w-full h-full object-cover img-heritage" 
           />
           {/* Gradient overlays for text readability/aesthetics */}
           <div className="absolute inset-0 bg-gradient-to-t from-parchment via-transparent to-transparent md:hidden" />
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-parchment hidden md:block opacity-20" />
        </div>

        {/* RIGHT COLUMN: Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto bg-heritage-pattern relative">
           
           {/* Desktop Close Button */}
           <div className="sticky top-0 right-0 z-10 flex justify-end p-4 pointer-events-none">
              <button 
                onClick={onClose}
                className="hidden md:flex pointer-events-auto items-center justify-center bg-white/80 hover:bg-gold hover:text-white text-stone-warm p-2 rounded-full shadow-md transition-all border border-gold/20 backdrop-blur-sm"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
           </div>

           <div className="px-6 pb-12 md:px-10 md:pt-2 md:pb-16 -mt-12 md:mt-0 relative z-0">
               {/* Title Section */}
               <div className="mb-8">
                   <h2 id="attraction-modal-title" className="text-3xl md:text-5xl font-heading text-ink mb-3 leading-tight">
                    {attraction.name}
                   </h2>
                   <div className="h-0.5 w-20 bg-gold rounded-full mb-6"></div>
                   
                   {/* Description with Drop Cap */}
                   <p className="text-base sm:text-lg text-ink/80 font-serif leading-relaxed italic">
                    <span className="float-left text-5xl font-heading text-gold mr-2 mt-[-6px] leading-none">
                        {attraction.description.charAt(0)}
                    </span>
                    {attraction.description.slice(1)}
                   </p>
               </div>

               {/* Quick Info Grid */}
               <div className="grid grid-cols-1 gap-6 mb-10">
                  {/* Best Time Card */}
                  <div className="flex items-start p-4 bg-gold-muted border border-gold/20 rounded-lg">
                      <div className="p-2 bg-white rounded-full text-gold mr-4 shadow-sm border border-gold/20">
                          <SunIcon className="w-5 h-5"/>
                      </div>
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-1">Best Time to Visit</h4>
                          <p className="text-ink/80 text-sm font-medium">{attraction.bestTimeToVisit}</p>
                      </div>
                  </div>
               </div>

               {/* History Section */}
               <div className="mb-10 relative">
                  <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/40 to-transparent rounded-full"></div>
                  <div className="pl-6">
                      <h3 className="flex items-center text-xl font-heading text-ink mb-3">
                          <span className="text-lg mr-2">◆</span> Historical Significance
                      </h3>
                      <p className="text-ink/70 leading-loose text-justify text-sm sm:text-base border-l-2 border-gold/20 pl-4 py-2 italic">
                          {attraction.history}
                      </p>
                  </div>
               </div>

               {/* Highlights Section */}
               <div className="bg-parchment-dark p-6 md:p-8 rounded-lg border border-gold/15 relative overflow-hidden">
                   <h3 className="text-xl font-heading text-ink mb-5 flex items-center">
                       <CompassIcon className="w-5 h-5 mr-3 text-gold" /> Key Highlights
                   </h3>
                   
                   <ul className="grid sm:grid-cols-2 gap-3">
                       {attraction.keyFeatures.map((feature, idx) => (
                           <li key={idx} className="flex items-start text-sm md:text-base group">
                               <span className="text-gold mr-2 mt-0.5">◆</span>
                               <span className="text-ink/80 font-serif">{feature}</span>
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

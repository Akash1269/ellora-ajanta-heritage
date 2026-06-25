
import React, { useEffect, useRef } from 'react';
import type { ItineraryDetail } from '../../types';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { CloseIcon, ActivityIcon } from '../icons';

interface ItineraryDetailModalProps {
  itinerary: ItineraryDetail | null;
  loading: boolean;
  onClose: () => void;
}

export const ItineraryDetailModal: React.FC<ItineraryDetailModalProps> = ({ itinerary, loading, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
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
      className="fixed inset-0 bg-ink/70 backdrop-blur-sm z-50 flex items-center justify-center p-0 sm:p-4 overflow-hidden"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="itinerary-modal-title"
      ref={modalRef}
      tabIndex={-1}
    >
      <div 
        className="relative bg-parchment w-full max-w-4xl h-full sm:h-[90vh] flex flex-col shadow-2xl sm:rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed */}
        <div className="shrink-0 bg-white p-6 flex justify-between items-start border-b border-gold/20 relative">
           <div className="relative z-10 pr-10">
               {itinerary && <span className="text-gold uppercase tracking-widest text-xs font-bold mb-1 block">Your Curated Journey</span>}
               <h2 id="itinerary-modal-title" className="text-2xl sm:text-3xl font-heading text-ink leading-tight">
                   {loading ? 'Loading...' : itinerary?.title || 'Details'}
               </h2>
           </div>
           <button 
            onClick={onClose}
            className="text-stone-warm hover:text-ink transition-colors bg-parchment-dark p-2 rounded-full border border-gold/20"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-parchment">
          {loading ? (
            <div className="h-full flex items-center justify-center">
                 <LoadingSpinner/>
            </div>
          ) : !itinerary ? (
            <div className="text-center py-20">
                <h3 className="text-xl font-semibold text-red-800 font-serif">Itinerary not found.</h3>
            </div>
          ) : (
            <div className="p-4 sm:p-8 md:p-10">
               {itinerary.days.map((day, _dayIndex) => (
                   <div key={day.day} className="mb-12 last:mb-0 relative">
                       {/* Day Header */}
                       <div className="flex items-center mb-8 sticky top-0 bg-parchment/95 z-20 py-2 backdrop-blur-sm">
                           <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center font-heading text-lg border-3 border-parchment shadow-md shrink-0">
                               {day.day}
                           </div>
                           <div className="ml-4">
                               <span className="text-xs font-bold text-gold uppercase tracking-wider block">Day {day.day}</span>
                               <h3 className="text-xl sm:text-2xl font-heading text-ink">{day.title}</h3>
                           </div>
                           <div className="flex-grow ml-4 h-px bg-gold/20"></div>
                       </div>

                       {/* Timeline Line */}
                       <div className="absolute left-5 top-12 bottom-0 w-px bg-gold/20 -z-10"></div>

                       {/* Activities */}
                       <div className="space-y-6 pl-12 sm:pl-16 relative">
                           {day.activities.map((activity, actIndex) => {
                               const isTravel = activity.type === 'travel';
                               const isMeal = activity.type === 'meal';
                               const isRest = activity.type === 'rest';

                               return (
                                   <div key={actIndex} className="relative group">
                                       {/* Timeline Dot/Icon */}
                                       <div className={`absolute -left-[3.25rem] sm:-left-[4.25rem] w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 
                                            ${isTravel ? 'bg-parchment-dark border-stone-warm/30 text-stone-warm' : 
                                              isMeal ? 'bg-gold-muted border-gold/30 text-gold' :
                                              'bg-white border-gold/40 text-gold'}`}>
                                           <ActivityIcon type={activity.type} />
                                       </div>

                                       <div className={`flex flex-col sm:flex-row gap-4 p-4 rounded-lg border transition-all hover:shadow-md
                                            ${isTravel ? 'bg-parchment-dark/50 border-stone-warm/20 border-dashed' : 
                                              isMeal ? 'bg-gold-muted/50 border-gold/20' :
                                              isRest ? 'bg-parchment-dark/30 border-gold/10' :
                                              'bg-white border-gold/15 shadow-sm'}`}>
                                            
                                            {/* Time & Title Column */}
                                            <div className="flex-1">
                                                <div className="flex items-center text-xs font-bold tracking-wide mb-1">
                                                    <span className={`px-2 py-0.5 rounded-full ${isTravel ? 'bg-parchment-dark text-stone-warm' : 'bg-gold-muted text-gold'}`}>
                                                        {activity.time}
                                                    </span>
                                                    {activity.duration && (
                                                        <span className="ml-2 text-stone-400 font-normal italic">
                                                            {activity.duration}
                                                        </span>
                                                    )}
                                                </div>
                                                <h4 className={`text-lg font-heading mb-2 ${isMeal ? 'text-gold' : 'text-ink'}`}>
                                                    {activity.title}
                                                </h4>
                                                <p className="text-stone-600 text-sm font-serif leading-relaxed">
                                                    {activity.description}
                                                </p>
                                            </div>

                                            {/* Image (if exists) */}
                                            {activity.imageUrl && (
                                                <div className="w-full sm:w-32 h-32 sm:h-24 shrink-0 rounded overflow-hidden border border-stone-200 bg-stone-100">
                                                    <img 
                                                        src={activity.imageUrl} 
                                                        alt={activity.title} 
                                                        loading="lazy"
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                </div>
                                            )}
                                       </div>
                                   </div>
                               );
                           })}
                       </div>
                   </div>
               ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

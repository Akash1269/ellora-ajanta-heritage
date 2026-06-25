
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
      className="fixed inset-0 bg-stone-900/90 backdrop-blur-md z-50 flex items-center justify-center p-0 sm:p-4 overflow-hidden"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="itinerary-modal-title"
      ref={modalRef}
      tabIndex={-1}
    >
      <div 
        className="relative bg-[#fffaf0] w-full max-w-4xl h-full sm:h-[90vh] flex flex-col shadow-2xl border-x-0 sm:border-x-8 border-amber-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed */}
        <div className="shrink-0 bg-stone-900 text-amber-50 p-6 flex justify-between items-start border-b-4 border-amber-600 relative overflow-hidden">
           <div className="absolute inset-0 bg-heritage-pattern opacity-5"></div>
           <div className="relative z-10 pr-10">
               {itinerary && <span className="text-amber-500 uppercase tracking-widest text-xs font-bold mb-1 block">Your Curated Journey</span>}
               <h2 id="itinerary-modal-title" className="text-2xl sm:text-4xl font-heading leading-tight">
                   {loading ? 'Loading...' : itinerary?.title || 'Details'}
               </h2>
           </div>
           <button 
            onClick={onClose}
            className="text-amber-500 hover:text-white transition-colors bg-stone-800 p-2 rounded-full border border-stone-700"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-[#fffaf0] custom-scrollbar">
          {loading ? (
            <div className="h-full flex items-center justify-center">
                 <LoadingSpinner/>
            </div>
          ) : !itinerary ? (
            <div className="text-center py-20">
                <h3 className="text-xl font-semibold text-red-800 font-serif">Itinerary not found.</h3>
            </div>
          ) : (
            <div className="p-4 sm:p-8 md:p-12">
               {itinerary.days.map((day, _dayIndex) => (
                   <div key={day.day} className="mb-12 last:mb-0 relative">
                       {/* Day Header */}
                       <div className="flex items-center mb-8 sticky top-0 bg-[#fffaf0]/95 z-20 py-2 backdrop-blur-sm">
                           <div className="w-12 h-12 rounded-full bg-amber-800 text-white flex items-center justify-center font-heading text-xl border-4 border-[#fffaf0] shadow-lg shrink-0">
                               {day.day}
                           </div>
                           <div className="ml-4">
                               <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">Day {day.day}</span>
                               <h3 className="text-2xl font-heading text-stone-900">{day.title}</h3>
                           </div>
                           <div className="flex-grow ml-4 h-px bg-stone-300"></div>
                       </div>

                       {/* Timeline Line */}
                       <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-stone-300 -z-10"></div>

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
                                            ${isTravel ? 'bg-stone-200 border-stone-400 text-stone-600' : 
                                              isMeal ? 'bg-orange-100 border-orange-300 text-orange-600' :
                                              'bg-white border-amber-500 text-amber-600'}`}>
                                           <ActivityIcon type={activity.type} />
                                       </div>

                                       <div className={`flex flex-col sm:flex-row gap-4 p-4 rounded-lg border transition-all hover:shadow-lg
                                            ${isTravel ? 'bg-stone-50 border-stone-200 border-dashed' : 
                                              isMeal ? 'bg-orange-50 border-orange-100' :
                                              isRest ? 'bg-stone-50 border-stone-100' :
                                              'bg-white border-stone-200 shadow-sm'}`}>
                                            
                                            {/* Time & Title Column */}
                                            <div className="flex-1">
                                                <div className="flex items-center text-xs font-bold tracking-wide mb-1">
                                                    <span className={`px-2 py-0.5 rounded ${isTravel ? 'bg-stone-200 text-stone-700' : 'bg-amber-100 text-amber-800'}`}>
                                                        {activity.time}
                                                    </span>
                                                    {activity.duration && (
                                                        <span className="ml-2 text-stone-400 font-normal italic">
                                                            {activity.duration}
                                                        </span>
                                                    )}
                                                </div>
                                                <h4 className={`text-lg font-heading mb-2 ${isMeal ? 'text-orange-900' : 'text-stone-800'}`}>
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

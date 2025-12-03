
import React from 'react';
import type { ItineraryDetail, ActivityType } from '../types';
import { LoadingSpinner } from './LoadingSpinner';

interface ItineraryDetailModalProps {
  itinerary: ItineraryDetail | null;
  loading: boolean;
  onClose: () => void;
}

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// Icons based on activity type
const ActivityIcon: React.FC<{ type: ActivityType }> = ({ type }) => {
    const iconClass = "w-5 h-5";
    switch (type) {
        case 'meal':
            return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>; // Book/Menu generic
        case 'travel':
            return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>; // Move/Transit
        case 'shopping':
             return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>;
        case 'rest':
            return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>;
        default: // sightseeing
            return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;
    }
};

export const ItineraryDetailModal: React.FC<ItineraryDetailModalProps> = ({ itinerary, loading, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-stone-900/90 backdrop-blur-md z-50 flex items-center justify-center p-0 sm:p-4 overflow-hidden"
      onClick={onClose}
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
               <h2 className="text-2xl sm:text-4xl font-heading leading-tight">
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
               {itinerary.days.map((day, dayIndex) => (
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

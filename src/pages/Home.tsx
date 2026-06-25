

import React from 'react';
import { Hero } from '../components/common/Hero';
import { MapSection } from '../components/common/MapSection';
import { Link } from 'react-router-dom';
import type { HomeContent } from '../types';
import { PlaneIcon, TrainIcon, BusIcon, WeatherSunIcon, RainIcon } from '../components/icons';

interface HomeProps {
  content: HomeContent | null;
}

export const Home: React.FC<HomeProps> = ({ content }) => {
  if (!content) return <Hero />; // Fallback if data not loaded yet

  return (
    <div className="animate-fade-in pb-0">
      <Hero />
      
      {/* 1. Timeline Section (History) */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-heading text-stone-900 mb-2">Echoes of Time</h2>
            <div className="divider-ornate max-w-xs mx-auto mb-4"><span>📜</span></div>
            <p className="text-stone-600 italic">A glance at the pivotal moments that shaped the city.</p>
        </div>
        <div className="relative border-l-4 border-amber-300 ml-4 sm:ml-1/2 space-y-12 sm:space-y-0">
           {content.historyTimeline.map((event, idx) => (
             <div key={idx} className={`relative pl-8 sm:pl-0 flex flex-col sm:flex-row items-center ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                {/* Dot */}
                <div className="absolute left-[-11px] sm:left-1/2 sm:-ml-[11px] w-5 h-5 bg-amber-600 rounded-full border-4 border-stone-50 z-10"></div>
                
                {/* Content */}
                <div className={`w-full sm:w-1/2 p-4 ${idx % 2 === 0 ? 'sm:pl-12 text-left' : 'sm:pr-12 sm:text-right'}`}>
                   <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 font-bold text-sm rounded-full mb-2 border border-amber-200">{event.year}</span>
                   <h3 className="text-xl font-heading text-stone-800 mb-2">{event.title}</h3>
                   <p className="text-stone-600 text-sm leading-relaxed">{event.description}</p>
                </div>
                <div className="hidden sm:block sm:w-1/2"></div>
             </div>
           ))}
        </div>
        <div className="text-center mt-12">
            <Link to="/history" className="text-amber-700 hover:text-amber-900 font-bold uppercase tracking-widest text-xs border-b-2 border-amber-300 pb-1">Read Full History</Link>
        </div>
      </section>

      {/* 2. Best Time & Travel (Combined Practical Info) */}
      <section className="bg-stone-900 text-stone-100 py-20 bg-jaali relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <span className="text-amber-500 uppercase tracking-widest text-xs font-bold">Practical Information</span>
                 <h2 className="text-3xl sm:text-4xl font-heading text-amber-50 mt-2">Plan Your Visit</h2>
            </div>

            {/* Weather Seasons */}
            <div className="mb-16">
                 <h3 className="text-2xl font-serif text-amber-100 mb-8 border-l-4 border-amber-500 pl-4">Best Time to Visit</h3>
                 <div className="grid md:grid-cols-3 gap-6">
                    {content.seasons.map((season, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-stone-800 rounded-full border border-amber-500/30">
                                   {season.name === 'Winter' && <WeatherSunIcon />}
                                   {season.name === 'Monsoon' && <RainIcon />}
                                   {season.name === 'Summer' && <span className="text-3xl">♨️</span>}
                                </div>
                                <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider 
                                    ${season.type.includes('Peak') ? 'bg-amber-600 text-white' : 
                                      season.type.includes('Shoulder') ? 'bg-teal-700 text-teal-100' : 
                                      'bg-stone-700 text-stone-300'}`}>
                                    {season.type}
                                </span>
                            </div>
                            <h4 className="text-xl font-heading text-amber-200 mb-1">{season.name}</h4>
                            <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">{season.months} • {season.temperature}</p>
                            <p className="text-stone-200 text-base leading-relaxed font-serif">
                                {season.description}
                            </p>
                        </div>
                    ))}
                 </div>
            </div>

            {/* How to Reach */}
            <div>
                <h3 className="text-2xl font-serif text-amber-100 mb-8 border-l-4 border-amber-500 pl-4">How to Reach</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {content.travelInfo.map((info, idx) => (
                        <div key={idx} className="flex flex-col p-6 bg-stone-800 rounded-lg shadow-lg hover:bg-stone-700 transition-colors border-t-4 border-stone-600 hover:border-amber-500">
                            <div className="text-amber-500 mb-4">
                                {info.mode.toLowerCase().includes('flight') && <PlaneIcon />}
                                {info.mode.toLowerCase().includes('train') && <TrainIcon />}
                                {info.mode.toLowerCase().includes('road') && <BusIcon />}
                            </div>
                            <h4 className="text-lg font-bold text-amber-100 mb-2">{info.mode}</h4>
                            <p className="text-stone-300 text-base leading-relaxed">{info.details}</p>
                        </div>
                    ))}
                </div>
            </div>
         </div>
      </section>

      {/* 3. Nearby Attractions (Horizontal Scroll) */}
      <section className="py-20 bg-amber-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 mb-10">
              <h2 className="text-4xl font-heading text-stone-900">Excursions Nearby</h2>
              <p className="text-stone-600 mt-2">Beyond the city gates lies a world of wonders.</p>
          </div>
          
          <div className="flex overflow-x-auto pb-8 px-4 sm:px-8 gap-6 snap-x hide-scrollbar">
              {content.nearbyPlaces.map((place, idx) => (
                  <div key={idx} className="snap-center shrink-0 w-80 bg-white p-3 shadow-xl transform rotate-1 hover:rotate-0 transition-all duration-300 border border-stone-200">
                      <div className="h-48 overflow-hidden mb-4 bg-stone-200">
                          <img src={`https://picsum.photos/seed/${place.name}/400/300`} alt={place.name} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                      </div>
                      <h3 className="text-2xl font-heading text-stone-800 mb-1">{place.name}</h3>
                      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-3">{place.distance}</span>
                      <p className="text-stone-600 text-sm leading-relaxed mb-2 font-serif">
                          {place.description}
                      </p>
                  </div>
              ))}
          </div>
      </section>

      {/* 4. Map Section */}
      <MapSection locations={content.mapLocations} />

      {/* 5. Culinary Delights */}
      <section className="py-20 bg-stone-900 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
         <div className="max-w-5xl mx-auto px-4 relative z-10">
             <span className="text-amber-500 uppercase tracking-[0.3em] text-sm">Gastronomy</span>
             <h2 className="text-4xl md:text-5xl font-heading text-amber-50 mt-2 mb-12">The Taste of Aurangabad</h2>
             
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {content.foodItems.map((item, idx) => (
                     <div key={idx} className="group">
                         <div className="w-40 h-40 mx-auto rounded-full border-4 border-amber-600/30 overflow-hidden mb-6 group-hover:border-amber-500 transition-colors shadow-2xl">
                             <img src={`https://picsum.photos/seed/${item.name}food/400/400`} alt={item.name} loading="lazy" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                         </div>
                         <h3 className="text-xl font-heading text-amber-200 mb-2 group-hover:text-amber-400">{item.name}</h3>
                         <p className="text-stone-400 text-sm italic px-4">{item.description}</p>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      {/* 6. Inspiration Gallery */}
      <section className="py-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="relative group overflow-hidden aspect-square bg-stone-200">
                      <img 
                        src={`https://picsum.photos/seed/aurangabad${i}/600/600`} 
                        alt="Gallery" 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" 
                      />
                      <div className="absolute inset-0 bg-amber-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-heading text-lg tracking-widest border border-white px-4 py-2">EXPLORE</span>
                      </div>
                  </div>
              ))}
          </div>
      </section>

      {/* Navigation Cards (Existing) */}
      <section className="py-20 px-4 max-w-7xl mx-auto bg-[#fffaf0]">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-heading text-stone-900 mb-4">Plan Your Journey</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
            <Link to="/attractions" className="group relative overflow-hidden rounded-lg shadow-lg aspect-[3/4]">
                 <img src="https://picsum.photos/seed/bibi-maqbara/600/800" alt="Attractions" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                     <div>
                         <h3 className="text-2xl text-amber-400 font-heading mb-2">Monuments</h3>
                         <p className="text-stone-300 text-sm font-serif">Explore the architectural marvels.</p>
                     </div>
                 </div>
            </Link>
            <Link to="/itineraries" className="group relative overflow-hidden rounded-lg shadow-lg aspect-[3/4]">
                 <img src="https://picsum.photos/seed/ajanta-paintings/600/800" alt="Itineraries" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                     <div>
                         <h3 className="text-2xl text-amber-400 font-heading mb-2">Curated Trips</h3>
                         <p className="text-stone-300 text-sm font-serif">Plans crafted for your perfect journey.</p>
                     </div>
                 </div>
            </Link>
             <Link to="/places" className="group relative overflow-hidden rounded-lg shadow-lg aspect-[3/4]">
                 <img src="https://picsum.photos/seed/aurangabad-hotel/600/800" alt="Stay and Dine" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                     <div>
                         <h3 className="text-2xl text-amber-400 font-heading mb-2">Royal Stays</h3>
                         <p className="text-stone-300 text-sm font-serif">Luxury hotels and authentic cuisine.</p>
                     </div>
                 </div>
            </Link>
        </div>
      </section>
    </div>
  );
};

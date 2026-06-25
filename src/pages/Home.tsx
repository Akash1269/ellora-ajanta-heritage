
import React from 'react';
import { Hero } from '../components/common/Hero';
import { MapSection } from '../components/common/MapSection';
import { SectionDivider } from '../components/common/SectionDivider';
import { SectionHeading } from '../components/common/SectionHeading';
import { HeritageButton } from '../components/common/HeritageButton';
import { Link } from 'react-router-dom';
import type { HomeContent } from '../types';
import { PlaneIcon, TrainIcon, BusIcon, WeatherSunIcon, RainIcon } from '../components/icons';
import { PLACEHOLDER_IMAGE } from '../constants';

interface HomeProps {
  content: HomeContent | null;
}

export const Home: React.FC<HomeProps> = ({ content }) => {
  if (!content) return <Hero />;

  return (
    <div className="fade-in">
      <Hero />
      
      {/* 1. Timeline Section */}
      <section className="py-16 sm:py-24 px-4 bg-parchment">
        <div className="max-w-5xl mx-auto">
          <SectionHeading 
            title="Echoes of Time" 
            subtitle="A glance at the pivotal moments that shaped the city."
            symbol="◆"
          />
          <div className="relative ml-4 sm:ml-0">
            {/* Vertical connecting line - mobile (left) and desktop (center) */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold/30 sm:left-1/2 sm:-ml-px"></div>

            {content.historyTimeline.map((event, idx) => (
              <div key={idx} className={`relative pl-8 sm:pl-0 flex flex-col sm:flex-row items-start sm:items-center mb-12 last:mb-0 ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                {/* Dot - mobile (left) and desktop (center) */}
                <div className="absolute left-[-5px] top-1 sm:top-auto sm:left-1/2 sm:-ml-[7px] w-3.5 h-3.5 bg-gold rounded-full border-2 border-parchment z-10"></div>
                
                {/* Content */}
                <div className={`w-full sm:w-[45%] ${idx % 2 === 0 ? 'sm:pl-10 text-left' : 'sm:pr-10 sm:text-right'}`}>
                  <span className="inline-block px-3 py-1 bg-gold-muted text-gold font-bold text-sm rounded-full mb-2">{event.year}</span>
                  <h3 className="text-xl font-heading text-ink mb-2">{event.title}</h3>
                  <p className="text-stone-warm text-sm leading-relaxed font-serif">{event.description}</p>
                </div>
                {/* Spacer for center column */}
                <div className="hidden sm:block sm:w-[10%]"></div>
                <div className="hidden sm:block sm:w-[45%]"></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <HeritageButton to="/history">Read Full History</HeritageButton>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 2. Best Time & Travel */}
      <section className="py-16 sm:py-24 bg-parchment-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Plan Your Visit" 
            subtitle="Everything you need to prepare for your journey."
          />

          {/* Weather Seasons */}
          <div className="mb-16">
            <h3 className="text-2xl font-heading text-ink mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-gold rounded-full"></span>
              Best Time to Visit
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {content.seasons.map((season, idx) => (
                <div key={idx} className="card-heritage p-6 group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-parchment-dark rounded-full">
                      {season.name === 'Winter' && <WeatherSunIcon />}
                      {season.name === 'Monsoon' && <RainIcon />}
                      {season.name === 'Summer' && <span className="text-2xl">☀️</span>}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider 
                      ${season.type.includes('Peak') ? 'bg-gold/15 text-gold border border-gold/30' : 
                        season.type.includes('Shoulder') ? 'bg-terracotta/10 text-terracotta border border-terracotta/30' : 
                        'bg-stone-warm/10 text-stone-warm border border-stone-warm/30'}`}>
                      {season.type}
                    </span>
                  </div>
                  <h4 className="text-xl font-heading text-ink mb-1">{season.name}</h4>
                  <p className="text-xs text-stone-warm uppercase tracking-wider mb-3">{season.months} • {season.temperature}</p>
                  <p className="text-ink/80 text-sm leading-relaxed font-serif">
                    {season.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* How to Reach */}
          <div>
            <h3 className="text-2xl font-heading text-ink mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-gold rounded-full"></span>
              How to Reach
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {content.travelInfo.map((info, idx) => (
                <div key={idx} className="card-heritage p-6 border-t-3 border-t-gold/40 hover:border-t-gold group">
                  <div className="text-gold mb-4">
                    {info.mode.toLowerCase().includes('flight') && <PlaneIcon />}
                    {info.mode.toLowerCase().includes('train') && <TrainIcon />}
                    {info.mode.toLowerCase().includes('road') && <BusIcon />}
                  </div>
                  <h4 className="text-lg font-heading text-ink mb-2">{info.mode}</h4>
                  <p className="text-stone-warm text-sm leading-relaxed font-serif">{info.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 3. Nearby Attractions */}
      <section className="py-16 sm:py-24 bg-parchment overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <SectionHeading 
            title="Excursions Nearby" 
            subtitle="Beyond the city gates lies a world of wonders."
          />
        </div>
        
        <div className="flex overflow-x-auto pb-8 px-4 sm:px-8 gap-6 snap-x hide-scrollbar">
          {content.nearbyPlaces.map((place, idx) => (
            <div key={idx} className="snap-center shrink-0 w-72 sm:w-80 card-heritage overflow-hidden">
              <div className="h-48 overflow-hidden bg-parchment-dark">
                <img 
                  src={`https://picsum.photos/seed/${place.name}/400/300`} 
                  alt={place.name} 
                  loading="lazy" 
                  onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE; }} 
                  className="w-full h-full object-cover img-heritage transition-transform duration-700 hover:scale-105" 
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-heading text-ink mb-1">{place.name}</h3>
                <span className="text-xs font-medium text-gold uppercase tracking-wider block mb-3">{place.distance}</span>
                <p className="text-stone-warm text-sm leading-relaxed font-serif">
                  {place.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* 4. Map Section */}
      <MapSection locations={content.mapLocations} />

      <SectionDivider />

      {/* 5. Culinary Delights */}
      <section className="py-16 sm:py-24 bg-parchment-dark text-center">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading 
            title="The Taste of Aurangabad" 
            subtitle="A culinary journey through the Deccan's finest flavors."
            symbol="❋"
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {content.foodItems.map((item, idx) => (
              <div key={idx} className="group">
                <div className="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full border-3 border-gold/30 overflow-hidden mb-4 group-hover:border-gold transition-colors duration-300 shadow-lg">
                  <img 
                    src={`https://picsum.photos/seed/${item.name}food/400/400`} 
                    alt={item.name} 
                    loading="lazy" 
                    onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE; }} 
                    className="w-full h-full object-cover img-heritage" 
                  />
                </div>
                <h3 className="text-lg font-heading text-ink mb-1 group-hover:text-gold transition-colors duration-300">{item.name}</h3>
                <p className="text-stone-warm text-sm italic font-serif px-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 6. Inspiration Gallery */}
      <section className="py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-1.5">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="relative group overflow-hidden aspect-square bg-parchment-dark">
              <img 
                src={`https://picsum.photos/seed/aurangabad${i}/600/600`} 
                alt="Gallery" 
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 img-heritage group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-heading text-sm sm:text-base tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/60 px-3 py-1.5 rounded-full">EXPLORE</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 sm:py-24 px-4 max-w-7xl mx-auto bg-parchment">
        <SectionHeading title="Plan Your Journey" />
        
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          <Link to="/attractions" className="group relative overflow-hidden rounded-xl shadow-lg aspect-[3/4]">
            <img src="https://picsum.photos/seed/bibi-maqbara/600/800" alt="Attractions" loading="lazy" className="w-full h-full object-cover img-heritage transition-transform duration-700 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl text-gold-light font-heading mb-2">Monuments</h3>
                <p className="text-white/80 text-sm font-serif">Explore the architectural marvels.</p>
              </div>
            </div>
          </Link>
          <Link to="/itineraries" className="group relative overflow-hidden rounded-xl shadow-lg aspect-[3/4]">
            <img src="https://picsum.photos/seed/ajanta-paintings/600/800" alt="Itineraries" loading="lazy" className="w-full h-full object-cover img-heritage transition-transform duration-700 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl text-gold-light font-heading mb-2">Curated Trips</h3>
                <p className="text-white/80 text-sm font-serif">Plans crafted for your perfect journey.</p>
              </div>
            </div>
          </Link>
          <Link to="/places" className="group relative overflow-hidden rounded-xl shadow-lg aspect-[3/4]">
            <img src="https://picsum.photos/seed/aurangabad-hotel/600/800" alt="Stay and Dine" loading="lazy" className="w-full h-full object-cover img-heritage transition-transform duration-700 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl text-gold-light font-heading mb-2">Royal Stays</h3>
                <p className="text-white/80 text-sm font-serif">Luxury hotels and authentic cuisine.</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};


import React from 'react';
import { Hero } from '../components/common/Hero';
import { MapSection } from '../components/common/MapSection';
import { SectionDivider } from '../components/common/SectionDivider';
import { SectionHeading } from '../components/common/SectionHeading';
import { HeritageButton } from '../components/common/HeritageButton';
import { Link } from 'react-router-dom';
import type { HomeContent } from '../types';
import { PlaneIcon, TrainIcon, BusIcon, WeatherSunIcon, RainIcon } from '../components/icons';
import { PLACEHOLDER_IMAGE, IMAGES } from '../constants';

const NEARBY_IMAGES: Record<string, string> = {
  'Shirdi': IMAGES.shirdiTemple,
  'Lonar Crater Lake': IMAGES.lonarLake,
  'Paithan': IMAGES.paithaniWeaving,
  'Khuldabad': IMAGES.daulatadabWalls
};

const FOOD_IMAGES: Record<string, string> = {
  'Naan Qalia': IMAGES.naan,
  'Tahri': IMAGES.tahri,
  'Aurangabadi Biryani': IMAGES.biryani,
  'Mawa Jalebi': IMAGES.jalebi
};

const GALLERY_IMAGES = [
  IMAGES.ajantaCaves,
  IMAGES.elloraKailasa,
  IMAGES.bibiKaMaqbara,
  IMAGES.daulatabad,
  IMAGES.cavePaintings,
  IMAGES.grishneshwar,
  IMAGES.panchakki,
  IMAGES.paithaniWeaving
];

interface HomeProps {
  content: HomeContent | null;
}

export const Home: React.FC<HomeProps> = ({ content }) => {
  if (!content) return <Hero />;

  return (
    <div className="fade-in">
      <Hero />
      
      {/* 1. Timeline Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 bg-parchment">
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
              <div key={idx} className={`relative pl-7 sm:pl-0 flex flex-col sm:flex-row items-start sm:items-center mb-10 sm:mb-12 last:mb-0 ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                {/* Dot - mobile (left) and desktop (center) */}
                <div className="absolute left-[-5px] top-1 sm:top-auto sm:left-1/2 sm:-ml-[7px] w-3.5 h-3.5 bg-gold rounded-full border-2 border-parchment z-10"></div>
                
                {/* Content */}
                <div className={`w-full sm:w-[45%] ${idx % 2 === 0 ? 'sm:pl-10 text-left' : 'sm:pr-10 sm:text-right'}`}>
                  <span className="inline-block px-2.5 py-0.5 bg-gold-muted text-gold font-bold text-xs sm:text-sm rounded-full mb-1.5 sm:mb-2">{event.year}</span>
                  <h3 className="text-lg sm:text-xl font-heading text-ink mb-1.5 sm:mb-2">{event.title}</h3>
                  <p className="text-stone-warm text-xs sm:text-sm leading-relaxed">{event.description}</p>
                </div>
                {/* Spacer for center column */}
                <div className="hidden sm:block sm:w-[10%]"></div>
                <div className="hidden sm:block sm:w-[45%]"></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <HeritageButton to="/history">Read Full History</HeritageButton>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 2. Best Time & Travel */}
      <section className="py-12 sm:py-16 lg:py-24 bg-parchment-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Plan Your Visit" 
            subtitle="Everything you need to prepare for your journey."
          />

          {/* Weather Seasons */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-heading text-ink mb-5 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <span className="w-1 h-6 sm:h-8 bg-gold rounded-full"></span>
              Best Time to Visit
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {content.seasons.map((season, idx) => (
                <div key={idx} className="card-heritage p-4 sm:p-6 group">
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-parchment-dark rounded-full">
                      {season.name === 'Winter' && <WeatherSunIcon />}
                      {season.name === 'Monsoon' && <RainIcon />}
                      {season.name === 'Summer' && <span className="text-xl sm:text-2xl">☀️</span>}
                    </div>
                    <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider 
                      ${season.type.includes('Peak') ? 'bg-gold/15 text-gold border border-gold/30' : 
                        season.type.includes('Shoulder') ? 'bg-terracotta/10 text-terracotta border border-terracotta/30' : 
                        'bg-stone-warm/10 text-stone-warm border border-stone-warm/30'}`}>
                      {season.type}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-heading text-ink mb-1">{season.name}</h4>
                  <p className="text-[10px] sm:text-xs text-stone-warm uppercase tracking-wider mb-2 sm:mb-3">{season.months} • {season.temperature}</p>
                  <p className="text-ink/80 text-xs sm:text-sm leading-relaxed">
                    {season.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* How to Reach */}
          <div>
            <h3 className="text-xl sm:text-2xl font-heading text-ink mb-5 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <span className="w-1 h-6 sm:h-8 bg-gold rounded-full"></span>
              How to Reach
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {content.travelInfo.map((info, idx) => (
                <div key={idx} className="card-heritage p-4 sm:p-6 border-t-3 border-t-gold/40 hover:border-t-gold group">
                  <div className="text-gold mb-3 sm:mb-4">
                    {info.mode.toLowerCase().includes('flight') && <PlaneIcon />}
                    {info.mode.toLowerCase().includes('train') && <TrainIcon />}
                    {info.mode.toLowerCase().includes('road') && <BusIcon />}
                  </div>
                  <h4 className="text-base sm:text-lg font-heading text-ink mb-1.5 sm:mb-2">{info.mode}</h4>
                  <p className="text-stone-warm text-xs sm:text-sm leading-relaxed">{info.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 3. Nearby Attractions */}
      <section className="py-12 sm:py-16 lg:py-24 bg-parchment overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6 sm:mb-10">
          <SectionHeading 
            title="Excursions Nearby" 
            subtitle="Beyond the city gates lies a world of wonders."
          />
        </div>
        
        <div className="flex overflow-x-auto pb-6 sm:pb-8 px-4 sm:px-8 gap-4 sm:gap-6 snap-x hide-scrollbar">
          {content.nearbyPlaces.map((place, idx) => (
            <div key={idx} className="snap-center shrink-0 w-64 sm:w-72 lg:w-80 card-heritage overflow-hidden">
              <div className="h-36 sm:h-44 lg:h-48 overflow-hidden bg-parchment-dark">
                <img 
                  src={NEARBY_IMAGES[place.name] || PLACEHOLDER_IMAGE} 
                  alt={place.name} 
                  loading="lazy" 
                  onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE; }} 
                  className="w-full h-full object-cover img-heritage transition-transform duration-700 hover:scale-105" 
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-heading text-ink mb-1">{place.name}</h3>
                <span className="text-[10px] sm:text-xs font-medium text-gold uppercase tracking-wider block mb-2 sm:mb-3">{place.distance}</span>
                <p className="text-stone-warm text-xs sm:text-sm leading-relaxed">
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
      <section className="py-12 sm:py-16 lg:py-24 bg-parchment-dark text-center">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading 
            title="The Taste of Aurangabad" 
            subtitle="A culinary journey through the Deccan's finest flavors."
            symbol="❋"
          />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {content.foodItems.map((item, idx) => (
              <div key={idx} className="group">
                <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 mx-auto rounded-full border-2 sm:border-3 border-gold/30 overflow-hidden mb-3 sm:mb-4 group-hover:border-gold transition-colors duration-300 shadow-md sm:shadow-lg">
                  <img 
                    src={FOOD_IMAGES[item.name] || PLACEHOLDER_IMAGE} 
                    alt={item.name} 
                    loading="lazy" 
                    onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE; }} 
                    className="w-full h-full object-cover img-heritage" 
                  />
                </div>
                <h3 className="text-base sm:text-lg font-heading text-ink mb-0.5 sm:mb-1 group-hover:text-gold transition-colors duration-300">{item.name}</h3>
                <p className="text-stone-warm text-xs sm:text-sm italic px-1 sm:px-2 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 6. Inspiration Gallery */}
      <section className="py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-1.5">
          {GALLERY_IMAGES.map((imgUrl, i) => (
            <div key={i} className="relative group overflow-hidden aspect-square bg-parchment-dark">
              <img 
                src={imgUrl} 
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
      <section className="py-12 sm:py-16 lg:py-24 px-4 max-w-7xl mx-auto bg-parchment">
        <SectionHeading title="Plan Your Journey" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <Link to="/attractions" className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] sm:aspect-[3/4]">
            <img src={IMAGES.bibiKaMaqbara} alt="Attractions" loading="lazy" className="w-full h-full object-cover img-heritage transition-transform duration-700 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex items-end p-4 sm:p-6">
              <div>
                <h3 className="text-xl sm:text-2xl text-gold-light font-heading mb-1 sm:mb-2">Monuments</h3>
                <p className="text-white/80 text-xs sm:text-sm">Explore the architectural marvels.</p>
              </div>
            </div>
          </Link>
          <Link to="/itineraries" className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] sm:aspect-[3/4]">
            <img src={IMAGES.cavePaintings} alt="Itineraries" loading="lazy" className="w-full h-full object-cover img-heritage transition-transform duration-700 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex items-end p-4 sm:p-6">
              <div>
                <h3 className="text-xl sm:text-2xl text-gold-light font-heading mb-1 sm:mb-2">Curated Trips</h3>
                <p className="text-white/80 text-xs sm:text-sm">Plans crafted for your perfect journey.</p>
              </div>
            </div>
          </Link>
          <Link to="/places" className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] sm:aspect-[3/4] sm:col-span-2 md:col-span-1">
            <img src={IMAGES.daulatabad} alt="Stay and Dine" loading="lazy" className="w-full h-full object-cover img-heritage transition-transform duration-700 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex items-end p-4 sm:p-6">
              <div>
                <h3 className="text-xl sm:text-2xl text-gold-light font-heading mb-1 sm:mb-2">Royal Stays</h3>
                <p className="text-white/80 text-xs sm:text-sm">Luxury hotels and authentic cuisine.</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

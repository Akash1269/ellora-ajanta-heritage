import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105" 
        style={{ backgroundImage: `url('https://picsum.photos/seed/ellora-caves-sunrise/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/20 to-stone-900/90 mix-blend-multiply"></div>
      </div>

      {/* Decorative Border Container */}
      <div className="relative z-10 p-10 sm:p-14 border-2 border-double border-amber-400/40 bg-stone-900/60 backdrop-blur-sm max-w-4xl mx-4 text-center shadow-2xl rounded-tr-3xl rounded-bl-3xl">
         {/* Corner Decorations */}
         <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-amber-500 -mt-2 -ml-2 rounded-tl-lg"></div>
         <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-amber-500 -mt-2 -mr-2 rounded-tr-lg"></div>
         <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-amber-500 -mb-2 -ml-2 rounded-bl-lg"></div>
         <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-amber-500 -mb-2 -mr-2 rounded-br-lg"></div>

        <span className="block text-amber-400 text-lg sm:text-xl font-serif tracking-[0.3em] mb-4 uppercase drop-shadow-md">
          Explore the Eternal
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 mb-6 font-heading drop-shadow-lg leading-tight">
          City of Gates
        </h1>
        <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-0.5 w-16 bg-amber-500"></span>
            <span className="text-amber-200 text-3xl">❖</span>
            <span className="h-0.5 w-16 bg-amber-500"></span>
        </div>
        <p className="text-xl sm:text-2xl text-stone-100 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md italic">
          "Where the whispers of Mughal emperors meet the silence of Buddhist monks."
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/attractions"
            className="px-10 py-4 bg-amber-700 text-amber-50 font-serif text-lg tracking-wider border border-amber-600 hover:bg-amber-800 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(180,83,9,0.6)] rounded-sm uppercase font-bold"
          >
            Explore Monuments
          </Link>
          <Link
             to="/history"
             className="px-10 py-4 bg-transparent text-amber-100 font-serif text-lg tracking-wider border border-amber-400 hover:bg-amber-900/50 hover:text-white transition-all duration-300 rounded-sm uppercase font-bold"
          >
            Read History
          </Link>
        </div>
      </div>
    </div>
  );
};
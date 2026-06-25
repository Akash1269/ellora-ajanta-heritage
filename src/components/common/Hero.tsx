import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[75vh] min-h-[500px] sm:h-[80vh] sm:min-h-[550px] lg:h-[85vh] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url('https://picsum.photos/seed/ellora-caves-sunrise/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full mx-auto text-center px-5 sm:px-10 lg:px-12 py-10 sm:py-14">
        <span className="block text-gold-light text-xs sm:text-sm lg:text-base font-serif tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 uppercase">
          Explore the Eternal
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white mb-5 sm:mb-8 font-heading leading-[1.1] tracking-tight">
          City of Gates
        </h1>
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-8">
            <span className="h-px w-8 sm:w-12 lg:w-16 bg-gold-light/60"></span>
            <span className="text-gold-light text-lg sm:text-2xl">◆</span>
            <span className="h-px w-8 sm:w-12 lg:w-16 bg-gold-light/60"></span>
        </div>
        <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-xl sm:max-w-2xl mx-auto leading-relaxed italic font-light px-2">
          "Where the whispers of Mughal emperors meet the silence of Buddhist monks."
        </p>
        
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link
            to="/attractions"
            className="btn-heritage-filled text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 shadow-lg"
          >
            Explore Monuments
          </Link>
          <Link
             to="/history"
             className="btn-heritage border-white/70 text-white hover:bg-white hover:text-ink text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5"
          >
            Read History
          </Link>
        </div>
      </div>
    </div>
  );
};
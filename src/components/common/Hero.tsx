import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url('https://picsum.photos/seed/ellora-caves-sunrise/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-4 text-center px-6 sm:px-12 py-12 sm:py-16">
        <span className="block text-gold-light text-base sm:text-lg font-serif tracking-[0.3em] mb-6 uppercase">
          Explore the Eternal
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] text-white mb-8 font-heading leading-[1.1] tracking-tight">
          City of Gates
        </h1>
        <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 sm:w-16 bg-gold-light/60"></span>
            <span className="text-gold-light text-2xl">◆</span>
            <span className="h-px w-12 sm:w-16 bg-gold-light/60"></span>
        </div>
        <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed italic font-light">
          "Where the whispers of Mughal emperors meet the silence of Buddhist monks."
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/attractions"
            className="btn-heritage-filled text-base px-8 py-3.5 shadow-lg"
          >
            Explore Monuments
          </Link>
          <Link
             to="/history"
             className="btn-heritage border-white/70 text-white hover:bg-white hover:text-ink text-base px-8 py-3.5"
          >
            Read History
          </Link>
        </div>
      </div>
    </div>
  );
};
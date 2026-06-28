import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink border-t border-gold/30 relative">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-3 sm:mb-4">
             <span className="text-xl sm:text-2xl font-heading text-parchment">Ellora Ajanta Heritage</span>
        </div>
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="h-px w-8 sm:w-10 bg-gold/40"></span>
            <span className="text-gold text-xs sm:text-sm">◆</span>
            <span className="h-px w-8 sm:w-10 bg-gold/40"></span>
        </div>
        <p className="italic text-parchment/70 max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
            "A travel companion dedicated to the rich cultural tapestry of the Deccan."
        </p>
        <div className="mt-6 sm:mt-8 text-[10px] sm:text-xs tracking-[0.15em] uppercase text-parchment/40">
             &copy; {new Date().getFullYear()} Incredible India Heritage
        </div>
        <p className="mt-3 text-[9px] sm:text-[10px] text-parchment/30 max-w-lg mx-auto leading-relaxed">
          Photos sourced from Wikimedia Commons &amp; Pexels.{' '}
          <a href="#/credits" className="underline hover:text-parchment/50">Image Credits</a>
        </p>
      </div>
    </footer>
  );
};
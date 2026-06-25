import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-parchment-dark border-t border-gold/20 relative">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-3 sm:mb-4">
             <span className="text-xl sm:text-2xl font-heading text-ink">Ellora Ajanta Heritage</span>
        </div>
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="h-px w-8 sm:w-10 bg-gold/30"></span>
            <span className="text-gold/50 text-xs sm:text-sm">◆</span>
            <span className="h-px w-8 sm:w-10 bg-gold/30"></span>
        </div>
        <p className="italic text-stone-warm max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
            "A travel companion dedicated to the rich cultural tapestry of the Deccan."
        </p>
        <div className="mt-6 sm:mt-8 text-[10px] sm:text-xs tracking-[0.15em] uppercase text-stone-warm/60">
             &copy; {new Date().getFullYear()} Incredible India Heritage
        </div>
      </div>
    </footer>
  );
};
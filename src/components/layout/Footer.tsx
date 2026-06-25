import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 border-t-8 border-amber-800 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
             <span className="text-3xl font-heading text-amber-500">Ellora Ajanta Heritage</span>
        </div>
        <div className="w-16 h-16 mx-auto mb-6 border-2 border-amber-500/30 rounded-full flex items-center justify-center rotate-45">
            <div className="w-10 h-10 border border-amber-500/50 -rotate-45"></div>
        </div>
        <p className="font-serif italic text-stone-500 max-w-md mx-auto">
            "A travel companion dedicated to the rich cultural tapestry of the Deccan."
        </p>
        <div className="mt-8 text-xs tracking-[0.2em] uppercase text-stone-600">
             &copy; {new Date().getFullYear()} Incredible India Heritage
        </div>
      </div>
    </footer>
  );
};
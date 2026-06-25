import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-12 h-12 border-2 border-gold/20 border-t-gold rounded-full animate-spin"></div>
      <p className="mt-6 text-stone-warm text-base font-serif italic tracking-wide">Unveiling history...</p>
    </div>
  );
};
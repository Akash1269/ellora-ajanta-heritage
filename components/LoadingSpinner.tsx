import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-16 h-16 border-4 border-stone-200 border-t-amber-600 rounded-full animate-spin"></div>
      <p className="mt-6 text-stone-500 text-lg font-serif italic tracking-wide">Unveiling history...</p>
    </div>
  );
};
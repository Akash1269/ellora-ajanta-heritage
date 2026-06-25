import React from 'react';

interface SectionDividerProps {
  symbol?: string;
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ symbol = '◆', className = '' }) => {
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <span className="h-px w-16 bg-gold/30"></span>
      <span className="mx-4 text-gold/60 text-lg">{symbol}</span>
      <span className="h-px w-16 bg-gold/30"></span>
    </div>
  );
};

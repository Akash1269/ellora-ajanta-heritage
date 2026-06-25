import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  symbol?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, symbol = '◆' }) => {
  return (
    <div className="section-heading">
      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl">{title}</h2>
      <div className="divider-ornate max-w-[200px] sm:max-w-xs mx-auto mt-2 sm:mt-3 mb-3 sm:mb-4">
        <span>{symbol}</span>
      </div>
      {subtitle && <p className="text-sm sm:text-base">{subtitle}</p>}
    </div>
  );
};

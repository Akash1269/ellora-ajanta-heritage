import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  symbol?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, symbol = '◆' }) => {
  return (
    <div className="section-heading">
      <h2 className="font-heading">{title}</h2>
      <div className="divider-ornate max-w-xs mx-auto mt-3 mb-4">
        <span>{symbol}</span>
      </div>
      {subtitle && <p className="font-serif">{subtitle}</p>}
    </div>
  );
};

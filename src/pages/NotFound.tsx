import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-heritage-pattern px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-heading text-amber-700 mb-4">404</h1>
        <div className="divider-ornate max-w-xs mx-auto mb-6"><span>❖</span></div>
        <h2 className="text-2xl font-heading text-stone-800 mb-4">Page Not Found</h2>
        <p className="text-stone-600 font-serif italic mb-8">
          The ancient scrolls do not speak of this path. Perhaps you seek a different route.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-amber-700 text-white font-bold uppercase tracking-wider text-sm rounded hover:bg-amber-800 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

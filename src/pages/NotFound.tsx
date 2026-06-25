import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-parchment px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-heading text-gold mb-4">404</h1>
        <div className="divider-ornate max-w-xs mx-auto mb-6"><span>◆</span></div>
        <h2 className="text-2xl font-heading text-ink mb-4">Page Not Found</h2>
        <p className="text-stone-warm font-serif italic mb-8">
          The ancient scrolls do not speak of this path. Perhaps you seek a different route.
        </p>
        <Link
          to="/"
          className="btn-heritage-filled"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

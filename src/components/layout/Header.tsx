import React from 'react';
import { NavLink } from 'react-router-dom';
import { LandmarkIcon } from '../icons';

export const Header: React.FC = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-lg tracking-wide font-serif transition-colors duration-300 relative group py-2 ${
      isActive ? 'text-amber-500' : 'text-stone-300 hover:text-amber-400'
    }`;

  const linkDecorator = (
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
  );

  return (
    <header className="bg-stone-900 border-b-4 border-amber-600 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <NavLink to="/" className="flex items-center space-x-3 group">
             <div className="p-2 border-2 border-amber-500 rounded-full group-hover:bg-stone-800 transition-colors">
                <LandmarkIcon className="h-8 w-8 text-amber-500" />
             </div>
            <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl text-amber-50 font-heading tracking-wide leading-none">
                  Aurangabad
                </span>
                <span className="text-amber-500 text-sm uppercase tracking-[0.3em] leading-none mt-1">
                  Heritage Guide
                </span>
            </div>
          </NavLink>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={linkClasses}>
                Home {linkDecorator}
            </NavLink>
            <NavLink to="/history" className={linkClasses}>
                History {linkDecorator}
            </NavLink>
            <NavLink to="/attractions" className={linkClasses}>
                Attractions {linkDecorator}
            </NavLink>
            <NavLink to="/itineraries" className={linkClasses}>
                Itineraries {linkDecorator}
            </NavLink>
            <NavLink to="/places" className={linkClasses}>
                Stay & Dine {linkDecorator}
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
import React, { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { LandmarkIcon } from '../icons';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-lg tracking-wide font-serif transition-colors duration-300 relative group py-2 ${
      isActive ? 'text-amber-500' : 'text-stone-300 hover:text-amber-400'
    }`;

  const mobileLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-3 text-lg font-serif border-b border-stone-700 transition-colors ${
      isActive ? 'text-amber-500 bg-stone-800' : 'text-stone-200 hover:text-amber-400 hover:bg-stone-800'
    }`;

  const linkDecorator = (
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
  );

  return (
    <header className="bg-stone-900 border-b-4 border-amber-600 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <NavLink to="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
             <div className="p-2 border-2 border-amber-500 rounded-full group-hover:bg-stone-800 transition-colors">
                <LandmarkIcon className="h-8 w-8 text-amber-500" />
             </div>
            <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl text-amber-50 font-heading tracking-wide leading-none">
                  Ellora Ajanta
                </span>
                <span className="text-amber-500 text-sm uppercase tracking-[0.3em] leading-none mt-1">
                  Heritage
                </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
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

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 text-amber-500 hover:text-amber-400 transition-colors"
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-stone-900 border-t border-stone-700 pb-4">
          <NavLink to="/" className={mobileLinkClasses} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/history" className={mobileLinkClasses} onClick={closeMenu}>History</NavLink>
          <NavLink to="/attractions" className={mobileLinkClasses} onClick={closeMenu}>Attractions</NavLink>
          <NavLink to="/itineraries" className={mobileLinkClasses} onClick={closeMenu}>Itineraries</NavLink>
          <NavLink to="/places" className={mobileLinkClasses} onClick={closeMenu}>Stay & Dine</NavLink>
        </nav>
      )}
    </header>
  );
};
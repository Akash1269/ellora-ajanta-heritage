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
    `text-sm tracking-wide font-serif transition-colors duration-300 relative group py-2 uppercase tracking-wider ${
      isActive ? 'text-gold' : 'text-ink/70 hover:text-gold'
    }`;

  const mobileLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-6 py-4 text-base font-serif transition-colors ${
      isActive ? 'text-gold bg-parchment-dark' : 'text-ink/70 hover:text-gold hover:bg-parchment-dark'
    }`;

  const linkDecorator = (
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full rounded-full"></span>
  );

  return (
    <header className="bg-parchment/95 backdrop-blur-md border-b border-gold/20 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          <NavLink to="/" className="flex items-center space-x-2 sm:space-x-3 group" onClick={closeMenu}>
             <div className="p-1.5 sm:p-2 border border-gold/40 rounded-full group-hover:border-gold transition-colors duration-300">
                <LandmarkIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
             </div>
            <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl text-ink font-heading tracking-wide leading-none">
                  Ellora Ajanta
                </span>
                <span className="text-gold text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] leading-none mt-0.5 sm:mt-1">
                  Heritage
                </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
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
            className="md:hidden p-2 text-gold hover:text-gold-light transition-colors"
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-parchment border-t border-gold/10 pb-2">
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
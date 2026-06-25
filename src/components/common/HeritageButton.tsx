import React from 'react';
import { Link } from 'react-router-dom';

interface HeritageButtonProps {
  to?: string;
  onClick?: () => void;
  variant?: 'outline' | 'filled';
  children: React.ReactNode;
  className?: string;
}

export const HeritageButton: React.FC<HeritageButtonProps> = ({
  to,
  onClick,
  variant = 'outline',
  children,
  className = '',
}) => {
  const baseClass = variant === 'filled' ? 'btn-heritage-filled' : 'btn-heritage';
  const classes = `${baseClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

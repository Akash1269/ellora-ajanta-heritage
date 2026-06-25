
import React from 'react';
import { AlertTriangleIcon } from '../icons';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 bg-white border border-terracotta/20 rounded-xl max-w-2xl mx-auto mt-8">
      <AlertTriangleIcon className="w-10 h-10 text-terracotta mb-4" />
      <h3 className="text-lg font-heading text-ink mb-2">Something went wrong</h3>
      <p className="text-stone-warm mb-6 text-sm font-serif">{message}</p>
      <button
        onClick={onRetry}
        className="btn-heritage text-sm"
      >
        Try Again
      </button>
    </div>
  );
};

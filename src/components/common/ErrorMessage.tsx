
import React from 'react';
import { AlertTriangleIcon } from '../icons';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 bg-red-50 border-2 border-red-200 rounded-lg max-w-2xl mx-auto mt-12">
      <AlertTriangleIcon className="w-12 h-12 text-red-500 mb-4" />
      <h3 className="text-xl font-semibold text-red-800 mb-2">Oops! Something went wrong.</h3>
      <p className="text-red-700 mb-6">{message}</p>
      <button
        onClick={onRetry}
        className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md shadow hover:bg-red-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};

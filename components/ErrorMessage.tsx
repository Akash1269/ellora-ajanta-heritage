
import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

const AlertTriangleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
);


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

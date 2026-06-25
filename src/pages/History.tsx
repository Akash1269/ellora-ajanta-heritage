import React, { useEffect, useState } from 'react';
import { fetchHistory } from '../services/dataService';
import type { HistoryContent } from '../types';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { ErrorMessage } from '../components/common/ErrorMessage';

export const History: React.FC = () => {
  const [history, setHistory] = useState<HistoryContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const data = await fetchHistory();
        setHistory(data);
      } catch (err) {
        setError("Could not load history data.");
      } finally {
        setLoading(false);
      }
    };
    loadHistory();
  }, []);

  if (loading) return <div className="py-20"><LoadingSpinner /></div>;
  if (error) return <div className="py-20"><ErrorMessage message={error} onRetry={() => window.location.reload()} /></div>;

  return (
    <div className="min-h-screen bg-heritage-pattern py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl p-8 sm:p-12 border-4 border-double border-amber-200 relative">
         <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700"></div>
         
         <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-heading text-stone-900 mb-6">{history?.title}</h1>
            <div className="divider-ornate w-1/2 mx-auto"><span>📜</span></div>
         </div>

         <div className="space-y-12">
            {history?.sections.map((section, index) => (
                <div key={index} className="relative pl-8 border-l-4 border-amber-500/30">
                    <span className="absolute -left-3.5 top-0 w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                        {index + 1}
                    </span>
                    <h2 className="text-3xl font-heading text-amber-800 mb-4">{section.heading}</h2>
                    <p className="text-stone-700 font-serif text-lg leading-loose text-justify">
                        {section.content}
                    </p>
                </div>
            ))}
         </div>
         
         <div className="mt-16 pt-8 border-t border-stone-200 text-center">
             <p className="text-stone-500 italic font-serif">"History is not just the past, but a map of the past, drawn from a particular point of view, to be useful to the modern traveller."</p>
         </div>
      </div>
    </div>
  );
};
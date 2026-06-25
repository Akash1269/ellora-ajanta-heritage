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
      } catch (_err) {
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
    <div className="min-h-screen bg-parchment py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-8 lg:p-14 border border-gold/20 relative">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-t-xl"></div>
         
         <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading text-ink mb-4 sm:mb-6">{history?.title}</h1>
            <div className="divider-ornate w-2/3 sm:w-1/2 mx-auto"><span>◆</span></div>
         </div>

         <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {history?.sections.map((section, index) => (
                <div key={index} className="relative pl-5 sm:pl-6 lg:pl-8 border-l-2 border-gold/30">
                    <span className="absolute -left-2 sm:-left-2.5 top-1 w-4 h-4 sm:w-5 sm:h-5 bg-gold rounded-full flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">
                        {index + 1}
                    </span>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading text-ink mb-2 sm:mb-4">{section.heading}</h2>
                    <p className="text-ink/80 text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose text-justify">
                        {section.content}
                    </p>
                </div>
            ))}
         </div>
         
         <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-gold/20 text-center">
             <p className="text-stone-warm italic text-xs sm:text-sm lg:text-base">"History is not just the past, but a map of the past, drawn from a particular point of view, to be useful to the modern traveller."</p>
         </div>
      </div>
    </div>
  );
};
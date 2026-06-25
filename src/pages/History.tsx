import React, { useEffect, useState } from 'react';
import { fetchHistory } from '../services/dataService';
import type { HistoryContent, HistoryEra } from '../types';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { ErrorMessage } from '../components/common/ErrorMessage';

const EraCard: React.FC<{ era: HistoryEra; index: number }> = ({ era, index }) => {
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-gold/20 -translate-x-1/2" />

      <div className={`relative flex flex-col lg:flex-row items-start gap-4 sm:gap-6 lg:gap-12 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        {/* Timeline dot */}
        <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 w-5 h-5 rounded-full bg-gold border-4 border-parchment shadow-md" />

        {/* Period badge - mobile */}
        <div className="lg:hidden flex items-center gap-3 mb-2">
          <div className="w-3 h-3 rounded-full bg-gold shadow-sm" />
          <span className="text-gold text-xs sm:text-sm font-bold uppercase tracking-wider">{era.era} Era</span>
          <span className="text-stone-warm text-[10px] sm:text-xs">({era.period})</span>
        </div>

        {/* Left/Right content */}
        <div className={`flex-1 lg:w-[calc(50%-3rem)] ${isEven ? 'lg:text-right' : ''}`}>
          <div className="hidden lg:block mb-2">
            <span className="text-gold text-xs font-bold uppercase tracking-wider">{era.era} Era</span>
            <span className="text-stone-warm text-xs ml-2">({era.period})</span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading text-ink mb-2 sm:mb-3 leading-tight">{era.title}</h3>
          <p className="text-ink/75 text-sm sm:text-base leading-relaxed">{era.summary}</p>
        </div>

        {/* Right/Left detail card */}
        <div className="flex-1 lg:w-[calc(50%-3rem)]">
          <div className="bg-white rounded-xl border border-gold/15 shadow-sm overflow-hidden">
            {/* Details list */}
            <div className="p-4 sm:p-5 lg:p-6">
              <ul className="space-y-3">
                {(expanded ? era.details : era.details.slice(0, 2)).map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-ink/80 leading-relaxed">
                    <span className="text-gold mt-1 shrink-0">◆</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              {era.details.length > 2 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-3 text-gold text-xs sm:text-sm font-medium hover:text-gold-light transition-colors"
                >
                  {expanded ? '← Show less' : `Read more (${era.details.length - 2} more)...`}
                </button>
              )}
            </div>

            {/* Key figures & monuments */}
            {(era.keyFigures || era.monuments) && (
              <div className="border-t border-gold/10 bg-parchment/50 p-4 sm:p-5 space-y-3">
                {era.keyFigures && (
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gold mb-1.5">Key Figures</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {era.keyFigures.map((f, i) => (
                        <span key={i} className="text-[10px] sm:text-xs bg-gold/10 text-ink/70 px-2 py-0.5 rounded-full border border-gold/15">{f}</span>
                      ))}
                    </div>
                  </div>
                )}
                {era.monuments && (
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gold mb-1.5">Monuments</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {era.monuments.map((m, i) => (
                        <span key={i} className="text-[10px] sm:text-xs bg-terracotta/10 text-terracotta px-2 py-0.5 rounded-full border border-terracotta/15">{m}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

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
  if (!history) return null;

  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero Header */}
      <section className="relative bg-ink text-white py-16 sm:py-20 lg:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />
        <div className="absolute inset-0 opacity-5 bg-jaali" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 block">2000+ Years of Heritage</span>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading text-white mb-4 sm:mb-6 leading-tight">{history.title}</h1>
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <span className="h-px w-10 sm:w-16 bg-gold/50"></span>
            <span className="text-gold text-sm">◆</span>
            <span className="h-px w-10 sm:w-16 bg-gold/50"></span>
          </div>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed italic">
            {history.introduction}
          </p>
        </div>
      </section>

      {/* Timeline of Eras */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-ink mb-3">Through the Ages</h2>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 sm:w-12 bg-gold/30"></span>
              <span className="text-gold/50 text-xs">◆</span>
              <span className="h-px w-8 sm:w-12 bg-gold/30"></span>
            </div>
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {history.eras.map((era, index) => (
              <EraCard key={era.era} era={era} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Culinary History */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-parchment-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-gold uppercase tracking-widest text-[10px] sm:text-xs font-bold">Gastronomic Heritage</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-ink mt-2 mb-3">{history.culinaryHistory.title}</h2>
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <span className="h-px w-8 sm:w-12 bg-gold/30"></span>
              <span className="text-gold/50 text-xs">◆</span>
              <span className="h-px w-8 sm:w-12 bg-gold/30"></span>
            </div>
            <p className="text-ink/70 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed italic">
              {history.culinaryHistory.description}
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
            {history.culinaryHistory.influences.map((influence, i) => (
              <div key={i} className="bg-white rounded-xl p-4 sm:p-6 border border-gold/15 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base sm:text-lg font-heading text-ink mb-2 flex items-center gap-2">
                  <span className="text-gold">◆</span> {influence.name}
                </h3>
                <p className="text-ink/70 text-xs sm:text-sm leading-relaxed">{influence.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy / Closing */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-ink mb-4 sm:mb-6">{history.legacy.title}</h2>
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <span className="h-px w-10 sm:w-14 bg-gold/40"></span>
            <span className="text-gold text-sm">◆</span>
            <span className="h-px w-10 sm:w-14 bg-gold/40"></span>
          </div>
          <p className="text-ink/75 text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose italic">
            {history.legacy.content}
          </p>
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gold/20">
            <p className="text-stone-warm text-xs sm:text-sm italic">
              "A city is not its monuments, but the memory of those who walked its streets."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
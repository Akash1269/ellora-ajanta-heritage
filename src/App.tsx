
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { LoadingSpinner } from './components/common/LoadingSpinner';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { useAppData } from './hooks/useAppData';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Attractions = lazy(() => import('./pages/Attractions').then(m => ({ default: m.Attractions })));
const Itineraries = lazy(() => import('./pages/Itineraries').then(m => ({ default: m.Itineraries })));
const Places = lazy(() => import('./pages/Places').then(m => ({ default: m.Places })));
const History = lazy(() => import('./pages/History').then(m => ({ default: m.History })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

const App: React.FC = () => {
  const { attractions, hotels, restaurants, itineraries, homeContent, loading, error } = useAppData();

  if (loading) {
      return (
          <div className="min-h-screen flex items-center justify-center bg-heritage-pattern">
              <LoadingSpinner />
          </div>
      )
  }

  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col bg-heritage-pattern text-stone-800 font-serif">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<div className="py-20"><LoadingSpinner /></div>}>
              <Routes>
                  <Route path="/" element={<Home content={homeContent} />} />
                  <Route path="/attractions" element={<Attractions attractions={attractions} loading={attractions.length === 0} error={error} />} />
                  <Route path="/itineraries" element={<Itineraries itineraries={itineraries} />} />
                  <Route path="/places" element={<Places hotels={hotels} restaurants={restaurants} />} />
                  <Route path="/history" element={<History />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;

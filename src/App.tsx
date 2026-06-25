
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Attractions } from './pages/Attractions';
import { Itineraries } from './pages/Itineraries';
import { Places } from './pages/Places';
import { History } from './pages/History';
import { NotFound } from './pages/NotFound';
import { LoadingSpinner } from './components/common/LoadingSpinner';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { useAppData } from './hooks/useAppData';

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
              <Routes>
                  <Route path="/" element={<Home content={homeContent} />} />
                  <Route path="/attractions" element={<Attractions attractions={attractions} loading={attractions.length === 0} error={error} />} />
                  <Route path="/itineraries" element={<Itineraries itineraries={itineraries} />} />
                  <Route path="/places" element={<Places hotels={hotels} restaurants={restaurants} />} />
                  <Route path="/history" element={<History />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;

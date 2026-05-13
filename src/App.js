import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/Global.css';
import './styles/ComparePage.css';
import './styles/InventoryPage.css';
import './styles/DistributorsPage.css';
import './styles/CollectionsPage.css'; // Add this import

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FitGrid from './components/FitGrid';
import AppBanner from './components/AppBanner';
import RediscoverBanner from './components/RediscoverBanner';
import SocialFeed from './components/SocialFeed';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import FavouritesPage from './components/FavouritesPage';
import ComparePage from './components/ComparePage';
import InventoryPage from './components/InventoryPage';
import DistributorsPage from './components/DistributorsPage';
import CollectionsPage from './components/CollectionsPage'; // Add this import

function AppContent() {
  const [showWelcome, setShowWelcome] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.4s ease';
        setTimeout(() => {
          document.body.style.opacity = '1';
        }, 50);
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const resetWelcome = () => {
    setShowWelcome(true);
  };

  return (
    <div className="App">
      {showWelcome && location.pathname === '/' && (
        <WelcomeScreen onComplete={() => setShowWelcome(false)} />
      )}

      <Navbar onLogoClick={resetWelcome} />

      <Routes>
        <Route path="/" element={
          <main>
            <div className="section-spacer">
              <Hero />
            </div>
            <div className="section-spacer">
              <FitGrid />
            </div>
            <div className="section-spacer">
              <AppBanner />
            </div>
            <div className="section-spacer">
              <RediscoverBanner />
            </div>
            <SocialFeed />
          </main>
        } />

        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/find-inventory" element={<InventoryPage />} />
        <Route path="/distributors" element={<DistributorsPage />} />
        <Route path="/collections" element={<CollectionsPage />} /> {/* New Route */}
      </Routes>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
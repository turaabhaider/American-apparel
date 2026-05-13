import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/Global.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FitGrid from './components/FitGrid';
import AppBanner from './components/AppBanner';
import RediscoverBanner from './components/RediscoverBanner';
import SocialFeed from './components/SocialFeed';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import FavouritesPage from './components/FavouritesPage';  // ✅ Fixed: components not pages

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

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

  return (
    <Router>
      <div className="App">
        {showWelcome && <WelcomeScreen onComplete={() => setShowWelcome(false)} />}

        <Navbar />

        <Routes>
          <Route path="/" element={
            <main>
              <div className="section-spacer">
                <Hero />
              </div>

              <div className="section-spacer">
                <FitGrid />
              </div>

              <div id="compare-section" className="section-spacer">
                {/* Your compare component goes here */}
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
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import './styles/Global.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FitGrid from './components/FitGrid';
import AppBanner from './components/AppBanner';
import RediscoverBanner from './components/RediscoverBanner';
import SocialFeed from './components/SocialFeed';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';

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
    <div className="App">
      {showWelcome && <WelcomeScreen onComplete={() => setShowWelcome(false)} />}

      <Navbar />

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

      <Footer />
    </div>
  );
}

export default App;
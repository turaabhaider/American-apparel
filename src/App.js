import React from 'react';
import './styles/Global.css';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FitGrid from './components/FitGrid';
import AppBanner from './components/AppBanner';
import RediscoverBanner from './components/RediscoverBanner'; // New Component
import SocialFeed from './components/SocialFeed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Fixed Navigation Bar */}
      <Navbar />
      
      <main>
        {/* 1. Hero Section: "Fitted to Print" */}
        <div className="section-spacer">
          <Hero />
        </div>

        {/* 2. New Silhouettes Grid (The 5-Column Section) */}
        <div className="section-spacer">
          <FitGrid />
        </div>

        {/* 3. Materials Section (French Terry, Baby Rib, Heavyweight) */}
        <div className="section-spacer">
          <AppBanner />
        </div>

        {/* 4. Rediscover The App Banner (The Phone Background Section) */}
        <div className="section-spacer">
          <RediscoverBanner />
        </div>

        {/* 5. Community Social Feed */}
        <SocialFeed />
      </main>

      {/* 6. Brand Footer */}
      <Footer />
    </div>
  );
}

export default App;
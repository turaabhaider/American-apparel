import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  // Fix: Initialize the navigate function
  const navigate = useNavigate(); 
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="hero-master-container">
      <div
        className="hero-left-textured"
        style={{
          backgroundImage: isMobile
            ? `url('/assets/hero-model.jpg')`
            : `url('/assets/background-image.png')`
        }}
      >
        <div className="hero-content-block">
          <h3 className="hero-subline">2X2 Baby Rib Collection</h3>

          <h1 className="hero-headline">
            FITTED<br />
            <span className="indent-text">TO PRINT</span>
          </h1>

          <p className="hero-para">
            Made from a soft cotton spandex blend and a rib texture, these styles
            are designed to move with the body while delivering a clean print surface.
          </p>

          <button className="hero-btn" onClick={() => navigate('/collections')}>
            VIEW COLLECTION
          </button>
        </div>
      </div>

      <div
        className="hero-right-image"
        style={{ backgroundImage: `url('/assets/hero-model.jpg')` }}
      />
    </section>
  );
};

export default Hero;
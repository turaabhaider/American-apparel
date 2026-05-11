import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-master-container">
      {/* LEFT SIDE: Textured background + Text */}
      <div 
        className="hero-left-textured"
        style={{ backgroundImage: `url('/assets/background-image.png')` }}
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

          <button className="view-btn">
            VIEW COLLECTION
          </button>
        </div>
      </div>

      {/* RIGHT SIDE: The Model background */}
      <div 
        className="hero-right-image"
        style={{ backgroundImage: `url('/assets/hero-model.jpg')` }}
      >
      </div>
    </section>
  );
};

export default Hero;
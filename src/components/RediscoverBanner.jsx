import React from 'react';
import '../styles/RediscoverBanner.css';

const RediscoverBanner = () => {
  return (
    <section 
      className="rediscover-banner"
      /* Moving the background image here fixes the Webpack error */
      style={{ backgroundImage: `url('/assets/phone-background.png')` }}
    >
      <div className="banner-inner-content">
        
        {/* Extreme Left Text Block */}
        <div className="left-aligned-text-stack">
          <h1>REDISCOVER<br />THE APP</h1>
          <p>Find the colors and styles you love with the Product Locator App.</p>
          
          <a 
            href="https://www.americanapparel.com/us/en/product-locator" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-btn-link"
          >
            <button className="download-app-btn">DOWNLOAD OUR APP</button>
          </a>
        </div>

        {/* Brand/Respect Logo (Top Right) */}
        <div className="brand-respect-logo">
          <h3>AMERICAN APPAREL<span>®</span></h3>
          <h2>MADE WITH<br />RESPECT<span>®</span></h2>
        </div>
      </div>
    </section>
  );
};

export default RediscoverBanner;
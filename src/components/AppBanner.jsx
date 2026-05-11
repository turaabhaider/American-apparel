import React from 'react';
import '../styles/AppBanner.css';

const AppBanner = () => {
  return (
    <section className="explore-section">
      <div className="explore-container">
        
        {/* BOX 1: FRENCH TERRY */}
        <div className="explore-card-item">
          <div className="solid-black-box">
            <div className="model-frame-primary">
              <img src="/assets/french-terry.gif" alt="French Terry" />
            </div>
            <h2 className="card-heading">FRENCH TERRY</h2>
            <button className="card-action-btn">VIEW COLLECTION</button>
          </div>
        </div>

        {/* CENTER HEADING */}
        <div className="explore-main-text">
          <h1>EXPLORE<br/>2026 NEW<br/>STYLES</h1>
        </div>

        {/* BOX 2: BABY RIB */}
        <div className="explore-card-item">
          <div className="solid-black-box">
            <div className="model-frame-primary">
              <img src="/assets/baby-rib.gif" alt="Baby Rib" />
            </div>
            <h2 className="card-heading">BABY RIB</h2>
            <button className="card-action-btn">VIEW COLLECTION</button>
          </div>
        </div>

        {/* BOX 3: HEAVYWEIGHT */}
        <div className="explore-card-item heavy-offset">
          <div className="solid-black-box">
            <div className="model-frame-primary">
              <img src="/assets/heavy-weight.gif" alt="Heavyweight" />
            </div>
            <h2 className="card-heading">HEAVYWEIGHT</h2>
            <button className="card-action-btn">VIEW COLLECTION</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppBanner;
import React from 'react';
import '../styles/FitGrid.css';

const FitGrid = () => {
  const fits = [
    { title: "Oversized Boxy", img: "/assets/over-size.jpg" },
    { title: "Mid-Length Oversized Boxy", img: "/assets/mid-over-size.jpg" },
    { title: "Mid-Length Boxy", img: "/assets/mid-length-boxy.jpg" },
    { title: "Crop Boxy", img: "/assets/crop-boxy.jpg" },
    { title: "Fitted", img: "/assets/fitted.jpg" }
  ];

  return (
    <section className="fit-grid-container">
      {/* Black Sidebar Section */}
      <div className="fit-sidebar">
        <div className="sidebar-content">
          <h2>NEW SILHOUETTES FOR 2026</h2>
          <button className="explore-btn">EXPLORE FITS</button>
        </div>
      </div>

      {/* Five-Column Image Grid */}
      <div className="fit-columns">
        {fits.map((fit, index) => (
          <div key={index} className="fit-card">
            <div className="fit-image-wrapper">
              <img src={fit.img} alt={fit.title} />
              <div className="fit-overlay"></div>
            </div>
            <div className="fit-info">
              <span className="fit-title">{fit.title}</span>
              <span className="fit-arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FitGrid;
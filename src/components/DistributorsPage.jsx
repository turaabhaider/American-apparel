import React, { useState } from 'react';
import '../styles/DistributorsPage.css';

const DistributorsPage = () => {
  const [activeId, setActiveId] = useState(1);
  const [view, setView] = useState('MAP');

  const distributors = [
    {
      id: 1,
      name: 'S&S Activewear (CA)',
      address: '4247 South Minnewawa Ave',
      city: 'Fresno',
      state: 'CA',
      zip: '93725',
      phone: '800-523-4585',
      url: '#'
    },
    {
      id: 2,
      name: 'S&S Activewear (FL)',
      address: '10920 Boggy Creek Road',
      city: 'Orlando',
      state: 'FL',
      zip: '32824',
      phone: '800-523-4585',
      url: '#'
    },
    {
      id: 3,
      name: 'S&S Activewear (GA)',
      address: '225 Midland Court',
      city: 'McDonough',
      state: 'GA',
      zip: '30253',
      phone: '800-523-4585',
      url: '#'
    }
  ];

  return (
    <div className="distributors-container">
      <div className="distributors-inner">
        <h1 className="dist-page-title">
          American Apparel® Distributors <span>[15]</span>
        </h1>
        <nav className="breadcrumb">Home &gt; Distributors</nav>

        <div className="search-toggle-row">
          <div className="dist-search-section">
            <div className="search-input-group">
              <label>SEARCH BY</label>
              <div className="input-with-icon">
                <input type="text" placeholder="Distributor name" />
                <button className="search-btn">🔍</button>
              </div>
            </div>
            <span className="search-or">OR</span>
            <div className="search-input-group">
              <div className="input-with-icon">
                <input type="text" placeholder="City, State, Zip" />
                <button className="search-btn">🔍</button>
              </div>
            </div>
          </div>

          <div className="view-toggle-btns">
            <button 
              className={view === 'MAP' ? 'active' : ''} 
              onClick={() => setView('MAP')}
            >MAP</button>
            <button 
              className={view === 'LIST' ? 'active' : ''} 
              onClick={() => setView('LIST')}
            >LIST</button>
            <button 
              className={view === 'STATE' ? 'active' : ''} 
              onClick={() => setView('STATE')}
            >STATE</button>
          </div>
        </div>

        <div className="dist-content-layout">
          <aside className="dist-sidebar">
            {distributors.map((dist) => (
              <div 
                key={dist.id} 
                className={`dist-card ${activeId === dist.id ? 'active' : ''}`}
                onClick={() => setActiveId(dist.id)}
              >
                <h3>{dist.name}</h3>
                <p>{dist.address}</p>
                <p>{dist.city}, {dist.state}, {dist.zip}, United States</p>
                <p className="dist-phone">Tel: {dist.phone.replace('+', '')}</p>
                <div className="card-footer">
                  <a href={dist.url}>View Website →</a>
                  <span className="loc-icon">📍</span>
                </div>
              </div>
            ))}
          </aside>

          <main className="dist-map-area">
            <div className="map-placeholder">
              <div className="map-controls">
                <button className="map-btn active">Map</button>
                <button className="map-btn">Satellite</button>
              </div>
              {/* Correctly referencing the image from the public folder */}
              <img 
                src="/assets/MAP-IMAGE.png" 
                alt="Map View" 
                className="static-map"
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DistributorsPage;
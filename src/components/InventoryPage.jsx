import React, { useState } from 'react';
import '../styles/InventoryPage.css';

const InventoryPage = () => {
  const [isStyleOpen, setIsStyleOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('Select a Style');

  const styles = ['101CVC', '102', '1301', '1301GD', '1302GD', '1304', '1304L'];

  const handleSelectStyle = (style) => {
    setSelectedStyle(style);
    setIsStyleOpen(false);
  };

  const inventoryData = [
    { name: 'S&S Activewear (NV)', s: 1033, m: 1398, l: 1013, xl: 593, xxl: 257, phone: '800 555 0199', acc: 'Available' },
    { name: 'S&S Activewear (IL)', s: 960, m: 1273, l: 949, xl: 547, xxl: 192, phone: '800 555 0122', acc: 'Limited' },
    { name: 'S&S Activewear (TX)', s: 663, m: 866, l: 604, xl: 370, xxl: 115, phone: '800 555 0144', acc: 'Available' },
    { name: 'S&S Activewear (PA)', s: 337, m: 644, l: 49, xl: 163, xxl: 210, phone: '800 555 0188', acc: 'Out of Stock' },
  ];

  return (
    <div className="inventory-container">
      {/* Sidebar: PC Left / Phone Top */}
      <div className="inventory-sidebar">
        <h1 className="inventory-title">Product Locator</h1>
        
        <div className="form-group">
          <label>Select a Style:</label>
          <div className="custom-dropdown">
            <div className="dropdown-header" onClick={() => setIsStyleOpen(!isStyleOpen)}>
              {selectedStyle}
              <span className={`arrow ${isStyleOpen ? 'up' : 'down'}`}></span>
            </div>
            
            {/* Dropdown Menu (image_49b394.png style) */}
            {isStyleOpen && (
              <div className="dropdown-menu">
                <div className="search-box">
                  <input type="text" placeholder="Search..." />
                  <button className="search-icon-btn">🔍</button>
                </div>
                <ul className="style-list">
                  {styles.map((s) => (
                    <li key={s} onClick={() => handleSelectStyle(s)}>
                      <span className="radio-circle"></span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label>Colors (0/5 Selected):</label>
          <button className="inventory-outline-btn">ADD COLORS</button>
        </div>

        <div className="form-group">
          <label>Sizes (0/0 Selected):</label>
          <button className="inventory-outline-btn">ADD SIZES</button>
        </div>

        <div className="form-group">
          <label>Filter By (optional):</label>
          <div className="filter-buttons">
            <button className="inventory-outline-btn">DISTRIBUTORS</button>
            <button className="inventory-outline-btn">LOCATION</button>
          </div>
        </div>

        <button className="find-inventory-btn" onClick={() => setShowResults(true)}>
          FIND INVENTORY
        </button>
      </div>

      {/* Results Area: PC Right / Phone Bottom (image_49af93.png style) */}
      <div className={`inventory-results ${showResults ? 'visible' : ''}`}>
        {showResults ? (
          <>
            <div className="results-header">
              <div className="header-text">
                <h2>{selectedStyle}</h2>
                <p>American Apparel® Fine Jersey Women's Boxy T-Shirt</p>
              </div>
              <button className="details-btn">📄 Product Details</button>
            </div>

            <div className="distributor-count-bar">
              <span>Distributors Found: 4</span>
              <div className="bar-actions">
                <span>Legend ▾</span>
                <span>Sort ▾</span>
                <div className="view-toggle">
                  <span className="grid-icon">⠿</span>
                  <span className="list-icon active">☰</span>
                </div>
              </div>
            </div>

            <div className="inventory-table-wrapper">
              <table className="inventory-table">
                <thead>
                  <tr>
                    <th>Distributor</th>
                    <th>S</th>
                    <th>M</th>
                    <th>L</th>
                    <th>XL</th>
                    <th>2XL</th>
                    <th>Action</th>
                    <th>Accommodation</th> {/* 8th Column Requirement */}
                  </tr>
                </thead>
                <tbody>
                  {inventoryData.map((row, idx) => (
                    <tr key={idx}>
                      <td className="distributor-name">{row.name} ▾</td>
                      <td>{row.s}</td>
                      <td>{row.m}</td>
                      <td>{row.l}</td>
                      <td>{row.xl}</td>
                      <td>{row.xxl}</td>
                      <td><button className="view-colors-btn">VIEW ALL COLORS</button></td>
                      <td className="acc-col">{row.acc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="empty-state">Select criteria and click Find Inventory to see results.</div>
        )}
      </div>
    </div>
  );
};

export default InventoryPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ComparePage.css';

const ComparePage = ({ compareItems = [] }) => {
  const navigate = useNavigate();

  return (
    <div className="compare-page">
      <div className="compare-container">
        <h1 className="compare-title">COMPARE STYLES</h1>
        
        {compareItems.length === 0 ? (
          <div className="compare-empty">
            <p className="compare-empty-text">
              You haven't added any products to your Compares yet
            </p>
            <button className="compare-add-btn" onClick={() => navigate('/')}>
              ADD PRODUCTS
            </button>
          </div>
        ) : (
          <div className="compare-grid">
            {compareItems.map((item, i) => (
              <div key={i} className="compare-card">
                <img src={item.image} alt={item.name} className="compare-img" />
                <h3 className="compare-name">{item.name}</h3>
                <p className="compare-price">{item.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparePage;
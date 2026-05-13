import React from 'react';
import '../styles/CollectionsPage.css';

const CollectionsPage = () => {
  const products = [
    { id: 1, sku: 'AA BR2107', name: "Baby Rib Women's LS Cropped T-Shirt", img: '/assets/blue.png' },
    { id: 2, sku: 'AA BR2101', name: "Baby Rib Women's Fitted Tank", img: '/assets/grey.png' },
    { id: 3, sku: 'AA BR210', name: "Baby Rib Women's LS Crop Fitted T-Shirt", img: '/assets/peach.png' }
  ];

  return (
    <div className="collections-container">
      <div className="collections-header">
        <h1>Search results for: Baby Rib</h1>
        <div className="filter-group">
          <button className="filter-btn">COLOR <span>⌵</span></button>
          <button className="filter-btn">SIZE <span>⌵</span></button>
          <button className="filter-btn">RECOMMENDED <span>⌵</span></button>
        </div>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="card-top">
              <span className="badge-new">New</span>
            </div>
            
            <div className="product-content">
              <img src={product.img} alt={product.name} className="main-product-img" />
              
              <div className="product-info">
                <h3>{product.sku}</h3>
                <p>{product.name}</p>
              </div>

            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;
import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile sidebar

  const menuData = {
    UNISEX: ["Featured Styles", "Collections", "New", "T-Shirts", "Fleece", "Jacket", "Pants", "100% US Cotton"],
    WOMEN: ["Featured Styles", "Collections", "New", "T-Shirts", "Fleece", "Jacket", "Pants", "100% US Cotton"],
    YOUTH: ["Collections", "T-Shirts", "100% US Cotton"],
    RESOURCES: ["Product & Usage", "Marketing", "Help & Support"]
  };

  return (
    <header className="navbar-fixed">
      <div className="top-bar">
        <div className="top-left"><span>GILDAN</span> <span>COMFORT COLORS</span></div>
        <div className="top-right"><a href="#">Find Inventory</a> <a href="#">Distributors</a></div>
      </div>

      <nav className="nav-main">
        {/* HAMBURGER DIV FOR MOBILE */}
        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="nav-logo">American Apparel<span>®</span></div>
        
        {/* Added dynamic class for mobile sliding */}
        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          {/* Close button for mobile menu */}
          <div className="mobile-close" onClick={() => setMobileMenuOpen(false)}>&times;</div>
          
          <li>NEW</li>
          {Object.keys(menuData).map((menu) => (
            <li 
              key={menu}
              className={activeMenu === menu ? 'active-link' : ''}
              onMouseEnter={() => setActiveMenu(menu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {menu}
              {activeMenu === menu && (
                <div className="mega-dropdown">
                  <ul>
                    {menuData[menu].map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              )}
            </li>
          ))}
          <li>COLORS</li>
          <li>SUSTAINABILITY</li>
          <li>LIVE NATION®</li>
        </ul>

        <div className="nav-icons">
          <span>🔍</span><span>♡</span><span>🛒</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
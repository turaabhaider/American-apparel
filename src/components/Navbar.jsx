import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const menuData = {
    UNISEX: ["Featured Styles", "Collections", "New", "T-Shirts", "Fleece", "Jacket", "Pants", "100% US Cotton"],
    WOMEN:  ["Featured Styles", "Collections", "New", "T-Shirts", "Fleece", "Jacket", "Pants", "100% US Cotton"],
    YOUTH:  ["Collections", "T-Shirts", "100% US Cotton"],
    RESOURCES: ["Product & Usage", "Marketing", "Help & Support"],
  };

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Search:', searchQuery);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleFavourites = () => {
    navigate('/favourites');
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const handleCompare = () => {
    const section = document.getElementById('compare-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after scroll
    }
  };

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
    setMobileMenuOpen(false); // Close mobile menu when opening search
  };

  return (
    <>
      <header className="navbar-fixed">
        <div className="top-bar">
          <div className="top-left">
            <span>GILDAN</span>
            <span>COMFORT COLORS</span>
          </div>
          <div className="top-right">
            <a href="#">Find Inventory</a>
            <a href="#">Distributors</a>
          </div>
        </div>

        <nav className="nav-main">
          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span><span></span><span></span>
          </div>

          <div className="nav-logo">American Apparel<span>®</span></div>

          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
            <div className="mobile-close" onClick={() => setMobileMenuOpen(false)}>&times;</div>

            <li onClick={() => setMobileMenuOpen(false)}>NEW</li>

            {Object.keys(menuData).map((menu) => (
              <li
                key={menu}
                className={activeMenu === menu ? 'active-link' : ''}
                onMouseEnter={() => setActiveMenu(menu)}
                onMouseLeave={() => setActiveMenu(null)}
                onClick={() => setMobileMenuOpen(false)}
              >
                {menu}
                {activeMenu === menu && (
                  <div className="mega-dropdown">
                    <ul>
                      {menuData[menu].map(item => (
                        <li key={item} onClick={() => setMobileMenuOpen(false)}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}

            <li onClick={() => setMobileMenuOpen(false)}>COLORS</li>
            <li onClick={() => setMobileMenuOpen(false)}>SUSTAINABILITY</li>
            <li onClick={() => setMobileMenuOpen(false)}>LIVE NATION®</li>
          </ul>

          <div className="nav-icons">
            <span
              className={`nav-icon-btn ${searchOpen ? 'icon-active' : ''}`}
              onClick={handleSearchToggle}
              title="Search"
            >
              🔍
            </span>

            <span
              className="nav-icon-btn"
              onClick={handleFavourites}
              title="Favourites"
            >
              ♡
            </span>

            <span
              className="nav-icon-btn"
              onClick={handleCompare}
              title="Compare"
            >
              🛒
            </span>
          </div>
        </nav>

        <div className={`search-overlay ${searchOpen ? 'search-overlay--open' : ''}`}>
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              ref={searchInputRef}
              type="text"
              className="search-input"
              placeholder="Search products, styles, colors…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-submit">SEARCH</button>
            <button
              type="button"
              className="search-close"
              onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
            >
              ✕
            </button>
          </form>
        </div>
      </header>

      {searchOpen && (
        <div className="search-backdrop" onClick={() => setSearchOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
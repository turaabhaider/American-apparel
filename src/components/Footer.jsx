import React, { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState('About'); // 'About' open by default like screenshot

  const toggleSection = (section) => {
    // If the section is already open, close it; otherwise, open it
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <footer className="footer-main">
      <div className="footer-container">
        
        {/* LARGE BRAND LOGO (Top for Mobile) */}
        <div className="footer-brand-logo">
          <h1>American Apparel<span>®</span></h1>
        </div>

        {/* ACCORDION LINKS SECTION */}
        <div className="footer-links-grid">
          
          {/* ABOUT SECTION */}
          <div className={`footer-col ${expandedSection === 'About' ? 'active' : ''}`}>
            <h4 onClick={() => toggleSection('About')}>
              About 
              <span className="toggle-icon">{expandedSection === 'About' ? '—' : '+'}</span>
            </h4>
            <ul className="footer-list">
              <li><a href="/">Shop Retail</a></li>
              <li><a href="/">Find Inventory</a></li>
              <li><a href="/">Find Distributors</a></li>
              <li><a href="/">Our Story</a></li>
              <li><a href="/">Gildan Corporate</a></li>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>

          {/* RESOURCE SECTION */}
          <div className={`footer-col ${expandedSection === 'Resource' ? 'active' : ''}`}>
            <h4 onClick={() => toggleSection('Resource')}>
              Resource 
              <span className="toggle-icon">{expandedSection === 'Resource' ? '—' : '+'}</span>
            </h4>
            <ul className="footer-list">
              <li><a href="/">Marketing Tools</a></li>
              <li><a href="/">Printing Techniques</a></li>
              <li><a href="/">Care Instructions</a></li>
              <li><a href="/">Events</a></li>
              <li><a href="/">Fit</a></li>
              <li><a href="/">Collections</a></li>
            </ul>
          </div>

          {/* LEGAL SECTION */}
          <div className={`footer-col ${expandedSection === 'Legal' ? 'active' : ''}`}>
            <h4 onClick={() => toggleSection('Legal')}>
              Legal 
              <span className="toggle-icon">{expandedSection === 'Legal' ? '—' : '+'}</span>
            </h4>
            <ul className="footer-list">
              <li><a href="/">Terms And Conditions</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Notice of Collection and Opt-Out</a></li>
              <li><a href="/">Cookie Policy</a></li>
              <li><a href="/">Cookie Preference</a></li>
              <li><a href="/">Do Not Sell My Info</a></li>
              <li><a href="/">Right To Know</a></li>
              <li><a href="/">Social Media Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="social-icons">
            <a href="/"><i className="fab fa-facebook-f"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="copyright-text">
            © 2026 Gildan Activewear S.R.L. - All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
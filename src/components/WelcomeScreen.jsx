import React, { useState, useEffect } from 'react';
import '../styles/WelcomeScreen.css';

const WelcomeScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 2200);
    const timer2 = setTimeout(() => onComplete(), 3000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [onComplete]);

  return (
    <div className={`welcome-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="welcome-corner top-left" />
      <div className="welcome-corner top-right" />
      <div className="welcome-corner bottom-left" />
      <div className="welcome-corner bottom-right" />

      <div className="welcome-content">
        <p className="welcome-label">Welcome To</p>
        <h1 className="welcome-title">American<br />Apparel<span>®</span></h1>
        <div className="welcome-divider" />
        <p className="welcome-tagline">Made in USA &nbsp;·&nbsp; Est. 1989</p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
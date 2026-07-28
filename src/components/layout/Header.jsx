import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <div className="logo">
        <img src="/top.png" alt="TidyNaija Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
        TidyNaija
      </div>

      <nav className="links desktop-only">
        <a href="#services">Services</a>
        <a href="#process">How it Works</a>
        <a href="#about">About</a>
        <a href="#investors">Investors</a>
      </nav>

      <div className="nav-actions desktop-only">
        <Button variant="outline" href="#investors">
          Investor Deck
        </Button>
        <Button variant="solid" href="#book">
          Book a Pickup
        </Button>
      </div>

      {/* Hamburger Toggle Button */}
      <button 
        className={`hamburger-btn ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu} 
        aria-label="Toggle Navigation Menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Mobile Backdrop & Drawer */}
      <div className={`mobile-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      <div className={`mobile-drawer ${isOpen ? 'active' : ''}`}>
        <nav className="mobile-links">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#process" onClick={closeMenu}>How it Works</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#investors" onClick={closeMenu}>Investors</a>
        </nav>
        <div className="mobile-actions">
          <Button variant="outline" href="#investors" onClick={closeMenu}>
            Investor Deck
          </Button>
          <Button variant="solid" href="#book" onClick={closeMenu}>
            Book a Pickup
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
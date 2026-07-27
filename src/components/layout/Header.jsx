import React from 'react';
import { Logo } from '../ui/Icon';
import Button from '../ui/Button';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Logo />
        TidyNaija
      </div>
      
      <nav className="links">
        <a href="#services">Services</a>
        <a href="#process">How it Works</a>
        <a href="#about">About</a>
        <a href="#investors">Investors</a>
      </nav>
      
      <div className="nav-actions">
        <Button variant="outline" href="#investors">
          Investor Deck
        </Button>
        <Button variant="solid" href="#book">
          Book a Pickup
        </Button>
      </div>
    </header>
  );
};

export default Header;
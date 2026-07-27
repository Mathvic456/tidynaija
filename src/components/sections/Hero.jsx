import React from 'react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <div className="hero">
      <Badge>Now Serving Akwa Ibom State</Badge>
      
      <h1 className="serif">
        Waste Pickup That<br />
        <span className="accent">Actually Shows Up.</span>
      </h1>
      
      <p className="sub">
        Reliable waste collection and cleaning services for homes and businesses in Uyo — 
        tracked end to end, priced in Naira.
      </p>
      
      <div className="btn-row">
        <Button variant="outline" href="#investors">
          Investor Deck
        </Button>
        <Button variant="solid" href="#book">
          Book a Pickup
        </Button>
      </div>
    </div>
  );
};

export default Hero;
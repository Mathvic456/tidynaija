import React from 'react';
import { Logo, Twitter, Facebook, Instagram, LinkedIn } from '../ui/Icon';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <Logo />
            TidyNaija
          </div>
          <p>
            Smart waste management for Nigerian cities. Starting with Uyo, Akwa Ibom — 
            built to transform every city in Nigeria.
          </p>
          <div className="socials">
            <a href="#"><Twitter /></a>
            <a href="#"><Facebook /></a>
            <a href="#"><Instagram /></a>
            <a href="#"><LinkedIn /></a>
          </div>
        </div>
        
        <FooterColumn title="Services" items={[
          'Waste Pickup',
          'Cleaning Services',
          'Book Online',
          'Become a Collector',
          'TidyPoints (Soon)'
        ]} />
        
        <FooterColumn title="Company" items={[
          'About Tidy Naija',
          'Our Mission',
          'Careers'
        ]} />
        
        <FooterColumn title="Support" items={[
          'Contact Us',
          'Help Centre',
          'Report a Missed Pickup',
          'Privacy Policy',
          'Terms of Service'
        ]} />
      </div>
      
      <p className="footer-email">EMAIL US: info@tidynaija.com</p>
      
      <div className="footer-bottom">
        <span>© 2025 Tidy Naija Technologies Ltd. Uyo, Akwa Ibom State, Nigeria.</span>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, items }) => (
  <div className="footer-col">
    <h5>{title}</h5>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Footer;
import React from 'react';
import { Twitter, Facebook, Instagram, TikTok } from '../ui/Icon';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo footer-logo">
            <img src="/foot.png" alt="TidyNaija" className="footer-logo-img" />
            TidyNaija
          </div>
          <p>
            Smart waste management for Nigerian cities. Starting with Uyo, Akwa Ibom built
            to transform every city in Nigeria.
          </p>
          <div className="socials">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#"><Twitter /></a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#"><Facebook /></a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#"><TikTok /></a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#"><Instagram /></a>
          </div>
          <p className="footer-email"><span className="footer-email-label">EMAIL US:</span> info@tidynaija.com</p>
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

      <div className="footer-bottom">
        <span>© 2025 Tidy Naija Technologies Ltd. · Uyo, Akwa Ibom State, Nigeria</span>
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
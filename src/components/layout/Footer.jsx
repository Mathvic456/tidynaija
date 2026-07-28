import React from 'react';
import { Twitter, Instagram, TikTok } from '../ui/Icon';

const Footer = ({ onMissionClick, onServiceClick }) => {
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
            <a href="https://x.com/tidynaija?s=11&t=YJcmoHULNu48D5JDBr4jfA"><Twitter /></a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="http://www.tiktok.com/@tidy.naija"><TikTok /></a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="https://www.instagram.com/tidy.naija?igsh=ZmxhbDVxdnNoa28w&utm_source=qr"><Instagram /></a>
          </div>
          <p className="footer-email"><span className="footer-email-label">EMAIL US:</span> info@tidynaija.com</p>
        </div>

        <FooterColumn title="Services" items={[
          'Waste Pickup',
          'Cleaning Services',
          'Book Online',
          'Become a Collector',
          'TidyPoints (Soon)'
        ]} onServiceClick={onServiceClick} />

        <FooterColumn title="Company" items={[
          'About Tidy Naija',
          'Our Mission',
          'Careers'
        ]} onMissionClick={onMissionClick} />

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

const FooterColumn = ({ title, items, onMissionClick, onServiceClick }) => (
  <div className="footer-col">
    <h5>{title}</h5>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {title === 'Company' && item === 'Our Mission' && onMissionClick ? (
            <button type="button" className="footer-link-button" onClick={onMissionClick}>{item}</button>
          ) : title === 'Services' && (item === 'Book Online' || item === 'Become a Collector') && onServiceClick ? (
            <button type="button" className="footer-link-button" onClick={() => onServiceClick(item)}>{item}</button>
          ) : (
            item
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
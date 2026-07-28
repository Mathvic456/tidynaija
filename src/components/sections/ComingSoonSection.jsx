import React from 'react';
import Container from '../shared/Container';
import Button from '../ui/Button';
import { Check } from '../ui/Icon';

const ComingSoonSection = () => {
  const features = [
    'Real-time collector tracking',
    'TidyPoints rewards for loyal customers',
    'Scheduled + on-demand booking in one tap',
    'Proof-of-service photo history',
    'NGN secure payments'
  ];

  return (
    <section className="comingsoon-section">
      <Container>
        <div className="cs-grid">
          <div className="cs-left">
            <p className="eyebrow">— Coming Soon</p>
            <h2 className="section-title serif">
              <span style={{ color: '#00C853' }}>The app is coming.</span><br />
              <span style={{ color: '#000000' }}>The service is</span><span style={{ color: '#7A9B83' }}> already here.</span>
            </h2>
            <p className="section-sub">
              Our mobile app will bring real-time tracking, TidyPoints rewards, and full account management to your pocket.
            </p>

            <ul>
              {features.map((feature, index) => (
                <li key={index}>
                  <Check /> {feature}
                </li>
              ))}
            </ul>

            <div className="notify-box">
              <h4>Be first to know when we launch.</h4>
              <p className="sm">Get notified when we launch.</p>
              <div className="notify-form">
                <input type="text" placeholder="Your email or phone number" />
                <Button variant="solid">Notify Me</Button>
              </div>
            </div>
            <p className="fineprint">We respect your privacy. Unsubscribe anytime.</p>
          </div>
          <div className="coming">
            <img src="../../coming.png" alt="TidyNaija Mobile App Mockup" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ComingSoonSection;
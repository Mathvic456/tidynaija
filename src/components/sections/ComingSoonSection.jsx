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
              The app is coming.<br />
              <span className="accent">The service is already here.</span>
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
          
          <div className="cs-right">
            {/* App mockup SVG - you can extract to its own component */}
            <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg">
              <rect x="120" y="10" width="180" height="360" rx="26" fill="#111"/>
              <rect x="132" y="30" width="156" height="300" rx="4" fill="#0f2d1c"/>
              <text x="145" y="55" fontFamily="Inter" fontSize="11" fill="#fff">What are you disposing?</text>
              <rect x="140" y="70" width="68" height="60" rx="8" fill="#173a26"/>
              <rect x="212" y="70" width="68" height="60" rx="8" fill="#173a26"/>
              <rect x="140" y="136" width="68" height="60" rx="8" fill="#173a26"/>
              <rect x="212" y="136" width="68" height="60" rx="8" fill="#173a26"/>
              <text x="174" y="105" fontFamily="Inter" fontSize="9" fill="#bfe3cc" textAnchor="middle">Household</text>
              <text x="246" y="105" fontFamily="Inter" fontSize="9" fill="#bfe3cc" textAnchor="middle">Bulky Item</text>
              <text x="174" y="171" fontFamily="Inter" fontSize="9" fill="#bfe3cc" textAnchor="middle">Recyclable</text>
              <text x="246" y="171" fontFamily="Inter" fontSize="9" fill="#bfe3cc" textAnchor="middle">Organic</text>
              <rect x="140" y="290" width="140" height="24" rx="12" fill="#007B33"/>
              <text x="210" y="306" fontFamily="Inter" fontSize="10" fill="#fff" textAnchor="middle">Confirm Pickup</text>

              <rect x="10" y="90" width="170" height="330" rx="26" fill="#1c1c1c"/>
              <rect x="20" y="112" width="150" height="286" rx="4" fill="#fff"/>
              <text x="35" y="135" fontFamily="Inter" fontSize="10" fill="#111">Track your collector</text>
              <rect x="35" y="148" width="120" height="90" rx="6" fill="#EAF5EE"/>
              <circle cx="95" cy="193" r="5" fill="#007B33"/>
              <text x="35" y="255" fontFamily="Inter" fontSize="9" fill="#666">Chukwuemeka is 6 min away</text>
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ComingSoonSection;
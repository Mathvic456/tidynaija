import React from 'react';
import Container from '../shared/Container';

const ProcessSection = ({ id }) => {
  const steps = [
    {
      number: '01',
      title: 'Book',
      description: 'Choose your service, select your date, and confirm your address.',
      link: '#book'
    },
    {
      number: '02',
      title: 'We Dispatch',
      description: 'A verified Tidy Naija collector is assigned to your job. You receive their name, rating, and estimated arrival time.'
    },
    {
      number: '03',
      title: 'Done. Documented.',
      description: 'Your collector completes the job and submits a photo as proof of service. You rate the experience. Your history is saved.'
    }
  ];

  return (
    <section className="process-section" id={id}>
      <Container>
        <p className="eyebrow center" style={{ marginBottom: '12px' }}>— The Process</p>
        <h2 className="section-title serif" style={{ textAlign: 'center', margin: '0 auto 56px' }}>
          Up and running<br />in <span className="accent">three steps.</span>
        </h2>
        
        <div className="process-grid">
          <div className="steps">
            {steps.map((step, index) => (
              <div key={index} className="step">
                <div className="num">{step.number}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>
                    {step.description}
                    {step.link && (
                      <><br /><a href={step.link} style={{ color: 'var(--green)', fontWeight: 600 }}>Book online →</a></>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="process-mock">
            {/* SVG mockup - you can move this to a separate component if needed */}
            <svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="460" height="320" rx="12" fill="#ffffff"/>
              <rect x="20" y="20" width="420" height="50" rx="8" fill="#f4f4ee"/>
              <circle cx="45" cy="45" r="12" fill="#007B33"/>
              <text x="70" y="41" fontFamily="Inter" fontSize="12" fill="#111">Collector Inbound</text>
              <text x="70" y="56" fontFamily="Inter" fontSize="10" fill="#888">Chukwuemeka A. · ★4.9 · 8 min</text>
              <text x="400" y="45" fontFamily="Inter" fontSize="10" fill="#007B33" textAnchor="end">8 min</text>
              <line x1="20" y1="150" x2="440" y2="150" stroke="#e5e5de"/>
              <circle cx="60" cy="150" r="6" fill="#007B33"/>
              <circle cx="400" cy="150" r="6" fill="#111"/>
              <path d="M60,150 C150,110 300,190 400,150" stroke="#007B33" strokeDasharray="4 4" fill="none" strokeWidth="2"/>
              <text x="20" y="200" fontFamily="Inter" fontSize="10" fill="#888">Waste Pickup</text>
              <text x="20" y="216" fontFamily="Fraunces" fontSize="13" fill="#111">33, Aka Road</text>
              <text x="20" y="232" fontFamily="Inter" fontSize="10" fill="#888">Today, 10:00am</text>
              <text x="440" y="200" fontFamily="Inter" fontSize="10" fill="#888" textAnchor="end">Next Service</text>
              <text x="440" y="216" fontFamily="Fraunces" fontSize="13" fill="#111" textAnchor="end">Cleaning</text>
              <text x="440" y="232" fontFamily="Inter" fontSize="10" fill="#888" textAnchor="end">Friday, 10:00am</text>
              <rect x="20" y="260" width="200" height="34" rx="8" fill="#EAF5EE"/>
              <text x="120" y="281" fontFamily="Inter" fontSize="11" fill="#007B33" textAnchor="middle">Live tracking</text>
              <rect x="240" y="260" width="200" height="34" rx="8" fill="#f4f4ee"/>
              <text x="340" y="281" fontFamily="Inter" fontSize="11" fill="#333" textAnchor="middle">Schedule list</text>
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
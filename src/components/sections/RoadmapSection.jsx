import React from 'react';
import Container from '../shared/Container';

const RoadmapSection = () => {
  const phases = [
    {
      status: 'Active Now',
      statusClass: 'active',
      tag: 'Phase #1',
      title: 'Uyo Pilot',
      items: [
        'Waste pickup + cleaning live',
        'Collector onboarding',
        'Android/iOS app',
        'Online booking channel'
      ]
    },
    {
      status: '2026',
      statusClass: 'future',
      tag: 'Phase #2',
      title: 'Akwa Ibom Expansion',
      items: [
        'Eket, Ikot Ekpene, Oron, Abak',
        'AKGEPA data partnership',
        'Government analytics dashboard',
        'Fleet growth'
      ]
    },
    {
      status: '2027+',
      statusClass: 'future',
      tag: 'Phase #3',
      title: 'Cross-State Growth',
      items: [
        'Rivers, Lagos, Anambra',
        'Waste data API for government',
        'CO₂ offset certification',
        'National infrastructure play'
      ]
    }
  ];

  return (
    <section className="dark-section">
      <Container>
        <div className="roadmap-head">
          <p className="eyebrow light">— Vision & Roadmap</p>
          <h2 className="section-title light serif">
            Uyo first.<br />Then <span className="accent">everywhere.</span>
          </h2>
          <p className="section-sub light">
            We're building this deliberately: one city, one neighborhood, one verified pickup at a time.
          </p>
        </div>
        
        <div className="roadmap-grid">
          {phases.map((phase, index) => (
            <div key={index} className="phase-card">
              <span className={`phase-badge ${phase.statusClass}`}>
                {phase.status}
              </span>
              <p className="tag">{phase.tag}</p>
              <h3 className="serif">{phase.title}</h3>
              <ul>
                {phase.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RoadmapSection;
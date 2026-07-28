import Container from '../shared/Container';

const RoadmapSection = () => {
  const cards = [
    {
      status: 'ACTIVE NOW',
      phase: 'Phase 01',
      title: 'Uyo Pilot',
      items: [
        'Waste pickup + cleaning live',
        'Collector onboarding',
        'Android/iOS app',
        'Online booking channel'
      ]
    },
    {
      status: '2027',
      phase: 'Phase 02',
      title: 'Akwa Ibom Expansion',
      items: [
        'Eket, Ikot Ekpene, Oron, Abak',
        'AKSEPA data partnership',
        'Government analytics dashboard',
        'Fleet growth'
      ]
    },
    {
      status: 'The journey',
      phase: 'Phase 03',
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
    <section className="roadmap-section">
      <Container>
        <div className="roadmap-header">
          <span className="roadmap-label">Vision &amp; Roadmap</span>
          <h2 className="roadmap-title">
            Uyo first.
            <br />
            Then <span>everywhere.</span>
          </h2>
          <p className="roadmap-description">
            We're building this deliberately one city, one neighborhood, one verified pickup at a time.
          </p>
        </div>

        <div className="roadmap-cards-grid">
          {cards.map((card, index) => (
            <article key={index} className="roadmap-card">
              <div className="roadmap-card-top">
                <span className={`roadmap-card-status${card.status === 'ACTIVE NOW' ? ' roadmap-card-status--active' : ''}`}>
                  {card.status}
                </span>
                <span className="roadmap-card-phase">{card.phase}</span>
              </div>
              <h3 className="roadmap-card-title">{card.title}</h3>
              <ul className="roadmap-card-list">
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RoadmapSection;
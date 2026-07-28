import React from 'react';
import Container from '../shared/Container';
import { House, Recycle, Briefcase, Expand } from '../ui/Icon';

const MarketOpportunity = ({ id }) => {
  const stats = [
    { icon: <House />, text: <><b>Our goal:</b> serve 2,000+ households in Uyo by end of Year 1</> },
    { icon: <Expand />, text: 'Planned expansion to 3 more LGAs across Akwa Ibom by 2028' },
    { icon: <Recycle />, text: 'Building measurable CO₂ offset infrastructure by 2027' },
    { icon: <Briefcase />, text: 'Creating formal employment for collectors across Akwa Ibom State' }
  ];

  return (
    <section className="dark-section" id={id}>
      <Container>
        <div className="market-grid">
          <div className="market-left">
            <p className="eyebrow light market-eyebrow-wrap">— Market Opportunity</p>
            <h2 className="section-title light serif">
              Nigeria has over 220 million people. <span className="accent">Almost none have reliable waste services.</span> 
            </h2>
            <p className="section-sub light">
              Nigeria's urban waste sector is historically informal, underfunded, and unconnected. 
              That's not a failure, it's a wide-open entry point for a technology-first operator 
              with government alignment and a proven on-the-ground model.
            </p>
          </div>
          
          <div className="market-right">
            <div className="stat-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  {stat.icon}
                  <p>{stat.text}</p>
                </div>
              ))}
            </div>
            
          </div>
        </div>
        <div className='market-bottom'>
          <div className="pill-row">
            <span className="pill">SDG 11 · Sustainable Cities</span>
            <span className="pill">SDG 13 · Climate Action</span>
            <span className="pill">SDG 8 · Decent Work</span>
          </div>
          
            <a className="investor-brief" href="/investor-brief.pdf" download>
              Download Investor Brief
            </a>
        </div>
      </Container>
    </section>
  );
};

export default MarketOpportunity;
import React from 'react';
import Container from '../shared/Container';
import Card from '../ui/Card';
import { Shield, Check, Grid, Naira } from '../ui/Icon';

const WhyUsSection = () => {
  const reasons = [
    {
      icon: <Shield />,
      title: 'Full Accountability, Every Time',
      description: 'Every pickup is logged, timestamped, and photographed. No more "I came but nobody was home" with no proof.'
    },
    {
      icon: <Check />,
      title: 'A Verified Collector Network',
      description: 'Every collector is trained, rated, and monitored. The informal sector becomes a formal, dignified supply chain.'
    },
    {
      icon: <Grid />,
      title: 'Officially Sanctioned Operations',
      description: 'Tidy Naija operates in partnership with Akwa Ibom State environmental agencies — not around them. Our data is trusted data.'
    },
    {
      icon: <Naira />,
      title: 'Naira Pricing. No Surprises.',
      description: 'Every service is priced in Naira, clearly and upfront. No foreign currency, no hidden fees, no "contact us for pricing."'
    }
  ];

  return (
    <section>
      <Container>
        <div className="whyus-head">
          <p className="eyebrow">— Why Us</p>
          <h2 className="section-title serif">
            Built for Nigeria.<br />
            <span className="accent">Not adapted from somewhere else.</span>
          </h2>
        </div>
        
        <div className="cards-4">
          {reasons.map((reason, index) => (
            <Card key={index} variant="whyus" icon={reason.icon}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyUsSection;
import React from 'react';
import Container from '../shared/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Check, Truck, Cleaning } from '../ui/Icon';

const OfferSection = ({ id }) => {
  const offers = [
    {
      icon: <Truck />,
      title: 'Scheduled & On-Demand\nWaste Pickup',
      features: [
        'Scheduled + on-demand pickups',
        'Live collector tracking',
        'Proof-of-service photo after every job',
        '₦ NGN pricing, no hidden fees',
        'Book online'
      ]
    },
    {
      icon: <Cleaning />,
      title: 'Professional\nCleaning Services',
      features: [
        'Home, office & compound cleaning',
        'Equipment provided no extras needed',
        'Pre-booked and emergency slots',
        'Rated, verified professionals',
        'Commercial packages available'
      ]
    }
  ];

  return (
    <section id={id}>
      <Container>
        <div className="offer-head">
          <p className="eyebrow">— What We Offer</p>
          <h2 className="section-title serif">
            Two services.<br />
            <span className="accent">Zero excuses.</span>
          </h2>
          <p className="section-sub">
            Reliable waste pickup and professional cleaning on your schedule, tracked end to end.
          </p>
        </div>
        
        <div className="cards-2">
          {offers.map((offer, index) => (
            <Card key={index} variant="offer" icon={offer.icon}>
              <h3>{offer.title}</h3>
              <ul>
                {offer.features.map((feature, idx) => (
                  <li key={idx}>
                    <Check /> {feature}
                  </li>
                ))}
              </ul>
              <Button variant="solid" href="#book">Book a Pickup</Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OfferSection;
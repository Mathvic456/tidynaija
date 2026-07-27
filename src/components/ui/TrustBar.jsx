import React from 'react';
import { Check } from './Icon';

const TrustBar = () => {
  const items = [
    'NGN Pricing',
    'Verified Collectors',
    'Proof of Service'
  ];

  return (
    <div className="trustbar">
      {items.map((item, index) => (
        <div key={index} className="item">
          <Check /> {item}
        </div>
      ))}
    </div>
  );
};

export default TrustBar;
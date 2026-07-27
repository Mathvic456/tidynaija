import React from 'react';

const Card = ({ 
  icon, 
  title, 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  const variantClass = variant === 'offer' 
    ? 'offer-card' 
    : variant === 'whyus' 
      ? 'whyus-card' 
      : 'card';
  
  return (
    <div className={`${variantClass} ${className}`}>
      {icon && <div className="icon">{icon}</div>}
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
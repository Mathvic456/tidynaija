import React from 'react';

const Container = ({ children, className = '' }) => {
  return (
    <div className={`wrap ${className}`}>
      {children}
    </div>
  );
};

export default Container;
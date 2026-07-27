import React from 'react';

const Button = ({ 
  variant = 'solid', 
  children, 
  href, 
  className = '', 
  ...props 
}) => {
  const baseClass = 'btn';
  const variantClass = variant === 'outline' 
    ? 'btn-outline' 
    : variant === 'outline-white' 
      ? 'btn-outline-white' 
      : 'btn-solid';
  
  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      className={`${baseClass} ${variantClass} ${className}`}
      href={href}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
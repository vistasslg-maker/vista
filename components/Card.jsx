import React from 'react';

/**
 * Card Component — RAMDHURA VISTA
 * 
 * Minimal flat card matching the Edelhaus-inspired calm aesthetic:
 * restrained borders, quiet shadows, ample padding.
 */
export default function Card({
  children,
  className = '',
  hoverEffect = true,
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={`bg-offwhite border border-border rounded-md p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-all duration-200 ${
        hoverEffect ? 'hover:border-border-dark hover:shadow-card' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

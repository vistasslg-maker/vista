import React from 'react';

/**
 * Heading Component — RAMDHURA VISTA
 * 
 * Renders display typography using Cormorant Garamond serif with optional
 * italic emphasis for emotional mountain resonance.
 */
export default function Heading({
  as,
  level = '2',
  children,
  italicText,
  className = '',
  ...props
}) {
  const Component = as || `h${level}`;
  const levelStyles = {
    '1': 'text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-forest-deep',
    '2': 'text-3xl sm:text-4xl font-normal tracking-tight text-forest-deep',
    '3': 'text-2xl sm:text-3xl font-normal text-forest-deep',
    '4': 'text-xl sm:text-2xl font-medium text-forest-deep',
  };

  const styleClass = levelStyles[level] || levelStyles['2'];

  return (
    <Component
      className={`font-display leading-[1.15] ${styleClass} ${className}`}
      {...props}
    >
      {children}
      {italicText && (
        <em className="italic font-normal text-forest-mid ml-1.5 not-italic:font-normal">
          {italicText}
        </em>
      )}
    </Component>
  );
}

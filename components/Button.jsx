import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Button Component — RAMDHURA VISTA
 * 
 * Variants:
 * - primary: Filled deep pine green
 * - secondary: Thin outline
 * - sunlight: Warm gold accent
 * - link: Text link with hover underline
 * 
 * Enforces min-height 44px for accessible touch targets.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-sans font-medium transition-colors select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-deep cursor-pointer text-center';

  const sizeClasses = {
    sm: 'min-h-[44px] px-4 py-2 text-xs uppercase tracking-wider',
    md: 'min-h-[48px] px-6 py-2.5 text-sm tracking-wide',
    lg: 'min-h-[52px] px-8 py-3.5 text-base tracking-wide',
  };

  const variantClasses = {
    primary:
      'bg-forest-deep text-cream hover:bg-forest-mid rounded-sm shadow-subtle border border-forest-deep',
    secondary:
      'bg-transparent text-forest-deep border border-forest-deep/60 hover:border-forest-deep hover:bg-forest-soft/60 rounded-sm',
    sunlight:
      'bg-sunlight text-forest-deep font-semibold hover:bg-[#c2811a] rounded-sm shadow-subtle border border-sunlight',
    ghost:
      'bg-transparent text-forest-deep hover:bg-forest-soft/60 rounded-sm',
    link:
      'bg-transparent text-forest-mid hover:text-forest-deep underline underline-offset-4 p-0 min-h-0 text-sm font-medium',
  };

  const combinedClasses = `${baseClasses} ${variant !== 'link' ? sizeClasses[size] : ''} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 mr-2 shrink-0" aria-hidden="true" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 ml-2 shrink-0" aria-hidden="true" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClasses} {...props}>
      {content}
    </button>
  );
}

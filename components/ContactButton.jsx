import React from 'react';
import { Phone } from 'lucide-react';
import Button from './Button';
import { formatTelHref, getPrimaryPhone } from '../data';

/**
 * ContactButton Component — RAMDHURA VISTA
 * 
 * Direct click-to-call button using only verified phones.
 */
export default function ContactButton({
  phone,
  label,
  variant = 'primary',
  size = 'md',
  className = '',
  withCountryCode = false,
  ...props
}) {
  const activePhone = phone || getPrimaryPhone();
  const displayLabel = label || `Call ${activePhone}`;
  const href = formatTelHref(activePhone, withCountryCode);

  return (
    <Button
      variant={variant}
      size={size}
      href={href}
      icon={Phone}
      className={className}
      aria-label={`Call ${activePhone}`}
      {...props}
    >
      {displayLabel}
    </Button>
  );
}

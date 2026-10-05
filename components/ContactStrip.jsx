import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { getPhoneNumbers, getLocationShort, formatTelHref } from '../data';

/**
 * ContactStrip Component — RAMDHURA VISTA
 * 
 * Cabin Pros-inspired top utility strip showing verified phone numbers and village location.
 */
export default function ContactStrip() {
  const phones = getPhoneNumbers();
  const location = getLocationShort();

  return (
    <aside
      aria-label="Direct contact details"
      className="bg-cream border-b border-border/70 py-2 px-4 text-xs text-muted select-none relative z-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-1.5 text-forest-mid font-medium">
          <MapPin className="w-3.5 h-3.5 shrink-0 text-earth" aria-hidden="true" />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 font-medium">
          {phones.map((phone, idx) => (
            <a
              key={idx}
              href={formatTelHref(phone)}
              className="flex items-center gap-1.5 text-ink hover:text-forest-deep transition-colors focus-visible:outline-forest-deep"
              aria-label={`Call ${phone}`}
            >
              <Phone className="w-3.5 h-3.5 shrink-0 text-forest-mid" aria-hidden="true" />
              <span>{phone}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

import React from 'react';
import Heading from './Heading';
import Button from './Button';
import { Phone, ArrowRight } from 'lucide-react';
import { getPrimaryPhone, formatTelHref } from '../data';

/**
 * CtaBanner Component — RAMDHURA VISTA
 * 
 * Calm, high-conversion action banner for end of pages.
 */
export default function CtaBanner({
  headline = 'Come as a guest, leave feeling like family.',
  tagline = null,
  description = 'For direct reservations, room availability checks, and NJP-to-NJP trip planning, connect with our host.',
  primaryAction,
  secondaryAction,
  className = '',
}) {
  const primaryPhone = getPrimaryPhone();

  return (
    <div
      className={`bg-forest-deep text-cream rounded-lg p-8 sm:p-12 lg:p-16 my-8 text-center relative overflow-hidden shadow-subtle border border-forest-mid/30 ${className}`}
    >
      <div className="max-w-2xl mx-auto relative z-10">
        {tagline && (
          <span className="section-label !text-sunlight before:!bg-sunlight mb-3">
            {tagline}
          </span>
        )}

        <Heading
          level="2"
          className="!text-cream mt-2 mb-4 font-normal"
        >
          {headline}
        </Heading>

        <p className="text-cream/80 text-base sm:text-lg mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryAction ? (
            primaryAction
          ) : (
            <Button
              variant="sunlight"
              size="lg"
              href={formatTelHref(primaryPhone)}
              icon={Phone}
              className="w-full sm:w-auto"
            >
              Call ({primaryPhone})
            </Button>
          )}

          {secondaryAction ? (
            secondaryAction
          ) : (
            <Button
              variant="secondary"
              size="lg"
              to="/contact"
              icon={ArrowRight}
              iconPosition="right"
              className="w-full sm:w-auto !border-cream/40 !text-cream hover:!bg-cream/10"
            >
              Contact & Booking
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

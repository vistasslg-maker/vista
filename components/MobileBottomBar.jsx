import React from 'react';
import { Phone } from 'lucide-react';
import { getPrimaryPhone, formatTelHref } from '../data';

/**
 * MobileBottomBar Component — VISTAS
 * 
 * Sticky action bar permanently pinned to the bottom of mobile viewports.
 * Sole primary action: Direct tap-to-call host for reservations.
 */
export default function MobileBottomBar() {
  const primaryPhone = getPrimaryPhone();

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-bottom-bar bg-offwhite/95 backdrop-blur-md border-t border-border px-4 py-2.5 lg:hidden shadow-lg select-none"
      style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))' }}
      aria-label="Quick mobile contact actions"
    >
      <div className="max-w-md mx-auto">
        {/* Direct Call to Host */}
        <a
          href={formatTelHref(primaryPhone)}
          className="flex items-center justify-center gap-2.5 min-h-[48px] px-4 bg-forest-deep text-cream rounded-sm text-xs font-semibold uppercase tracking-wider active:bg-forest-mid transition-colors shadow-subtle w-full"
          aria-label={`Call ${primaryPhone}`}
        >
          <Phone className="w-4 h-4 text-sunlight shrink-0" aria-hidden="true" />
          <span>Call to Book ({primaryPhone})</span>
        </a>
      </div>
    </div>
  );
}

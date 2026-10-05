import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Phone, ArrowRight, Mail } from 'lucide-react';
import {
  getNavigationPages,
  getPhoneNumbers,
  formatTelHref,
  getPropertyName,
  getEmail,
  getInstagramUrl,
  getFacebookUrl,
} from '../data';

/**
 * MobileNav Component — VISTAS
 * 
 * Slide-in mobile drawer with focus trap, Escape key handling,
 * large touch targets (min 52px), and verified phone dialers.
 */
export default function MobileNav({ isOpen, onClose }) {
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const pages = getNavigationPages();
  const phones = getPhoneNumbers();
  const propertyName = getPropertyName();
  const email = getEmail();
  const instagramUrl = getInstagramUrl();
  const facebookUrl = getFacebookUrl();

  // Escape key to close
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Focus trap inside drawer
  const handleKeyDownTrap = (e) => {
    if (e.key !== 'Tab') return;
    const focusable = drawerRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable || focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      last.focus();
      e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === last) {
      first.focus();
      e.preventDefault();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200]"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      onKeyDown={handleKeyDownTrap}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-forest-deep/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 left-0 w-full max-w-md bg-offwhite shadow-2xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto border-r border-border animate-in slide-in-from-left duration-300"
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-border/80">
            <div className="flex items-center gap-3">
              <img
                src="/brand/vistas-logo.jpg"
                alt="VISTAS Logo"
                className="w-11 h-11 rounded-full object-cover border border-forest-mid/20 shadow-sm shrink-0"
              />
              <div>
                <span className="font-display text-xl sm:text-2xl font-normal tracking-[0.15em] uppercase text-forest-deep block">
                  {propertyName}
                </span>
                <span className="text-[11px] text-muted tracking-widest uppercase block mt-1">
                  Ramdhura, Kalimpong
                </span>
              </div>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-full text-forest-deep hover:bg-forest-soft border border-border transition-colors focus-visible:outline-forest-deep"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links (Editorial Serif Style) */}
          <nav className="py-8 flex flex-col gap-3" aria-label="Main Navigation">
            {pages.map((page, idx) => (
              <NavLink
                key={page.id}
                to={page.slug}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between min-h-[52px] px-4 py-2 rounded transition-colors group ${
                    isActive
                      ? 'bg-cream text-forest-deep font-semibold border-l-4 border-sunlight'
                      : 'text-forest-deep hover:bg-forest-soft/60'
                  }`
                }
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-mono text-muted/60">0{idx + 1}</span>
                  <span className="font-display text-2xl sm:text-3xl font-normal tracking-wide group-hover:text-forest-mid transition-colors">
                    {page.label}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-forest-mid opacity-40 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Drawer Footer with Verified Calls */}
        <div className="pt-6 border-t border-border mt-auto">
          <p className="text-xs text-muted uppercase tracking-wider font-semibold mb-3">
            Call Our Hosts to Book
          </p>

          <div className="flex flex-col gap-2.5">
            {phones.map((phone, idx) => (
              <a
                key={idx}
                href={formatTelHref(phone)}
                className="flex items-center gap-3 min-h-[48px] px-4 bg-cream rounded border border-border text-forest-deep font-medium text-sm hover:bg-forest-soft transition-colors"
              >
                <Phone className="w-4 h-4 text-forest-mid" aria-hidden="true" />
                <span>Call {phone}</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-border/80 mt-3 flex items-center justify-between gap-2">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1.5 text-xs text-forest-deep hover:text-forest-mid font-medium transition-colors truncate"
              aria-label={`Email ${email}`}
            >
              <Mail className="w-3.5 h-3.5 text-forest-mid shrink-0" aria-hidden="true" />
              <span className="truncate">{email}</span>
            </a>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-cream hover:bg-forest-soft border border-border flex items-center justify-center text-forest-deep transition-colors"
                aria-label="Instagram profile for VISTAS"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-cream hover:bg-forest-soft border border-border flex items-center justify-center text-forest-deep transition-colors"
                aria-label="Facebook page for VISTAS"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

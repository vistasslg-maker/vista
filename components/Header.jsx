import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';
import MobileNav from './MobileNav';
import { getNavigationPages, getPropertyName, getPrimaryPhone, formatTelHref } from '../data';

/**
 * Header Component — RAMDHURA VISTA
 * 
 * Top Navigation Bar:
 * - Desktop & Large Screens (lg+: 1024px+): Three distinct groups on one row:
 *   1. Left: Logo / wordmark with location text
 *   2. Centre: All 4 page links (HOME, ABOUT, STAY & DISCOVER, CONTACT & BOOKING)
 *      with consistent gaps, whitespace: nowrap, and active underline indicator
 *   3. Right: Direct Call button (sole primary action)
 * - Mobile & Tablet (<lg: <1024px): Menu trigger icon + direct Call icon with min 44px touch targets.
 * - On Home: Transparent over hero photo; transitions smoothly to solid off-white on scroll.
 * - Max width: 1380px with 32-48px side padding to avoid cramped center block.
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  const pages = getNavigationPages();
  const propertyName = getPropertyName();
  const primaryPhone = getPrimaryPhone();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <header
        className={`w-full z-[100] transition-all duration-300 select-none ${
          isHome ? 'fixed top-0 inset-x-0' : 'sticky top-0 bg-offwhite border-b border-border/80'
        } ${
          isTransparent
            ? 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-cream py-4 sm:py-5 border-b border-transparent'
            : 'bg-offwhite/95 backdrop-blur-md text-forest-deep py-3 sm:py-4 border-b border-border shadow-subtle'
        }`}
      >
        <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-[auto_1fr_auto] items-center gap-6 lg:gap-8 xl:gap-12">
          {/* Group 1 (Left): RAMDHURA VISTA Logo / Wordmark with Real Emblem */}
          <div className="col-start-1 justify-self-start shrink-0">
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-current"
              aria-label={`${propertyName} Home`}
            >
              <img
                src="/brand/vistas-logo.jpg"
                alt="VISTAS Logo"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover shadow-sm shrink-0 border border-white/40 ring-1 ring-forest-deep/10"
              />
              <div className="flex flex-col items-start">
                <span
                  className={`font-display text-base sm:text-xl tracking-[0.15em] uppercase font-normal transition-colors leading-tight ${
                    isTransparent
                      ? 'text-cream group-hover:text-white'
                      : 'text-forest-deep group-hover:text-forest-mid'
                  }`}
                >
                  {propertyName}
                </span>
                <span
                  className={`text-[8px] sm:text-[9px] tracking-[0.22em] uppercase font-sans font-medium transition-colors ${
                    isTransparent ? 'text-cream/75' : 'text-muted'
                  }`}
                >
                  Ramdhura, Kalimpong
                </span>
              </div>
            </Link>
          </div>

          {/* Group 2 (Centre): Four Page Links (Strictly on One Line, Visible on lg+) */}
          <nav
            className="col-start-2 justify-self-center hidden lg:flex items-center gap-7 xl:gap-9 whitespace-nowrap"
            aria-label="Main Navigation"
          >
            {pages.map((page) => (
              <NavLink
                key={page.id}
                to={page.slug}
                className={({ isActive }) =>
                  `whitespace-nowrap text-[13px] xl:text-sm tracking-[0.12em] uppercase py-1 relative font-medium transition-all duration-150 ${
                    isTransparent
                      ? isActive
                        ? 'text-white font-semibold after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-sunlight'
                        : 'text-cream/85 hover:text-white'
                      : isActive
                        ? 'text-forest-deep font-semibold after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-sunlight'
                        : 'text-ink/80 hover:text-forest-deep'
                  }`
                }
              >
                {page.label}
              </NavLink>
            ))}
          </nav>

          {/* Group 3 (Right): Direct Call Action (Sole Contact/Booking Action) & Mobile Trigger */}
          <div className="col-start-3 justify-self-end shrink-0 flex items-center gap-3 sm:gap-4">
            {/* Direct Call Button (Visible on sm+) */}
            <a
              href={formatTelHref(primaryPhone, true)}
              className={`hidden sm:inline-flex items-center justify-center gap-2 min-h-[38px] px-4 sm:px-5 rounded-full text-xs font-semibold uppercase tracking-[0.14em] whitespace-nowrap transition-all shadow-sm ${
                isTransparent
                  ? 'bg-cream text-forest-deep hover:bg-white'
                  : 'bg-forest-deep text-cream hover:bg-forest-mid'
              }`}
              aria-label={`Call directly at ${primaryPhone}`}
            >
              <Phone className="w-3.5 h-3.5 text-sunlight shrink-0" aria-hidden="true" />
              <span className="hidden xl:inline">CALL ({primaryPhone.startsWith('+91') ? primaryPhone : `+91 ${primaryPhone}`})</span>
              <span className="xl:hidden">CALL ({primaryPhone})</span>
            </a>

            {/* Mobile Direct Call Icon (<sm) with min 44px touch target */}
            <a
              href={formatTelHref(primaryPhone, true)}
              className={`sm:hidden flex items-center justify-center min-w-[44px] min-h-[44px] p-2.5 rounded transition-colors ${
                isTransparent ? 'text-cream hover:text-white' : 'text-forest-deep hover:text-forest-mid'
              }`}
              aria-label={`Call ${primaryPhone}`}
            >
              <Phone className="w-5 h-5 text-sunlight" aria-hidden="true" />
            </a>

            {/* Mobile Menu Icon (<lg) with min 44px touch target */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              className={`lg:hidden flex items-center justify-center min-w-[44px] min-h-[44px] p-2.5 rounded transition-colors focus-visible:outline-current ${
                isTransparent
                  ? 'text-cream hover:text-white hover:bg-white/10'
                  : 'text-forest-deep hover:bg-forest-soft border border-border/80'
              }`}
              aria-label="Open navigation menu"
              aria-expanded={mobileNavOpen}
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-in Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </>
  );
}

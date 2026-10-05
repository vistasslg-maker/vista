import React, { useState, useEffect } from 'react';
import { getStayAndDiscoverSections } from '../data';

/**
 * StickySectionNav Component — RAMDHURA VISTA
 * 
 * Sticky, horizontally-scrollable sub-navigation for /stay-and-discover:
 * [Stay • Dining & Experiences • Explore Ramdhura • Gallery • Getting Here]
 */
export default function StickySectionNav({ activeSection = 'stay' }) {
  const sections = getStayAndDiscoverSections();
  const [current, setCurrent] = useState(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setCurrent(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <nav
      className="sticky top-[58px] sm:top-[68px] lg:top-[72px] z-30 bg-offwhite/95 backdrop-blur-md border-b border-border py-2 sm:py-2.5 px-4 shadow-subtle select-none"
      aria-label="Stay & Discover In-Page Sections"
    >
      <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        {sections.map((sec) => {
          const isActive = current === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className={`shrink-0 min-h-[40px] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-150 flex items-center justify-center ${
                isActive
                  ? 'bg-forest-deep text-cream shadow-subtle'
                  : 'bg-cream text-forest-deep hover:bg-forest-soft border border-border/80'
              }`}
            >
              {sec.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

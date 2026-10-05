import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * FeaturedRow Component — RAMDHURA VISTA
 * 
 * Cabin Pros-inspired horizontal scrollable featured row with prev/next arrows.
 * Fully keyboard-accessible, touch swipeable, and clean flat styling.
 */
export default function FeaturedRow({
  children,
  title,
  subtitle,
  className = '',
}) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative ${className}`}>
      {(title || subtitle) && (
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            {subtitle && <p className="section-label mb-1.5">{subtitle}</p>}
            {title && (
              <h3 className="font-display text-2xl sm:text-3xl text-forest-deep">
                {title}
              </h3>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-border bg-cream hover:bg-forest-soft hover:border-forest-mid/50 flex items-center justify-center text-forest-deep transition-colors focus-visible:outline-2 focus-visible:outline-forest-deep"
              aria-label="Previous items"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-border bg-cream hover:bg-forest-soft hover:border-forest-mid/50 flex items-center justify-center text-forest-deep transition-colors focus-visible:outline-2 focus-visible:outline-forest-deep"
              aria-label="Next items"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-1 snap-x snap-mandatory focus:outline-none"
        tabIndex={0}
        role="region"
        aria-label="Scrollable list of items"
      >
        {React.Children.map(children, (child) => (
          <div className="shrink-0 w-[280px] sm:w-[320px] snap-start">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

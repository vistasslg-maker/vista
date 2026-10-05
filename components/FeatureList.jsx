import React from 'react';
import { Check } from 'lucide-react';

/**
 * FeatureList Component — RAMDHURA VISTA
 * 
 * Clean, accessible bulleted list of verified homestay inclusions.
 */
export default function FeatureList({
  items = [],
  columns = 2,
  className = '',
}) {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <ul
      className={`grid gap-4 ${columnClasses[columns] || columnClasses[2]} list-none p-0 m-0 ${className}`}
      role="list"
    >
      {items.map((item, index) => {
        const text = typeof item === 'string' ? item : item.name || item.text;
        return (
          <li
            key={index}
            className="flex items-start gap-3 p-3 rounded bg-cream/60 border border-border/50 text-ink text-sm sm:text-base leading-relaxed"
          >
            <span
              className="w-5 h-5 rounded-full bg-forest-soft text-forest-mid flex items-center justify-center shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <Check className="w-3 h-3 stroke-[2.5]" />
            </span>
            <span className="capitalize">{text}</span>
          </li>
        );
      })}
    </ul>
  );
}

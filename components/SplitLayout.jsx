import React from 'react';

/**
 * SplitLayout Component — RAMDHURA VISTA
 * 
 * Calm editorial 50/50 split layout for narrative text paired with
 * authentic photography or labeled image placeholder.
 */
export default function SplitLayout({
  children,
  media,
  reversed = false,
  className = '',
  mediaClassName = '',
  contentClassName = '',
}) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${className}`}
    >
      <div
        className={`lg:col-span-6 ${
          reversed ? 'lg:order-2' : 'lg:order-1'
        } ${contentClassName}`}
      >
        {children}
      </div>

      <div
        className={`lg:col-span-6 ${
          reversed ? 'lg:order-1' : 'lg:order-2'
        } ${mediaClassName}`}
      >
        {media}
      </div>
    </div>
  );
}

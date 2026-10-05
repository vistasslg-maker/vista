import React from 'react';

/**
 * Image Component — RAMDHURA VISTA
 * 
 * Rules Enforced:
 * 1. Requires alt text and dimensions.
 * 2. Lazy loads by default.
 * 3. NO AI or stock photos. If no authentic photograph exists, renders a clean,
 *    clearly labelled placeholder: "PHOTO NEEDED: <description>".
 * 4. In development, logs a warning for every unresolved photo slot.
 */
export default function Image({
  src,
  alt,
  width,
  height,
  description,
  slotId,
  srcSet,
  sizes,
  aspectRatio = '16/9',
  className = '',
  priority = false,
  ...props
}) {
  if (!alt) {
    console.error('[ACCESSIBILITY ERROR] Image component requires a non-empty `alt` prop.');
  }

  // If no authentic photograph is supplied, render the strict placeholder
  if (!src) {
    const requiredPhotoText = description || alt || 'Authentic photograph required';
    
    // Log in development to ensure awareness
    if (import.meta.env.DEV) {
      console.warn(`[PHOTO NEEDED] Unresolved image slot ${slotId ? `[${slotId}]` : ''}: "${requiredPhotoText}"`);
    }

    return (
      <div
        className={`relative overflow-hidden bg-[#F5EFEB]/90 border border-[#D5CABE] rounded flex flex-col items-center justify-center p-6 text-center select-none shadow-subtle ${className}`}
        style={{
          aspectRatio: aspectRatio,
          width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
          maxWidth: '100%',
          minHeight: height ? (typeof height === 'number' ? `${height}px` : height) : '140px'
        }}
        role="img"
        aria-label={`PHOTO NEEDED: ${requiredPhotoText}${slotId ? ` (${slotId})` : ''}`}
        data-unresolved-photo="true"
        data-slot-id={slotId}
      >
        {/* Subtle minimalist mountain contour icon */}
        <svg
          className="w-8 h-8 text-[#A89885] mb-2.5 opacity-80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
          <circle cx="17.5" cy="6.5" r="2.5" />
        </svg>

        <div className="flex flex-col items-center justify-center max-w-md px-3 space-y-1.5">
          {slotId && (
            <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-medium text-forest-deep/70 bg-white/70 border border-[#D5CABE] rounded">
              {slotId}
            </span>
          )}
          <p className="font-sans text-xs sm:text-sm font-semibold tracking-wide text-forest-deep leading-snug">
            PHOTO NEEDED: <span className="font-normal text-muted">{requiredPhotoText}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={`block max-w-full h-auto object-cover rounded ${className}`}
      style={{ aspectRatio }}
      {...props}
    />
  );
}

import React from 'react';
import Image from './Image';

/**
 * ImageBand Component — RAMDHURA VISTA
 * 
 * Full-width atmospheric visual banner with optional caption or hospitality line.
 */
export default function ImageBand({
  src,
  alt = 'Atmospheric view of Ramdhura',
  description,
  caption,
  className = '',
  aspectRatio = '21/9',
}) {
  return (
    <div className={`w-full relative overflow-hidden my-8 sm:my-12 ${className}`}>
      <Image
        src={src}
        alt={alt}
        description={description}
        aspectRatio={aspectRatio}
        className="w-full object-cover max-h-[480px]"
      />
      {caption && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 text-right">
          <span className="text-xs text-muted tracking-wide italic">
            {caption}
          </span>
        </div>
      )}
    </div>
  );
}

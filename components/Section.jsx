import React from 'react';
import Heading from './Heading';

/**
 * Section Component — RAMDHURA VISTA
 * 
 * Section wrapper enforcing consistent whitespace, dot-marked uppercase labels,
 * and semantic landmark structure.
 */
export default function Section({
  id,
  label,
  title,
  titleLevel = '2',
  titleItalic,
  description,
  children,
  background = 'offwhite', // 'offwhite' | 'cream' | 'forest-deep'
  className = '',
  contentClassName = '',
  headerClassName = '',
  align = 'left', // 'left' | 'center'
  ...props
}) {
  const bgStyles = {
    offwhite: 'bg-offwhite text-ink',
    cream: 'bg-cream text-ink border-y border-border/70',
    'forest-deep': 'bg-forest-deep text-cream',
    white: 'bg-white text-ink',
  };

  const isDark = background === 'forest-deep';

  return (
    <section
      id={id}
      className={`py-12 sm:py-16 lg:py-20 relative ${bgStyles[background] || bgStyles.offwhite} ${className}`}
      {...props}
    >
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${contentClassName}`}>
        {(label || title || description) && (
          <div
            className={`mb-8 sm:mb-10 ${
              align === 'center' ? 'text-center mx-auto' : 'w-full'
            } ${headerClassName}`}
          >
            {label && (
              <div className="mb-3">
                <span
                  className={`section-label ${
                    isDark ? 'text-cream/80 before:bg-sunlight' : 'text-forest-mid before:bg-sunlight'
                  }`}
                >
                  {label}
                </span>
              </div>
            )}

            {title && (
              <Heading
                level={titleLevel}
                italicText={titleItalic}
                className={isDark ? '!text-cream' : '!text-forest-deep'}
              >
                {title}
              </Heading>
            )}

            {description && (
              <p
                className={`mt-4 text-base sm:text-lg leading-relaxed ${
                  isDark ? 'text-cream/80' : 'text-muted'
                }`}
              >
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}

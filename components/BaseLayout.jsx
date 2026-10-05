import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MobileBottomBar from './MobileBottomBar';
import { getSiteMetadata, getPhoneNumbers, getPropertyName } from '../data';

/**
 * BaseLayout Component — RAMDHURA VISTA
 * 
 * Enforces accessibility landmarks, skip link, document titles,
 * canonical URLs, Open Graph / Twitter metadata, JSON-LD structured data,
 * and safe padding for the mobile persistent bottom bar.
 */
export default function BaseLayout({
  children,
  title,
  description,
  canonicalSlug,
  className = '',
}) {
  const location = useLocation();
  const siteMeta = getSiteMetadata();
  const propertyName = getPropertyName();
  const phones = getPhoneNumbers();

  const domain = siteMeta?.siteUrl || 'https://ramdhuravista.com';
  const currentPath = canonicalSlug || location.pathname;
  const canonicalUrl = `${domain}${currentPath === '/' ? '' : currentPath}`;

  const pageTitle = title
    ? `${title} | ${propertyName} — Ramdhura, Kalimpong`
    : siteMeta?.defaultTitle || `${propertyName} — Ramdhura, Kalimpong`;

  const metaDescription =
    description ||
    siteMeta?.defaultDescription ||
    'Homestay at Ramdhura, Barmaik, Kalimpong, West Bengal. Comfortable rooms, home-cooked food, 24-hr electricity, Wi-Fi, and 360° Kanchenjunga views a short walk away.';

  useEffect(() => {
    // 1. Document Title
    document.title = pageTitle;

    // Helper to update or create a meta tag
    const setMetaTag = (attribute, name, content) => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Primary Meta Description
    setMetaTag('name', 'description', metaDescription);

    // 3. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Open Graph Tags (Omit og:image strictly per Prompt 7 instructions)
    setMetaTag('property', 'og:title', pageTitle);
    setMetaTag('property', 'og:description', metaDescription);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:locale', siteMeta?.locale || 'en_IN');
    setMetaTag('property', 'og:site_name', propertyName);

    // 4. Open Graph & Twitter Social Image (Set now that authentic photograph is supplied)
    if (siteMeta?.ogImage) {
      setMetaTag('property', 'og:image', `${domain}${siteMeta.ogImage}`);
      setMetaTag('name', 'twitter:image', `${domain}${siteMeta.ogImage}`);
      setMetaTag('name', 'twitter:card', 'summary_large_image');
    } else {
      const strayOgImage = document.querySelector('meta[property="og:image"]');
      if (strayOgImage) strayOgImage.remove();
      const strayTwitterImage = document.querySelector('meta[name="twitter:image"]');
      if (strayTwitterImage) strayTwitterImage.remove();
    }

    // 6. JSON-LD Structured Data (LodgingBusiness — verified facts only)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LodgingBusiness',
      name: propertyName,
      description: metaDescription,
      url: domain,
      telephone: phones,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ramdhura, Barmaik',
        addressRegion: 'Kalimpong, West Bengal',
        addressCountry: 'IN',
      },
      // Note: image, priceRange, geo, openingHours, aggregateRating, and reviews
      // are strictly omitted until authentic verified values are supplied.
    };

    let scriptLd = document.getElementById('json-ld-business');
    if (!scriptLd) {
      scriptLd = document.createElement('script');
      scriptLd.id = 'json-ld-business';
      scriptLd.type = 'application/ld+json';
      document.head.appendChild(scriptLd);
    }
    scriptLd.textContent = JSON.stringify(structuredData);

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pageTitle, metaDescription, canonicalUrl, domain, propertyName, phones, siteMeta]);

  return (
    <div className="min-h-screen flex flex-col bg-offwhite text-ink font-sans selection:bg-forest-soft selection:text-forest-deep">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:px-4 focus:py-2 focus:bg-forest-deep focus:text-cream focus:rounded focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Semantic Landmark with bottom padding for mobile bar */}
      <main
        id="main-content"
        className={`flex-grow pb-24 lg:pb-0 ${className}`}
        tabIndex={-1}
      >
        {children}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Sticky Mobile Call Bar */}
      <MobileBottomBar />
    </div>
  );
}

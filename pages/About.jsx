import React from 'react';
import BaseLayout from '../components/BaseLayout';
import Heading from '../components/Heading';
import {
  Phone,
  Clock,
  Compass,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import {
  getPropertyName,
  getHospitalityLine,
  getPhoneNumbers,
  getPrimaryPhone,
  getSecondaryPhone,
  formatTelHref,
  getAboutContent,
  getPageConfig,
} from '../data';

/**
 * ABOUT PAGE — RAMDHURA VISTA
 * 
 * Calm, editorial narrative:
 * 1. Page hero / introduction to the quiet village of Ramdhura.
 * 2. The village and its atmosphere (Split layout with real landscape photograph).
 * 3. What a stay here feels like (3 narrative moments of hill cadence).
 * 4. Hospitality ("Come as a guest, leave feeling like family" warm care card).
 * 5. Short, restrained note on the VISTA brand relationship.
 * 6. Direct Call to Book CTA.
 * 
 * Strict Content Rules:
 * - Verified descriptions only.
 * - Zero fabrication: NO owner biography, family story, founding year, or fake quotes.
 * - Zero artificial photo placeholder cards filling space.
 */
export default function About() {
  const propertyName = getPropertyName();
  const hospitalityLine = getHospitalityLine();
  const phones = getPhoneNumbers();
  const primaryPhone = getPrimaryPhone();
  const secondaryPhone = getSecondaryPhone();
  const pageConfig = getPageConfig('about');
  const content = getAboutContent();

  const {
    header,
    village,
    stayExperience,
    hospitality,
    vistaRelationship,
  } = content;

  return (
    <BaseLayout
      title={pageConfig?.metaTitle || 'About Our Village & Hospitality'}
      description={pageConfig?.metaDescription || 'Learn about the quiet mountain village of Ramdhura in Kalimpong, our mountain homestay atmosphere, and our hospitality philosophy.'}
      canonicalSlug="/about"
    >
      {/* =========================================================================
          1. PAGE HERO / INTRO
          Title with full-width opening statement directly underneath spanning the page.
          ========================================================================= */}
      <section className="pt-12 sm:pt-16 pb-10 sm:pb-14 border-b border-border/80 bg-gradient-to-b from-cream/80 to-offwhite">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-3 sm:mb-4">
            <span className="section-label">
              {header.label.toUpperCase()}
            </span>
          </div>

          <Heading level="1" className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-forest-deep mb-4 sm:mb-6">
            {header.title}
          </Heading>

          <div className="pt-4 sm:pt-6 border-t border-forest-mid/20">
            <p className="font-sans text-base sm:text-lg text-forest-deep leading-relaxed w-full">
              {header.intro}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. THE VILLAGE & ITS ATMOSPHERE
          Asymmetric editorial composition pairing authentic landscape photo with narrative.
          ========================================================================= */}
      <section id="village" className="py-12 sm:py-16 lg:py-20 bg-offwhite border-b border-border/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header: Title with lead sentence directly underneath, spanning the full page width */}
          <div className="mb-8 sm:mb-12">
            <span className="section-label">
              {village.label.toUpperCase()}
            </span>
            <Heading level="2" className="text-3xl sm:text-4xl lg:text-5xl font-normal text-forest-deep mt-2 mb-3">
              {village.title}
            </Heading>
            <p className="font-sans text-base sm:text-lg text-muted leading-relaxed w-full">
              {village.lead}
            </p>
          </div>

          {/* 12-Column Asymmetric Media + Narrative Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Real Landscape Photograph (7 cols on lg) */}
            <div className="lg:col-span-7">
              <div className="rounded-lg overflow-hidden border border-border shadow-card bg-cream/50">
                <img
                  src="/images/ramdhura-village-road.jpg"
                  alt="Quiet hillside village road and mountain cottages of Ramdhura near Barmaik, Kalimpong"
                  className="w-full h-auto aspect-[16/10] sm:aspect-[16/10] object-cover"
                  loading="lazy"
                />
                <div className="bg-cream/95 px-4 py-3 border-t border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-forest-deep">
                  <span className="font-medium">Hillside Village Road & Mountain Cottages</span>
                  <span className="text-muted">Ramdhura, Barmaik, Kalimpong</span>
                </div>
              </div>
            </div>

            {/* Narrative & Landscape Attributes (5 cols on lg) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4 text-sm sm:text-base text-forest-deep leading-relaxed font-sans">
                {village.paragraphs.map((p, idx) => (
                  <p key={idx} className={idx === 0 ? 'text-forest-deep' : 'text-muted'}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Verified Landscape Elements Card */}
              <div className="p-5 sm:p-6 rounded-lg bg-cream/70 border border-border/80 space-y-3 shadow-subtle">
                <h4 className="font-sans text-xs uppercase tracking-widest text-forest-deep font-semibold">
                  What Defines Ramdhura
                </h4>
                <ul className="space-y-2.5 list-none p-0 m-0 text-xs sm:text-sm text-forest-deep font-sans" role="list">
                  {village.keyElements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-forest-mid shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHAT A STAY HERE FEELS LIKE
          The unhurried rhythm of the hills. Full-width balanced 12-column layout.
          ========================================================================= */}
      <section id="stay-experience" className="py-12 sm:py-16 lg:py-20 bg-cream/60 border-b border-border/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header: Title with lead sentence directly underneath, spanning the full page width */}
          <div className="mb-8 sm:mb-12">
            <span className="section-label">
              {stayExperience.label.toUpperCase()}
            </span>
            <Heading level="2" className="text-3xl sm:text-4xl lg:text-5xl font-normal text-forest-deep mt-2 mb-3">
              {stayExperience.title}
            </Heading>
            <p className="font-sans text-base sm:text-lg text-muted leading-relaxed w-full">
              {stayExperience.lead}
            </p>
          </div>

          {/* 12-Column Grid: Left Narrative + Right Moments */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Homestay Rest Essence (5 cols on lg) */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-lg bg-offwhite border border-border flex flex-col justify-between space-y-6 shadow-subtle">
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-widest text-earth font-semibold block">
                  Quiet Mountain Cadence
                </span>
                <p className="text-base sm:text-lg text-forest-deep leading-relaxed font-normal font-sans">
                  {stayExperience.paragraphs[0]}
                </p>
                <div className="space-y-3.5 text-xs sm:text-sm text-muted leading-relaxed font-sans">
                  <p>{stayExperience.paragraphs[1]}</p>
                  <p>{stayExperience.paragraphs[2]}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border/80 flex items-center gap-2.5 text-xs text-forest-mid font-medium">
                <Compass className="w-4 h-4 text-forest-mid shrink-0" aria-hidden="true" />
                <span>Pine forest walks & 360° Kanchenjunga viewpoints</span>
              </div>
            </div>

            {/* Right Column: 3 Narrative Moments of Hill Cadence (7 cols on lg) */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-4">
              {stayExperience.moments.map((moment, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-lg bg-offwhite border border-border shadow-subtle flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5"
                >
                  <div className="w-12 h-12 rounded-full bg-forest-soft text-forest-deep flex items-center justify-center shrink-0 border border-forest-mid/20">
                    <span className="font-mono text-sm font-semibold">0{idx + 1}</span>
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-forest-mid shrink-0" aria-hidden="true" />
                      <h3 className="font-display text-xl sm:text-2xl text-forest-deep font-normal">
                        {moment.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                      {moment.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. OUR HOSPITALITY & BRAND LINEAGE
          Unified, balanced 12-column composition across the full page container.
          ========================================================================= */}
      <section id="hospitality" className="py-12 sm:py-16 lg:py-20 bg-offwhite border-b border-border/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header: Title with lead sentence directly underneath, spanning the full page width */}
          <div className="mb-8 sm:mb-12">
            <span className="section-label">
              {hospitality.label.toUpperCase()}
            </span>
            <Heading level="2" className="text-3xl sm:text-4xl lg:text-5xl font-normal text-forest-deep mt-2 mb-3">
              "{hospitalityLine || hospitality.title}"
            </Heading>
            <p className="font-sans text-base sm:text-lg text-muted leading-relaxed w-full">
              {hospitality.lead}
            </p>
          </div>

          {/* 12-Column Grid: Left Hospitality Care + Right Brand Lineage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Personal Care & Everyday Inclusions (7 cols on lg) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-lg bg-cream/70 border border-border shadow-subtle flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-widest text-earth font-semibold block">
                  Authentic Himalayan Welcome
                </span>
                <div className="space-y-3.5 text-xs sm:text-sm text-muted leading-relaxed">
                  {hospitality.paragraphs.map((p, idx) => (
                    <p key={idx} className={idx === 0 ? 'text-forest-deep font-medium' : ''}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Verified Everyday Inclusions Note */}
              <div className="p-4 sm:p-5 rounded-md bg-offwhite border border-border/80 space-y-2">
                <span className="text-xs uppercase tracking-widest font-semibold text-forest-deep block">
                  Everyday Homestay Inclusions:
                </span>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Four home-cooked meals every day, hot water geysers, 24-hour electricity, Wi-Fi connectivity, secure vehicle parking, and attentive travel assistance.
                </p>
              </div>
            </div>

            {/* Right Column: Lineage & Assurance (5 cols on lg) */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-lg bg-offwhite border border-border shadow-subtle flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] uppercase tracking-widest text-earth font-semibold block">
                    {vistaRelationship.label}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-forest-soft text-forest-deep border border-forest-mid/20">
                    <ShieldCheck className="w-3.5 h-3.5 text-forest-mid" aria-hidden="true" />
                    Lineage Note
                  </span>
                </div>

                <h3 className="font-display text-2xl text-forest-deep font-normal">
                  {vistaRelationship.title}
                </h3>

                <blockquote className="p-4 rounded-md bg-cream/80 border-l-4 border-earth text-forest-deep font-medium text-xs sm:text-sm leading-relaxed not-italic">
                  "{vistaRelationship.proposedSentence}"
                </blockquote>

                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {vistaRelationship.explanatoryNote}
                </p>
              </div>

              <div className="pt-4 border-t border-border/80 text-xs text-muted">
                Direct reservations are handled personally by our hosts via telephone.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. DIRECT RESERVATIONS CTA
          Generous, balanced CTA container aligned with the page grid.
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cream/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-offwhite border border-border rounded-lg p-8 sm:p-12 lg:p-14 text-center max-w-4xl mx-auto shadow-subtle space-y-6">
            <span className="section-label">
              DIRECT RESERVATIONS
            </span>
            <Heading level="2" className="text-3xl sm:text-4xl font-normal text-forest-deep">
              Ready to Visit Ramdhura?
            </Heading>
            <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
              Connect directly with our host by phone to check room availability, confirm four-meal arrangements, and plan your mountain stay.
            </p>

            {/* Direct Call to Host Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
              <a
                href={formatTelHref(primaryPhone)}
                className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-7 bg-forest-deep hover:bg-forest-mid text-cream rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors shadow-subtle"
                aria-label={`Call ${primaryPhone}`}
              >
                <Phone className="w-4 h-4 text-sunlight shrink-0" aria-hidden="true" />
                <span>Call to Book ({primaryPhone})</span>
              </a>

              <a
                href={formatTelHref(secondaryPhone)}
                className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 bg-transparent border border-forest-deep text-forest-deep hover:bg-forest-soft rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
                aria-label={`Call ${secondaryPhone}`}
              >
                <Phone className="w-4 h-4 text-forest-mid shrink-0" aria-hidden="true" />
                <span>Call ({secondaryPhone})</span>
              </a>
            </div>

            <p className="text-xs text-muted">
              Personal host coordination • NJP-to-NJP trip planning on request
            </p>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

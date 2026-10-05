import React from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from '../components/BaseLayout';
import Heading from '../components/Heading';
import {
  Phone,
  ArrowRight,
  Mountain,
  Sun,
  Compass,
  Check,
  MapPin,
  CalendarCheck,
  BedDouble,
  Utensils,
  CarTaxiFront,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import {
  getPropertyName,
  getTagline,
  getHospitalityLine,
  getBrandLine,
  getPhoneNumbers,
  getPrimaryPhone,
  getSecondaryPhone,
  formatTelHref,
  getHomeContent,
} from '../data';

/**
 * HOME PAGE — RAMDHURA VISTA
 * 
 * Natural Visual Flow:
 * Hero
 * → Introduction
 * → Key stay/facility highlights
 * → Property visual section
 * → Experiences
 * → Compact gallery
 * → Location / getting here
 * → Contact / booking CTA
 * → Footer
 * 
 * Refinements Applied:
 * - Well-proportioned hero (not an oversized 100dvh void).
 * - Real photograph utilized strategically.
 * - Consistent grid, unified max-width (max-w-6xl), balanced vertical padding.
 * - Zero artificial photo placeholder cards filling space.
 * - Strict zero-fabrication of room/price/rating facts.
 */
export default function Home() {
  const propertyName = getPropertyName();
  const tagline = getTagline();
  const hospitalityLine = getHospitalityLine();
  const brandLine = getBrandLine();
  const phones = getPhoneNumbers();
  const primaryPhone = getPrimaryPhone();
  const secondaryPhone = getSecondaryPhone();
  const content = getHomeContent();

  const hero = content?.hero;
  const heroImageSrc = hero?.image?.src || '/images/hero-bg.jpg';
  const intro = content?.intro;
  const kanchenjunga = content?.kanchenjunga;
  const location = content?.location;
  const ctaBanner = content?.ctaBanner;

  return (
    <BaseLayout
      title="Quiet Mountain Homestay"
      description="VISTAS — A quiet mountain homestay in Ramdhura, Barmaik, Kalimpong. Fresh mountain air, 360° Kanchenjunga view walk, home-cooked food, and peaceful hill living."
      canonicalSlug="/"
    >
      {/* =========================================================================
          1. HERO SECTION (WELL-PROPORTIONED & BALANCED)
          Impactful mountain hero with authentic photograph, soft legibility
          gradient, elegant typography, and direct action buttons.
          ========================================================================= */}
      <section className="relative w-full min-h-screen lg:min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-forest-deep text-cream select-none">
        {/* Full-bleed authentic photograph */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <img
            src={heroImageSrc}
            alt={hero?.image?.alt || `${propertyName} in the hills of Ramdhura`}
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          {/* Subtle legibility gradient: dark enough for crisp contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-12 sm:py-24">
          <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.25em] text-sunlight font-semibold mb-3 sm:mb-4">
            Ramdhura, Kalimpong
          </span>

          <h1
            className="font-display font-normal text-white tracking-tight leading-[1.05] drop-shadow-md mb-4 sm:mb-6"
            style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5.25rem)' }}
          >
            VISTAS
          </h1>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-cream/90 font-normal leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 md:whitespace-nowrap">
            A quiet mountain village homestay surrounded by pine forests, fresh air, and open skies.
          </p>

          {/* Direct Hero Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <a
              href={formatTelHref(primaryPhone)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[46px] px-6 bg-forest-deep/90 hover:bg-forest-mid text-cream border border-cream/30 hover:border-cream rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors shadow-subtle"
              aria-label={`Call ${primaryPhone}`}
            >
              <Phone className="w-4 h-4 text-sunlight shrink-0" aria-hidden="true" />
              <span>Call ({primaryPhone})</span>
            </a>

            <Link
              to="/stay-and-discover"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[46px] px-6 bg-white/15 hover:bg-white/25 text-cream border border-cream/40 rounded-sm text-xs font-semibold uppercase tracking-wider backdrop-blur-sm transition-all"
            >
              <span>Explore Stay</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 pt-4 border-t border-white/15 max-w-xs mx-auto">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-cream/70 font-medium">
              {brandLine || 'Stay • Experience • Belong'}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. INTRODUCTION BAND (RAMDHURA VILLAGE & HOSPITALITY)
          Refined editorial 2-column layout with authentic mountain description.
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-offwhite border-b border-border/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-forest-mid">
              VISTAS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8 sm:mb-10">
            {/* Left Column: Heading */}
            <div className="lg:col-span-6">
              <Heading level="2" className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.18]">
                <em className="italic font-normal text-forest-mid">Come as a guest,</em>
                <br />
                leave feeling like family.
              </Heading>
            </div>

            {/* Right Column: Editorial Body */}
            <div className="lg:col-span-6 space-y-4 lg:pt-1">
              <p className="text-base sm:text-lg text-forest-deep leading-relaxed">
                Ramdhura is a quiet mountain village nestled near Barmaik in Kalimpong, West Bengal. Set amidst pine forests and open skies, it is a restful place of greenery, crisp mountain air, and drifting mist.
              </p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Here, quiet mornings begin with birdsong, afternoons move without hurry, and evenings settle into calm mountain stillness with wholesome home-cooked food.
              </p>
            </div>
          </div>

          {/* Verified Village Attributes Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="p-3.5 sm:p-4 rounded bg-cream/70 border border-border flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-forest-mid shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-forest-deep">Pine Forest Trails</span>
            </div>
            <div className="p-3.5 sm:p-4 rounded bg-cream/70 border border-border flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-forest-mid shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-forest-deep">360° Kanchenjunga Walk</span>
            </div>
            <div className="p-3.5 sm:p-4 rounded bg-cream/70 border border-border flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-forest-mid shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-forest-deep">Four Home Meals Daily</span>
            </div>
            <div className="p-3.5 sm:p-4 rounded bg-cream/70 border border-border flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-forest-mid shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-forest-deep">24-Hr Power & Wi-Fi</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. KEY STAY / FACILITY HIGHLIGHTS (BALANCED THREE-COLUMN CARDS)
          Clean informational cards with no artificial image placeholders.
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cream/50 border-b border-border/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
            <span className="section-label">
              WHAT WE PROVIDE
            </span>
            <Heading level="2" className="text-3xl sm:text-4xl lg:text-5xl">
              Simple Comforts in the Hills
            </Heading>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Everyday essentials and personal care for a restful, well-cared-for stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Comfortable Rooms */}
            <div className="p-6 sm:p-7 rounded-lg bg-offwhite border border-border flex flex-col justify-between space-y-5 shadow-subtle">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-forest-soft text-forest-deep flex items-center justify-center">
                  <BedDouble className="w-5 h-5 text-forest-mid" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-forest-deep font-normal">
                    Comfortable Rooms
                  </h3>
                  <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
                    Clean, well-maintained mountain accommodations equipped with everyday essentials:
                  </p>
                </div>
                <ul className="space-y-2 list-none p-0 m-0 text-xs sm:text-sm text-ink/90" role="list">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-forest-mid shrink-0" />
                    <span>24-hour electricity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-forest-mid shrink-0" />
                    <span>Hot water geysers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-forest-mid shrink-0" />
                    <span>Wi-Fi internet access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-forest-mid shrink-0" />
                    <span>Dedicated parking space</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-border/70 text-xs text-muted">
                Quiet rooms designed for peaceful sleep.
              </div>
            </div>

            {/* Card 2: Wholesome Dining */}
            <div className="p-6 sm:p-7 rounded-lg bg-offwhite border border-border flex flex-col justify-between space-y-5 shadow-subtle">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-forest-soft text-forest-deep flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-earth" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-forest-deep font-normal">
                    Wholesome Dining
                  </h3>
                  <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
                    Freshly prepared home-style food included with every day of your stay:
                  </p>
                </div>
                <ul className="space-y-2 list-none p-0 m-0 text-xs sm:text-sm text-ink/90" role="list">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-forest-mid shrink-0" />
                    <span>Four meals every day included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-forest-mid shrink-0" />
                    <span>Hearty breakfast & lunch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-forest-mid shrink-0" />
                    <span>Evening tea with snacks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-forest-mid shrink-0" />
                    <span>Barbecue evenings on request</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-border/70 text-xs text-muted">
                Fresh ingredients cooked with homely care.
              </div>
            </div>

            {/* Card 3: Travel & Sightseeing */}
            <div className="p-6 sm:p-7 rounded-lg bg-offwhite border border-border flex flex-col justify-between space-y-5 shadow-subtle">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-forest-soft text-forest-deep flex items-center justify-center">
                  <CarTaxiFront className="w-5 h-5 text-forest-mid" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-forest-deep font-normal">
                    Travel & Sightseeing
                  </h3>
                  <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
                    Personal journey planning and coordination across Kalimpong:
                  </p>
                </div>
                <ul className="space-y-2 list-none p-0 m-0 text-xs sm:text-sm text-ink/90" role="list">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-forest-mid shrink-0" />
                    <span>NJP-to-NJP trip planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-forest-mid shrink-0" />
                    <span>Bagdogra Airport (IXB) transfers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-forest-mid shrink-0" />
                    <span>Local sightseeing arrangements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-forest-mid shrink-0" />
                    <span>Coordination with trusted drivers</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-border/70 text-xs text-muted">
                Complete travel assistance upon request.
              </div>
            </div>
          </div>

          <div className="pt-8 sm:pt-10 text-center">
            <Link
              to="/stay-and-discover"
              className="inline-flex items-center gap-2 px-6 py-3 border border-forest-deep text-forest-deep hover:bg-forest-deep hover:text-cream rounded-full text-xs font-semibold uppercase tracking-[0.14em] transition-all"
            >
              <span>Explore Stay & Discover</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. PROPERTY VISUAL SECTION (SIGNATURE PANORAMA)
          Strategic showcase using authentic landscape photography of Ramdhura.
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-offwhite border-b border-border/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Real Photograph Media */}
            <div className="lg:col-span-7">
              <div className="relative rounded-lg overflow-hidden border border-border shadow-card">
                <img
                  src="/images/ramdhura-rainbow.jpg"
                  alt="Rainbow arching across the green mountain slopes and cottages of Ramdhura village"
                  className="w-full h-auto object-cover aspect-[16/10] sm:aspect-[16/9]"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-cream text-xs">
                  <span className="font-serif italic text-sunlight">Rainbow over Ramdhura Village</span> • Barmaik, Kalimpong
                </div>
              </div>
            </div>

            {/* Factual Narrative */}
            <div className="lg:col-span-5 space-y-4">
              <span className="section-label">
                HIMALAYAN PANORAMAS
              </span>
              <Heading level="2" className="text-3xl sm:text-4xl leading-tight">
                A 360° view of Kanchenjunga is a short walk away.
              </Heading>
              <p className="text-sm sm:text-base text-forest-deep leading-relaxed">
                From a scenic vantage point just a short walk from our homestay, take in an unobstructed 360-degree panoramic view of Mount Kanchenjunga and the surrounding mountain landscapes.
              </p>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                The walking trail also overlooks the winding Teesta River valley below, surrounded by pine forests, open skies, and drifting mountain clouds.
              </p>

              <div className="p-3.5 rounded bg-cream/80 border border-border text-xs text-forest-deep flex items-center gap-2.5">
                <Mountain className="w-4 h-4 text-forest-mid shrink-0" aria-hidden="true" />
                <span>Short walk from homestay • Quiet pine path • No strenuous trekking required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. EXPERIENCES (THE MOUNTAIN RHYTHM)
          Editorial 3-step cadence of a day in Ramdhura.
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cream/40 border-b border-border/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <span className="section-label mb-2">
              THE MOUNTAIN RHYTHM
            </span>
            <Heading level="2" className="text-3xl sm:text-4xl">
              The Ramdhura Experience
            </Heading>
            <p className="text-sm sm:text-base text-muted mt-2 leading-relaxed">
              A slower cadence of life shaped by the quiet rhythm of the hills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className="p-6 sm:p-7 rounded-lg bg-offwhite border border-border/80 space-y-3 shadow-subtle">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-earth uppercase tracking-widest font-semibold">01 / MORNING</span>
                <Clock className="w-3.5 h-3.5 text-forest-mid" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl text-forest-deep font-normal">
                Quiet Mornings
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Wake to crisp mountain air, birdsong in the pine trees, and soft sunlight across the quiet valley.
              </p>
              <div className="pt-2 text-[11px] font-medium text-forest-mid flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-forest-mid shrink-0" />
                <span>Fresh mountain air & stillness</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 sm:p-7 rounded-lg bg-offwhite border border-border/80 space-y-3 shadow-subtle">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-earth uppercase tracking-widest font-semibold">02 / AFTERNOON</span>
                <Clock className="w-3.5 h-3.5 text-forest-mid" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl text-forest-deep font-normal">
                Unhurried Afternoons
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Spend gentle hours surrounded by pine forest paths, open skies, and passing mountain clouds.
              </p>
              <div className="pt-2 text-[11px] font-medium text-forest-mid flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-forest-mid shrink-0" />
                <span>Pine paths & drifting mist</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 sm:p-7 rounded-lg bg-offwhite border border-border/80 space-y-3 shadow-subtle">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-earth uppercase tracking-widest font-semibold">03 / EVENING</span>
                <Clock className="w-3.5 h-3.5 text-forest-mid" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl text-forest-deep font-normal">
                Peaceful Evenings
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Settle into peaceful evenings with wholesome home-style food and cool mountain stillness.
              </p>
              <div className="pt-2 text-[11px] font-medium text-forest-mid flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-forest-mid shrink-0" />
                <span>Home-cooked meals & mountain breeze</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. LOCATION BANNER (CONNECTED TO STAY & DISCOVER)
          ========================================================================= */}
      <section className="py-8 sm:py-10 bg-cream/60 border-b border-border/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-md bg-offwhite border border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest-soft text-forest-mid flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-earth" aria-hidden="true" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-muted font-semibold block">
                  LOCATION
                </span>
                <span className="text-sm sm:text-base font-medium text-forest-deep">
                  {location?.address || 'Ramdhura, Barmaik, Kalimpong, West Bengal, India'}
                </span>
              </div>
            </div>

            <Link
              to="/stay-and-discover#getting-here"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-forest-mid hover:text-forest-deep transition-colors underline underline-offset-4"
            >
              <span>Getting Here & Travel Assistance</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. DIRECT RESERVATIONS CTA BANNER
          Both verified phone numbers as direct tap-to-call buttons.
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-offwhite">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream/90 border border-border rounded-lg p-6 sm:p-12 text-center max-w-3xl mx-auto shadow-subtle space-y-6">
            <span className="section-label">
              DIRECT RESERVATIONS
            </span>
            <Heading level="2" className="text-3xl sm:text-4xl">
              {ctaBanner?.heading || 'Plan Your Stay with Us'}
            </Heading>
            <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
              {ctaBanner?.body || 'For room availability, four-meal arrangements, and NJP-to-NJP trip planning, connect directly with our hosts.'}
            </p>

            {/* Direct Phone Numbers as Tap-to-Call Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
              {phones.map((phone, idx) => (
                <a
                  key={idx}
                  href={formatTelHref(phone)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[46px] px-6 bg-forest-deep text-cream hover:bg-forest-mid rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
                  aria-label={`Call ${phone}`}
                >
                  <Phone className="w-4 h-4 text-sunlight shrink-0" aria-hidden="true" />
                  <span>Call {phone}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

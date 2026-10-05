import React from 'react';
import BaseLayout from '../components/BaseLayout';
import Heading from '../components/Heading';
import {
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Mail,
} from 'lucide-react';
import {
  getPropertyName,
  getPhoneNumbers,
  getLocationText,
  formatTelHref,
  getHospitalityLine,
  getContactContent,
  getPageConfig,
  getEmail,
  getInstagramUrl,
  getFacebookUrl,
} from '../data';

/**
 * CONTACT & BOOKING PAGE — RAMDHURA VISTA
 * 
 * Clean, balanced direct reservations layout:
 * - A short warm welcome line.
 * - Both numbers as large tap-to-call buttons.
 * - Verified address: "Ramdhura, Barmaik, Kalimpong, West Bengal, India".
 * - What to ask checklist: room availability, meal packages, NJP transfers, sightseeing.
 * - All contact details sourced strictly from /data.
 * - Zero artificial photo placeholder cards filling space.
 */
export default function Contact() {
  const propertyName = getPropertyName();
  const phones = getPhoneNumbers();
  const locationText = getLocationText();
  const hospitalityLine = getHospitalityLine();
  const pageConfig = getPageConfig('contact-booking');
  const content = getContactContent();
  const email = getEmail();
  const instagramUrl = getInstagramUrl();
  const facebookUrl = getFacebookUrl();

  const {
    header,
    invitation,
    location,
    whatToAsk,
  } = content;

  return (
    <BaseLayout
      title={pageConfig?.metaTitle || 'Contact & Booking — Speak with Our Host'}
      description={pageConfig?.metaDescription || 'Connect directly with VISTAS for room reservations, availability, and trip assistance. Call 94758 28935 or 70018 96856.'}
      canonicalSlug="/contact"
    >
      {/* =========================================================================
          PAGE HEADER
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

          <div className="pt-4 sm:pt-6 border-t border-forest-mid/20 space-y-2">
            <p className="font-sans text-base sm:text-lg text-forest-deep leading-relaxed w-full">
              "{hospitalityLine}" — {header.welcomeLine}
            </p>
            <p className="font-sans text-sm sm:text-base text-muted leading-relaxed w-full">
              {header.intro}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN CONTACT & RESERVATIONS SECTION
          Full-width balanced 12-column layout pairing phone actions with guidance.
          ========================================================================= */}
      <section id="contact-details" className="py-12 sm:py-16 lg:py-20 bg-offwhite border-b border-border/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header: Title with lead sentence directly underneath, spanning the full page width */}
          <div className="mb-8 sm:mb-12">
            <span className="section-label">
              RESERVATION OPTIONS
            </span>
            <Heading level="2" className="text-3xl sm:text-4xl lg:text-5xl font-normal text-forest-deep mt-2 mb-3">
              Direct Host Connection
            </Heading>
            <p className="font-sans text-base sm:text-lg text-muted leading-relaxed w-full">
              {invitation.description}
            </p>
          </div>

          {/* Balanced 12-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Direct Phone Numbers & Direct Contact (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Phone Booking Card */}
              <div className="p-6 sm:p-8 rounded-lg bg-cream/70 border border-border space-y-6 shadow-subtle">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-earth font-semibold block mb-1.5">
                    Direct Phone Reservations
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-forest-deep font-normal">
                    Call Our Host Directly
                  </h3>
                  <p className="text-xs sm:text-sm text-muted mt-2 leading-relaxed">
                    Tap either number below to connect directly with our homestay host. We handle all bookings personally to ensure you have complete clarity on rooms, dates, and meal plans.
                  </p>
                </div>

                {/* Tap-to-Call Action Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={formatTelHref(phone)}
                      className="p-5 rounded-lg bg-offwhite hover:bg-forest-deep border-2 border-forest-mid/30 hover:border-forest-deep text-forest-deep hover:text-cream transition-all duration-200 shadow-subtle group flex flex-col justify-between space-y-4"
                      aria-label={`Call ${phone}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-forest-soft text-forest-deep group-hover:bg-cream group-hover:text-forest-deep flex items-center justify-center shrink-0 transition-colors">
                          <Phone className="w-5 h-5 text-forest-mid group-hover:text-forest-deep" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider font-semibold text-earth group-hover:text-sunlight block">
                            {idx === 0 ? 'Primary Line' : 'Alternative Line'}
                          </span>
                          <span className="font-display text-xl sm:text-2xl font-medium tracking-wide">
                            {phone}
                          </span>
                        </div>
                      </div>

                      <span className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded text-xs font-semibold uppercase tracking-wider bg-forest-soft text-forest-deep group-hover:bg-cream group-hover:text-forest-deep transition-colors w-full">
                        Tap to Call
                      </span>
                    </a>
                  ))}
                </div>

                {/* Operating Time Guidance */}
                <div className="p-3.5 rounded bg-offwhite border border-border/80 flex items-start gap-2.5 text-xs text-muted leading-relaxed">
                  <Clock className="w-4 h-4 text-forest-mid shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    Our hosts are available throughout the day for direct bookings. If you are unable to connect on one line, please try the alternative number.
                  </span>
                </div>
              </div>

              {/* Email & Social Channels Card */}
              <div className="p-6 sm:p-7 rounded-lg bg-cream/70 border border-border space-y-4 shadow-subtle">
                <span className="text-[11px] uppercase tracking-widest text-earth font-semibold block mb-1">
                  Email & Social Channels
                </span>

                {/* Email Contact */}
                <a
                  href={`mailto:${email}`}
                  className="flex items-center justify-between p-4 rounded-md bg-offwhite hover:bg-forest-soft border border-border text-forest-deep transition-colors group shadow-subtle"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-forest-soft text-forest-deep group-hover:bg-cream flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-forest-mid" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase tracking-wider text-muted font-semibold block">Email Address</span>
                      <span className="text-xs sm:text-sm font-medium truncate block">{email}</span>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-forest-mid group-hover:text-forest-deep shrink-0 ml-2">
                    Send Email →
                  </span>
                </a>

                {/* Social Media Links: Instagram & Facebook */}
                <div className="p-4 rounded-md bg-offwhite border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-subtle">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted font-semibold block">Follow VISTAS</span>
                    <span className="text-xs text-forest-deep">Real moments & mountain glimpses</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-cream hover:bg-forest-deep text-forest-deep hover:text-cream border border-border text-xs font-medium transition-colors"
                      aria-label="Instagram profile for VISTAS"
                    >
                      <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                      <span>Instagram</span>
                    </a>
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-cream hover:bg-forest-deep text-forest-deep hover:text-cream border border-border text-xs font-medium transition-colors"
                      aria-label="Facebook page for VISTAS"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Address & Assistance Overview (5 cols on lg) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Address Card */}
              <div className="p-6 sm:p-7 rounded-lg bg-cream/70 border border-border shadow-subtle space-y-4">
                <div className="flex items-center gap-2.5 text-forest-mid">
                  <MapPin className="w-5 h-5 text-earth shrink-0" aria-hidden="true" />
                  <h3 className="font-display text-2xl text-forest-deep font-normal">
                    {location.label}
                  </h3>
                </div>

                <div className="p-4 rounded-md bg-offwhite border border-border/80">
                  <p className="text-sm sm:text-base font-medium text-forest-deep leading-relaxed">
                    {locationText || location.address}
                  </p>
                </div>

                <p className="text-xs text-muted leading-relaxed">
                  {location.note}
                </p>
              </div>

              {/* What to Ask / Assistance Checklist Card */}
              <div className="p-6 sm:p-7 rounded-lg bg-offwhite border border-border shadow-subtle space-y-4">
                <span className="text-[11px] uppercase tracking-widest text-earth font-semibold block mb-1">
                  Direct Assistance
                </span>
                <h4 className="font-display text-2xl text-forest-deep font-normal">
                  {whatToAsk.title}
                </h4>
                <ul className="space-y-3 list-none p-0 m-0 text-xs sm:text-sm text-forest-deep" role="list">
                  {whatToAsk.items.map((item, idx) => (
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
          CLOSING HOSPITALITY NOTE
          Closes the site with the same calm, welcoming tone across the full grid.
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-forest-deep text-cream text-center border-t border-forest-mid/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-sunlight mb-1 inline-block">
            {propertyName}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-cream max-w-3xl mx-auto">
            "{hospitalityLine}"
          </h2>
          <p className="text-xs sm:text-sm text-cream/80 leading-relaxed max-w-xl mx-auto">
            We look forward to welcoming you to the quiet hills of Ramdhura. Call our hosts anytime to plan your mountain journey.
          </p>
          <div className="pt-2">
            <span className="text-xs text-cream/60">
              Ramdhura, Barmaik, Kalimpong, West Bengal, India
            </span>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

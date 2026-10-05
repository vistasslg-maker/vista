import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';
import {
  getPropertyName,
  getHospitalityLine,
  getLocationText,
  getPhoneNumbers,
  formatTelHref,
  getNavigationPages,
  getEmail,
  getInstagramUrl,
  getFacebookUrl,
} from '../data';

/**
 * Footer Component — VISTAS
 * 
 * Calm, authentic mountain footer with verified contact facts,
 * email, Instagram, Facebook, 4-page navigation, and subtle brand lineage note.
 */
export default function Footer() {
  const propertyName = getPropertyName();
  const hospitalityLine = getHospitalityLine();
  const locationText = getLocationText();
  const phones = getPhoneNumbers();
  const pages = getNavigationPages();
  const email = getEmail();
  const instagramUrl = getInstagramUrl();
  const facebookUrl = getFacebookUrl();

  return (
    <footer className="bg-forest-deep text-cream mt-auto border-t border-forest-mid/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Brand & Atmosphere (4 cols on lg) */}
          <div className="lg:col-span-4 sm:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/brand/vistas-logo.jpg"
                alt="VISTAS Logo"
                className="w-11 h-11 rounded-full object-cover border border-cream/20 shadow-sm shrink-0"
              />
              <div>
                <span className="font-display text-2xl sm:text-3xl font-normal tracking-wide text-cream block">
                  {propertyName}
                </span>
                <span className="text-sunlight text-xs font-sans uppercase tracking-widest block">
                  Ramdhura, Kalimpong
                </span>
              </div>
            </div>
            <p className="text-cream/80 text-xs sm:text-sm leading-relaxed max-w-sm">
              A peaceful mountain homestay in Ramdhura, Barmaik, Kalimpong.
              {hospitalityLine && ` ${hospitalityLine}`}
            </p>
            <p className="text-[11px] text-cream/60 leading-relaxed max-w-sm pt-1">
              <span className="text-cream/80 font-medium">VISTAS</span> offers genuine hill hospitality, comfortable mountain rest, and wholesome home-cooked meals.
            </p>
          </div>

          {/* Navigation Links (2 cols on lg) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-sans text-xs uppercase tracking-widest text-sunlight font-semibold mb-3.5">
              Explore Our Site
            </h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {pages.map((page) => (
                <li key={page.id}>
                  <Link
                    to={page.slug}
                    className="text-xs sm:text-sm text-cream/80 hover:text-cream transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dedicated Location Column (3 cols on lg) */}
          <div className="lg:col-span-3 sm:col-span-1 space-y-3">
            <h4 className="font-sans text-xs uppercase tracking-widest text-sunlight font-semibold mb-3.5">
              Location
            </h4>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-cream/80">
              <MapPin className="w-4 h-4 text-sunlight shrink-0 mt-0.5" aria-hidden="true" />
              <span className="leading-relaxed">{locationText}</span>
            </div>
            <p className="text-[11px] text-cream/60 leading-relaxed pt-1">
              Peaceful mountain village setting near Barmaik, Eastern Himalayas.
            </p>
          </div>

          {/* Dedicated Contact & Booking Column (3 cols on lg) */}
          <div className="lg:col-span-3 sm:col-span-2 lg:col-span-3 space-y-3.5">
            <h4 className="font-sans text-xs uppercase tracking-widest text-sunlight font-semibold mb-3.5">
              Contact & Booking
            </h4>

            {/* Direct Phone Contacts */}
            <div className="space-y-1.5">
              <p className="text-[10px] text-cream/60 uppercase tracking-wider font-semibold">
                Call Directly to Book:
              </p>
              <div className="flex flex-col gap-1.5">
                {phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={formatTelHref(phone)}
                    className="inline-flex items-center gap-2 text-cream hover:text-sunlight transition-colors font-medium text-xs sm:text-sm"
                    aria-label={`Call ${phone}`}
                  >
                    <Phone className="w-3.5 h-3.5 text-sunlight shrink-0" aria-hidden="true" />
                    <span>{phone}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Direct Email Contact */}
            <div className="pt-1">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-cream hover:text-sunlight transition-colors text-xs sm:text-sm font-medium"
                aria-label={`Email ${email}`}
              >
                <Mail className="w-3.5 h-3.5 text-sunlight shrink-0" aria-hidden="true" />
                <span>{email}</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-1 flex items-center gap-3">
              <span className="text-[10px] text-cream/60 uppercase tracking-wider font-semibold">
                Follow Us:
              </span>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-forest-mid/50 hover:bg-forest-mid text-cream hover:text-sunlight flex items-center justify-center border border-forest-mid/80 transition-colors"
                aria-label="Instagram profile for VISTAS"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-forest-mid/50 hover:bg-forest-mid text-cream hover:text-sunlight flex items-center justify-center border border-forest-mid/80 transition-colors"
                aria-label="Facebook page for VISTAS"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-forest-mid/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} {propertyName}. All rights reserved.</p>
          <p className="text-cream/50">Ramdhura, Barmaik, Kalimpong</p>
        </div>
      </div>
    </footer>
  );
}

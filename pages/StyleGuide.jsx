import React from 'react';
import BaseLayout from '../components/BaseLayout';
import Section from '../components/Section';
import Heading from '../components/Heading';
import Button from '../components/Button';
import Card from '../components/Card';
import Image from '../components/Image';
import FeatureList from '../components/FeatureList';
import ContactButton from '../components/ContactButton';
import FeaturedRow from '../components/FeaturedRow';
import {
  getPropertyName,
  getTagline,
  getHospitalityLine,
  getVerifiedAmenities,
  getNearbyAttractions,
} from '../data';

export default function StyleGuide() {
  const propertyName = getPropertyName();
  const tagline = getTagline();
  const hospitalityLine = getHospitalityLine();
  const amenities = getVerifiedAmenities();
  const attractions = getNearbyAttractions();

  const colors = [
    { name: 'Forest Deep', var: '--color-forest-deep', hex: '#163323', text: 'text-cream' },
    { name: 'Forest Mid', var: '--color-forest-mid', hex: '#274E37', text: 'text-cream' },
    { name: 'Forest Soft', var: '--color-forest-soft', hex: '#EDF3EE', text: 'text-ink' },
    { name: 'Cream', var: '--color-cream', hex: '#F8F5EE', text: 'text-ink' },
    { name: 'Off-White', var: '--color-offwhite', hex: '#FDFAF6', text: 'text-ink' },
    { name: 'Earth / Clay', var: '--color-earth', hex: '#8C6848', text: 'text-cream' },
    { name: 'Sunlight Gold', var: '--color-sunlight', hex: '#D49024', text: 'text-ink' },
    { name: 'Charcoal Ink', var: '--color-ink', hex: '#18201B', text: 'text-cream' },
    { name: 'Muted Slate', var: '--color-muted', hex: '#5E6D63', text: 'text-cream' },
    { name: 'Warm Border', var: '--color-border', hex: '#E4DDD2', text: 'text-ink' },
  ];

  return (
    <BaseLayout title="Internal Design System & Style Guide">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="section-label mb-2">INTERNAL DEVELOPMENT TOOL</span>
        <Heading level="1" className="mb-2">
          {propertyName} Design System
        </Heading>
        <p className="font-display italic text-2xl text-forest-mid mb-8 font-normal">
          "{tagline}"
        </p>

        {/* 1. Color Palette */}
        <div className="mb-14 pb-10 border-b border-border">
          <span className="section-label mb-4">COLOR TOKENS</span>
          <h3 className="font-display text-2xl text-forest-deep mb-6">
            Earthy Himalayan Palette
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {colors.map((c, i) => (
              <div
                key={i}
                className="rounded border border-border overflow-hidden shadow-subtle"
              >
                <div
                  className={`h-24 p-3 flex flex-col justify-end ${c.text}`}
                  style={{ backgroundColor: `var(${c.var})` }}
                >
                  <span className="text-xs font-semibold">{c.name}</span>
                </div>
                <div className="p-2.5 bg-offwhite text-[11px] font-mono text-muted space-y-0.5">
                  <div className="font-semibold text-ink">{c.hex}</div>
                  <div>{c.var}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Typography Scale */}
        <div className="mb-14 pb-10 border-b border-border space-y-6">
          <span className="section-label mb-2">TYPOGRAPHY</span>
          <h3 className="font-display text-2xl text-forest-deep mb-4">
            Display Serif & Clean Sans
          </h3>

          <div className="p-6 bg-cream rounded border border-border space-y-6">
            <div>
              <span className="text-xs text-muted font-mono block mb-1">
                Heading 1 — Cormorant Garamond Display
              </span>
              <Heading level="1">{propertyName}</Heading>
            </div>

            <div>
              <span className="text-xs text-muted font-mono block mb-1">
                Heading 2 with Italic Emphasis
              </span>
              <Heading level="2" italicText="& Unhurried Living">
                Quiet Mountain Mornings
              </Heading>
            </div>

            <div>
              <span className="text-xs text-muted font-mono block mb-1">
                Heading 3
              </span>
              <Heading level="3">Wholesome Home-Cooked Mountain Meals</Heading>
            </div>

            <div>
              <span className="text-xs text-muted font-mono block mb-1">
                Body Copy — Plus Jakarta Sans
              </span>
              <p className="text-base text-ink leading-relaxed max-w-2xl">
                Nestled in the quiet mountain village of Ramdhura, Barmaik, Kalimpong.
                Surrounded by pine forests, fresh mountain air, and drifting mist. {hospitalityLine}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Button Component Hierarchy */}
        <div className="mb-14 pb-10 border-b border-border">
          <span className="section-label mb-4">BUTTON VARIANTS</span>
          <h3 className="font-display text-2xl text-forest-deep mb-6">
            Action Hierarchy (Min 44px Touch Targets)
          </h3>

          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="md">
              Primary Button
            </Button>
            <Button variant="secondary" size="md">
              Secondary Outline
            </Button>
            <Button variant="sunlight" size="md">
              Sunlight Accent
            </Button>
            <ContactButton variant="primary" size="md" />
            <Button variant="link">Text Link Action →</Button>
          </div>
        </div>

        {/* 4. Strict Image Placeholder System */}
        <div className="mb-14 pb-10 border-b border-border">
          <span className="section-label mb-4">IMAGE COMPONENT</span>
          <h3 className="font-display text-2xl text-forest-deep mb-4">
            Labeled Placeholders (Strictly No AI / Stock)
          </h3>
          <p className="text-sm text-muted mb-6">
            When an authentic photograph is not supplied, the component displays an explicit visual placeholder.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <span className="text-xs font-mono text-muted mb-2 block">
                16:9 Room Placeholder
              </span>
              <Image
                src={null}
                alt="Room Interior"
                description="Authentic photograph of guest room interior with clean linen."
                aspectRatio="16/9"
              />
            </div>

            <div>
              <span className="text-xs font-mono text-muted mb-2 block">
                4:3 View Placeholder
              </span>
              <Image
                src={null}
                alt="360° Kanchenjunga View"
                description="360° panoramic view of Mount Kanchenjunga from the nearby walk."
                aspectRatio="4/3"
              />
            </div>
          </div>
        </div>

        {/* 5. Feature List & Carousel */}
        <div>
          <span className="section-label mb-4">LISTS & ROWS</span>
          <h3 className="font-display text-2xl text-forest-deep mb-6">
            Inclusions & Attractions
          </h3>

          <FeatureList items={amenities.slice(0, 6)} columns={2} className="mb-8" />

          <FeaturedRow title="Attractions Carousel" subtitle="VERIFIED SIGHTS">
            {attractions.slice(0, 6).map((a, i) => (
              <Card key={i}>
                <span className="text-xs text-forest-mid font-semibold uppercase mb-1">
                  Sight #{i + 1}
                </span>
                <h4 className="font-display text-lg text-forest-deep mb-1">
                  {a.name}
                </h4>
                <p className="text-xs text-muted">
                  Kalimpong region sightseeing arrangement.
                </p>
              </Card>
            ))}
          </FeaturedRow>
        </div>
      </div>
    </BaseLayout>
  );
}

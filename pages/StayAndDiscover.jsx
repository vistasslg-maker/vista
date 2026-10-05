import React from 'react';
import BaseLayout from '../components/BaseLayout';
import StickySectionNav from '../components/StickySectionNav';
import Section from '../components/Section';
import Heading from '../components/Heading';
import Card from '../components/Card';
import SplitLayout from '../components/SplitLayout';
import {
  Zap,
  Droplets,
  Wifi,
  Car,
  Utensils,
  Flame,
  Compass,
  MapPin,
  Mountain,
  Phone,
  ArrowRight,
  Navigation,
  CarTaxiFront,
  BedDouble,
  CheckCircle2,
  Check,
  ShieldCheck,
} from 'lucide-react';
import {
  getPropertyName,
  getPhoneNumbers,
  getPrimaryPhone,
  getSecondaryPhone,
  formatTelHref,
  getLocationText,
  getStayAndDiscoverContent,
  getRooms,
  getAttractionsList,
  getPageConfig,
} from '../data';

/**
 * STAY & DISCOVER PAGE — RAMDHURA VISTA
 * 
 * Strictly ONE single page presenting everything provided:
 * 1. STAY (Rooms & Verified Amenities)
 *    - Clean information-based layout. Zero empty photo placeholders.
 * 2. DINING & EXPERIENCES
 *    - Home-style food, four meals a day, barbecue on request, sightseeing,
 *      transport arrangements, NJP-to-NJP trip planning.
 * 3. EXPLORE RAMDHURA
 *    - Featured 360° Kanchenjunga view walk (with real landscape photo).
 *    - Teesta River valley views.
 *    - Elegant text-based directory of all 12 verified regional attractions.
 * 4. GALLERY
 *    - Compact, tasteful editorial gallery showcasing available authentic photography.
 *    - Easily expandable when more photographs are provided.
 * 5. GETTING HERE
 *    - Verified address, transit assistance (NJP / Bagdogra / Kalimpong), road guidance.
 * 6. Bottom Call to Book CTA.
 */
export default function StayAndDiscover() {
  const propertyName = getPropertyName();
  const phones = getPhoneNumbers();
  const primaryPhone = getPrimaryPhone();
  const secondaryPhone = getSecondaryPhone();
  const locationText = getLocationText();
  const pageConfig = getPageConfig('stay-and-discover');
  const content = getStayAndDiscoverContent();
  const rooms = getRooms();
  const attractions = getAttractionsList();

  const {
    header,
    stay,
    diningExperiences,
    explore,
    gallery,
    gettingHere,
    bottomCta,
  } = content;

  // Icon mapping for verified amenities
  const amenityIcons = {
    rooms: BedDouble,
    power: Zap,
    'hot-water': Droplets,
    wifi: Wifi,
    parking: Car,
  };

  return (
    <BaseLayout
      title={pageConfig?.metaTitle || 'Stay & Discover — Everything We Provide'}
      description={pageConfig?.metaDescription || 'Discover everything VISTAS provides on a single page: comfortable rooms, 4 home-cooked meals, 360° Kanchenjunga view walk, 12 local attractions, and NJP trip planning.'}
      canonicalSlug="/stay-and-discover"
    >
      {/* =========================================================================
          PAGE HEADER
          Balanced padding, elegant Cormorant serif display headline.
          ========================================================================= */}
      <section className="pt-10 sm:pt-14 pb-8 sm:pb-10 border-b border-border/80 bg-gradient-to-b from-cream/80 to-offwhite">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <span className="section-label mb-2.5">
              {header.label}
            </span>
            <Heading level="1" className="mb-3 text-3xl sm:text-4xl lg:text-5xl">
              {header.title}
            </Heading>
            <p className="text-sm sm:text-base text-muted leading-relaxed w-full">
              {header.lead}
            </p>
          </div>
        </div>
      </section>

      {/* Sticky In-Page Section Sub-Navigation */}
      <StickySectionNav />

      {/* =========================================================================
          SECTION 1: STAY (Rooms & Amenities)
          Clean information-based layout with verified amenities.
          ========================================================================= */}
      <Section
        id="stay"
        label={stay.label}
        title={stay.title}
        titleItalic="& Rest"
        description={stay.lead}
        background="offwhite"
        className="scroll-mt-28 sm:scroll-mt-36 py-12 sm:py-16"
      >
        {/* Verified Shared Amenities Bar */}
        <div className="mb-10">
          <h3 className="font-sans text-xs uppercase tracking-widest text-forest-deep font-semibold mb-4">
            Verified Shared Amenities
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {stay.verifiedAmenities.map((amenity) => {
              const IconComp = amenityIcons[amenity.id] || CheckCircle2;
              return (
                <div
                  key={amenity.id}
                  className="p-4 rounded-md bg-cream/70 border border-border/80 flex flex-col items-start gap-2 shadow-subtle"
                >
                  <div className="w-8 h-8 rounded-full bg-forest-soft text-forest-deep flex items-center justify-center shrink-0">
                    <IconComp className="w-4 h-4 text-forest-mid" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-sm font-semibold text-forest-deep">
                      {amenity.title}
                    </h4>
                    <p className="text-[11px] text-muted leading-snug mt-1">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Room Accommodations Container */}
        <div>
          {rooms && rooms.length > 0 ? (
            /* Render authentic room cards if data is provided */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rooms.map((room) => (
                <Card key={room.id} className="overflow-hidden p-0 border border-border">
                  {room.image && (
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-auto aspect-video object-cover"
                    />
                  )}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-display text-2xl text-forest-deep">{room.name}</h4>
                        <p className="text-xs text-muted mt-0.5">{room.type || 'Homestay Room'}</p>
                      </div>
                      {room.price && (
                        <div className="text-right">
                          <span className="text-lg font-serif font-bold text-forest-deep">
                            {room.price}
                          </span>
                          <span className="text-[10px] text-muted block">per night</span>
                        </div>
                      )}
                    </div>
                    {room.capacity && (
                      <p className="text-xs text-ink/80">
                        <strong>Capacity:</strong> {room.capacity}
                      </p>
                    )}
                    {room.amenities && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {room.amenities.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-[10px] bg-forest-soft text-forest-deep rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            /* Clean, dignified information card when /data/rooms is empty */
            <div className="bg-cream/70 border border-border rounded-lg p-6 sm:p-10 max-w-4xl mx-auto shadow-subtle space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/80 pb-5">
                <div>
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-forest-mid bg-forest-soft px-2.5 py-0.5 rounded">
                    Homestay Accommodations
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-forest-deep mt-2">
                    Comfortable Mountain Rooms
                  </h3>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs text-muted block">All stays include</span>
                  <span className="text-sm font-semibold text-forest-deep">Four Meals a Day</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-forest-deep">
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    VISTAS provides clean, well-maintained rooms designed for peaceful rest in the hills. Every stay is supported by our essential everyday comforts:
                  </p>
                  <ul className="space-y-2 list-none p-0 m-0 text-xs sm:text-sm text-ink/90" role="list">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-forest-mid shrink-0" />
                      <span>Clean bedding with mountain views</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-forest-mid shrink-0" />
                      <span>Attached bathrooms with geyser hot water</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-forest-mid shrink-0" />
                      <span>24-hour uninterrupted electricity</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-forest-mid shrink-0" />
                      <span>Wi-Fi internet access & on-premise parking</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 sm:p-5 rounded-md bg-offwhite border border-border/80 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-wider text-forest-deep font-semibold mb-1">
                      Direct Room Reservations:
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      We coordinate room configurations, availability for your preferred travel dates, and seasonal packages directly by phone.
                    </p>
                  </div>

                  <div>
                    <a
                      href={formatTelHref(primaryPhone)}
                      className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] px-4 bg-forest-deep text-cream hover:bg-forest-mid rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors shadow-subtle"
                      aria-label={`Call ${primaryPhone}`}
                    >
                      <Phone className="w-3.5 h-3.5 text-sunlight shrink-0" aria-hidden="true" />
                      <span>Call ({primaryPhone})</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* =========================================================================
          SECTION 2: DINING & EXPERIENCES
          Home-style food, 4 meals, barbecue on request, sightseeing & travel.
          ========================================================================= */}
      <Section
        id="dining-experiences"
        label={diningExperiences.label}
        title={diningExperiences.title}
        titleItalic="& Dining"
        description={diningExperiences.lead}
        background="cream"
        className="scroll-mt-28 sm:scroll-mt-36 py-12 sm:py-16"
      >
        <div className="space-y-12">
          {/* Part A: Dining & Four Meals a Day */}
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-earth font-semibold block mb-1">
                Wholesome Mountain Fare
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-forest-deep">
                Home-Style Food & Four Meals a Day
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {diningExperiences.diningItems.map((item) => (
                <Card key={item.id} className="p-5 sm:p-6 bg-offwhite border border-border flex flex-col justify-between shadow-subtle">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-full bg-forest-soft text-forest-deep flex items-center justify-center">
                      {item.id === 'barbecue' ? (
                        <Flame className="w-5 h-5 text-earth" aria-hidden="true" />
                      ) : (
                        <Utensils className="w-5 h-5 text-forest-mid" aria-hidden="true" />
                      )}
                    </div>
                    <h4 className="font-display text-xl text-forest-deep font-normal">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {item.id === 'barbecue' && (
                    <span className="inline-block mt-4 text-[10px] uppercase tracking-wider font-semibold text-earth bg-cream px-2 py-0.5 rounded border border-border self-start">
                      On Request
                    </span>
                  )}
                </Card>
              ))}
            </div>

            {/* Editorial Meal Plan Narrative */}
            <div className="p-6 sm:p-7 rounded-lg bg-offwhite border border-border/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-subtle">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[10px] uppercase tracking-widest text-forest-mid font-semibold">
                  Included Daily Meal Schedule
                </span>
                <h4 className="font-display text-xl sm:text-2xl text-forest-deep font-normal">
                  Fresh, Nourishing Mountain Meals
                </h4>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Guests staying at VISTAS enjoy wholesome home-cooked food prepared fresh every day. Our daily stay package includes: hearty breakfast, wholesome lunch, evening tea with snacks, and comforting dinner.
                </p>
              </div>

              <div className="p-4 rounded bg-cream/70 border border-border shrink-0 text-xs text-forest-deep space-y-1">
                <span className="font-semibold block text-[11px] uppercase tracking-wider text-earth">
                  Special Arrangements:
                </span>
                <p>Outdoor barbecue on request</p>
                <p>Pure vegetarian & non-veg options</p>
              </div>
            </div>
          </div>

          {/* Part B: Sightseeing, Transport & NJP-to-NJP Trip Planning */}
          <div className="pt-8 border-t border-border/80">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-earth font-semibold block mb-1">
                Travel Assistance
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-forest-deep">
                Sightseeing & Trip Coordination
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {diningExperiences.experienceArrangements.map((item) => (
                <Card key={item.id} className="p-5 sm:p-6 bg-offwhite border border-border space-y-3 shadow-subtle">
                  <div className="w-10 h-10 rounded-full bg-forest-soft text-forest-deep flex items-center justify-center">
                    {item.id === 'njp-planning' ? (
                      <Compass className="w-5 h-5 text-earth" aria-hidden="true" />
                    ) : (
                      <CarTaxiFront className="w-5 h-5 text-forest-mid" aria-hidden="true" />
                    )}
                  </div>
                  <h4 className="font-display text-xl text-forest-deep font-normal">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>

            {/* Experience Coordination Banner */}
            <div className="p-6 sm:p-8 rounded-lg bg-forest-deep text-cream flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-subtle">
              <div className="max-w-xl space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-sunlight font-semibold">
                  Personal Coordination
                </span>
                <h4 className="font-display text-2xl sm:text-3xl text-cream font-normal">
                  {diningExperiences.callAction?.title || 'Interested in Barbecue, Sightseeing, or Transport?'}
                </h4>
                <p className="text-xs sm:text-sm text-cream/80 leading-relaxed">
                  {diningExperiences.callAction?.description || 'Speak with our host directly to organize customized travel arrangements or barbecue evenings during your stay.'}
                </p>
              </div>

              <div className="w-full md:w-auto shrink-0">
                <a
                  href={formatTelHref(primaryPhone)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[46px] px-6 bg-sunlight hover:bg-white text-forest-deep rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors shadow-subtle"
                  aria-label={`Call ${primaryPhone}`}
                >
                  <Phone className="w-4 h-4 text-forest-deep shrink-0" aria-hidden="true" />
                  <span>Call to Coordinate ({primaryPhone})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          SECTION 3: EXPLORE RAMDHURA
          360° Kanchenjunga view, Teesta River views, and 12 nearby attractions.
          ========================================================================= */}
      <Section
        id="explore"
        label={explore.label}
        title={explore.title}
        titleItalic="& Viewpoints"
        description={explore.lead}
        background="offwhite"
        className="scroll-mt-28 sm:scroll-mt-36 py-12 sm:py-16"
      >
        <div className="space-y-12">
          {/* Featured Row 1: 360° Kanchenjunga View Walk with Real Photograph */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="rounded-lg overflow-hidden border border-border shadow-card">
                <img
                  src="/images/hero-bg.jpg"
                  alt="Panoramic view of surrounding Himalayan hills from the walking trail in Ramdhura"
                  className="w-full h-auto aspect-video object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-forest-deep bg-forest-soft rounded">
                Signature Panorama
              </span>
              <Heading level="3" className="text-2xl sm:text-3xl">
                360° Kanchenjunga View Walk
              </Heading>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                One of the most special aspects of staying in Ramdhura is that a breathtaking 360° panoramic view of Mount Kanchenjunga and the Himalayan mountain range is located just a short walk away from our doorstep.
              </p>
              <div className="p-3.5 rounded bg-cream/80 border border-border/80 text-xs text-forest-deep flex items-center gap-2.5">
                <Mountain className="w-4 h-4 text-forest-mid shrink-0" aria-hidden="true" />
                <span>Short walking distance • Peaceful pine path • No strenuous trekking required</span>
              </div>
            </div>
          </div>

          {/* Featured Row 2: Teesta River Valley Views (Clean Editorial Split) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-6 border-t border-border/60">
            <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-forest-deep bg-forest-soft rounded">
                Valley Landscape
              </span>
              <Heading level="3" className="text-2xl sm:text-3xl">
                Teesta River Valley Views
              </Heading>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Ramdhura sits perched high above the emerald curves of the Teesta River. Gaze down at the river valley winding through the Himalayan foothills, accompanied by open skies, quiet breezes, and drifting mountain clouds.
              </p>
              <div className="p-3.5 rounded bg-cream/80 border border-border/80 text-xs text-forest-deep flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-forest-mid shrink-0" aria-hidden="true" />
                <span>Wide horizon vistas • Valley greenery • Fresh mountain air</span>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden border border-border shadow-card">
                <img
                  src="/images/teesta-river-valley.jpg"
                  alt="Emerald curves of the Teesta River winding through the green Himalayan foothills below Ramdhura"
                  className="w-full h-auto aspect-video object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* The 12 Verified Regional Attractions (Clean Editorial Grid — No Empty Photo Cards) */}
          <div className="pt-8 border-t border-border/80">
            <div className="max-w-3xl mb-6">
              <span className="text-xs uppercase tracking-widest text-earth font-semibold block mb-1">
                Sightseeing Around Kalimpong
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-forest-deep mb-2">
                12 Nearby Attractions
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {explore.attractionsIntro}
              </p>
            </div>

            {/* Clean, compact 3-column / 4-column card grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {attractions.map((attraction, idx) => (
                <div
                  key={attraction.id || idx}
                  className="p-3.5 sm:p-4 rounded-md bg-cream/60 border border-border hover:border-forest-mid/40 hover:bg-cream transition-colors flex items-center gap-2.5 shadow-subtle"
                >
                  <div className="w-2 h-2 rounded-full bg-sunlight shrink-0" />
                  <span className="font-display text-base sm:text-lg text-forest-deep font-normal leading-snug">
                    {attraction.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 sm:p-5 rounded-md bg-cream/70 border border-border/80 text-xs sm:text-sm text-muted flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span>
                Want to plan a day trip to Delo, Lava, or Lolegaon? We arrange vehicle bookings on request.
              </span>
              <a
                href={formatTelHref(primaryPhone)}
                className="font-semibold text-forest-deep hover:text-forest-mid underline underline-offset-2 shrink-0"
              >
                Call to Plan ({primaryPhone})
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          SECTION 4: GALLERY
          Tasteful editorial grid showcasing available authentic photography.
          No empty photo placeholder boxes.
          ========================================================================= */}
      <Section
        id="gallery"
        label={gallery.label}
        title={gallery.title}
        titleItalic="& Atmosphere"
        description={gallery.lead}
        background="cream"
        className="scroll-mt-28 sm:scroll-mt-36 py-12 sm:py-16 border-t border-border/80"
      >
        <div className="space-y-8">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <span className="section-label">
              Authentic Visuals
            </span>
            <Heading level="3" className="text-2xl sm:text-3xl">
              Property & Mountain Gallery
            </Heading>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Authentic perspectives of VISTAS, pine forest paths, and surrounding mountain horizons.
            </p>
          </div>

          {/* Tasteful editorial grid featuring real imagery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-lg overflow-hidden border border-border shadow-subtle bg-forest-deep min-h-[260px] sm:min-h-[300px] flex flex-col justify-end">
              <img
                src="/images/ramdhura-rainbow.jpg"
                alt="Rainbow over Ramdhura village cottages and green hillside slopes"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10 p-5 text-cream">
                <span className="text-[10px] uppercase font-mono tracking-wider text-sunlight block mb-1">
                  Village Setting
                </span>
                <h4 className="font-display text-xl sm:text-2xl text-white font-normal">
                  Rainbow over Ramdhura Village
                </h4>
                <p className="text-xs text-cream/80 mt-1">
                  Cottages nestled on the pine hillside under changing mountain skies.
                </p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden border border-border shadow-subtle bg-forest-deep min-h-[260px] sm:min-h-[300px] flex flex-col justify-end">
              <img
                src="/images/mountain-tree-mist.jpg"
                alt="Mountain pine tree standing against drifting mist and layered Himalayan ridges"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10 p-5 text-cream">
                <span className="text-[10px] uppercase font-mono tracking-wider text-sunlight block mb-1">
                  Atmosphere & Mist
                </span>
                <h4 className="font-display text-xl sm:text-2xl text-white font-normal">
                  Passing Mist & Mountain Pines
                </h4>
                <p className="text-xs text-cream/80 mt-1">
                  Quiet walking trails enveloped in cool mountain air and drifting clouds.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-md bg-offwhite/90 border border-border text-center max-w-xl mx-auto">
            <p className="text-xs text-muted leading-relaxed">
              Under our project guidelines, only authentic photographs supplied directly from the property are displayed. Additional photographs across changing hill seasons will be added as captured.
            </p>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          SECTION 5: GETTING HERE (Location & Travel Assistance)
          ========================================================================= */}
      <Section
        id="getting-here"
        label={gettingHere.label}
        title={gettingHere.title}
        titleItalic="& Transport"
        description={gettingHere.lead}
        background="offwhite"
        className="scroll-mt-28 sm:scroll-mt-36 py-12 sm:py-16"
      >
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Address & Verified Location Details */}
            <Card className="p-6 sm:p-7 space-y-5">
              <div className="flex items-center gap-2.5 text-forest-mid">
                <MapPin className="w-5 h-5 text-earth shrink-0" aria-hidden="true" />
                <h3 className="font-display text-2xl text-forest-deep font-normal">
                  Property Address
                </h3>
              </div>

              <div className="p-4 rounded bg-cream/70 border border-border/80">
                <span className="text-[11px] uppercase tracking-wider text-muted font-semibold block mb-1">
                  Verified Location
                </span>
                <p className="text-base sm:text-lg font-medium text-forest-deep leading-relaxed">
                  {gettingHere.address}
                </p>
                <p className="text-xs text-muted mt-1">
                  Quiet mountain village near Barmaik, Kalimpong district.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-sans text-xs uppercase tracking-widest text-forest-deep font-semibold">
                  Travel Assistance Services:
                </h4>
                <ul className="space-y-2 list-none p-0 m-0 text-xs sm:text-sm text-ink/90" role="list">
                  {gettingHere.travelServices.map((srv, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-forest-mid shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <span className="font-semibold block">{srv.title}</span>
                        <span className="text-xs text-muted leading-relaxed">{srv.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Call to Arrange Transport */}
              <div className="pt-2">
                <a
                  href={formatTelHref(primaryPhone)}
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] px-4 bg-forest-deep text-cream hover:bg-forest-mid rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors shadow-subtle"
                  aria-label={`Call ${primaryPhone}`}
                >
                  <Phone className="w-3.5 h-3.5 text-sunlight shrink-0" aria-hidden="true" />
                  <span>Call to Arrange Transport ({primaryPhone})</span>
                </a>
              </div>
            </Card>

            {/* Transit & Route Guidance Card (Clean Information with Mountain Approach Photo) */}
            <Card className="p-6 sm:p-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-forest-mid">
                  <Navigation className="w-5 h-5 text-forest-mid shrink-0" aria-hidden="true" />
                  <h3 className="font-display text-2xl text-forest-deep font-normal">
                    Transit & Route Details
                  </h3>
                </div>

                <div className="rounded-md overflow-hidden border border-border/80 shadow-subtle">
                  <img
                    src="/images/ramdhura-mountain-road.jpg"
                    alt="Scenic mountain road winding along the hillside toward Ramdhura"
                    className="w-full h-44 sm:h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="bg-cream/90 px-3 py-2 text-[11px] text-muted flex items-center justify-between border-t border-border/60">
                    <span className="font-medium text-forest-deep">Scenic Mountain Approach</span>
                    <span>Barmaik, Kalimpong</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-forest-deep">
                  <div className="p-3.5 rounded bg-cream/70 border border-border space-y-1">
                    <span className="font-semibold text-xs uppercase tracking-wider text-earth block">
                      From NJP Railway Station / Siliguri
                    </span>
                    <p className="text-xs text-muted leading-relaxed">
                      Direct taxi transfers can be coordinated from New Jalpaiguri (NJP) Railway Station or Siliguri directly to VISTAS.
                    </p>
                  </div>

                  <div className="p-3.5 rounded bg-cream/70 border border-border space-y-1">
                    <span className="font-semibold text-xs uppercase tracking-wider text-earth block">
                      From Bagdogra Airport (IXB)
                    </span>
                    <p className="text-xs text-muted leading-relaxed">
                      Airport pickups arranged on request. Complete NJP-to-NJP / Bagdogra round-trip travel planning available.
                    </p>
                  </div>

                  <div className="p-3.5 rounded bg-cream/70 border border-border space-y-1">
                    <span className="font-semibold text-xs uppercase tracking-wider text-earth block">
                      From Kalimpong Town
                    </span>
                    <p className="text-xs text-muted leading-relaxed">
                      Ramdhura is located a short mountain drive from Kalimpong town, easily accessible via Barmaik.
                    </p>
                  </div>
                </div>
              </div>

              {/* Host Directions Note */}
              <div className="p-4 rounded bg-offwhite border border-border text-xs text-muted leading-relaxed space-y-1">
                <span className="font-semibold text-forest-deep block">
                  Driving & Arrival Assistance:
                </span>
                <p>
                  Detailed route guidance and driver coordination will be provided by our host when you confirm your reservation dates.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          SECTION 6: BOTTOM CALL TO BOOK CTA
          Direct host call options for reservations.
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cream/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-offwhite border border-border rounded-lg p-6 sm:p-12 text-center max-w-3xl mx-auto shadow-subtle space-y-6">
            <span className="section-label">
              {bottomCta.label}
            </span>
            <Heading level="2" className="text-3xl sm:text-4xl">
              {bottomCta.title}
            </Heading>
            <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
              {bottomCta.body}
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
              Alternative host contact: {secondaryPhone} • Four meals a day included with all stays
            </p>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

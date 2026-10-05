/**
 * HOME PAGE CONTENT — RAMDHURA VISTA
 * 
 * Strict Zero-Fabrication Rules Applied:
 * - Only verified facts from /docs/PROJECT_RULES.md and /data/business.json.
 * - No unbackable superlatives, fake ratings, or invented reviews.
 * - Every missing photo has an explicit slotId matching /docs/MISSING_ASSETS.md.
 */

export const heroContent = {
  slotId: 'IMG-HOME-HERO',
  headline: 'VISTAS',
  brandLine: 'Stay • Experience • Belong',
  subtext: 'A peaceful mountain homestay in Ramdhura, Kalimpong.',
  image: {
    src: '/images/hero-bg.jpg',
    alt: 'Lush green mountain hills and cloud-draped slopes of Ramdhura, Kalimpong',
    description: 'Authentic landscape photograph of the Ramdhura hills with lush greenery and open skies supplied by owner.',
    aspectRatio: '16/9',
    priority: true, // Eagerly loaded for optimal LCP
  },
  contactStrip: {
    callAriaLabel: 'Call directly to book',
    callAction: 'Call to Book',
  },
};

export const introContent = {
  label: 'About Ramdhura',
  heading: 'A Quiet Mountain Village Retreat',
  lead: 'Ramdhura is a quiet mountain village near Barmaik in Kalimpong, West Bengal.',
  body: 'Set amidst pine forests and open skies, it is a peaceful place of greenery, fresh air, mountain landscapes, and drifting mist. Far from crowded towns, it is a place to slow down, breathe, and unwind in nature.',
};

export const experienceContent = {
  label: 'The Mountain Rhythm',
  heading: 'The Ramdhura Experience',
  subheading: 'A slower cadence of life shaped by the quiet rhythm of the hills.',
  items: [
    {
      step: '01',
      title: 'Quiet Mornings',
      description: 'Wake to crisp mountain air, birdsong in the pine trees, and soft sunlight across the quiet valley.',
      highlight: 'Fresh mountain air & calm stillness',
    },
    {
      step: '02',
      title: 'Unhurried Afternoons',
      description: 'Spend gentle hours surrounded by pine forest paths, open skies, and passing mountain clouds.',
      highlight: 'Pine forests & drifting mist',
    },
    {
      step: '03',
      title: 'Peaceful Evenings',
      description: 'Settle into peaceful evenings with wholesome home-style food and cool mountain air.',
      highlight: 'Home-cooked meals & mountain breeze',
    },
  ],
};

export const kanchenjungaContent = {
  slotId: 'IMG-HOME-VIEW',
  label: 'Himalayan Panoramas',
  heading: 'A 360° view of Kanchenjunga is a short walk away.',
  body: 'From a viewpoint just a short walk from our homestay, take in an unobstructed 360-degree panoramic view of Mount Kanchenjunga and surrounding mountain landscapes.',
  riverAndMist: 'The vantage point also overlooks the winding Teesta River valley below, surrounded by open skies and shifting mountain clouds.',
  note: 'A short walk from the homestay • No strenuous trekking required',
  image: {
    src: null,
    alt: '360-degree panoramic view of Mount Kanchenjunga from the nearby walk in Ramdhura',
    description: 'Authentic view of Mount Kanchenjunga taken from the nearby viewpoint (short walk from property).',
    aspectRatio: '4/3',
    priority: false, // Lazy loaded
  },
};

export const previewContent = {
  label: 'What We Provide',
  heading: 'Everyday Comforts in the Hills',
  summary: 'We keep your stay comfortable, clean, and restful with verified everyday essentials:',
  inclusions: [
    'Comfortable well-maintained rooms',
    'Home-style food with four meals a day',
    'Barbecue on request',
    'Wi-Fi',
    'Hot water',
    '24-hour electricity',
    'Parking',
  ],
  cta: {
    label: 'Explore Stay & Discover',
    href: '/stay-and-discover',
  },
};

export const hospitalityContent = {
  label: 'Hospitality Promise',
  quote: 'Come as a guest, leave feeling like family.',
  body: 'We welcome you into an authentic mountain home with warm care, personal attention, and home-cooked meals.',
};

export const photoStripContent = {
  // Strict rule: real photos only, otherwise omit entirely.
  // When authentic photos are supplied, add paths here.
  photos: [],
  omittedReason: 'Omitted until authentic photographs are provided.',
};

export const locationContent = {
  label: 'Location',
  address: 'Ramdhura, Barmaik, Kalimpong, West Bengal, India',
  cta: {
    label: 'Getting Here & Travel Details',
    href: '/stay-and-discover#getting-here',
  },
};

export const ctaBannerContent = {
  label: 'Direct Reservations',
  heading: 'Plan Your Stay with Us',
  body: 'For room availability, four-meal arrangements, and NJP-to-NJP trip planning, connect directly with our hosts.',
};

export default {
  hero: heroContent,
  intro: introContent,
  experience: experienceContent,
  kanchenjunga: kanchenjungaContent,
  preview: previewContent,
  hospitality: hospitalityContent,
  photoStrip: photoStripContent,
  location: locationContent,
  ctaBanner: ctaBannerContent,
};

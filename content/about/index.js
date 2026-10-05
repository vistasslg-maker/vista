/**
 * ABOUT PAGE CONTENT — RAMDHURA VISTA
 * 
 * Strict Content Rules Applied:
 * - Only verified facts from /docs/PROJECT_RULES.md and /data/business.json.
 * - Zero fabrication: NO owner biography, family story, founding year,
 *   history, "years of experience", fake quotes, or mission statements.
 * - VISTA brand relationship kept subtle, restrained, and non-corporate.
 */

export const aboutContent = {
  header: {
    label: 'About VISTAS',
    title: 'Life in Ramdhura',
    tagline: '',
    intro: 'Ramdhura is a quiet mountain village nestled near Barmaik in Kalimpong district, West Bengal. Set amidst pine forests and open skies, it is a peaceful place of greenery, fresh mountain air, and drifting mist.',
  },

  village: {
    slotId: 'IMG-ABOUT-VILLAGE',
    label: 'The Village & Atmosphere',
    title: 'A Mountain Sanctuary',
    lead: 'Far from crowded tourist centers, Ramdhura moves at the gentle pace of the hills.',
    paragraphs: [
      'Perched in the Eastern Himalayas overlooking the Teesta River valley, Ramdhura is surrounded by quiet pine forests and open skies.',
      'The air is fresh and crisp. Mornings are filled with birdsong, afternoons bring drifting clouds through the trees, and evenings settle into calm stillness.',
      'Here, nature is not an itinerary to rush through, but a restful backdrop to pause, reflect, and unwind.',
    ],
    image: {
      src: null,
      alt: 'Tranquil mountain village landscape of Ramdhura with pine forests and clouds',
      description: 'Peaceful shot of the Ramdhura/Barmaik mountain village landscape, showcasing tranquility and greenery.',
      aspectRatio: '4/3',
      priority: false,
    },
    keyElements: [
      'Quiet mountain village setting near Barmaik, Kalimpong',
      'Lush pine forests and verdant hill landscapes',
      'Fresh mountain air and open skies',
    ],
  },

  stayExperience: {
    label: 'What a Stay Feels Like',
    title: 'The Unhurried Rhythm of the Hills',
    lead: 'A homestay experience shaped by quiet hours, fresh air, and everyday mountain comforts.',
    paragraphs: [
      'A stay at VISTAS is intentionally simple and unhurried. There are no crowded lobbies or noisy banquet halls.',
      'Guests spend their time walking through quiet pine trails, taking in panoramic views of Mount Kanchenjunga a short walk away, or simply sitting in the fresh mountain air with a warm cup of tea.',
      'Every day includes four wholesome, home-cooked meals prepared with care, providing comfort and sustenance after quiet explorations of the surrounding hills.',
    ],
    moments: [
      {
        title: 'Morning Stillness',
        description: 'Wake to cool mountain air and soft sunlight breaking through the pine trees.',
      },
      {
        title: 'Unhurried Days',
        description: 'Spend peaceful hours exploring forest walking trails and taking in open valley views.',
      },
      {
        title: 'Home-Style Evenings',
        description: 'Gather for wholesome home-cooked food as the evening mist rolls over the hills.',
      },
    ],
  },

  hospitality: {
    slotId: 'IMG-ABOUT-HOST',
    label: 'Our Hospitality',
    title: 'Come as a Guest, Leave Feeling like Family',
    lead: 'Homely care, personal warmth, and sincere Himalayan hospitality.',
    paragraphs: [
      'At VISTAS, hospitality is not an automated service. It is a genuine, personal welcome into a caring mountain home.',
      'We attend to your rest with clean, comfortable rooms, 24-hour electricity, hot water, and attentive assistance with sightseeing and transport planning.',
      'Our aim is simple: to offer a clean, peaceful retreat where you feel cared for, well-nourished, and entirely at ease.',
    ],
    image: {
      src: null,
      alt: 'Warm welcome at VISTAS homestay',
      description: 'Real photograph of the host family or warm homestay welcome (with host’s explicit consent).',
      aspectRatio: '4/3',
      priority: false,
    },
    note: '[No fabricated biographies or histories. Family background and story will be added only upon host supply and approval.]',
  },

  vistaRelationship: {
    label: 'Brand Lineage',
    title: 'Hospitality Lineage',
    // Exact proposed sentence flagged for owner approval:
    proposedSentence: 'VISTAS is a quiet mountain homestay in Ramdhura, Kalimpong.',
    explanatoryNote: 'This partnership reflects our commitment to verified homestay standards, cleanliness, and authentic guest care, while preserving the independent, family-run soul of our Ramdhura home.',
    approvalStatus: 'PENDING_APPROVAL',
  },

  bookingCta: {
    label: 'Direct Reservations',
    title: 'Experience Ramdhura for Yourself',
    body: 'Reach out directly by phone to check dates, confirm four-meal stay packages, or discuss NJP travel arrangements.',
    primaryAction: {
      label: 'Call to Book',
      href: 'tel:9475828935',
    },
  },
};

export default aboutContent;

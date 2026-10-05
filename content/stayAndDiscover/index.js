/**
 * STAY & DISCOVER PAGE CONTENT — RAMDHURA VISTA
 * 
 * Strict Content Rules:
 * - Verified facts only from workspace rules and /data/business.json.
 * - Zero fabrication: NO sample rooms, invented prices, fake ratings, or unverified claims.
 * - Every missing item is clearly placeholdered.
 */

export const stayAndDiscoverContent = {
  header: {
    label: 'Everything We Provide',
    title: 'Stay & Discover',
    lead: 'Everything VISTAS provides—from comfortable mountain rest and wholesome home-cooked meals to local sightseeing arrangements.',
  },

  stay: {
    label: 'Stay',
    title: 'Comfortable Mountain Rooms',
    lead: 'Quiet, clean mountain living with essential everyday comforts.',
    verifiedAmenities: [
      {
        id: 'rooms',
        title: 'Well-Maintained Rooms',
        description: 'Clean, comfortable mountain rooms designed for restful stays in the hills.',
      },
      {
        id: 'power',
        title: '24-Hour Electricity',
        description: 'Continuous 24-hour power supply throughout the property.',
      },
      {
        id: 'hot-water',
        title: 'Hot Water',
        description: 'Geyser facilities for warm baths in the cool mountain climate.',
      },
      {
        id: 'wifi',
        title: 'Wi-Fi Access',
        description: 'Wireless internet connectivity for communication.',
      },
      {
        id: 'parking',
        title: 'Vehicle Parking',
        description: 'Dedicated on-premise vehicle parking space.',
      },
    ],
    roomPlaceholder: {
      title: 'Room Details Coming Soon',
      badge: 'Information Needed',
      description: 'Specific room types, capacities, bed configurations, tariffs, and interior photographs are currently awaiting confirmation from the owner.',
      requiredFields: [
        'Room name & category',
        'Occupancy capacity',
        'Bed configuration',
        'Attached bathroom details',
        'Room-specific amenities & views',
        'Authentic room photographs',
        'Tariff / meal plan pricing model',
      ],
      callToActionText: 'For current room availability and booking details, please call our host directly.',
    },
  },

  diningExperiences: {
    label: 'Dining & Experiences',
    title: 'Home-Cooked Meals & Hill Experiences',
    lead: 'Freshly prepared home-style food and thoughtful arrangements for a memorable stay in Ramdhura.',
    diningItems: [
      {
        id: 'home-food',
        title: 'Home-Style Food',
        description: 'Wholesome, home-cooked food prepared fresh every day for guests.',
      },
      {
        id: 'four-meals',
        title: 'Four Meals a Day',
        description: 'Daily stay package includes breakfast, lunch, evening tea/snacks, and dinner.',
      },
      {
        id: 'barbecue',
        title: 'Barbecue on Request',
        description: 'Outdoor barbecue arrangements available upon guest request.',
      },
    ],
    experienceArrangements: [
      {
        id: 'sightseeing',
        title: 'Sightseeing Arrangements',
        description: 'Assistance and local transport coordination to explore nearby viewpoints and attractions.',
      },
      {
        id: 'transport',
        title: 'Transport Arrangements',
        description: 'Vehicle pickups and transfers arranged for local travel across Kalimpong.',
      },
      {
        id: 'njp-planning',
        title: 'NJP-to-NJP Trip Planning',
        description: 'Complete journey coordination from New Jalpaiguri (NJP) Railway Station or Bagdogra Airport (IXB).',
      },
    ],
    callAction: {
      title: 'Interested in Barbecue, Sightseeing, or Transport?',
      description: 'Speak with our host directly to organize customized travel arrangements or barbecue evenings during your stay.',
      buttonText: 'Call to Coordinate',
    },
  },

  explore: {
    label: 'Explore Ramdhura',
    title: 'Surrounding Views & Nearby Sights',
    lead: 'Ramdhura is blessed with sweeping natural panoramas and sits within easy reach of Kalimpong’s famous viewpoints and landmarks.',
    featuredViews: [
      {
        id: 'kanchenjunga',
        title: '360° Kanchenjunga View Walk',
        badge: 'Short Walk Away',
        description: 'A 360° panoramic view of Mount Kanchenjunga is located just a short walk from our homestay.',
        note: 'Accessible on foot • No strenuous trekking required',
        imageSlot: 'IMG-STAY-EXP-TRAIL',
        imageDesc: 'Pine forest walking path leading toward the 360° Kanchenjunga viewpoint.',
      },
      {
        id: 'teesta',
        title: 'Teesta River Valley Views',
        badge: 'Valley Panorama',
        description: 'Sweeping vistas overlooking the emerald Teesta River winding through the Himalayan valley, surrounded by mountain landscapes, open skies, and drifting mist.',
        note: 'Scenic valley viewpoint',
        imageSlot: 'IMG-STAY-EXP-TEESTA',
        imageDesc: 'Real photograph of the Teesta River valley view from Ramdhura.',
      },
    ],
    attractionsIntro: 'The homestay arranges sightseeing to all 12 verified landmarks in the region upon request:',
  },

  gallery: {
    label: 'Gallery',
    title: 'Photographs of VISTAS',
    lead: 'Authentic views of our homestay, rooms, dining, and natural surroundings.',
    placeholderText: 'Photo gallery coming soon — real photographs are being collected.',
  },

  gettingHere: {
    label: 'Getting Here',
    title: 'Location & Travel Assistance',
    lead: 'How to reach VISTAS in Ramdhura, Kalimpong district, West Bengal.',
    address: 'Ramdhura, Barmaik, Kalimpong, West Bengal, India',
    mapPlaceholder: {
      title: 'Google Maps Location',
      badge: 'Location Needed',
      note: 'Verified Google Maps link and exact GPS coordinates are awaiting owner confirmation. Only verified coordinates will be embedded or linked.',
    },
    travelServices: [
      {
        title: 'Transport Arrangements',
        description: 'Pickups, drop-offs, and transfers can be arranged directly with trusted local drivers.',
      },
      {
        title: 'NJP-to-NJP Trip Planning',
        description: 'We help you plan your complete travel itinerary from arrival at NJP/Bagdogra to departure.',
      },
    ],
    directionsPlaceholder: {
      title: 'Driving Directions',
      note: 'Step-by-step road directions will be displayed once verified route details are supplied by the host.',
    },
  },

  bottomCta: {
    label: 'Direct Reservations',
    title: 'Ready to Plan Your Stay?',
    body: 'Speak directly with our host to check room availability, confirm meal arrangements, or coordinate arrival transfers.',
    primaryButton: 'Contact & Booking',
    primaryHref: '/contact',
    secondaryButton: 'Call Directly',
  },
};

export default stayAndDiscoverContent;

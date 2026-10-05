import businessData from './business.json';
import siteConfig from '../config/site.config';
import copyData from '../content/copy.json';
import homeData from '../content/home/index.js';
import aboutData from '../content/about';
import stayAndDiscoverData from '../content/stayAndDiscover';
import contactData from '../content/contact';
import roomsData from './rooms.json';
import attractionsData from './attractions.json';

/**
 * Source of Truth: RAMDHURA VISTA Data Access Layer
 * Components MUST use these helpers and NEVER hard-code business facts or copy.
 */

export function getHomeContent() {
  return homeData;
}

export function getAboutContent() {
  return aboutData;
}

export function getStayAndDiscoverContent() {
  return stayAndDiscoverData;
}

export function getContactContent() {
  return contactData;
}

export function getRooms() {
  return roomsData || [];
}

export function getAttractionsList() {
  return attractionsData || [];
}

export function getPageConfig(pageId) {
  return siteConfig.pages.find((p) => p.id === pageId) || null;
}


export function getBusinessData() {
  return businessData;
}

export function getSiteConfig() {
  return siteConfig;
}

export function getCopy() {
  return copyData;
}

export function getPropertyName() {
  return businessData.brand.propertyName;
}

export function getTagline() {
  return businessData.brand.tagline;
}

export function getBrandLine() {
  return businessData.brand.brandLine;
}

export function getHospitalityLine() {
  return businessData.brand.hospitalityLine;
}

export function getBrandTiers() {
  return businessData.brand.hierarchy;
}

export function getPhoneNumbers() {
  return businessData.contact.phones;
}

export function getPrimaryPhone() {
  return businessData.contact.phones[0] || '94758 28935';
}

export function getSecondaryPhone() {
  return businessData.contact.phones[1] || '70018 96856';
}

export function getEmail() {
  return businessData.contact.email || 'vistas.slg@gmail.com';
}

export function getSocialLinks() {
  return businessData.contact.social || {};
}

export function getInstagramUrl() {
  return businessData.contact.social?.instagram || 'https://www.instagram.com/vistas_the_way_of_life';
}

export function getFacebookUrl() {
  return businessData.contact.social?.facebook || 'https://www.facebook.com/profile.php?id=61594482538575&sk=about';
}

/**
 * Formats a phone number for href="tel:..."
 * @param {string} phone 
 * @param {boolean} withCountryCode - Default false per content rules until approved
 */
export function formatTelHref(phone, withCountryCode = false) {
  if (!phone) return '';
  const digits = phone.replace(/\D/g, '');
  if (withCountryCode) {
    return digits.startsWith('91') ? `tel:+${digits}` : `tel:+91${digits}`;
  }
  // Strip country code if present to retain clean standard dial
  const localDigits = digits.length > 10 && digits.startsWith('91') ? digits.slice(2) : digits;
  return `tel:${localDigits}`;
}

export function getLocationText() {
  const loc = businessData.location;
  return `${loc.village}, ${loc.area}, ${loc.district}, ${loc.state}, ${loc.country}`;
}

export function getLocationShort() {
  const loc = businessData.location;
  return `${loc.village}, ${loc.area}, ${loc.district}`;
}

export function getVerifiedAmenities() {
  return businessData.amenitiesAndServices || [];
}

export function getNearbyAttractions() {
  return businessData.nearbyAttractions || [];
}

export function getEnvironmentHighlights() {
  return businessData.location.environment || [];
}

export function getViews() {
  return businessData.location.views || [];
}

export function getNavigationPages() {
  return siteConfig.pages || [];
}

export function getStayAndDiscoverSections() {
  return siteConfig.navigation.stayAndDiscoverSectionNav || [];
}

export function getSiteMetadata() {
  return siteConfig.siteMetadata;
}

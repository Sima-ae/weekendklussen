import { Metadata } from 'next';

export interface PageMetadataOptions {
  title: string;
  description: string;
  location?: string;
  service?: string;
  keywords?: string[];
}

/**
 * Generates comprehensive SEO metadata for pages with advanced features
 */
export function generatePageMetadata(options: PageMetadataOptions): Metadata {
  const { title, description, location, service, keywords = [] } = options;

  // Base keywords that apply to all pages
  const baseKeywords = [
    'Weekend Klussen',
    'vaklieden',
    'bouwbedrijf',
    'Zuid-Holland',
    'gratis offerte',
    'betrouwbare vaklieden',
    'vaste prijzen',
    'garantie',
    'renovatie',
    'verbouwing',
  ];

  // Location-specific keywords
  const locationKeywords = location
    ? [
        `${service || 'vaklieden'} ${location}`,
        `vaklieden ${location}`,
        `bouwbedrijf ${location}`,
        `${service || 'vaklieden'} in ${location}`,
        location,
        `${location} vaklieden`,
      ]
    : [];

  // Service-specific keywords
  const serviceKeywords = service
    ? [
        service,
        `${service} ${location || 'Zuid-Holland'}`,
        `${service} specialist`,
        `${service} service`,
        `${service} in ${location || 'Zuid-Holland'}`,
      ]
    : [];

  // Combine all keywords (remove duplicates)
  const allKeywords = Array.from(
    new Set([
      ...baseKeywords,
      ...locationKeywords,
      ...serviceKeywords,
      ...keywords,
    ])
  );

  // Generate URL-friendly paths
  const serviceSlug = service
    ? service.toLowerCase().replace(/\s+/g, '-')
    : '';
  const locationSlug = location
    ? location.toLowerCase().replace(/\s+/g, '-')
    : '';
  const path = locationSlug
    ? serviceSlug
      ? `${serviceSlug}-${locationSlug}`
      : `vaklieden-${locationSlug}`
    : serviceSlug || '';

  const canonicalUrl = `https://weekend-klussen.nl/${path}`;
  const ogTitle = `${title} | Weekend Klussen Vaklieden Zuid-Holland`;
  const ogDescription = description;

  return {
    title: ogTitle,
    description: ogDescription,
    keywords: allKeywords,
    authors: [{ name: 'Weekend Klussen' }],
    creator: 'Weekend Klussen',
    publisher: 'Weekend Klussen',
    metadataBase: new URL('https://weekend-klussen.nl'),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'nl_NL',
      url: canonicalUrl,
      title: ogTitle,
      description: ogDescription,
      siteName: 'Weekend Klussen',
      images: [
        {
          url: 'https://weekend-klussen.nl/images/Weblogo.png',
          width: 1200,
          height: 630,
          alt: 'Weekend Klussen Vaklieden Zuid-Holland',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: ['https://weekend-klussen.nl/images/Weblogo.png'],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    other: {
      'geo.region': 'NL-ZH',
      'geo.placename': location || 'Zuid-Holland',
      'geo.position': location
        ? getLocationCoordinates(location)
        : '52.1326;4.4934',
      'ICBM': location
        ? getLocationCoordinates(location)
        : '52.1326, 4.4934',
    },
  };
}

/**
 * Gets coordinates for a location (for geo tags)
 */
function getLocationCoordinates(location: string): string {
  const coordinates: Record<string, string> = {
    'Rotterdam': '51.9244;4.4777',
    'Den Haag': '52.0705;4.3007',
    'Delft': '52.0116;4.3571',
    'Leiden': '52.1601;4.4970',
    'Dordrecht': '51.8133;4.6901',
    'Gouda': '52.0115;4.7105',
    'Zoetermeer': '52.0607;4.4940',
    'Schiedam': '51.9192;4.3883',
    'Vlaardingen': '51.9125;4.3417',
    'Maassluis': '51.9233;4.2500',
    'Alphen aan den Rijn': '52.1286;4.6556',
  };

  return coordinates[location] || '52.1326;4.4934';
}

/**
 * Formats city name for URL (e.g., "Den Haag" -> "den-haag")
 */
export function formatCityForUrl(city: string): string {
  return city.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Formats city name for display (e.g., "den-haag" -> "Den Haag")
 */
export function formatCityForDisplay(city: string): string {
  return city
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Generates service-specific keywords
 */
export function getServiceKeywords(service: string, location?: string): string[] {
  const keywords: string[] = [service];

  if (location) {
    keywords.push(`${service} ${location}`);
    keywords.push(`${service} in ${location}`);
  }

  // Add common variations
  keywords.push(`${service} specialist`);
  keywords.push(`${service} Zuid-Holland`);

  return keywords;
}

/**
 * Generates structured data (JSON-LD) for LocalBusiness schema
 */
export function generateLocalBusinessSchema(
  location?: string,
  service?: string
): object {
  const businessName = location
    ? `Weekend Klussen Vaklieden ${location}`
    : 'Weekend Klussen Vaklieden Zuid-Holland';

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://weekend-klussen.nl/#organization',
    name: businessName,
    alternateName: 'Weekend Klussen',
    description: service
      ? `Professionele ${service} service in ${location || 'Zuid-Holland'}. Ervaren vakmannen met vaste prijzen en garantie.`
      : 'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving.',
    url: 'https://weekend-klussen.nl',
    telephone: '+31642502442',
    email: 'info@weekend-klussen.nl',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NL',
      addressRegion: 'Zuid-Holland',
      addressLocality: location || 'Zuid-Holland',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location ? getLocationLatitude(location) : 52.1326,
      longitude: location ? getLocationLongitude(location) : 4.4934,
    },
    areaServed: {
      '@type': 'City',
      name: location || 'Zuid-Holland',
    },
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    sameAs: [],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
  };
}

/**
 * Generates structured data for Service schema
 */
export function generateServiceSchema(
  service: string,
  location?: string
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Weekend Klussen',
      url: 'https://weekend-klussen.nl',
    },
    areaServed: {
      '@type': 'City',
      name: location || 'Zuid-Holland',
    },
    description: `Professionele ${service} service in ${location || 'Zuid-Holland'}. Ervaren vakmannen met vaste prijzen en garantie.`,
  };
}

/**
 * Gets latitude for a location
 */
function getLocationLatitude(location: string): number {
  const coordinates: Record<string, number> = {
    'Rotterdam': 51.9244,
    'Den Haag': 52.0705,
    'Delft': 52.0116,
    'Leiden': 52.1601,
    'Dordrecht': 51.8133,
    'Gouda': 52.0115,
    'Zoetermeer': 52.0607,
    'Schiedam': 51.9192,
    'Vlaardingen': 51.9125,
    'Maassluis': 51.9233,
    'Alphen aan den Rijn': 52.1286,
  };

  return coordinates[location] || 52.1326;
}

/**
 * Gets longitude for a location
 */
function getLocationLongitude(location: string): number {
  const coordinates: Record<string, number> = {
    'Rotterdam': 4.4777,
    'Den Haag': 4.3007,
    'Delft': 4.3571,
    'Leiden': 4.4970,
    'Dordrecht': 4.6901,
    'Gouda': 4.7105,
    'Zoetermeer': 4.4940,
    'Schiedam': 4.3883,
    'Vlaardingen': 4.3417,
    'Maassluis': 4.2500,
    'Alphen aan den Rijn': 4.6556,
  };

  return coordinates[location] || 4.4934;
}

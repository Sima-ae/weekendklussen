import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ContentSections } from '@/components/ContentSections';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { generateLocalBusinessSchema } from '@/lib/metadata-utils';

export const metadata: Metadata = {
  title: 'Weekend Klussen – Aannemer voor Renovatie en Verbouwing in Zuid-Holland',
  description:
    'Betrouwbare aannemer voor renovatie en verbouwing in Zuid-Holland. Weekend Klussen verzorgt badkamer verbouwen, keukenrenovatie, aanbouw, uitbouw, dakkapel plaatsen en complete woningverbouwing. Vaste prijzen, garantie en snelle service. Gratis offerte. Werkgebied: Rotterdam, Den Haag, Leiden, Dordrecht, Gouda, Delft, Schiedam, Vlaardingen en omgeving.',
  keywords: [
    'aannemer',
    'aannemer Zuid-Holland',
    'bouwbedrijf',
    'verbouwing',
    'renovatie',
    'woningverbouwing',
    'badkamer verbouwen',
    'keukenrenovatie',
    'aanbouw',
    'uitbouw',
    'dakkapel plaatsen',
    'aannemer Rotterdam',
    'aannemer Den Haag',
    'aannemer Leiden',
    'aannemer Dordrecht',
    'aannemer Gouda',
    'aannemer Delft',
    'gratis offerte',
    'betrouwbare aannemer',
    'vaste prijzen',
    'garantie',
  ],
  authors: [{ name: 'Weekend Klussen' }],
  creator: 'Weekend Klussen',
  publisher: 'Weekend Klussen',
  metadataBase: new URL('https://weekend-klussen.nl'),
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://weekend-klussen.nl',
    title: 'Weekend Klussen – Betrouwbare Aannemer | Verbouwing & Renovatie Zuid-Holland',
    description:
      'Aannemer voor renovatie en verbouwing in Zuid-Holland. Verbouwing, renovatie, aanbouw, badkamer verbouwen, keukenrenovatie. Gratis offerte. Aannemer in Rotterdam, Den Haag, Leiden en regio.',
    siteName: 'Weekend Klussen',
    images: [
      {
        url: 'https://weekend-klussen.nl/images/Weblogo.png',
        width: 1200,
        height: 630,
        alt: 'Weekend Klussen Aannemer Zuid-Holland',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weekend Klussen – Betrouwbare Aannemer Zuid-Holland',
    description:
      'Aannemer voor renovatie en verbouwing in Zuid-Holland. Vaste prijzen, garantie en snelle service.',
    images: ['https://weekend-klussen.nl/images/Weblogo.png'],
  },
  alternates: {
    canonical: 'https://weekend-klussen.nl',
  },
  other: {
    'geo.region': 'NL-ZH',
    'geo.placename': 'Zuid-Holland',
    'geo.position': '52.1326;4.4934',
    'ICBM': '52.1326, 4.4934',
  },
};

export default function Home() {
  const structuredData = generateLocalBusinessSchema();

  return (
    <main className="relative w-full flex-1 flex flex-col">
      <StructuredData data={structuredData} />
      <Header />
      <HeroSection />
      <ContentSections />
      <Footer />
    </main>
  );
}

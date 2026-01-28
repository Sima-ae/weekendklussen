import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { OverOnsContent } from '@/components/pages/OverOnsContent';
import { StructuredData } from '@/components/StructuredData';
import { generateLocalBusinessSchema } from '@/lib/metadata-utils';

export const metadata: Metadata = {
  title: 'Over ons – Weekend Klussen Vaklieden Zuid-Holland | Betrouwbare Bouwbedrijf',
  description:
    'Weekend Klussen is een betrouwbare vaklieden en bouwbedrijf in Zuid-Holland. Met jarenlange ervaring verzorgen wij verbouwing, renovatie, aanbouw, badkamer verbouwen en keukenrenovatie. Vaste prijzen, garantie en snelle service. Werkgebied: Rotterdam, Den Haag, Leiden, Dordrecht, Gouda, Delft, Schiedam, Vlaardingen en omgeving. Gratis offerte.',
  keywords: [
    'over Weekend Klussen',
    'vaklieden Zuid-Holland',
    'bouwbedrijf Zuid-Holland',
    'betrouwbare vaklieden',
    'vaklieden Rotterdam',
    'vaklieden Den Haag',
    'vaklieden Leiden',
    'vaklieden Dordrecht',
    'vaklieden Gouda',
    'vaklieden Delft',
    'vaste prijzen',
    'garantie',
    'bouwbedrijf',
  ],
  authors: [{ name: 'Weekend Klussen' }],
  creator: 'Weekend Klussen',
  publisher: 'Weekend Klussen',
  metadataBase: new URL('https://weekend-klussen.nl'),
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://weekend-klussen.nl/over-ons',
    title: 'Over ons – Weekend Klussen Vaklieden Zuid-Holland',
    description:
      'Betrouwbare vaklieden en bouwbedrijf in Zuid-Holland. Verbouwing, renovatie, aanbouw met vaste prijzen en garantie.',
    siteName: 'Weekend Klussen',
    images: [
      {
        url: 'https://weekend-klussen.nl/images/Weblogo.png',
        width: 1200,
        height: 630,
        alt: 'Weekend Klussen Over ons',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Over ons – Weekend Klussen Vaklieden',
    description:
      'Betrouwbare vaklieden en bouwbedrijf in Zuid-Holland met jarenlange ervaring.',
    images: ['https://weekend-klussen.nl/images/Weblogo.png'],
  },
  alternates: {
    canonical: 'https://weekend-klussen.nl/over-ons',
  },
};

export default function OverOnsPage() {
  const structuredData = generateLocalBusinessSchema();

  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <StructuredData data={structuredData} />
      <Header />
      <OverOnsContent />
      <Footer />
    </main>
  );
}

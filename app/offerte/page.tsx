import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { OfferteContent } from '@/components/pages/OfferteContent';
import { StructuredData } from '@/components/StructuredData';
import { generateLocalBusinessSchema } from '@/lib/metadata-utils';

export const metadata: Metadata = {
  title: 'Gratis Offerte Aanvragen | Weekend Klussen Aannemer Zuid-Holland',
  description:
    'Vraag vrijblijvend een gratis offerte aan bij Weekend Klussen aannemer in Zuid-Holland. Offerte binnen 24-48 uur voor verbouwing, renovatie, badkamer verbouwen, keukenrenovatie, aanbouw, uitbouw en meer. Geen verplichtingen, transparante prijzen. Vul het formulier in voor snelle reactie.',
  keywords: [
    'gratis offerte',
    'offerte aanvragen',
    'offerte aannemer',
    'verbouwing offerte',
    'renovatie offerte',
    'aanbouw offerte',
    'badkamer offerte',
    'keuken offerte',
    'aannemer offerte',
    'bouwbedrijf offerte',
    'Zuid-Holland',
    'vrijblijvend offerte',
  ],
  authors: [{ name: 'Weekend Klussen' }],
  creator: 'Weekend Klussen',
  publisher: 'Weekend Klussen',
  metadataBase: new URL('https://weekend-klussen.nl'),
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://weekend-klussen.nl/offerte',
    title: 'Gratis Offerte Aanvragen | Weekend Klussen Aannemer',
    description:
      'Vraag vrijblijvend een gratis offerte aan. Offerte binnen 24-48 uur voor verbouwing, renovatie en meer.',
    siteName: 'Weekend Klussen',
    images: [
      {
        url: 'https://weekend-klussen.nl/images/Weblogo.png',
        width: 1200,
        height: 630,
        alt: 'Weekend Klussen Offerte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gratis Offerte Aanvragen | Weekend Klussen',
    description:
      'Vraag vrijblijvend een gratis offerte aan. Snelle reactie binnen 24-48 uur.',
    images: ['https://weekend-klussen.nl/images/Weblogo.png'],
  },
  alternates: {
    canonical: 'https://weekend-klussen.nl/offerte',
  },
};

export default function OffertePage() {
  const structuredData = generateLocalBusinessSchema();

  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <StructuredData data={structuredData} />
      <Header />
      <OfferteContent />
      <Footer />
    </main>
  );
}

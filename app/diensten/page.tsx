import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DienstenContent } from '@/components/pages/DienstenContent';
import { StructuredData } from '@/components/StructuredData';
import { generateLocalBusinessSchema } from '@/lib/metadata-utils';

export const metadata: Metadata = {
  title: 'Diensten – Verbouwing, Renovatie, Aanbouw | Weekend Klussen Aannemer Zuid-Holland',
  description:
    'Complete overzicht van alle diensten van Weekend Klussen, aannemer in Zuid-Holland. Badkamer verbouwen, keukenrenovatie, aanbouw, uitbouw, dakkapel plaatsen, woningverbouwing, renovatie en meer. Professionele uitvoering met vaste prijzen en garantie. Gratis offerte aanvragen.',
  keywords: [
    'diensten aannemer',
    'badkamer verbouwen',
    'keukenrenovatie',
    'aanbouw',
    'uitbouw',
    'dakkapel plaatsen',
    'renovatie',
    'verbouwing',
    'woningverbouwing',
    'aannemer diensten',
    'bouwbedrijf diensten',
    'Zuid-Holland',
    'gratis offerte',
  ],
  authors: [{ name: 'Weekend Klussen' }],
  creator: 'Weekend Klussen',
  publisher: 'Weekend Klussen',
  metadataBase: new URL('https://weekend-klussen.nl'),
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://weekend-klussen.nl/diensten',
    title: 'Diensten – Verbouwing, Renovatie, Aanbouw | Weekend Klussen Aannemer',
    description:
      'Complete overzicht van alle diensten van Weekend Klussen, aannemer in Zuid-Holland. Badkamer verbouwen, keukenrenovatie, aanbouw, uitbouw, dakkapel plaatsen, renovatie. Gratis offerte.',
    siteName: 'Weekend Klussen',
    images: [
      {
        url: 'https://weekend-klussen.nl/images/Weblogo.png',
        width: 1200,
        height: 630,
        alt: 'Weekend Klussen Diensten',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diensten – Weekend Klussen Aannemer',
    description:
      'Complete overzicht van alle diensten: badkamer verbouwen, keukenrenovatie, aanbouw, renovatie en meer.',
    images: ['https://weekend-klussen.nl/images/Weblogo.png'],
  },
  alternates: {
    canonical: 'https://weekend-klussen.nl/diensten',
  },
};

export default function DienstenPage() {
  const structuredData = generateLocalBusinessSchema();

  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <StructuredData data={structuredData} />
      <Header />
      <DienstenContent />
      <Footer />
    </main>
  );
}

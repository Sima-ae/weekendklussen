import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactContent } from '@/components/pages/ContactContent';
import { StructuredData } from '@/components/StructuredData';
import { generateLocalBusinessSchema } from '@/lib/metadata-utils';

export const metadata: Metadata = {
  title: 'Contact | Weekend Klussen Aannemer Zuid-Holland – Bel of Mail voor Offerte',
  description:
    'Neem contact op met Weekend Klussen aannemer in Zuid-Holland. Bel +31642502442 of mail naar info@weekend-klussen.nl voor een gratis offerte. Wij zijn bereikbaar voor verbouwing, renovatie, aanbouw en al uw bouwvragen. Snelle reactie binnen 24 uur.',
  keywords: [
    'contact Weekend Klussen',
    'aannemer bellen',
    'aannemer contact',
    'offerte aanvragen',
    'aannemer Zuid-Holland',
    'bouwbedrijf contact',
    'gratis offerte',
  ],
  authors: [{ name: 'Weekend Klussen' }],
  creator: 'Weekend Klussen',
  publisher: 'Weekend Klussen',
  metadataBase: new URL('https://weekend-klussen.nl'),
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://weekend-klussen.nl/contact',
    title: 'Contact | Weekend Klussen Aannemer',
    description:
      'Neem contact op met Weekend Klussen voor verbouwing, renovatie en offerte. Bel of mail voor snelle reactie.',
    siteName: 'Weekend Klussen',
    images: [
      {
        url: 'https://weekend-klussen.nl/images/Weblogo.png',
        width: 1200,
        height: 630,
        alt: 'Weekend Klussen Contact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Weekend Klussen Aannemer',
    description:
      'Neem contact op voor verbouwing, renovatie en gratis offerte.',
    images: ['https://weekend-klussen.nl/images/Weblogo.png'],
  },
  alternates: {
    canonical: 'https://weekend-klussen.nl/contact',
  },
};

export default function ContactPage() {
  const structuredData = generateLocalBusinessSchema();

  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <StructuredData data={structuredData} />
      <Header />
      <ContactContent />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';
import { StructuredData } from '@/components/StructuredData';
import { generatePageMetadata, generateLocalBusinessSchema } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Vaklieden Delft | Weekend Klussen Bouwbedrijf Delft – Verbouwing & Renovatie',
  description:
    'Betrouwbare vaklieden in Delft. Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer verbouwen en keukenrenovatie in Delft en omgeving. Vaste prijzen, garantie en snelle service. Gratis offerte. Ook actief in Den Haag, Rijswijk, Rotterdam, Pijnacker-Nootdorp en Zoetermeer.',
  location: 'Delft',
  service: 'vaklieden',
  keywords: [
    'vaklieden Delft',
    'bouwbedrijf Delft',
    'verbouwing Delft',
    'renovatie Delft',
    'aanbouw Delft',
    'badkamer verbouwen Delft',
    'keukenrenovatie Delft',
    'vaklieden Delft omgeving',
  ],
});

export default function VakliedenDelftPage() {
  const structuredData = generateLocalBusinessSchema('Delft', 'vaklieden');

  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <StructuredData data={structuredData} />
      <Header />
      <LocationContent
        location="Delft"
        title="Vaklieden Delft"
        description="Weekend Klussen is uw betrouwbare vaklieden in Delft. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Delft en omgeving met vaste prijzen en garantie."
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer']}
      />
      <Footer />
    </main>
  );
}

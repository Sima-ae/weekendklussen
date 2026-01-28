import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aannemer Zoetermeer | Weekend Klussen Bouwbedrijf Zoetermeer',
  description:
    'Aannemer voor renovatie en verbouwing in Zuid-Holland en omgeving. Aannemer Zoetermeer - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Zoetermeer. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function AannemerZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zoetermeer"
        title="Aannemer Zoetermeer"
        description="Weekend Klussen is uw betrouwbare aannemer in Zoetermeer. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Zoetermeer en omgeving met vaste prijzen en garantie."
        nearbyCities={['Den Haag', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Voorburg']}
      />
      <Footer />
    </main>
  );
}

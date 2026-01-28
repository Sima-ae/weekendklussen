import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aannemer Katwijk | Weekend Klussen Bouwbedrijf Katwijk',
  description:
    'Aannemer voor renovatie en verbouwing in Zuid-Holland en omgeving. Aannemer Katwijk - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Katwijk. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function AannemerKatwijkPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Katwijk"
        title="Aannemer Katwijk"
        description="Weekend Klussen is uw betrouwbare aannemer in Katwijk. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Katwijk en omgeving met vaste prijzen en garantie."
        nearbyCities={['Leiden', 'Noordwijk', 'Wassenaar', 'Den Haag', 'Voorburg']}
      />
      <Footer />
    </main>
  );
}

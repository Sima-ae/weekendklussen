import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden Rijswijk | Weekend Klussen Bouwbedrijf Rijswijk',
  description:
    'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Vaklieden Rijswijk - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Rijswijk. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function VakliedenRijswijkPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Rijswijk"
        title="Vaklieden Rijswijk"
        description="Weekend Klussen is uw betrouwbare vaklieden in Rijswijk. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Rijswijk en omgeving met vaste prijzen en garantie."
        nearbyCities={['Den Haag', 'Delft', 'Voorburg', 'Zoetermeer', 'Pijnacker-Nootdorp']}
      />
      <Footer />
    </main>
  );
}

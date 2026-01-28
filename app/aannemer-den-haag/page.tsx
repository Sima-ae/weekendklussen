import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden Den Haag | Weekend Klussen Bouwbedrijf Den Haag',
  description:
    'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Vaklieden Den Haag - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Den Haag. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function VakliedenDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Den Haag"
        title="Vaklieden Den Haag"
        description="Weekend Klussen is uw betrouwbare vaklieden in Den Haag. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Den Haag en omgeving."
        nearbyCities={['Rijswijk', 'Voorburg', 'Zoetermeer', 'Westland', 'Delft', 'Leiden']}
      />
      <Footer />
    </main>
  );
}

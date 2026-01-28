import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden Dordrecht | Weekend Klussen Bouwbedrijf Dordrecht',
  description:
    'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Vaklieden Dordrecht - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Dordrecht. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function VakliedenDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Dordrecht"
        title="Vaklieden Dordrecht"
        description="Weekend Klussen is uw betrouwbare vaklieden in Dordrecht. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Dordrecht en omgeving."
        nearbyCities={['Papendrecht', 'Sliedrecht', 'Zwijndrecht', 'Rotterdam', 'Barendrecht']}
      />
      <Footer />
    </main>
  );
}

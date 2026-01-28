import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aannemer Dordrecht | Weekend Klussen Bouwbedrijf Dordrecht',
  description:
    'Aannemer voor renovatie en verbouwing in Zuid-Holland en omgeving. Aannemer Dordrecht - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Dordrecht. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function AannemerDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Dordrecht"
        title="Aannemer Dordrecht"
        description="Weekend Klussen is uw betrouwbare aannemer in Dordrecht. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Dordrecht en omgeving."
        nearbyCities={['Papendrecht', 'Sliedrecht', 'Zwijndrecht', 'Rotterdam', 'Barendrecht']}
      />
      <Footer />
    </main>
  );
}

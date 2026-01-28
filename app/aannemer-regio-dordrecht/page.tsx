import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden regio Dordrecht | Weekend Klussen Bouwbedrijf regio Dordrecht',
  description:
    'Vaklieden voor renovatie en verbouwing in de regio Dordrecht. Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Dordrecht en omgeving. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function VakliedenRegioDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="regio Dordrecht"
        title="Vaklieden regio Dordrecht"
        description="Weekend Klussen is uw betrouwbare vaklieden in de regio Dordrecht. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Dordrecht en de omliggende gemeenten met lokale kennis, vaste prijzen en garantie."
        nearbyCities={[
          'Dordrecht', 'Papendrecht', 'Sliedrecht', 'Zwijndrecht', 'Rotterdam', 
          'Barendrecht', 'Gorinchem', 'Hardinxveld-Giessendam', 'Alblasserdam', 'Molenlanden'
        ]}
      />
      <Footer />
    </main>
  );
}

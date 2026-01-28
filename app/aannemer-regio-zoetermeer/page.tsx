import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden regio Zoetermeer | Weekend Klussen Bouwbedrijf regio Zoetermeer',
  description:
    'Vaklieden voor renovatie en verbouwing in de regio Zoetermeer. Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Zoetermeer en omgeving. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function VakliedenRegioZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="regio Zoetermeer"
        title="Vaklieden regio Zoetermeer"
        description="Weekend Klussen is uw betrouwbare vaklieden in de regio Zoetermeer. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Zoetermeer en de omliggende gemeenten met jarenlange ervaring, vaste prijzen en garantie."
        nearbyCities={[
          'Zoetermeer', 'Den Haag', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 
          'Voorburg', 'Rijswijk', 'Delft', 'Alphen aan den Rijn', 'Waddinxveen'
        ]}
      />
      <Footer />
    </main>
  );
}

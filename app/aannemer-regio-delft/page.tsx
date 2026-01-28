import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aannemer regio Delft | Weekend Klussen Bouwbedrijf regio Delft',
  description:
    'Aannemer voor renovatie en verbouwing in de regio Delft. Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Delft en omgeving. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function AannemerRegioDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="regio Delft"
        title="Aannemer regio Delft"
        description="Weekend Klussen is uw betrouwbare aannemer in de regio Delft. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Delft en de omliggende gemeenten met jarenlange ervaring, vaste prijzen en garantie."
        nearbyCities={[
          'Delft', 'Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 
          'Zoetermeer', 'Schiedam', 'Vlaardingen', 'Maassluis', 'Westland', 'Voorburg'
        ]}
      />
      <Footer />
    </main>
  );
}

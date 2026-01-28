import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden regio Vlaardingen | Weekend Klussen Bouwbedrijf regio Vlaardingen',
  description:
    'Vaklieden voor renovatie en verbouwing in de regio Vlaardingen. Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Vlaardingen en omgeving. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function VakliedenRegioVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="regio Vlaardingen"
        title="Vaklieden regio Vlaardingen"
        description="Weekend Klussen is uw betrouwbare vaklieden in de regio Vlaardingen. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Vlaardingen en de omliggende gemeenten met jarenlange ervaring, vaste prijzen en garantie."
        nearbyCities={[
          'Vlaardingen', 'Rotterdam', 'Schiedam', 'Maassluis', 'Westland', 
          'Delft', 'Rijswijk', 'Den Haag', 'Capelle aan den IJssel', 'Spijkenisse'
        ]}
      />
      <Footer />
    </main>
  );
}

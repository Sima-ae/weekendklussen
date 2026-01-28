import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden regio Maassluis | Weekend Klussen Bouwbedrijf regio Maassluis',
  description:
    'Vaklieden voor renovatie en verbouwing in de regio Maassluis. Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Maassluis en omgeving. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function VakliedenRegioMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="regio Maassluis"
        title="Vaklieden regio Maassluis"
        description="Weekend Klussen is uw betrouwbare vaklieden in de regio Maassluis. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Maassluis en de omliggende gemeenten met lokale kennis, vaste prijzen en garantie."
        nearbyCities={[
          'Maassluis', 'Vlaardingen', 'Schiedam', 'Rotterdam', 'Westland', 
          'Delft', 'Rijswijk', 'Den Haag', 'Spijkenisse', 'Hellevoetsluis'
        ]}
      />
      <Footer />
    </main>
  );
}

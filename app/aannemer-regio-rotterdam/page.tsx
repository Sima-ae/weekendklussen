import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aannemer regio Rotterdam | Weekend Klussen Bouwbedrijf regio Rotterdam',
  description:
    'Aannemer voor renovatie en verbouwing in de regio Rotterdam. Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Rotterdam en omgeving. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function AannemerRegioRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="regio Rotterdam"
        title="Aannemer regio Rotterdam"
        description="Weekend Klussen is uw betrouwbare aannemer in de regio Rotterdam. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Rotterdam en de omliggende gemeenten met jarenlange ervaring, vaste prijzen en garantie."
        nearbyCities={[
          'Rotterdam', 'Schiedam', 'Vlaardingen', 'Maassluis', 'Capelle aan den IJssel', 
          'Ridderkerk', 'Barendrecht', 'Spijkenisse', 'Hellevoetsluis', 'Dordrecht',
          'Papendrecht', 'Sliedrecht', 'Zwijndrecht', 'Gorinchem', 'Delft', 'Westland'
        ]}
      />
      <Footer />
    </main>
  );
}

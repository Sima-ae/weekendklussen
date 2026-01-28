import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aannemer regio Schiedam | Weekend Klussen Bouwbedrijf regio Schiedam',
  description:
    'Aannemer voor renovatie en verbouwing in de regio Schiedam. Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Schiedam en omgeving. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function AannemerRegioSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="regio Schiedam"
        title="Aannemer regio Schiedam"
        description="Weekend Klussen is uw betrouwbare aannemer in de regio Schiedam. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Schiedam en de omliggende gemeenten met lokale kennis, vaste prijzen en garantie."
        nearbyCities={[
          'Schiedam', 'Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 
          'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Westland', 'Rijswijk'
        ]}
      />
      <Footer />
    </main>
  );
}

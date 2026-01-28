import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aannemer in de Buurt | Weekend Klussen Bouwbedrijf Zuid-Holland',
  description:
    'Aannemer voor renovatie en verbouwing in Zuid-Holland en omgeving. Zoekt u een aannemer in de buurt? Weekend Klussen is actief in heel Zuid-Holland. Verbouwing, renovatie, aanbouw, badkamer en keuken. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function AannemerInDeBuurtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="de buurt"
        title="Aannemer in de Buurt"
        description="Zoekt u een betrouwbare aannemer in de buurt? Weekend Klussen is actief in heel Zuid-Holland en verzorgt alle bouw- en renovatiewerkzaamheden bij u in de buurt. Met jarenlange ervaring en lokale kennis staan wij voor u klaar."
        nearbyCities={[
          'Rotterdam', 'Den Haag', 'Leiden', 'Dordrecht', 'Gouda', 'Delft', 
          'Zoetermeer', 'Schiedam', 'Vlaardingen', 'Westland', 'Rijswijk',
          'Capelle aan den IJssel', 'Spijkenisse', 'Katwijk', 'Voorburg',
          'Pijnacker-Nootdorp', 'Barendrecht', 'Ridderkerk', 'Alphen aan den Rijn',
          'Maassluis', 'Hellevoetsluis', 'Papendrecht', 'Sliedrecht'
        ]}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Lokale Vaklieden | Weekend Klussen Bouwbedrijf Zuid-Holland',
  description:
    'Lokale vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Weekend Klussen is uw lokale vaklieden met jarenlange ervaring. Verbouwing, renovatie, aanbouw, badkamer en keuken. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function LokaleVakliedenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zuid-Holland"
        title="Lokale Vaklieden"
        description="Weekend Klussen is uw lokale vaklieden in Zuid-Holland. Met jarenlange ervaring en diepgaande kennis van de regio verzorgen wij alle bouw- en renovatiewerkzaamheden voor particulieren en bedrijven. Wij zijn altijd dichtbij en snel ter plaatse."
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

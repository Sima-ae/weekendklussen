import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden Zuid-Holland | Weekend Klussen Bouwbedrijf',
  description:
    'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Weekend Klussen is uw betrouwbare vaklieden in Zuid-Holland. Verbouwing, renovatie, aanbouw, badkamer en keuken. Vaste prijzen en garantie. Werkgebied: Rotterdam, Den Haag, Leiden, Dordrecht en meer.',
};

export default function VakliedenZuidHollandPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zuid-Holland"
        title="Vaklieden Zuid-Holland"
        description="Weekend Klussen is uw betrouwbare vaklieden en bouwbedrijf in de provincie Zuid-Holland. Wij verzorgen verbouwing, renovatie, aanbouw en alle bouwwerkzaamheden in de hele regio."
        nearbyCities={[
          'Rotterdam', 'Den Haag', 'Leiden', 'Dordrecht', 'Gouda', 'Delft', 
          'Zoetermeer', 'Schiedam', 'Vlaardingen', 'Westland', 'Rijswijk',
          'Capelle aan den IJssel', 'Spijkenisse', 'Katwijk', 'Voorburg',
          'Pijnacker-Nootdorp', 'Barendrecht', 'Ridderkerk', 'Alphen aan den Rijn'
        ]}
      />
      <Footer />
    </main>
  );
}

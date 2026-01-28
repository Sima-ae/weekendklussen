import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Badkamer Renovatie | Weekend Klussen Badkamer Renovatie Zuid-Holland',
  description:
    'Badkamer renovatie in Zuid-Holland en omgeving. Weekend Klussen verzorgt complete badkamer renovaties van ontwerp tot oplevering. Sanitair installatie, tegelwerk, badkamer meubels en meer. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function BadkamerRenovatiePage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zuid-Holland"
        title="Badkamer Renovatie"
        description="Weekend Klussen is gespecialiseerd in badkamer renovatie in Zuid-Holland. Wij verzorgen complete badkamer renovaties van ontwerp tot oplevering, met aandacht voor detail en kwaliteit. Van kleine aanpassingen tot volledige badkamer renovatie."
        nearbyCities={[
          'Rotterdam', 'Den Haag', 'Leiden', 'Dordrecht', 'Gouda', 'Delft', 
          'Zoetermeer', 'Schiedam', 'Vlaardingen', 'Westland', 'Rijswijk',
          'Capelle aan den IJssel', 'Spijkenisse', 'Katwijk', 'Voorburg',
          'Pijnacker-Nootdorp', 'Barendrecht', 'Ridderkerk', 'Alphen aan den Rijn',
          'Maassluis', 'Hellevoetsluis', 'Papendrecht', 'Sliedrecht'
        ]}
        services={[
          'Complete badkamer renovatie en verbouwing',
          'Badkamer ontwerp en advies',
          'Sanitair installatie en vervanging',
          'Tegelwerk en vloerwerk',
          'Badkamer meubels en opbergruimte',
          'Douchecabine plaatsen en installatie',
          'Badkamer elektra en verlichting',
          'Badkamer kitten en voegwerk'
        ]}
      />
      <Footer />
    </main>
  );
}

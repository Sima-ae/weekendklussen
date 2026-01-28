import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Badkamerspecialist | Weekend Klussen Badkamer Specialist Zuid-Holland',
  description:
    'Badkamerspecialist voor renovatie en verbouwing in Zuid-Holland en omgeving. Weekend Klussen is uw badkamerspecialist met jarenlange ervaring. Complete badkamer renovaties, sanitair installatie, tegelwerk en meer. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function BadkamerspecialistPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zuid-Holland"
        title="Badkamerspecialist"
        description="Weekend Klussen is uw badkamerspecialist in Zuid-Holland. Met jarenlange ervaring en expertise in badkamer renovaties verzorgen wij complete badkamer verbouwingen van ontwerp tot oplevering. Van sanitair installatie tot tegelwerk - wij zijn uw specialist."
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
          'Badkamer afkitten en voegwerk'
        ]}
      />
      <Footer />
    </main>
  );
}

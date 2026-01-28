import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Badkamer Renoveren Schiedam | Weekend Klussen Badkamer Renovatie Schiedam',
  description:
    'Badkamer renoveren in Schiedam. Weekend Klussen verzorgt complete badkamer renovaties in Schiedam van ontwerp tot oplevering. Sanitair installatie, tegelwerk, badkamer meubels en meer. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function BadkamerRenoverenSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Schiedam"
        title="Badkamer Renoveren Schiedam"
        description="Weekend Klussen is gespecialiseerd in badkamer renoveren in Schiedam. Wij verzorgen complete badkamer renovaties van ontwerp tot oplevering, met aandacht voor detail en kwaliteit. Van kleine aanpassingen tot volledige badkamer renovatie."
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag']}
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

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Badkamer Renovatie Zoetermeer | Weekend Klussen Badkamer Renovatie Zoetermeer',
  description:
    'Badkamer renovatie in Zoetermeer. Weekend Klussen verzorgt complete badkamer renovaties in Zoetermeer van ontwerp tot oplevering. Sanitair installatie, tegelwerk, badkamer meubels en meer. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function BadkamerRenovatieZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zoetermeer"
        title="Badkamer Renovatie Zoetermeer"
        description="Weekend Klussen is gespecialiseerd in badkamer renovatie in Zoetermeer. Wij verzorgen complete badkamer renovaties van ontwerp tot oplevering, met aandacht voor detail en kwaliteit. Van kleine aanpassingen tot volledige badkamer renovatie."
        nearbyCities={['Den Haag', 'Leiden', 'Gouda', 'Delft', 'Pijnacker-Nootdorp']}
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

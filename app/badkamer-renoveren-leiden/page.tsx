import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Badkamer Renoveren Leiden | Weekend Klussen Badkamer Renovatie Leiden',
  description:
    'Badkamer renoveren in Leiden. Weekend Klussen verzorgt complete badkamer renovaties in Leiden van ontwerp tot oplevering. Sanitair installatie, tegelwerk, badkamer meubels en meer. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function BadkamerRenoverenLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Leiden"
        title="Badkamer Renoveren Leiden"
        description="Weekend Klussen is gespecialiseerd in badkamer renoveren in Leiden. Wij verzorgen complete badkamer renovaties van ontwerp tot oplevering, met aandacht voor detail en kwaliteit. Van kleine aanpassingen tot volledige badkamer renovatie."
        nearbyCities={['Den Haag', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn', 'Katwijk']}
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

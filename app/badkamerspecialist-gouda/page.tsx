import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Badkamerspecialist Gouda | Weekend Klussen Badkamer Specialist Gouda',
  description:
    'Badkamerspecialist voor renovatie en verbouwing in Gouda. Weekend Klussen is uw badkamerspecialist in Gouda met jarenlange ervaring. Complete badkamer renovaties, sanitair installatie, tegelwerk en meer. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function BadkamerspecialistGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Gouda"
        title="Badkamerspecialist Gouda"
        description="Weekend Klussen is uw badkamerspecialist in Gouda. Met jarenlange ervaring en expertise in badkamer renovaties verzorgen wij complete badkamer verbouwingen van ontwerp tot oplevering. Van sanitair installatie tot tegelwerk - wij zijn uw specialist in Gouda."
        nearbyCities={['Rotterdam', 'Leiden', 'Zoetermeer', 'Utrecht', 'Woerden']}
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

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Badkamerspecialist Alphen aan den Rijn | Weekend Klussen Badkamer Specialist Alphen aan den Rijn',
  description:
    'Badkamerspecialist voor renovatie en verbouwing in Alphen aan den Rijn. Weekend Klussen is uw badkamerspecialist in Alphen aan den Rijn met jarenlange ervaring. Complete badkamer renovaties, sanitair installatie, tegelwerk en meer. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function BadkamerspecialistAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Alphen aan den Rijn"
        title="Badkamerspecialist Alphen aan den Rijn"
        description="Weekend Klussen is uw badkamerspecialist in Alphen aan den Rijn. Met jarenlange ervaring en expertise in badkamer renovaties verzorgen wij complete badkamer verbouwingen van ontwerp tot oplevering. Van sanitair installatie tot tegelwerk - wij zijn uw specialist in Alphen aan den Rijn."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Utrecht', 'Woerden']}
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

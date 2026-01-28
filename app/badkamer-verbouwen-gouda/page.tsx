import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Badkamer Verbouwen Gouda | Weekend Klussen Badkamer Renovatie Gouda',
  description:
    'Badkamer verbouwen en renovatie in Gouda. Weekend Klussen verzorgt complete badkamer renovaties in Gouda en omgeving. Van ontwerp tot oplevering, vaste prijzen en garantie. Gratis offerte voor uw badkamer verbouwing.',
};

export default function BadkamerVerbouwenGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Gouda"
        title="Badkamer Verbouwen Gouda"
        description="Weekend Klussen is gespecialiseerd in badkamer verbouwen en renovatie in Gouda. Wij verzorgen complete badkamer renovaties van ontwerp tot oplevering, met aandacht voor detail en kwaliteit."
        nearbyCities={['Rotterdam', 'Zoetermeer', 'Alphen aan den Rijn', 'Utrecht', 'Woerden']}
        services={[
          'Complete badkamer renovatie',
          'Badkamer ontwerp en advies',
          'Sanitair installatie en vervanging',
          'Tegelwerk en vloerwerk',
          'Badkamer meubels en opbergruimte',
          'Douchecabine plaatsen',
          'Badkamer elektra en verlichting'
        ]}
      />
      <Footer />
    </main>
  );
}

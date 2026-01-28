import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Badkamer Verbouwen Vlaardingen | Weekend Klussen Badkamer Renovatie Vlaardingen',
  description:
    'Badkamer verbouwen en renovatie in Vlaardingen. Weekend Klussen verzorgt complete badkamer renovaties in Vlaardingen en omgeving. Van ontwerp tot oplevering, vaste prijzen en garantie. Gratis offerte voor uw badkamer verbouwing.',
};

export default function BadkamerVerbouwenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Vlaardingen"
        title="Badkamer Verbouwen Vlaardingen"
        description="Weekend Klussen is gespecialiseerd in badkamer verbouwen en renovatie in Vlaardingen. Wij verzorgen complete badkamer renovaties van ontwerp tot oplevering, met aandacht voor detail en kwaliteit."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Westland', 'Delft']}
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

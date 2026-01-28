import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Renovatie Delft | Weekend Klussen Renovatie Delft',
  description:
    'Renovatie in Delft. Weekend Klussen verzorgt complete renovaties in Delft en omgeving. Woningrenovatie, badkamer renovatie, keuken renovatie en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function RenovatieDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Delft"
        title="Renovatie Delft"
        description="Weekend Klussen is gespecialiseerd in renovatie in Delft. Wij verzorgen complete woningrenovaties, van badkamer renovatie tot keuken renovatie en totale woningrenovatie."
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer']}
        services={[
          'Complete woningrenovatie',
          'Badkamer renovatie en verbouwing',
          'Keuken renovatie en modernisering',
          'Vloeren renovatie en vloerverwarming',
          'Gevelrenovatie en isolatie',
          'Dakrenovatie en zolder verbouwing',
          'Sanitair en elektra renovatie'
        ]}
      />
      <Footer />
    </main>
  );
}

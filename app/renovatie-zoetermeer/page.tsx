import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Renovatie Zoetermeer | Weekend Klussen Renovatie Zoetermeer',
  description:
    'Renovatie in Zoetermeer. Weekend Klussen verzorgt complete renovaties in Zoetermeer en omgeving. Woningrenovatie, badkamer renovatie, keuken renovatie en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function RenovatieZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zoetermeer"
        title="Renovatie Zoetermeer"
        description="Weekend Klussen is gespecialiseerd in renovatie in Zoetermeer. Wij verzorgen complete woningrenovaties, van badkamer renovatie tot keuken renovatie en totale woningrenovatie."
        nearbyCities={['Den Haag', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Voorburg']}
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

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Renovatie Den Haag | Weekend Klussen Renovatie Den Haag',
  description:
    'Renovatie in Den Haag. Weekend Klussen verzorgt complete renovaties in Den Haag en omgeving. Woningrenovatie, badkamer renovatie, keuken renovatie en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function RenovatieDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Den Haag"
        title="Renovatie Den Haag"
        description="Weekend Klussen is gespecialiseerd in renovatie in Den Haag. Wij verzorgen complete woningrenovaties, van badkamer renovatie tot keuken renovatie en totale woningrenovatie."
        nearbyCities={['Rijswijk', 'Voorburg', 'Zoetermeer', 'Westland', 'Delft', 'Leiden']}
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

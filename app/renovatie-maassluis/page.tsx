import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Renovatie Maassluis | Weekend Klussen Renovatie Maassluis',
  description:
    'Renovatie in Maassluis. Weekend Klussen verzorgt complete renovaties in Maassluis en omgeving. Woningrenovatie, badkamer renovatie, keuken renovatie en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function RenovatieMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Maassluis"
        title="Renovatie Maassluis"
        description="Weekend Klussen is gespecialiseerd in renovatie in Maassluis. Wij verzorgen complete woningrenovaties, van badkamer renovatie tot keuken renovatie en totale woningrenovatie."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Westland', 'Delft']}
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

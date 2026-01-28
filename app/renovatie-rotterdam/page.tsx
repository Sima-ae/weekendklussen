import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Renovatie Rotterdam | Weekend Klussen Renovatie Rotterdam',
  description:
    'Renovatie in Rotterdam. Weekend Klussen verzorgt complete renovaties in Rotterdam en omgeving. Woningrenovatie, badkamer renovatie, keuken renovatie en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function RenovatieRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Rotterdam"
        title="Renovatie Rotterdam"
        description="Weekend Klussen is gespecialiseerd in renovatie in Rotterdam. Wij verzorgen complete woningrenovaties, van badkamer renovatie tot keuken renovatie en totale woningrenovatie."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse']}
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

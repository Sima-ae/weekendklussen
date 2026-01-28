import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aanbouw Schiedam | Weekend Klussen Aanbouw en Uitbouw Schiedam',
  description:
    'Aanbouw en uitbouw in Schiedam. Weekend Klussen verzorgt complete aanbouwen en uitbouwen in Schiedam en omgeving. Van ontwerp tot oplevering, vaste prijzen en garantie. Gratis offerte voor uw aanbouw.',
};

export default function AanbouwSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Schiedam"
        title="Aanbouw Schiedam"
        description="Weekend Klussen is gespecialiseerd in aanbouw en uitbouw in Schiedam. Wij verzorgen complete aanbouwen van ontwerp tot oplevering, met aandacht voor detail, kwaliteit en bouwvergunningen."
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Capelle aan den IJssel']}
        services={[
          'Complete aanbouw en uitbouw',
          'Aanbouw ontwerp en advies',
          'Bouwvergunning aanvragen',
          'Fundering en constructie',
          'Dakkapel plaatsen',
          'Aanbouw afwerking en isolatie',
          'Elektra en wateraansluitingen aanbouw'
        ]}
      />
      <Footer />
    </main>
  );
}

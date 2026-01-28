import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Keuken Plaatsen Vlaardingen | Weekend Klussen Keuken Installatie Vlaardingen',
  description:
    'Keuken plaatsen en installatie in Vlaardingen. Weekend Klussen verzorgt complete keuken installaties in Vlaardingen en omgeving. Van ontwerp tot oplevering, vaste prijzen en garantie. Gratis offerte voor uw keuken plaatsen.',
};

export default function KeukenPlaatsenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Vlaardingen"
        title="Keuken Plaatsen Vlaardingen"
        description="Weekend Klussen is gespecialiseerd in keuken plaatsen en installatie in Vlaardingen. Wij verzorgen complete keuken installaties van ontwerp tot oplevering, met aandacht voor detail en kwaliteit."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Westland', 'Delft']}
        services={[
          'Complete keuken installatie',
          'Keuken ontwerp en advies',
          'Keukenmontage en plaatsing',
          'Keuken elektra en wateraansluitingen',
          'Keukenapparatuur installatie',
          'Keukenwerkbladen plaatsen',
          'Keuken tegels en achterwand'
        ]}
      />
      <Footer />
    </main>
  );
}

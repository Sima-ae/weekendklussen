import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Keuken Plaatsen Den Haag | Weekend Klussen Keuken Installatie Den Haag',
  description:
    'Keuken plaatsen en installatie in Den Haag. Weekend Klussen verzorgt complete keuken installaties in Den Haag en omgeving. Van ontwerp tot oplevering, vaste prijzen en garantie. Gratis offerte voor uw keuken plaatsen.',
};

export default function KeukenPlaatsenDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Den Haag"
        title="Keuken Plaatsen Den Haag"
        description="Weekend Klussen is gespecialiseerd in keuken plaatsen en installatie in Den Haag. Wij verzorgen complete keuken installaties van ontwerp tot oplevering, met aandacht voor detail en kwaliteit."
        nearbyCities={['Rijswijk', 'Voorburg', 'Zoetermeer', 'Westland', 'Delft', 'Leiden']}
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

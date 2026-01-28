import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Loodgieter Delft | Weekend Klussen Loodgieter Delft',
  description:
    'Loodgieter in Delft. Weekend Klussen is uw betrouwbare loodgieter in Delft en omgeving. Loodgieterswerk, sanitair, leidingen, verwarming en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function LoodgieterDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Delft"
        title="Loodgieter Delft"
        description="Weekend Klussen is uw betrouwbare loodgieter in Delft. Wij verzorgen alle loodgieterswerkzaamheden, van leidingen en sanitair tot verwarming en riolering. Ervaren loodgieter voor al uw loodgieterswerk."
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer']}
        services={[
          'Leidingen en riolering',
          'Sanitair installatie en reparatie',
          'Verwarming en cv-installatie',
          'Badkamer en keuken installatie',
          'Waterleiding en afvoer',
          'Lekkage reparatie en onderhoud',
          'Noodservice en 24/7 beschikbaar'
        ]}
      />
      <Footer />
    </main>
  );
}

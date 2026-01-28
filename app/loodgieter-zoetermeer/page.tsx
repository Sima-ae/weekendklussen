import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Loodgieter Zoetermeer | Weekend Klussen Loodgieter Zoetermeer',
  description:
    'Loodgieter in Zoetermeer. Weekend Klussen is uw betrouwbare loodgieter in Zoetermeer en omgeving. Loodgieterswerk, sanitair, leidingen, verwarming en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function LoodgieterZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zoetermeer"
        title="Loodgieter Zoetermeer"
        description="Weekend Klussen is uw betrouwbare loodgieter in Zoetermeer. Wij verzorgen alle loodgieterswerkzaamheden, van leidingen en sanitair tot verwarming en riolering. Ervaren loodgieter voor al uw loodgieterswerk."
        nearbyCities={['Den Haag', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Voorburg']}
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

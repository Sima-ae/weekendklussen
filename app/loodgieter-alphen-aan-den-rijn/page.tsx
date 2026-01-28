import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Loodgieter Alphen aan den Rijn | Weekend Klussen Loodgieter',
  description:
    'Loodgieter in Alphen aan den Rijn. Weekend Klussen is uw betrouwbare loodgieter in Alphen aan den Rijn en omgeving. Loodgieterswerk, sanitair, leidingen, verwarming en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function LoodgieterAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Alphen aan den Rijn"
        title="Loodgieter Alphen aan den Rijn"
        description="Weekend Klussen is uw betrouwbare loodgieter in Alphen aan den Rijn. Wij verzorgen alle loodgieterswerkzaamheden, van leidingen en sanitair tot verwarming en riolering. Ervaren loodgieter voor al uw loodgieterswerk."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Waddinxveen']}
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

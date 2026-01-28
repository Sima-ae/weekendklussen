import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: '24/7 Loodgieter Zoetermeer | Weekend Klussen 24/7 Loodgieter Service',
  description:
    '24/7 loodgieter in Zoetermeer. Weekend Klussen biedt 24 uur per dag, 7 dagen per week loodgieter service in Zoetermeer. Lekkages, verstoppingen, verwarming storingen en meer. Direct beschikbaar.',
};

export default function LoodgieterZoetermeer24Page() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zoetermeer"
        title="24/7 Loodgieter Zoetermeer"
        description="Weekend Klussen biedt 24/7 loodgieter service en noodservice in Zoetermeer. Wij zijn 24 uur per dag, 7 dagen per week beschikbaar voor alle loodgieterswerkzaamheden, van lekkages en verstoppingen tot verwarming storingen en spoedreparaties."
        nearbyCities={['Den Haag', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Voorburg']}
        services={[
          '24/7 loodgieter en noodservice',
          'Lekkage reparatie en spoedreparaties',
          'Verstoppingen en riool ontstoppen',
          'Verwarming storingen en cv-reparatie',
          'Sanitair installatie en reparatie',
          'Waterleiding en afvoer problemen',
          'Direct beschikbaar, dag en nacht'
        ]}
      />
      <Footer />
    </main>
  );
}

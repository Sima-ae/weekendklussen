import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: '24/7 Loodgieter Rotterdam | Weekend Klussen 24/7 Loodgieter Service',
  description:
    '24/7 loodgieter in Rotterdam. Weekend Klussen biedt 24 uur per dag, 7 dagen per week loodgieter service in Rotterdam. Lekkages, verstoppingen, verwarming storingen en meer. Direct beschikbaar.',
};

export default function LoodgieterRotterdam24Page() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Rotterdam"
        title="24/7 Loodgieter Rotterdam"
        description="Weekend Klussen biedt 24/7 loodgieter service en noodservice in Rotterdam. Wij zijn 24 uur per dag, 7 dagen per week beschikbaar voor alle loodgieterswerkzaamheden, van lekkages en verstoppingen tot verwarming storingen en spoedreparaties."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse']}
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

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: '24/7 Slotenmaker Zoetermeer | Weekend Klussen 24/7 Slotenmaker Service',
  description:
    '24/7 slotenmaker in Zoetermeer. Weekend Klussen biedt 24 uur per dag, 7 dagen per week slotenmaker service in Zoetermeer. Inbraakpreventie, slot vervanging, sleutels maken en meer. Direct beschikbaar.',
};

export default function SlotenmakerZoetermeer24Page() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zoetermeer"
        title="24/7 Slotenmaker Zoetermeer"
        description="Weekend Klussen biedt 24/7 slotenmaker service en noodservice in Zoetermeer. Wij zijn 24 uur per dag, 7 dagen per week beschikbaar voor alle slotenmakerswerkzaamheden, van inbraakpreventie en slot vervanging tot sleutels maken en spoedreparaties."
        nearbyCities={['Den Haag', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Voorburg']}
        services={[
          '24/7 slotenmaker en noodservice',
          'Inbraakpreventie en beveiliging',
          'Slot vervanging en reparatie',
          'Sleutels maken en kopiëren',
          'Deur openen en spoedreparaties',
          'Cilinders en hang- en sluitwerk',
          'Direct beschikbaar, dag en nacht'
        ]}
      />
      <Footer />
    </main>
  );
}

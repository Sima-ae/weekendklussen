import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: '24/7 Timmerman Gouda | Weekend Klussen 24/7 Timmerman Service',
  description:
    '24/7 timmerman in Gouda. Weekend Klussen biedt 24 uur per dag, 7 dagen per week timmerman service in Gouda. Spoedreparaties, kozijnen, deuren, trappen en meer. Direct beschikbaar.',
};

export default function TimmermanGouda24Page() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Gouda"
        title="24/7 Timmerman Gouda"
        description="Weekend Klussen biedt 24/7 timmerman service en noodservice in Gouda. Wij zijn 24 uur per dag, 7 dagen per week beschikbaar voor alle timmerwerkzaamheden, van spoedreparaties en kozijnen tot deuren, trappen en andere urgente timmerwerk."
        nearbyCities={['Rotterdam', 'Zoetermeer', 'Alphen aan den Rijn', 'Utrecht', 'Woerden']}
        services={[
          '24/7 timmerman en noodservice',
          'Spoedreparaties en noodreparaties',
          'Kozijnen en deuren reparatie',
          'Trappen en trapleuningen',
          'Inbraakpreventie en beveiliging',
          'Houtbewerking en fineerwerk',
          'Direct beschikbaar, dag en nacht'
        ]}
      />
      <Footer />
    </main>
  );
}

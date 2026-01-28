import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: '24/7 Timmerman | Weekend Klussen 24/7 Timmerman Service',
  description:
    '24/7 timmerman en noodservice. Weekend Klussen biedt 24 uur per dag, 7 dagen per week timmerman service in Zuid-Holland. Spoedreparaties, kozijnen, deuren, trappen en meer. Direct beschikbaar.',
};

export default function Timmerman24Page() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zuid-Holland"
        title="24/7 Timmerman"
        description="Weekend Klussen biedt 24/7 timmerman service en noodservice in Zuid-Holland. Wij zijn 24 uur per dag, 7 dagen per week beschikbaar voor alle timmerwerkzaamheden, van spoedreparaties en kozijnen tot deuren, trappen en andere urgente timmerwerk."
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Leiden', 'Dordrecht', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn']}
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

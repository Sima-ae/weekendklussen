import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: '24/7 Timmerman Den Haag | Weekend Klussen 24/7 Timmerman Service',
  description:
    '24/7 timmerman in Den Haag. Weekend Klussen biedt 24 uur per dag, 7 dagen per week timmerman service in Den Haag. Spoedreparaties, kozijnen, deuren, trappen en meer. Direct beschikbaar.',
};

export default function TimmermanDenHaag24Page() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Den Haag"
        title="24/7 Timmerman Den Haag"
        description="Weekend Klussen biedt 24/7 timmerman service en noodservice in Den Haag. Wij zijn 24 uur per dag, 7 dagen per week beschikbaar voor alle timmerwerkzaamheden, van spoedreparaties en kozijnen tot deuren, trappen en andere urgente timmerwerk."
        nearbyCities={['Rijswijk', 'Voorburg', 'Zoetermeer', 'Westland', 'Delft', 'Leiden']}
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

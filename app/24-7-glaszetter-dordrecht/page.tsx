import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: '24/7 Glaszetter Dordrecht | Weekend Klussen 24/7 Glaszetter Service',
  description:
    '24/7 glaszetter in Dordrecht. Weekend Klussen biedt 24 uur per dag, 7 dagen per week glaszetter service in Dordrecht. Spoedreparaties, ruit vervanging, inbraakpreventie en meer. Direct beschikbaar.',
};

export default function GlaszetterDordrecht24Page() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Dordrecht"
        title="24/7 Glaszetter Dordrecht"
        description="Weekend Klussen biedt 24/7 glaszetter service en noodservice in Dordrecht. Wij zijn 24 uur per dag, 7 dagen per week beschikbaar voor alle glaswerkzaamheden, van spoedreparaties en ruit vervanging tot inbraakpreventie en glasreparatie."
        nearbyCities={['Papendrecht', 'Sliedrecht', 'Zwijndrecht', 'Rotterdam', 'Barendrecht']}
        services={[
          '24/7 glaszetter en noodservice',
          'Ruit vervanging en reparatie',
          'Inbraakpreventie en beveiliging',
          'Glasreparatie en spoedreparaties',
          'Kozijnen en deuren met glas',
          'Spiegel plaatsing en reparatie',
          'Direct beschikbaar, dag en nacht'
        ]}
      />
      <Footer />
    </main>
  );
}

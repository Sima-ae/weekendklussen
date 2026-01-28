import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: '24/7 Spoedreparatie Dordrecht | Weekend Klussen 24/7 Spoedreparatie Service',
  description:
    '24/7 spoedreparatie in Dordrecht. Weekend Klussen biedt 24 uur per dag, 7 dagen per week spoedreparatie service in Dordrecht. Alle spoedreparaties, lekkages, storingen en meer. Direct beschikbaar.',
};

export default function SpoedreparatieDordrecht24Page() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Dordrecht"
        title="24/7 Spoedreparatie Dordrecht"
        description="Weekend Klussen biedt 24/7 spoedreparatie service en noodservice in Dordrecht. Wij zijn 24 uur per dag, 7 dagen per week beschikbaar voor alle spoedreparaties, van lekkages en storingen tot elektra problemen en andere noodsituaties."
        nearbyCities={['Papendrecht', 'Sliedrecht', 'Zwijndrecht', 'Rotterdam', 'Barendrecht']}
        services={[
          '24/7 spoedreparatie en noodservice',
          'Lekkage reparatie en waterschade',
          'Elektra storingen en spoedreparaties',
          'Verwarming storingen en cv-reparatie',
          'Verstoppingen en riool problemen',
          'Inbraakpreventie en noodreparaties',
          'Direct beschikbaar, dag en nacht'
        ]}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: '24/7 Spoedreparatie Delft | Weekend Klussen 24/7 Spoedreparatie Service',
  description:
    '24/7 spoedreparatie in Delft. Weekend Klussen biedt 24 uur per dag, 7 dagen per week spoedreparatie service in Delft. Alle spoedreparaties, lekkages, storingen en meer. Direct beschikbaar.',
};

export default function SpoedreparatieDelft24Page() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Delft"
        title="24/7 Spoedreparatie Delft"
        description="Weekend Klussen biedt 24/7 spoedreparatie service en noodservice in Delft. Wij zijn 24 uur per dag, 7 dagen per week beschikbaar voor alle spoedreparaties, van lekkages en storingen tot elektra problemen en andere noodsituaties."
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer']}
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

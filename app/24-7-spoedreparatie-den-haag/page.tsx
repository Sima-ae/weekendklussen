import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: '24/7 Spoedreparatie Den Haag | Weekend Klussen 24/7 Spoedreparatie Service',
  description:
    '24/7 spoedreparatie in Den Haag. Weekend Klussen biedt 24 uur per dag, 7 dagen per week spoedreparatie service in Den Haag. Alle spoedreparaties, lekkages, storingen en meer. Direct beschikbaar.',
};

export default function SpoedreparatieDenHaag24Page() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Den Haag"
        title="24/7 Spoedreparatie Den Haag"
        description="Weekend Klussen biedt 24/7 spoedreparatie service en noodservice in Den Haag. Wij zijn 24 uur per dag, 7 dagen per week beschikbaar voor alle spoedreparaties, van lekkages en storingen tot elektra problemen en andere noodsituaties."
        nearbyCities={['Rijswijk', 'Voorburg', 'Zoetermeer', 'Westland', 'Delft', 'Leiden']}
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

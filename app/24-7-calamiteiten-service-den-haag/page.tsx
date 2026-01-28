import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: '24/7 Calamiteiten Service Den Haag | Weekend Klussen Noodservice',
  description:
    '24/7 calamiteiten service in Den Haag. Weekend Klussen biedt 24 uur per dag, 7 dagen per week calamiteiten service in Den Haag. Lekkages, waterschade, elektra storingen en meer. Direct beschikbaar.',
};

export default function CalamiteitenServiceDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Den Haag"
        title="24/7 Calamiteiten Service Den Haag"
        description="Weekend Klussen biedt 24/7 calamiteiten service en noodservice in Den Haag. Wij zijn 24 uur per dag, 7 dagen per week beschikbaar voor alle spoedgevallen, van lekkages en waterschade tot elektra storingen en andere noodsituaties."
        nearbyCities={['Rijswijk', 'Voorburg', 'Zoetermeer', 'Westland', 'Delft', 'Leiden']}
        services={[
          '24/7 noodservice en spoedreparaties',
          'Lekkage reparatie en waterschade',
          'Elektra storingen en spoedreparaties',
          'Verwarming storingen en cv-reparatie',
          'Riolering problemen en verstoppingen',
          'Inbraakpreventie en noodreparaties',
          'Direct beschikbaar, dag en nacht'
        ]}
      />
      <Footer />
    </main>
  );
}

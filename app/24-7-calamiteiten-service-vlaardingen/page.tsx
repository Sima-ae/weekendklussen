import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: '24/7 Calamiteiten Service Vlaardingen | Weekend Klussen Noodservice',
  description:
    '24/7 calamiteiten service in Vlaardingen. Weekend Klussen biedt 24 uur per dag, 7 dagen per week calamiteiten service in Vlaardingen. Lekkages, waterschade, elektra storingen en meer. Direct beschikbaar.',
};

export default function CalamiteitenServiceVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Vlaardingen"
        title="24/7 Calamiteiten Service Vlaardingen"
        description="Weekend Klussen biedt 24/7 calamiteiten service en noodservice in Vlaardingen. Wij zijn 24 uur per dag, 7 dagen per week beschikbaar voor alle spoedgevallen, van lekkages en waterschade tot elektra storingen en andere noodsituaties."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Westland', 'Delft']}
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

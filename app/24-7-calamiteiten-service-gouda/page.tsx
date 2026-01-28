import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: '24/7 Calamiteiten Service Gouda | Weekend Klussen Noodservice',
  description:
    '24/7 calamiteiten service in Gouda. Weekend Klussen biedt 24 uur per dag, 7 dagen per week calamiteiten service in Gouda. Lekkages, waterschade, elektra storingen en meer. Direct beschikbaar.',
};

export default function CalamiteitenServiceGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Gouda"
        title="24/7 Calamiteiten Service Gouda"
        description="Weekend Klussen biedt 24/7 calamiteiten service en noodservice in Gouda. Wij zijn 24 uur per dag, 7 dagen per week beschikbaar voor alle spoedgevallen, van lekkages en waterschade tot elektra storingen en andere noodsituaties."
        nearbyCities={['Rotterdam', 'Zoetermeer', 'Alphen aan den Rijn', 'Utrecht', 'Woerden']}
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

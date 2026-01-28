import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: '24/7 Spoedservice Alphen aan den Rijn | Weekend Klussen 24/7 Spoedservice',
  description:
    '24/7 spoedservice in Alphen aan den Rijn. Weekend Klussen biedt 24 uur per dag, 7 dagen per week spoedservice in Alphen aan den Rijn. Alle spoedreparaties en noodsituaties. Direct beschikbaar.',
};

export default function SpoedserviceAlphenAanDenRijn24Page() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Alphen aan den Rijn"
        title="24/7 Spoedservice Alphen aan den Rijn"
        description="Weekend Klussen biedt 24/7 spoedservice en noodservice in Alphen aan den Rijn. Wij zijn 24 uur per dag, 7 dagen per week beschikbaar voor alle spoedreparaties en noodsituaties, van lekkages en storingen tot inbraakpreventie en andere urgente problemen."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Waddinxveen']}
        services={[
          '24/7 spoedservice en noodservice',
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

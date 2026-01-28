import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Calamiteiten Schiedam | Weekend Klussen Calamiteiten Service Schiedam',
  description:
    'Calamiteiten service en noodservice in Schiedam. Weekend Klussen biedt calamiteiten service voor lekkages, waterschade, elektra storingen en meer in Schiedam. Snelle reactie en professionele oplossingen. Gratis offerte.',
};

export default function CalamiteitenSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Schiedam"
        title="Calamiteiten Schiedam"
        description="Weekend Klussen biedt professionele calamiteiten service in Schiedam. Wij zijn snel ter plaatse bij noodsituaties zoals lekkages, waterschade, elektra storingen en andere spoedgevallen. Met jarenlange ervaring lossen wij uw probleem snel en efficiënt op."
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag']}
        services={[
          'Calamiteiten service en noodservice',
          'Lekkage reparatie en waterschade',
          'Elektra storingen en spoedreparaties',
          'Verwarming storingen en cv-reparatie',
          'Riolering problemen en verstoppingen',
          'Inbraakpreventie en noodreparaties',
          'Watersnood en overstroming hulp',
          'Snelle reactie en directe oplossingen'
        ]}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Calamiteiten Den Haag | Weekend Klussen Calamiteiten Service Den Haag',
  description:
    'Calamiteiten service en noodservice in Den Haag. Weekend Klussen biedt calamiteiten service voor lekkages, waterschade, elektra storingen en meer in Den Haag. Snelle reactie en professionele oplossingen. Gratis offerte.',
};

export default function CalamiteitenDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Den Haag"
        title="Calamiteiten Den Haag"
        description="Weekend Klussen biedt professionele calamiteiten service in Den Haag. Wij zijn snel ter plaatse bij noodsituaties zoals lekkages, waterschade, elektra storingen en andere spoedgevallen. Met jarenlange ervaring lossen wij uw probleem snel en efficiënt op."
        nearbyCities={['Rijswijk', 'Delft', 'Rotterdam', 'Zoetermeer', 'Leiden']}
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

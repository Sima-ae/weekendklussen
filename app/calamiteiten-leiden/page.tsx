import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Calamiteiten Leiden | Weekend Klussen Calamiteiten Service Leiden',
  description:
    'Calamiteiten service en noodservice in Leiden. Weekend Klussen biedt calamiteiten service voor lekkages, waterschade, elektra storingen en meer in Leiden. Snelle reactie en professionele oplossingen. Gratis offerte.',
};

export default function CalamiteitenLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Leiden"
        title="Calamiteiten Leiden"
        description="Weekend Klussen biedt professionele calamiteiten service in Leiden. Wij zijn snel ter plaatse bij noodsituaties zoals lekkages, waterschade, elektra storingen en andere spoedgevallen. Met jarenlange ervaring lossen wij uw probleem snel en efficiënt op."
        nearbyCities={['Den Haag', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn', 'Katwijk']}
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

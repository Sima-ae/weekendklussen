import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Calamiteiten Alphen aan den Rijn | Weekend Klussen Calamiteiten Service Alphen aan den Rijn',
  description:
    'Calamiteiten service en noodservice in Alphen aan den Rijn. Weekend Klussen biedt calamiteiten service voor lekkages, waterschade, elektra storingen en meer in Alphen aan den Rijn. Snelle reactie en professionele oplossingen. Gratis offerte.',
};

export default function CalamiteitenAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Alphen aan den Rijn"
        title="Calamiteiten Alphen aan den Rijn"
        description="Weekend Klussen biedt professionele calamiteiten service in Alphen aan den Rijn. Wij zijn snel ter plaatse bij noodsituaties zoals lekkages, waterschade, elektra storingen en andere spoedgevallen. Met jarenlange ervaring lossen wij uw probleem snel en efficiënt op."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Utrecht', 'Woerden']}
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

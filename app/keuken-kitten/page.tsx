import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenKittenContent } from '@/components/pages/KeukenKittenContent';

export const metadata: Metadata = {
  title: 'Keuken Kitten | Weekend Klussen Keuken Kitten Specialist',
  description:
    'Professioneel keuken kitten in Zuid-Holland. Weekend Klussen verzorgt keuken kitten, kit vervangen en voegwerk voor een perfecte afdichting. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenKittenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenKittenContent
        location="Zuid-Holland"
        title="Keuken Kitten"
        description="Weekend Klussen is uw specialist voor keuken kitten in Zuid-Holland. Wij verzorgen professioneel keuken kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken."
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Leiden', 'Dordrecht', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn']}
      />
      <Footer />
    </main>
  );
}

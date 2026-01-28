import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenAfkittenContent } from '@/components/pages/KeukenAfkittenContent';

export const metadata: Metadata = {
  title: 'Keuken Afkitten | Weekend Klussen Keuken Afkitten Specialist',
  description:
    'Professioneel keuken afkitten in Zuid-Holland. Weekend Klussen verzorgt keuken afkitten, kit vervangen en voegwerk voor een perfecte afdichting. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenAfkittenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenAfkittenContent
        location="Zuid-Holland"
        title="Keuken Afkitten"
        description="Weekend Klussen is uw specialist voor keuken afkitten in Zuid-Holland. Wij verzorgen professioneel keuken afkitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken."
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Leiden', 'Dordrecht', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn']}
      />
      <Footer />
    </main>
  );
}

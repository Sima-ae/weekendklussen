import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KozijnenKittenContent } from '@/components/pages/KozijnenKittenContent';

export const metadata: Metadata = {
  title: 'Kozijnen Kitten Delft | Weekend Klussen Kozijnen Kitten Delft',
  description:
    'Professioneel kozijnen kitten in Delft. Weekend Klussen verzorgt kozijnen kitten, kit vervangen en voegwerk voor een perfecte afdichting in Delft. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KozijnenKittenDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KozijnenKittenContent
        location="Delft"
        title="Kozijnen Kitten Delft"
        description="Weekend Klussen is uw specialist voor kozijnen kitten in Delft. Wij verzorgen professioneel kozijnen kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en energiezuinige woning in Delft en omgeving."
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer']}
      />
      <Footer />
    </main>
  );
}

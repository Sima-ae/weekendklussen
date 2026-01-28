import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KozijnenKittenContent } from '@/components/pages/KozijnenKittenContent';

export const metadata: Metadata = {
  title: 'Kozijnen Kitten Zoetermeer | Weekend Klussen Kozijnen Kitten Zoetermeer',
  description:
    'Professioneel kozijnen kitten in Zoetermeer. Weekend Klussen verzorgt kozijnen kitten, kit vervangen en voegwerk voor een perfecte afdichting in Zoetermeer. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KozijnenKittenZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KozijnenKittenContent
        location="Zoetermeer"
        title="Kozijnen Kitten Zoetermeer"
        description="Weekend Klussen is uw specialist voor kozijnen kitten in Zoetermeer. Wij verzorgen professioneel kozijnen kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en energiezuinige woning in Zoetermeer en omgeving."
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp']}
      />
      <Footer />
    </main>
  );
}

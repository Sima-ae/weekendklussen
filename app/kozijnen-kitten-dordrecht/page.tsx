import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KozijnenKittenContent } from '@/components/pages/KozijnenKittenContent';

export const metadata: Metadata = {
  title: 'Kozijnen Kitten Dordrecht | Weekend Klussen Kozijnen Kitten Dordrecht',
  description:
    'Professioneel kozijnen kitten in Dordrecht. Weekend Klussen verzorgt kozijnen kitten, kit vervangen en voegwerk voor een perfecte afdichting in Dordrecht. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KozijnenKittenDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KozijnenKittenContent
        location="Dordrecht"
        title="Kozijnen Kitten Dordrecht"
        description="Weekend Klussen is uw specialist voor kozijnen kitten in Dordrecht. Wij verzorgen professioneel kozijnen kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en energiezuinige woning in Dordrecht en omgeving."
        nearbyCities={['Rotterdam', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht', 'Gorinchem']}
      />
      <Footer />
    </main>
  );
}

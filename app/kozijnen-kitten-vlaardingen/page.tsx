import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KozijnenKittenContent } from '@/components/pages/KozijnenKittenContent';

export const metadata: Metadata = {
  title: 'Kozijnen Kitten Vlaardingen | Weekend Klussen Kozijnen Kitten Vlaardingen',
  description:
    'Professioneel kozijnen kitten in Vlaardingen. Weekend Klussen verzorgt kozijnen kitten, kit vervangen en voegwerk voor een perfecte afdichting in Vlaardingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KozijnenKittenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KozijnenKittenContent
        location="Vlaardingen"
        title="Kozijnen Kitten Vlaardingen"
        description="Weekend Klussen is uw specialist voor kozijnen kitten in Vlaardingen. Wij verzorgen professioneel kozijnen kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en energiezuinige woning in Vlaardingen en omgeving."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

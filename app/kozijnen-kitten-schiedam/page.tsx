import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KozijnenKittenContent } from '@/components/pages/KozijnenKittenContent';

export const metadata: Metadata = {
  title: 'Kozijnen Kitten Schiedam | Weekend Klussen Kozijnen Kitten Schiedam',
  description:
    'Professioneel kozijnen kitten in Schiedam. Weekend Klussen verzorgt kozijnen kitten, kit vervangen en voegwerk voor een perfecte afdichting in Schiedam. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KozijnenKittenSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KozijnenKittenContent
        location="Schiedam"
        title="Kozijnen Kitten Schiedam"
        description="Weekend Klussen is uw specialist voor kozijnen kitten in Schiedam. Wij verzorgen professioneel kozijnen kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en energiezuinige woning in Schiedam en omgeving."
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

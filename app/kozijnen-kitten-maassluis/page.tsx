import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KozijnenKittenContent } from '@/components/pages/KozijnenKittenContent';

export const metadata: Metadata = {
  title: 'Kozijnen Kitten Maassluis | Weekend Klussen Kozijnen Kitten Maassluis',
  description:
    'Professioneel kozijnen kitten in Maassluis. Weekend Klussen verzorgt kozijnen kitten, kit vervangen en voegwerk voor een perfecte afdichting in Maassluis. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KozijnenKittenMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KozijnenKittenContent
        location="Maassluis"
        title="Kozijnen Kitten Maassluis"
        description="Weekend Klussen is uw specialist voor kozijnen kitten in Maassluis. Wij verzorgen professioneel kozijnen kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en energiezuinige woning in Maassluis en omgeving."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

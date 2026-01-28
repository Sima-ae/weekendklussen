import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KozijnenKittenContent } from '@/components/pages/KozijnenKittenContent';

export const metadata: Metadata = {
  title: 'Kozijnen Kitten Alphen aan den Rijn | Weekend Klussen Kozijnen Kitten Alphen aan den Rijn',
  description:
    'Professioneel kozijnen kitten in Alphen aan den Rijn. Weekend Klussen verzorgt kozijnen kitten, kit vervangen en voegwerk voor een perfecte afdichting in Alphen aan den Rijn. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KozijnenKittenAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KozijnenKittenContent
        location="Alphen aan den Rijn"
        title="Kozijnen Kitten Alphen aan den Rijn"
        description="Weekend Klussen is uw specialist voor kozijnen kitten in Alphen aan den Rijn. Wij verzorgen professioneel kozijnen kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en energiezuinige woning in Alphen aan den Rijn en omgeving."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Waddinxveen']}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageOpzoekenContent } from '@/components/pages/LekkageOpzoekenContent';

export const metadata: Metadata = {
  title: 'Lekkage Opzoeken Gouda | Weekend Klussen Lekkage Opzoeken Gouda',
  description:
    'Professioneel lekkage opzoeken in Gouda. Weekend Klussen verzorgt lekkage opzoeken met moderne detectietechnieken in Gouda. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageOpzoekenGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageOpzoekenContent
        location="Gouda"
        title="Lekkage Opzoeken Gouda"
        description="Weekend Klussen is uw specialist voor lekkage opzoeken in Gouda. Wij gebruiken moderne detectietechnieken om lekkages snel en nauwkeurig op te sporen, zonder onnodige sloopwerkzaamheden in Gouda en omgeving."
        nearbyCities={['Zoetermeer', 'Rotterdam', 'Utrecht', 'Woerden', 'Waddinxveen']}
      />
      <Footer />
    </main>
  );
}

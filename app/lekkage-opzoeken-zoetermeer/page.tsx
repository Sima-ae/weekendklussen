import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageOpzoekenContent } from '@/components/pages/LekkageOpzoekenContent';

export const metadata: Metadata = {
  title: 'Lekkage Opzoeken Zoetermeer | Weekend Klussen Lekkage Opzoeken Zoetermeer',
  description:
    'Professioneel lekkage opzoeken in Zoetermeer. Weekend Klussen verzorgt lekkage opzoeken met moderne detectietechnieken in Zoetermeer. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageOpzoekenZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageOpzoekenContent
        location="Zoetermeer"
        title="Lekkage Opzoeken Zoetermeer"
        description="Weekend Klussen is uw specialist voor lekkage opzoeken in Zoetermeer. Wij gebruiken moderne detectietechnieken om lekkages snel en nauwkeurig op te sporen, zonder onnodige sloopwerkzaamheden in Zoetermeer en omgeving."
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp']}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageOpzoekenContent } from '@/components/pages/LekkageOpzoekenContent';

export const metadata: Metadata = {
  title: 'Lekkage Opzoeken Maassluis | Weekend Klussen Lekkage Opzoeken Maassluis',
  description:
    'Professioneel lekkage opzoeken in Maassluis. Weekend Klussen verzorgt lekkage opzoeken met moderne detectietechnieken in Maassluis. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageOpzoekenMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageOpzoekenContent
        location="Maassluis"
        title="Lekkage Opzoeken Maassluis"
        description="Weekend Klussen is uw specialist voor lekkage opzoeken in Maassluis. Wij gebruiken moderne detectietechnieken om lekkages snel en nauwkeurig op te sporen, zonder onnodige sloopwerkzaamheden in Maassluis en omgeving."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

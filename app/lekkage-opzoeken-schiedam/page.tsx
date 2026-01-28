import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageOpzoekenContent } from '@/components/pages/LekkageOpzoekenContent';

export const metadata: Metadata = {
  title: 'Lekkage Opzoeken Schiedam | Weekend Klussen Lekkage Opzoeken Schiedam',
  description:
    'Professioneel lekkage opzoeken in Schiedam. Weekend Klussen verzorgt lekkage opzoeken met moderne detectietechnieken in Schiedam. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageOpzoekenSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageOpzoekenContent
        location="Schiedam"
        title="Lekkage Opzoeken Schiedam"
        description="Weekend Klussen is uw specialist voor lekkage opzoeken in Schiedam. Wij gebruiken moderne detectietechnieken om lekkages snel en nauwkeurig op te sporen, zonder onnodige sloopwerkzaamheden in Schiedam en omgeving."
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageOpzoekenContent } from '@/components/pages/LekkageOpzoekenContent';

export const metadata: Metadata = {
  title: 'Lekkage Opzoeken Vlaardingen | Weekend Klussen Lekkage Opzoeken Vlaardingen',
  description:
    'Professioneel lekkage opzoeken in Vlaardingen. Weekend Klussen verzorgt lekkage opzoeken met moderne detectietechnieken in Vlaardingen. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageOpzoekenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageOpzoekenContent
        location="Vlaardingen"
        title="Lekkage Opzoeken Vlaardingen"
        description="Weekend Klussen is uw specialist voor lekkage opzoeken in Vlaardingen. Wij gebruiken moderne detectietechnieken om lekkages snel en nauwkeurig op te sporen, zonder onnodige sloopwerkzaamheden in Vlaardingen en omgeving."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

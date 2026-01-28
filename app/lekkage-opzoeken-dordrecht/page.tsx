import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageOpzoekenContent } from '@/components/pages/LekkageOpzoekenContent';

export const metadata: Metadata = {
  title: 'Lekkage Opzoeken Dordrecht | Weekend Klussen Lekkage Opzoeken Dordrecht',
  description:
    'Professioneel lekkage opzoeken in Dordrecht. Weekend Klussen verzorgt lekkage opzoeken met moderne detectietechnieken in Dordrecht. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageOpzoekenDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageOpzoekenContent
        location="Dordrecht"
        title="Lekkage Opzoeken Dordrecht"
        description="Weekend Klussen is uw specialist voor lekkage opzoeken in Dordrecht. Wij gebruiken moderne detectietechnieken om lekkages snel en nauwkeurig op te sporen, zonder onnodige sloopwerkzaamheden in Dordrecht en omgeving."
        nearbyCities={['Rotterdam', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht', 'Gorinchem']}
      />
      <Footer />
    </main>
  );
}

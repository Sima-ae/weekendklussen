import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageOpzoekenContent } from '@/components/pages/LekkageOpzoekenContent';

export const metadata: Metadata = {
  title: 'Lekkage Opzoeken Alphen aan den Rijn | Weekend Klussen Lekkage Opzoeken Alphen aan den Rijn',
  description:
    'Professioneel lekkage opzoeken in Alphen aan den Rijn. Weekend Klussen verzorgt lekkage opzoeken met moderne detectietechnieken in Alphen aan den Rijn. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageOpzoekenAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageOpzoekenContent
        location="Alphen aan den Rijn"
        title="Lekkage Opzoeken Alphen aan den Rijn"
        description="Weekend Klussen is uw specialist voor lekkage opzoeken in Alphen aan den Rijn. Wij gebruiken moderne detectietechnieken om lekkages snel en nauwkeurig op te sporen, zonder onnodige sloopwerkzaamheden in Alphen aan den Rijn en omgeving."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Waddinxveen']}
      />
      <Footer />
    </main>
  );
}

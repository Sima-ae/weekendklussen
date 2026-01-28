import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekdetectieContent } from '@/components/pages/LekdetectieContent';

export const metadata: Metadata = {
  title: 'Lekdetectie Alphen aan den Rijn | Weekend Klussen Lekdetectie Alphen aan den Rijn',
  description:
    'Professionele lekdetectie in Alphen aan den Rijn. Weekend Klussen verzorgt lekdetectie met vochtmeter, warmtebeeldcamera en moderne technieken in Alphen aan den Rijn. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekdetectieAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekdetectieContent
        location="Alphen aan den Rijn"
        title="Lekdetectie Alphen aan den Rijn"
        description="Weekend Klussen is uw specialist voor lekdetectie in Alphen aan den Rijn. Wij gebruiken moderne detectietechnieken om lekkages snel en nauwkeurig te lokaliseren, zonder onnodige sloopwerkzaamheden in Alphen aan den Rijn en omgeving."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Waddinxveen']}
      />
      <Footer />
    </main>
  );
}

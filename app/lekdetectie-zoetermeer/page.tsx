import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekdetectieContent } from '@/components/pages/LekdetectieContent';

export const metadata: Metadata = {
  title: 'Lekdetectie Zoetermeer | Weekend Klussen Lekdetectie Zoetermeer',
  description:
    'Professionele lekdetectie in Zoetermeer. Weekend Klussen verzorgt lekdetectie met vochtmeter, warmtebeeldcamera en moderne technieken in Zoetermeer. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekdetectieZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekdetectieContent
        location="Zoetermeer"
        title="Lekdetectie Zoetermeer"
        description="Weekend Klussen is uw specialist voor lekdetectie in Zoetermeer. Wij gebruiken moderne detectietechnieken om lekkages snel en nauwkeurig te lokaliseren, zonder onnodige sloopwerkzaamheden in Zoetermeer en omgeving."
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp']}
      />
      <Footer />
    </main>
  );
}

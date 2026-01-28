import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekdetectieContent } from '@/components/pages/LekdetectieContent';

export const metadata: Metadata = {
  title: 'Lekdetectie Maassluis | Weekend Klussen Lekdetectie Maassluis',
  description:
    'Professionele lekdetectie in Maassluis. Weekend Klussen verzorgt lekdetectie met vochtmeter, warmtebeeldcamera en moderne technieken in Maassluis. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekdetectieMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekdetectieContent
        location="Maassluis"
        title="Lekdetectie Maassluis"
        description="Weekend Klussen is uw specialist voor lekdetectie in Maassluis. Wij gebruiken moderne detectietechnieken om lekkages snel en nauwkeurig te lokaliseren, zonder onnodige sloopwerkzaamheden in Maassluis en omgeving."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

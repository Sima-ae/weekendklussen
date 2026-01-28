import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekdetectieContent } from '@/components/pages/LekdetectieContent';

export const metadata: Metadata = {
  title: 'Lekdetectie Vlaardingen | Weekend Klussen Lekdetectie Vlaardingen',
  description:
    'Professionele lekdetectie in Vlaardingen. Weekend Klussen verzorgt lekdetectie met vochtmeter, warmtebeeldcamera en moderne technieken in Vlaardingen. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekdetectieVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekdetectieContent
        location="Vlaardingen"
        title="Lekdetectie Vlaardingen"
        description="Weekend Klussen is uw specialist voor lekdetectie in Vlaardingen. Wij gebruiken moderne detectietechnieken om lekkages snel en nauwkeurig te lokaliseren, zonder onnodige sloopwerkzaamheden in Vlaardingen en omgeving."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

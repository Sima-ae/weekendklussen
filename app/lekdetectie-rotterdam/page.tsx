import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekdetectieContent } from '@/components/pages/LekdetectieContent';

export const metadata: Metadata = {
  title: 'Lekdetectie Rotterdam | Weekend Klussen Lekdetectie Rotterdam',
  description:
    'Professionele lekdetectie in Rotterdam. Weekend Klussen verzorgt lekdetectie met vochtmeter, warmtebeeldcamera en moderne technieken in Rotterdam. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekdetectieRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekdetectieContent
        location="Rotterdam"
        title="Lekdetectie Rotterdam"
        description="Weekend Klussen is uw specialist voor lekdetectie in Rotterdam. Wij gebruiken moderne detectietechnieken om lekkages snel en nauwkeurig te lokaliseren, zonder onnodige sloopwerkzaamheden in Rotterdam en omgeving."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse']}
      />
      <Footer />
    </main>
  );
}

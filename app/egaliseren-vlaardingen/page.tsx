import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EgaliserenContent } from '@/components/pages/EgaliserenContent';

export const metadata: Metadata = {
  title: 'Egaliseren Vlaardingen | Weekend Klussen Vloeren Egaliseren Vlaardingen',
  description:
    'Professioneel vloeren egaliseren in Vlaardingen. Weekend Klussen verzorgt egaliseren met egaline voor betonvloeren, houten vloeren en vloerverwarming in Vlaardingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function EgaliserenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <EgaliserenContent
        location="Vlaardingen"
        title="Egaliseren Vlaardingen"
        description="Weekend Klussen is uw specialist voor vloeren egaliseren in Vlaardingen. Wij verzorgen professioneel egaliseren met hoogwaardige egaline voor een perfect vlakke ondergrond in Vlaardingen en omgeving."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

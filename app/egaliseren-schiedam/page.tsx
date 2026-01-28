import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EgaliserenContent } from '@/components/pages/EgaliserenContent';

export const metadata: Metadata = {
  title: 'Egaliseren Schiedam | Weekend Klussen Vloeren Egaliseren Schiedam',
  description:
    'Professioneel vloeren egaliseren in Schiedam. Weekend Klussen verzorgt egaliseren met egaline voor betonvloeren, houten vloeren en vloerverwarming in Schiedam. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function EgaliserenSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <EgaliserenContent
        location="Schiedam"
        title="Egaliseren Schiedam"
        description="Weekend Klussen is uw specialist voor vloeren egaliseren in Schiedam. Wij verzorgen professioneel egaliseren met hoogwaardige egaline voor een perfect vlakke ondergrond in Schiedam en omgeving."
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

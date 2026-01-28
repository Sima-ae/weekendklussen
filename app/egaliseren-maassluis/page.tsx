import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EgaliserenContent } from '@/components/pages/EgaliserenContent';

export const metadata: Metadata = {
  title: 'Egaliseren Maassluis | Weekend Klussen Vloeren Egaliseren Maassluis',
  description:
    'Professioneel vloeren egaliseren in Maassluis. Weekend Klussen verzorgt egaliseren met egaline voor betonvloeren, houten vloeren en vloerverwarming in Maassluis. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function EgaliserenMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <EgaliserenContent
        location="Maassluis"
        title="Egaliseren Maassluis"
        description="Weekend Klussen is uw specialist voor vloeren egaliseren in Maassluis. Wij verzorgen professioneel egaliseren met hoogwaardige egaline voor een perfect vlakke ondergrond in Maassluis en omgeving."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

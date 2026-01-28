import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EgaliserenContent } from '@/components/pages/EgaliserenContent';

export const metadata: Metadata = {
  title: 'Egaliseren Zoetermeer | Weekend Klussen Vloeren Egaliseren Zoetermeer',
  description:
    'Professioneel vloeren egaliseren in Zoetermeer. Weekend Klussen verzorgt egaliseren met egaline voor betonvloeren, houten vloeren en vloerverwarming in Zoetermeer. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function EgaliserenZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <EgaliserenContent
        location="Zoetermeer"
        title="Egaliseren Zoetermeer"
        description="Weekend Klussen is uw specialist voor vloeren egaliseren in Zoetermeer. Wij verzorgen professioneel egaliseren met hoogwaardige egaline voor een perfect vlakke ondergrond in Zoetermeer en omgeving."
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp']}
      />
      <Footer />
    </main>
  );
}

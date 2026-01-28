import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EgaliserenContent } from '@/components/pages/EgaliserenContent';

export const metadata: Metadata = {
  title: 'Egaliseren Den Haag | Weekend Klussen Vloeren Egaliseren Den Haag',
  description:
    'Professioneel vloeren egaliseren in Den Haag. Weekend Klussen verzorgt egaliseren met egaline voor betonvloeren, houten vloeren en vloerverwarming in Den Haag. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function EgaliserenDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <EgaliserenContent
        location="Den Haag"
        title="Egaliseren Den Haag"
        description="Weekend Klussen is uw specialist voor vloeren egaliseren in Den Haag. Wij verzorgen professioneel egaliseren met hoogwaardige egaline voor een perfect vlakke ondergrond in Den Haag en omgeving."
        nearbyCities={['Rijswijk', 'Delft', 'Zoetermeer', 'Leiden', 'Voorburg']}
      />
      <Footer />
    </main>
  );
}

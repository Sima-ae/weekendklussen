import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EgaliserenContent } from '@/components/pages/EgaliserenContent';

export const metadata: Metadata = {
  title: 'Egaliseren Dordrecht | Weekend Klussen Vloeren Egaliseren Dordrecht',
  description:
    'Professioneel vloeren egaliseren in Dordrecht. Weekend Klussen verzorgt egaliseren met egaline voor betonvloeren, houten vloeren en vloerverwarming in Dordrecht. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function EgaliserenDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <EgaliserenContent
        location="Dordrecht"
        title="Egaliseren Dordrecht"
        description="Weekend Klussen is uw specialist voor vloeren egaliseren in Dordrecht. Wij verzorgen professioneel egaliseren met hoogwaardige egaline voor een perfect vlakke ondergrond in Dordrecht en omgeving."
        nearbyCities={['Rotterdam', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht', 'Gorinchem']}
      />
      <Footer />
    </main>
  );
}

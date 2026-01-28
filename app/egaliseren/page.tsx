import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EgaliserenContent } from '@/components/pages/EgaliserenContent';

export const metadata: Metadata = {
  title: 'Egaliseren | Weekend Klussen Vloeren Egaliseren Specialist',
  description:
    'Professioneel vloeren egaliseren in Zuid-Holland. Weekend Klussen verzorgt egaliseren met egaline voor betonvloeren, houten vloeren en vloerverwarming. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function EgaliserenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <EgaliserenContent
        location="Zuid-Holland"
        title="Egaliseren"
        description="Weekend Klussen is uw specialist voor vloeren egaliseren in Zuid-Holland. Wij verzorgen professioneel egaliseren met hoogwaardige egaline voor een perfect vlakke ondergrond."
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Leiden', 'Dordrecht', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn']}
      />
      <Footer />
    </main>
  );
}

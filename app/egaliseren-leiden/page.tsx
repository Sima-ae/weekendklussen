import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EgaliserenContent } from '@/components/pages/EgaliserenContent';

export const metadata: Metadata = {
  title: 'Egaliseren Leiden | Weekend Klussen Vloeren Egaliseren Leiden',
  description:
    'Professioneel vloeren egaliseren in Leiden. Weekend Klussen verzorgt egaliseren met egaline voor betonvloeren, houten vloeren en vloerverwarming in Leiden. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function EgaliserenLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <EgaliserenContent
        location="Leiden"
        title="Egaliseren Leiden"
        description="Weekend Klussen is uw specialist voor vloeren egaliseren in Leiden. Wij verzorgen professioneel egaliseren met hoogwaardige egaline voor een perfect vlakke ondergrond in Leiden en omgeving."
        nearbyCities={['Den Haag', 'Zoetermeer', 'Alphen aan den Rijn', 'Katwijk', 'Oegstgeest']}
      />
      <Footer />
    </main>
  );
}

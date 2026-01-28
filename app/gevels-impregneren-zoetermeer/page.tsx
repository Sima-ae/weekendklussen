import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GevelsImpregnerenContent } from '@/components/pages/GevelsImpregnerenContent';

export const metadata: Metadata = {
  title: 'Gevels Impregneren Zoetermeer | Weekend Klussen Gevelimpregnatie Zoetermeer',
  description:
    'Professioneel gevels impregneren in Zoetermeer. Weekend Klussen verzorgt gevelimpregnatie voor bakstenen, beton en natuursteen gevels in Zoetermeer. Bescherming tegen vocht en weersinvloeden. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function GevelsImpregnerenZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <GevelsImpregnerenContent
        location="Zoetermeer"
        title="Gevels Impregneren Zoetermeer"
        description="Weekend Klussen is uw specialist voor gevels impregneren in Zoetermeer. Wij verzorgen professionele gevelimpregnatie met hoogwaardige impregneermiddelen voor optimale bescherming tegen vocht en weersinvloeden in Zoetermeer en omgeving."
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp']}
      />
      <Footer />
    </main>
  );
}

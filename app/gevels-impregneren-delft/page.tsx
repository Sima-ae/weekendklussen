import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GevelsImpregnerenContent } from '@/components/pages/GevelsImpregnerenContent';

export const metadata: Metadata = {
  title: 'Gevels Impregneren Delft | Weekend Klussen Gevelimpregnatie Delft',
  description:
    'Professioneel gevels impregneren in Delft. Weekend Klussen verzorgt gevelimpregnatie voor bakstenen, beton en natuursteen gevels in Delft. Bescherming tegen vocht en weersinvloeden. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function GevelsImpregnerenDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <GevelsImpregnerenContent
        location="Delft"
        title="Gevels Impregneren Delft"
        description="Weekend Klussen is uw specialist voor gevels impregneren in Delft. Wij verzorgen professionele gevelimpregnatie met hoogwaardige impregneermiddelen voor optimale bescherming tegen vocht en weersinvloeden in Delft en omgeving."
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer']}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GevelsImpregnerenContent } from '@/components/pages/GevelsImpregnerenContent';

export const metadata: Metadata = {
  title: 'Gevels Impregneren Leiden | Weekend Klussen Gevelimpregnatie Leiden',
  description:
    'Professioneel gevels impregneren in Leiden. Weekend Klussen verzorgt gevelimpregnatie voor bakstenen, beton en natuursteen gevels in Leiden. Bescherming tegen vocht en weersinvloeden. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function GevelsImpregnerenLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <GevelsImpregnerenContent
        location="Leiden"
        title="Gevels Impregneren Leiden"
        description="Weekend Klussen is uw specialist voor gevels impregneren in Leiden. Wij verzorgen professionele gevelimpregnatie met hoogwaardige impregneermiddelen voor optimale bescherming tegen vocht en weersinvloeden in Leiden en omgeving."
        nearbyCities={['Den Haag', 'Zoetermeer', 'Alphen aan den Rijn', 'Katwijk', 'Oegstgeest']}
      />
      <Footer />
    </main>
  );
}

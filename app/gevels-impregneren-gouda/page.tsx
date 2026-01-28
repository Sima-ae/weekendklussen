import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GevelsImpregnerenContent } from '@/components/pages/GevelsImpregnerenContent';

export const metadata: Metadata = {
  title: 'Gevels Impregneren Gouda | Weekend Klussen Gevelimpregnatie Gouda',
  description:
    'Professioneel gevels impregneren in Gouda. Weekend Klussen verzorgt gevelimpregnatie voor bakstenen, beton en natuursteen gevels in Gouda. Bescherming tegen vocht en weersinvloeden. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function GevelsImpregnerenGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <GevelsImpregnerenContent
        location="Gouda"
        title="Gevels Impregneren Gouda"
        description="Weekend Klussen is uw specialist voor gevels impregneren in Gouda. Wij verzorgen professionele gevelimpregnatie met hoogwaardige impregneermiddelen voor optimale bescherming tegen vocht en weersinvloeden in Gouda en omgeving."
        nearbyCities={['Zoetermeer', 'Rotterdam', 'Utrecht', 'Woerden', 'Waddinxveen']}
      />
      <Footer />
    </main>
  );
}

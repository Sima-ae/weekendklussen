import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GevelsImpregnerenContent } from '@/components/pages/GevelsImpregnerenContent';

export const metadata: Metadata = {
  title: 'Gevels Impregneren Alphen aan den Rijn | Weekend Klussen Gevelimpregnatie Alphen aan den Rijn',
  description:
    'Professioneel gevels impregneren in Alphen aan den Rijn. Weekend Klussen verzorgt gevelimpregnatie voor bakstenen, beton en natuursteen gevels in Alphen aan den Rijn. Bescherming tegen vocht en weersinvloeden. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function GevelsImpregnerenAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <GevelsImpregnerenContent
        location="Alphen aan den Rijn"
        title="Gevels Impregneren Alphen aan den Rijn"
        description="Weekend Klussen is uw specialist voor gevels impregneren in Alphen aan den Rijn. Wij verzorgen professionele gevelimpregnatie met hoogwaardige impregneermiddelen voor optimale bescherming tegen vocht en weersinvloeden in Alphen aan den Rijn en omgeving."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Waddinxveen']}
      />
      <Footer />
    </main>
  );
}

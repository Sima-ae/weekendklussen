import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GevelsImpregnerenContent } from '@/components/pages/GevelsImpregnerenContent';

export const metadata: Metadata = {
  title: 'Gevels Impregneren Vlaardingen | Weekend Klussen Gevelimpregnatie Vlaardingen',
  description:
    'Professioneel gevels impregneren in Vlaardingen. Weekend Klussen verzorgt gevelimpregnatie voor bakstenen, beton en natuursteen gevels in Vlaardingen. Bescherming tegen vocht en weersinvloeden. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function GevelsImpregnerenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <GevelsImpregnerenContent
        location="Vlaardingen"
        title="Gevels Impregneren Vlaardingen"
        description="Weekend Klussen is uw specialist voor gevels impregneren in Vlaardingen. Wij verzorgen professionele gevelimpregnatie met hoogwaardige impregneermiddelen voor optimale bescherming tegen vocht en weersinvloeden in Vlaardingen en omgeving."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

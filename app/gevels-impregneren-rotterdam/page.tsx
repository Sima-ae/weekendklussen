import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GevelsImpregnerenContent } from '@/components/pages/GevelsImpregnerenContent';

export const metadata: Metadata = {
  title: 'Gevels Impregneren Rotterdam | Weekend Klussen Gevelimpregnatie Rotterdam',
  description:
    'Professioneel gevels impregneren in Rotterdam. Weekend Klussen verzorgt gevelimpregnatie voor bakstenen, beton en natuursteen gevels in Rotterdam. Bescherming tegen vocht en weersinvloeden. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function GevelsImpregnerenRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <GevelsImpregnerenContent
        location="Rotterdam"
        title="Gevels Impregneren Rotterdam"
        description="Weekend Klussen is uw specialist voor gevels impregneren in Rotterdam. Wij verzorgen professionele gevelimpregnatie met hoogwaardige impregneermiddelen voor optimale bescherming tegen vocht en weersinvloeden in Rotterdam en omgeving."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse']}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenbladAfkittenContent } from '@/components/pages/KeukenbladAfkittenContent';

export const metadata: Metadata = {
  title: 'Keukenblad Afkitten Leiden | Weekend Klussen Keukenblad Afkitten Leiden',
  description:
    'Professioneel keukenblad afkitten in Leiden. Weekend Klussen verzorgt keukenblad afkitten, kit vervangen en voegwerk voor een perfecte afdichting in Leiden. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenbladAfkittenLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenbladAfkittenContent
        location="Leiden"
        title="Keukenblad Afkitten Leiden"
        description="Weekend Klussen is uw specialist voor keukenblad afkitten in Leiden. Wij verzorgen professioneel keukenblad afkitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Leiden en omgeving."
        nearbyCities={['Den Haag', 'Zoetermeer', 'Alphen aan den Rijn', 'Katwijk', 'Oegstgeest']}
      />
      <Footer />
    </main>
  );
}

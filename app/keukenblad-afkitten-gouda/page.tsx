import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenbladAfkittenContent } from '@/components/pages/KeukenbladAfkittenContent';

export const metadata: Metadata = {
  title: 'Keukenblad Afkitten Gouda | Weekend Klussen Keukenblad Afkitten Gouda',
  description:
    'Professioneel keukenblad afkitten in Gouda. Weekend Klussen verzorgt keukenblad afkitten, kit vervangen en voegwerk voor een perfecte afdichting in Gouda. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenbladAfkittenGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenbladAfkittenContent
        location="Gouda"
        title="Keukenblad Afkitten Gouda"
        description="Weekend Klussen is uw specialist voor keukenblad afkitten in Gouda. Wij verzorgen professioneel keukenblad afkitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Gouda en omgeving."
        nearbyCities={['Zoetermeer', 'Rotterdam', 'Utrecht', 'Woerden', 'Waddinxveen']}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenbladAfkittenContent } from '@/components/pages/KeukenbladAfkittenContent';

export const metadata: Metadata = {
  title: 'Keukenblad Afkitten Schiedam | Weekend Klussen Keukenblad Afkitten Schiedam',
  description:
    'Professioneel keukenblad afkitten in Schiedam. Weekend Klussen verzorgt keukenblad afkitten, kit vervangen en voegwerk voor een perfecte afdichting in Schiedam. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenbladAfkittenSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenbladAfkittenContent
        location="Schiedam"
        title="Keukenblad Afkitten Schiedam"
        description="Weekend Klussen is uw specialist voor keukenblad afkitten in Schiedam. Wij verzorgen professioneel keukenblad afkitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Schiedam en omgeving."
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenbladAfkittenContent } from '@/components/pages/KeukenbladAfkittenContent';

export const metadata: Metadata = {
  title: 'Keukenblad Afkitten Vlaardingen | Weekend Klussen Keukenblad Afkitten Vlaardingen',
  description:
    'Professioneel keukenblad afkitten in Vlaardingen. Weekend Klussen verzorgt keukenblad afkitten, kit vervangen en voegwerk voor een perfecte afdichting in Vlaardingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenbladAfkittenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenbladAfkittenContent
        location="Vlaardingen"
        title="Keukenblad Afkitten Vlaardingen"
        description="Weekend Klussen is uw specialist voor keukenblad afkitten in Vlaardingen. Wij verzorgen professioneel keukenblad afkitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Vlaardingen en omgeving."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

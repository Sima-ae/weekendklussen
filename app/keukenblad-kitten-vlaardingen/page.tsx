import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenbladKittenContent } from '@/components/pages/KeukenbladKittenContent';

export const metadata: Metadata = {
  title: 'Keukenblad Kitten Vlaardingen | Weekend Klussen Keukenblad Kitten Vlaardingen',
  description:
    'Professioneel keukenblad kitten in Vlaardingen. Weekend Klussen verzorgt keukenblad kitten, kit vervangen en voegwerk voor een perfecte afdichting in Vlaardingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenbladKittenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenbladKittenContent
        location="Vlaardingen"
        title="Keukenblad Kitten Vlaardingen"
        description="Weekend Klussen is uw specialist voor keukenblad kitten in Vlaardingen. Wij verzorgen professioneel keukenblad kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Vlaardingen en omgeving."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

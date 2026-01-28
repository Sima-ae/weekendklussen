import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenbladKittenContent } from '@/components/pages/KeukenbladKittenContent';

export const metadata: Metadata = {
  title: 'Keukenblad Kitten Schiedam | Weekend Klussen Keukenblad Kitten Schiedam',
  description:
    'Professioneel keukenblad kitten in Schiedam. Weekend Klussen verzorgt keukenblad kitten, kit vervangen en voegwerk voor een perfecte afdichting in Schiedam. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenbladKittenSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenbladKittenContent
        location="Schiedam"
        title="Keukenblad Kitten Schiedam"
        description="Weekend Klussen is uw specialist voor keukenblad kitten in Schiedam. Wij verzorgen professioneel keukenblad kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Schiedam en omgeving."
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

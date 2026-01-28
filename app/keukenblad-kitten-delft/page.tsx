import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenbladKittenContent } from '@/components/pages/KeukenbladKittenContent';

export const metadata: Metadata = {
  title: 'Keukenblad Kitten Delft | Weekend Klussen Keukenblad Kitten Delft',
  description:
    'Professioneel keukenblad kitten in Delft. Weekend Klussen verzorgt keukenblad kitten, kit vervangen en voegwerk voor een perfecte afdichting in Delft. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenbladKittenDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenbladKittenContent
        location="Delft"
        title="Keukenblad Kitten Delft"
        description="Weekend Klussen is uw specialist voor keukenblad kitten in Delft. Wij verzorgen professioneel keukenblad kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Delft en omgeving."
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer']}
      />
      <Footer />
    </main>
  );
}

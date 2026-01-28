import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenbladKittenContent } from '@/components/pages/KeukenbladKittenContent';

export const metadata: Metadata = {
  title: 'Keukenblad Kitten | Weekend Klussen Keukenblad Kitten Specialist',
  description:
    'Professioneel keukenblad kitten in Zuid-Holland. Weekend Klussen verzorgt keukenblad kitten, kit vervangen en voegwerk voor een perfecte afdichting. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenbladKittenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenbladKittenContent
        location="Zuid-Holland"
        title="Keukenblad Kitten"
        description="Weekend Klussen is uw specialist voor keukenblad kitten in Zuid-Holland. Wij verzorgen professioneel keukenblad kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken."
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Leiden', 'Dordrecht', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn']}
      />
      <Footer />
    </main>
  );
}

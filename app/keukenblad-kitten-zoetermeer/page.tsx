import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenbladKittenContent } from '@/components/pages/KeukenbladKittenContent';

export const metadata: Metadata = {
  title: 'Keukenblad Kitten Zoetermeer | Weekend Klussen Keukenblad Kitten Zoetermeer',
  description:
    'Professioneel keukenblad kitten in Zoetermeer. Weekend Klussen verzorgt keukenblad kitten, kit vervangen en voegwerk voor een perfecte afdichting in Zoetermeer. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenbladKittenZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenbladKittenContent
        location="Zoetermeer"
        title="Keukenblad Kitten Zoetermeer"
        description="Weekend Klussen is uw specialist voor keukenblad kitten in Zoetermeer. Wij verzorgen professioneel keukenblad kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Zoetermeer en omgeving."
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp']}
      />
      <Footer />
    </main>
  );
}

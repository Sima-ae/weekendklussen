import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenbladKittenContent } from '@/components/pages/KeukenbladKittenContent';

export const metadata: Metadata = {
  title: 'Keukenblad Kitten Dordrecht | Weekend Klussen Keukenblad Kitten Dordrecht',
  description:
    'Professioneel keukenblad kitten in Dordrecht. Weekend Klussen verzorgt keukenblad kitten, kit vervangen en voegwerk voor een perfecte afdichting in Dordrecht. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenbladKittenDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenbladKittenContent
        location="Dordrecht"
        title="Keukenblad Kitten Dordrecht"
        description="Weekend Klussen is uw specialist voor keukenblad kitten in Dordrecht. Wij verzorgen professioneel keukenblad kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Dordrecht en omgeving."
        nearbyCities={['Rotterdam', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht', 'Gorinchem']}
      />
      <Footer />
    </main>
  );
}

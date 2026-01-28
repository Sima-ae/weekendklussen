import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenbladAfkittenContent } from '@/components/pages/KeukenbladAfkittenContent';

export const metadata: Metadata = {
  title: 'Keukenblad Afkitten Dordrecht | Weekend Klussen Keukenblad Afkitten Dordrecht',
  description:
    'Professioneel keukenblad afkitten in Dordrecht. Weekend Klussen verzorgt keukenblad afkitten, kit vervangen en voegwerk voor een perfecte afdichting in Dordrecht. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenbladAfkittenDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenbladAfkittenContent
        location="Dordrecht"
        title="Keukenblad Afkitten Dordrecht"
        description="Weekend Klussen is uw specialist voor keukenblad afkitten in Dordrecht. Wij verzorgen professioneel keukenblad afkitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Dordrecht en omgeving."
        nearbyCities={['Rotterdam', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht', 'Gorinchem']}
      />
      <Footer />
    </main>
  );
}

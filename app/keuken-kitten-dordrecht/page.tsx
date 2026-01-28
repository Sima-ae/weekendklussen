import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenKittenContent } from '@/components/pages/KeukenKittenContent';

export const metadata: Metadata = {
  title: 'Keuken Kitten Dordrecht | Weekend Klussen Keuken Kitten Dordrecht',
  description:
    'Professioneel keuken kitten in Dordrecht. Weekend Klussen verzorgt keuken kitten, kit vervangen en voegwerk voor een perfecte afdichting in Dordrecht. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenKittenDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenKittenContent
        location="Dordrecht"
        title="Keuken Kitten Dordrecht"
        description="Weekend Klussen is uw specialist voor keuken kitten in Dordrecht. Wij verzorgen professioneel keuken kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Dordrecht en omgeving."
        nearbyCities={['Rotterdam', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht', 'Gorinchem']}
      />
      <Footer />
    </main>
  );
}

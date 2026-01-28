import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenAfkittenContent } from '@/components/pages/KeukenAfkittenContent';

export const metadata: Metadata = {
  title: 'Keuken Afkitten Dordrecht | Weekend Klussen Keuken Afkitten Dordrecht',
  description:
    'Professioneel keuken afkitten in Dordrecht. Weekend Klussen verzorgt keuken afkitten, kit vervangen en voegwerk voor een perfecte afdichting in Dordrecht. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenAfkittenDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenAfkittenContent
        location="Dordrecht"
        title="Keuken Afkitten Dordrecht"
        description="Weekend Klussen is uw specialist voor keuken afkitten in Dordrecht. Wij verzorgen professioneel keuken afkitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Dordrecht en omgeving."
        nearbyCities={['Rotterdam', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht', 'Gorinchem']}
      />
      <Footer />
    </main>
  );
}

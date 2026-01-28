import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenAfkittenContent } from '@/components/pages/KeukenAfkittenContent';

export const metadata: Metadata = {
  title: 'Keuken Afkitten Den Haag | Weekend Klussen Keuken Afkitten Den Haag',
  description:
    'Professioneel keuken afkitten in Den Haag. Weekend Klussen verzorgt keuken afkitten, kit vervangen en voegwerk voor een perfecte afdichting in Den Haag. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenAfkittenDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenAfkittenContent
        location="Den Haag"
        title="Keuken Afkitten Den Haag"
        description="Weekend Klussen is uw specialist voor keuken afkitten in Den Haag. Wij verzorgen professioneel keuken afkitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Den Haag en omgeving."
        nearbyCities={['Rijswijk', 'Delft', 'Zoetermeer', 'Leiden', 'Voorburg']}
      />
      <Footer />
    </main>
  );
}

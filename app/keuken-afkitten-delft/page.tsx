import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenAfkittenContent } from '@/components/pages/KeukenAfkittenContent';

export const metadata: Metadata = {
  title: 'Keuken Afkitten Delft | Weekend Klussen Keuken Afkitten Delft',
  description:
    'Professioneel keuken afkitten in Delft. Weekend Klussen verzorgt keuken afkitten, kit vervangen en voegwerk voor een perfecte afdichting in Delft. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenAfkittenDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenAfkittenContent
        location="Delft"
        title="Keuken Afkitten Delft"
        description="Weekend Klussen is uw specialist voor keuken afkitten in Delft. Wij verzorgen professioneel keuken afkitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Delft en omgeving."
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer']}
      />
      <Footer />
    </main>
  );
}

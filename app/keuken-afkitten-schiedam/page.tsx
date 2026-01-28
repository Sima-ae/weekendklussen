import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenAfkittenContent } from '@/components/pages/KeukenAfkittenContent';

export const metadata: Metadata = {
  title: 'Keuken Afkitten Schiedam | Weekend Klussen Keuken Afkitten Schiedam',
  description:
    'Professioneel keuken afkitten in Schiedam. Weekend Klussen verzorgt keuken afkitten, kit vervangen en voegwerk voor een perfecte afdichting in Schiedam. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenAfkittenSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenAfkittenContent
        location="Schiedam"
        title="Keuken Afkitten Schiedam"
        description="Weekend Klussen is uw specialist voor keuken afkitten in Schiedam. Wij verzorgen professioneel keuken afkitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Schiedam en omgeving."
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

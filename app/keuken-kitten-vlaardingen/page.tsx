import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenKittenContent } from '@/components/pages/KeukenKittenContent';

export const metadata: Metadata = {
  title: 'Keuken Kitten Vlaardingen | Weekend Klussen Keuken Kitten Vlaardingen',
  description:
    'Professioneel keuken kitten in Vlaardingen. Weekend Klussen verzorgt keuken kitten, kit vervangen en voegwerk voor een perfecte afdichting in Vlaardingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenKittenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenKittenContent
        location="Vlaardingen"
        title="Keuken Kitten Vlaardingen"
        description="Weekend Klussen is uw specialist voor keuken kitten in Vlaardingen. Wij verzorgen professioneel keuken kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Vlaardingen en omgeving."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

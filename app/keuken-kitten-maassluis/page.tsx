import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenKittenContent } from '@/components/pages/KeukenKittenContent';

export const metadata: Metadata = {
  title: 'Keuken Kitten Maassluis | Weekend Klussen Keuken Kitten Maassluis',
  description:
    'Professioneel keuken kitten in Maassluis. Weekend Klussen verzorgt keuken kitten, kit vervangen en voegwerk voor een perfecte afdichting in Maassluis. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenKittenMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenKittenContent
        location="Maassluis"
        title="Keuken Kitten Maassluis"
        description="Weekend Klussen is uw specialist voor keuken kitten in Maassluis. Wij verzorgen professioneel keuken kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Maassluis en omgeving."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

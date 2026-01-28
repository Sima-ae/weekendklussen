import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenbladKittenContent } from '@/components/pages/KeukenbladKittenContent';

export const metadata: Metadata = {
  title: 'Keukenblad Kitten Maassluis | Weekend Klussen Keukenblad Kitten Maassluis',
  description:
    'Professioneel keukenblad kitten in Maassluis. Weekend Klussen verzorgt keukenblad kitten, kit vervangen en voegwerk voor een perfecte afdichting in Maassluis. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenbladKittenMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenbladKittenContent
        location="Maassluis"
        title="Keukenblad Kitten Maassluis"
        description="Weekend Klussen is uw specialist voor keukenblad kitten in Maassluis. Wij verzorgen professioneel keukenblad kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Maassluis en omgeving."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenKittenContent } from '@/components/pages/KeukenKittenContent';

export const metadata: Metadata = {
  title: 'Keuken Kitten Zoetermeer | Weekend Klussen Keuken Kitten Zoetermeer',
  description:
    'Professioneel keuken kitten in Zoetermeer. Weekend Klussen verzorgt keuken kitten, kit vervangen en voegwerk voor een perfecte afdichting in Zoetermeer. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenKittenZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenKittenContent
        location="Zoetermeer"
        title="Keuken Kitten Zoetermeer"
        description="Weekend Klussen is uw specialist voor keuken kitten in Zoetermeer. Wij verzorgen professioneel keuken kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Zoetermeer en omgeving."
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp']}
      />
      <Footer />
    </main>
  );
}

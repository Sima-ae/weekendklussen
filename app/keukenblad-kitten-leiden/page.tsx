import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenbladKittenContent } from '@/components/pages/KeukenbladKittenContent';

export const metadata: Metadata = {
  title: 'Keukenblad Kitten Leiden | Weekend Klussen Keukenblad Kitten Leiden',
  description:
    'Professioneel keukenblad kitten in Leiden. Weekend Klussen verzorgt keukenblad kitten, kit vervangen en voegwerk voor een perfecte afdichting in Leiden. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenbladKittenLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenbladKittenContent
        location="Leiden"
        title="Keukenblad Kitten Leiden"
        description="Weekend Klussen is uw specialist voor keukenblad kitten in Leiden. Wij verzorgen professioneel keukenblad kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Leiden en omgeving."
        nearbyCities={['Den Haag', 'Zoetermeer', 'Alphen aan den Rijn', 'Katwijk', 'Oegstgeest']}
      />
      <Footer />
    </main>
  );
}

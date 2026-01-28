import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenbladKittenContent } from '@/components/pages/KeukenbladKittenContent';

export const metadata: Metadata = {
  title: 'Keukenblad Kitten Alphen aan den Rijn | Weekend Klussen Keukenblad Kitten Alphen aan den Rijn',
  description:
    'Professioneel keukenblad kitten in Alphen aan den Rijn. Weekend Klussen verzorgt keukenblad kitten, kit vervangen en voegwerk voor een perfecte afdichting in Alphen aan den Rijn. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenbladKittenAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenbladKittenContent
        location="Alphen aan den Rijn"
        title="Keukenblad Kitten Alphen aan den Rijn"
        description="Weekend Klussen is uw specialist voor keukenblad kitten in Alphen aan den Rijn. Wij verzorgen professioneel keukenblad kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Alphen aan den Rijn en omgeving."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Waddinxveen']}
      />
      <Footer />
    </main>
  );
}

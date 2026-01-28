import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenKittenContent } from '@/components/pages/KeukenKittenContent';

export const metadata: Metadata = {
  title: 'Keuken Kitten Alphen aan den Rijn | Weekend Klussen Keuken Kitten Alphen aan den Rijn',
  description:
    'Professioneel keuken kitten in Alphen aan den Rijn. Weekend Klussen verzorgt keuken kitten, kit vervangen en voegwerk voor een perfecte afdichting in Alphen aan den Rijn. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenKittenAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenKittenContent
        location="Alphen aan den Rijn"
        title="Keuken Kitten Alphen aan den Rijn"
        description="Weekend Klussen is uw specialist voor keuken kitten in Alphen aan den Rijn. Wij verzorgen professioneel keuken kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Alphen aan den Rijn en omgeving."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Waddinxveen']}
      />
      <Footer />
    </main>
  );
}

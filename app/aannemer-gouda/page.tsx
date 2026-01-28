import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aannemer Gouda | Weekend Klussen Bouwbedrijf Gouda',
  description:
    'Aannemer voor renovatie en verbouwing in Zuid-Holland en omgeving. Aannemer Gouda - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Gouda. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function AannemerGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Gouda"
        title="Aannemer Gouda"
        description="Weekend Klussen is uw betrouwbare aannemer in Gouda. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Gouda en omgeving."
        nearbyCities={['Rotterdam', 'Zoetermeer', 'Alphen aan den Rijn', 'Utrecht', 'Woerden']}
      />
      <Footer />
    </main>
  );
}

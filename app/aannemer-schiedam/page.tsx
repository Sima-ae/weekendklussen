import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aannemer Schiedam | Weekend Klussen Bouwbedrijf Schiedam',
  description:
    'Aannemer voor renovatie en verbouwing in Zuid-Holland en omgeving. Aannemer Schiedam - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Schiedam. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function AannemerSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Schiedam"
        title="Aannemer Schiedam"
        description="Weekend Klussen is uw betrouwbare aannemer in Schiedam. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Schiedam en omgeving."
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Capelle aan den IJssel']}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aannemer Capelle aan den IJssel | Weekend Klussen Bouwbedrijf',
  description:
    'Aannemer voor renovatie en verbouwing in Zuid-Holland en omgeving. Aannemer Capelle aan den IJssel - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Capelle aan den IJssel. Vaste prijzen, garantie. Gratis offerte.',
};

export default function AannemerCapelleAanDenIjsselPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Capelle aan den IJssel"
        title="Aannemer Capelle aan den IJssel"
        description="Weekend Klussen is uw betrouwbare aannemer in Capelle aan den IJssel. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Capelle aan den IJssel en omgeving."
        nearbyCities={['Rotterdam', 'Ridderkerk', 'Gouda', 'Schiedam', 'Zoetermeer']}
      />
      <Footer />
    </main>
  );
}

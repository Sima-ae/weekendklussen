import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aannemer Vlaardingen | Weekend Klussen Bouwbedrijf Vlaardingen',
  description:
    'Aannemer voor renovatie en verbouwing in Zuid-Holland en omgeving. Aannemer Vlaardingen - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Vlaardingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function AannemerVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Vlaardingen"
        title="Aannemer Vlaardingen"
        description="Weekend Klussen is uw betrouwbare aannemer in Vlaardingen. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Vlaardingen en omgeving met vaste prijzen en garantie."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Westland', 'Delft']}
      />
      <Footer />
    </main>
  );
}

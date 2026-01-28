import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden Vlaardingen | Weekend Klussen Bouwbedrijf Vlaardingen',
  description:
    'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Vaklieden Vlaardingen - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Vlaardingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function VakliedenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Vlaardingen"
        title="Vaklieden Vlaardingen"
        description="Weekend Klussen is uw betrouwbare vaklieden in Vlaardingen. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Vlaardingen en omgeving met vaste prijzen en garantie."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Westland', 'Delft']}
      />
      <Footer />
    </main>
  );
}

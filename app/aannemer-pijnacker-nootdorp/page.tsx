import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden Pijnacker-Nootdorp | Weekend Klussen Bouwbedrijf',
  description:
    'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Vaklieden Pijnacker-Nootdorp - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Pijnacker-Nootdorp. Vaste prijzen, garantie. Gratis offerte.',
};

export default function VakliedenPijnackerNootdorpPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Pijnacker-Nootdorp"
        title="Vaklieden Pijnacker-Nootdorp"
        description="Weekend Klussen is uw betrouwbare vaklieden in Pijnacker-Nootdorp. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Pijnacker-Nootdorp en omgeving."
        nearbyCities={['Delft', 'Den Haag', 'Zoetermeer', 'Rotterdam', 'Voorburg']}
      />
      <Footer />
    </main>
  );
}

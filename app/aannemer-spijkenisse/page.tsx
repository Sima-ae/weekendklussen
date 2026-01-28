import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden Spijkenisse | Weekend Klussen Bouwbedrijf Spijkenisse',
  description:
    'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Vaklieden Spijkenisse - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Spijkenisse. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function VakliedenSpijkenissePage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Spijkenisse"
        title="Vaklieden Spijkenisse"
        description="Weekend Klussen is uw betrouwbare vaklieden in Spijkenisse. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Spijkenisse en omgeving."
        nearbyCities={['Rotterdam', 'Hellevoetsluis', 'Barendrecht', 'Ridderkerk', 'Hoogvliet']}
      />
      <Footer />
    </main>
  );
}

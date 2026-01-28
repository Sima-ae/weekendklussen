import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden Ridderkerk | Weekend Klussen Bouwbedrijf Ridderkerk',
  description:
    'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Vaklieden Ridderkerk - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Ridderkerk. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function VakliedenRidderkerkPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Ridderkerk"
        title="Vaklieden Ridderkerk"
        description="Weekend Klussen is uw betrouwbare vaklieden in Ridderkerk. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Ridderkerk en omgeving."
        nearbyCities={['Rotterdam', 'Barendrecht', 'Dordrecht', 'Capelle aan den IJssel', 'Gouda']}
      />
      <Footer />
    </main>
  );
}

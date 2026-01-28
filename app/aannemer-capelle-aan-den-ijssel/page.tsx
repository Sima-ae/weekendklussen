import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden Capelle aan den IJssel | Weekend Klussen Bouwbedrijf',
  description:
    'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Vaklieden Capelle aan den IJssel - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Capelle aan den IJssel. Vaste prijzen, garantie. Gratis offerte.',
};

export default function VakliedenCapelleAanDenIjsselPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Capelle aan den IJssel"
        title="Vaklieden Capelle aan den IJssel"
        description="Weekend Klussen is uw betrouwbare vaklieden in Capelle aan den IJssel. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Capelle aan den IJssel en omgeving."
        nearbyCities={['Rotterdam', 'Ridderkerk', 'Gouda', 'Schiedam', 'Zoetermeer']}
      />
      <Footer />
    </main>
  );
}

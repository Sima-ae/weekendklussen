import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden Barendrecht | Weekend Klussen Bouwbedrijf Barendrecht',
  description:
    'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Vaklieden Barendrecht - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Barendrecht. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function VakliedenBarendrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Barendrecht"
        title="Vaklieden Barendrecht"
        description="Weekend Klussen is uw betrouwbare vaklieden in Barendrecht. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Barendrecht en omgeving met vaste prijzen en garantie."
        nearbyCities={['Rotterdam', 'Ridderkerk', 'Dordrecht', 'Spijkenisse', 'Rhoon']}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden Zoetermeer | Weekend Klussen Bouwbedrijf Zoetermeer',
  description:
    'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Vaklieden Zoetermeer - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Zoetermeer. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function VakliedenZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zoetermeer"
        title="Vaklieden Zoetermeer"
        description="Weekend Klussen is uw betrouwbare vaklieden in Zoetermeer. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Zoetermeer en omgeving met vaste prijzen en garantie."
        nearbyCities={['Den Haag', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Voorburg']}
      />
      <Footer />
    </main>
  );
}

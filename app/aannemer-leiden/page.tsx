import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aannemer Leiden | Weekend Klussen Bouwbedrijf Leiden',
  description:
    'Aannemer voor renovatie en verbouwing in Zuid-Holland en omgeving. Aannemer Leiden - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Leiden. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function AannemerLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Leiden"
        title="Aannemer Leiden"
        description="Weekend Klussen is uw betrouwbare aannemer in Leiden. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Leiden en omgeving met vaste prijzen en garantie."
        nearbyCities={['Katwijk', 'Alphen aan den Rijn', 'Zoetermeer', 'Den Haag', 'Voorburg']}
      />
      <Footer />
    </main>
  );
}

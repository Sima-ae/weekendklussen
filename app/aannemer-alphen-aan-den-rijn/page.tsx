import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden Alphen aan den Rijn | Weekend Klussen Bouwbedrijf',
  description:
    'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Vaklieden Alphen aan den Rijn - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Alphen aan den Rijn. Vaste prijzen, garantie. Gratis offerte.',
};

export default function VakliedenAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Alphen aan den Rijn"
        title="Vaklieden Alphen aan den Rijn"
        description="Weekend Klussen is uw betrouwbare vaklieden in Alphen aan den Rijn. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Alphen aan den Rijn en omgeving."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Waddinxveen']}
      />
      <Footer />
    </main>
  );
}

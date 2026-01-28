import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden regio Alphen aan den Rijn | Weekend Klussen Bouwbedrijf regio Alphen aan den Rijn',
  description:
    'Vaklieden voor renovatie en verbouwing in de regio Alphen aan den Rijn. Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Alphen aan den Rijn en omgeving. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function VakliedenRegioAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="regio Alphen aan den Rijn"
        title="Vaklieden regio Alphen aan den Rijn"
        description="Weekend Klussen is uw betrouwbare vaklieden in de regio Alphen aan den Rijn. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Alphen aan den Rijn en de omliggende gemeenten met jarenlange ervaring, vaste prijzen en garantie."
        nearbyCities={[
          'Alphen aan den Rijn', 'Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 
          'Waddinxveen', 'Nieuwkoop', 'Kaag en Braassem', 'Rijnwoude', 'Boskoop'
        ]}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden regio Gouda | Weekend Klussen Bouwbedrijf regio Gouda',
  description:
    'Vaklieden voor renovatie en verbouwing in de regio Gouda. Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Gouda en omgeving. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function VakliedenRegioGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="regio Gouda"
        title="Vaklieden regio Gouda"
        description="Weekend Klussen is uw betrouwbare vaklieden in de regio Gouda. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Gouda en de omliggende gemeenten met lokale kennis, vaste prijzen en garantie."
        nearbyCities={[
          'Gouda', 'Rotterdam', 'Zoetermeer', 'Alphen aan den Rijn', 'Utrecht', 
          'Woerden', 'Waddinxveen', 'Bodegraven', 'Reeuwijk', 'Oudewater'
        ]}
      />
      <Footer />
    </main>
  );
}

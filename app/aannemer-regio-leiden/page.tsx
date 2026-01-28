import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aannemer regio Leiden | Weekend Klussen Bouwbedrijf regio Leiden',
  description:
    'Aannemer voor renovatie en verbouwing in de regio Leiden. Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Leiden en omgeving. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function AannemerRegioLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="regio Leiden"
        title="Aannemer regio Leiden"
        description="Weekend Klussen is uw betrouwbare aannemer in de regio Leiden. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Leiden en de omliggende gemeenten met jarenlange ervaring, vaste prijzen en garantie."
        nearbyCities={[
          'Leiden', 'Katwijk', 'Alphen aan den Rijn', 'Zoetermeer', 'Den Haag', 
          'Voorburg', 'Wassenaar', 'Oegstgeest', 'Voorschoten', 'Rijnsburg', 'Lisse'
        ]}
      />
      <Footer />
    </main>
  );
}

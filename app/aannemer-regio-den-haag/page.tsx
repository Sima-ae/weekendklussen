import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden regio Den Haag | Weekend Klussen Bouwbedrijf regio Den Haag',
  description:
    'Vaklieden voor renovatie en verbouwing in de regio Den Haag. Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Den Haag en omgeving. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function VakliedenRegioDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="regio Den Haag"
        title="Vaklieden regio Den Haag"
        description="Weekend Klussen is uw betrouwbare vaklieden in de regio Den Haag. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Den Haag en de omliggende gemeenten met lokale kennis, vaste prijzen en garantie."
        nearbyCities={[
          'Den Haag', 'Rijswijk', 'Voorburg', 'Zoetermeer', 'Westland', 
          'Delft', 'Leiden', 'Rotterdam', 'Pijnacker-Nootdorp', 'Wassenaar', 'Scheveningen'
        ]}
      />
      <Footer />
    </main>
  );
}

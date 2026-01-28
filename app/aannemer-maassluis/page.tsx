import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aannemer Maassluis | Weekend Klussen Bouwbedrijf Maassluis',
  description:
    'Aannemer voor renovatie en verbouwing in Zuid-Holland en omgeving. Aannemer Maassluis - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Maassluis. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function AannemerMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Maassluis"
        title="Aannemer Maassluis"
        description="Weekend Klussen is uw betrouwbare aannemer in Maassluis. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Maassluis en omgeving."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Westland', 'Delft']}
      />
      <Footer />
    </main>
  );
}

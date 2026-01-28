import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden Maassluis | Weekend Klussen Bouwbedrijf Maassluis',
  description:
    'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Vaklieden Maassluis - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Maassluis. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function VakliedenMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Maassluis"
        title="Vaklieden Maassluis"
        description="Weekend Klussen is uw betrouwbare vaklieden in Maassluis. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Maassluis en omgeving."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Westland', 'Delft']}
      />
      <Footer />
    </main>
  );
}

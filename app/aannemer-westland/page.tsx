import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden Westland | Weekend Klussen Bouwbedrijf Westland',
  description:
    'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Vaklieden Westland - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Westland. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function VakliedenWestlandPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Westland"
        title="Vaklieden Westland"
        description="Weekend Klussen is uw betrouwbare vaklieden in Westland. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Westland (Naaldwijk, Honselersdijk, Hoek van Holland) en omgeving."
        nearbyCities={['Den Haag', 'Delft', 'Maassluis', 'Rotterdam', 'Vlaardingen']}
      />
      <Footer />
    </main>
  );
}

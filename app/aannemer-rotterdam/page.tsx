import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Vaklieden Rotterdam | Weekend Klussen Bouwbedrijf Rotterdam',
  description:
    'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Vaklieden Rotterdam - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in Rotterdam. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function VakliedenRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Rotterdam"
        title="Vaklieden Rotterdam"
        description="Weekend Klussen is uw betrouwbare vaklieden in Rotterdam. Wij verzorgen alle bouw- en renovatiewerkzaamheden in Rotterdam en omgeving met vaste prijzen en garantie."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse']}
      />
      <Footer />
    </main>
  );
}

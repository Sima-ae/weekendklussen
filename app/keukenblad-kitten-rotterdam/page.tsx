import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenbladKittenContent } from '@/components/pages/KeukenbladKittenContent';

export const metadata: Metadata = {
  title: 'Keukenblad Kitten Rotterdam | Weekend Klussen Keukenblad Kitten Rotterdam',
  description:
    'Professioneel keukenblad kitten in Rotterdam. Weekend Klussen verzorgt keukenblad kitten, kit vervangen en voegwerk voor een perfecte afdichting in Rotterdam. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenbladKittenRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenbladKittenContent
        location="Rotterdam"
        title="Keukenblad Kitten Rotterdam"
        description="Weekend Klussen is uw specialist voor keukenblad kitten in Rotterdam. Wij verzorgen professioneel keukenblad kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en hygiënische keuken in Rotterdam en omgeving."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse']}
      />
      <Footer />
    </main>
  );
}

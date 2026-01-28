import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KozijnenKittenContent } from '@/components/pages/KozijnenKittenContent';

export const metadata: Metadata = {
  title: 'Kozijnen Kitten Rotterdam | Weekend Klussen Kozijnen Kitten Rotterdam',
  description:
    'Professioneel kozijnen kitten in Rotterdam. Weekend Klussen verzorgt kozijnen kitten, kit vervangen en voegwerk voor een perfecte afdichting in Rotterdam. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KozijnenKittenRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KozijnenKittenContent
        location="Rotterdam"
        title="Kozijnen Kitten Rotterdam"
        description="Weekend Klussen is uw specialist voor kozijnen kitten in Rotterdam. Wij verzorgen professioneel kozijnen kitten met hoogwaardige kitmaterialen voor een perfecte afdichting en energiezuinige woning in Rotterdam en omgeving."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse']}
      />
      <Footer />
    </main>
  );
}

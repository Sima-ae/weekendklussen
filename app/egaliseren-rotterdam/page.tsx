import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EgaliserenContent } from '@/components/pages/EgaliserenContent';

export const metadata: Metadata = {
  title: 'Egaliseren Rotterdam | Weekend Klussen Vloeren Egaliseren Rotterdam',
  description:
    'Professioneel vloeren egaliseren in Rotterdam. Weekend Klussen verzorgt egaliseren met egaline voor betonvloeren, houten vloeren en vloerverwarming in Rotterdam. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function EgaliserenRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <EgaliserenContent
        location="Rotterdam"
        title="Egaliseren Rotterdam"
        description="Weekend Klussen is uw specialist voor vloeren egaliseren in Rotterdam. Wij verzorgen professioneel egaliseren met hoogwaardige egaline voor een perfect vlakke ondergrond in Rotterdam en omgeving."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse']}
      />
      <Footer />
    </main>
  );
}

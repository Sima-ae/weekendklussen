import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KozijnReparatieContent } from '@/components/pages/KozijnReparatieContent';

export const metadata: Metadata = {
  title: 'Kozijn Reparatie Rotterdam | Weekend Klussen Kozijn Reparatie Rotterdam',
  description:
    'Professionele kozijn reparatie in Rotterdam. Weekend Klussen verzorgt kozijn reparatie, houtrot reparatie, scharnieren en sloten repareren in Rotterdam. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KozijnReparatieRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KozijnReparatieContent
        location="Rotterdam"
        title="Kozijn Reparatie Rotterdam"
        description="Weekend Klussen is uw specialist voor kozijn reparatie in Rotterdam. Wij detecteren kozijn problemen vroegtijdig en voeren professionele reparaties uit om verdere schade te voorkomen in Rotterdam en omgeving."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse']}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KozijnReparatieContent } from '@/components/pages/KozijnReparatieContent';

export const metadata: Metadata = {
  title: 'Kozijn Reparatie Den Haag | Weekend Klussen Kozijn Reparatie Den Haag',
  description:
    'Professionele kozijn reparatie in Den Haag. Weekend Klussen verzorgt kozijn reparatie, houtrot reparatie, scharnieren en sloten repareren in Den Haag. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KozijnReparatieDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KozijnReparatieContent
        location="Den Haag"
        title="Kozijn Reparatie Den Haag"
        description="Weekend Klussen is uw specialist voor kozijn reparatie in Den Haag. Wij detecteren kozijn problemen vroegtijdig en voeren professionele reparaties uit om verdere schade te voorkomen in Den Haag en omgeving."
        nearbyCities={['Rijswijk', 'Delft', 'Zoetermeer', 'Leiden', 'Voorburg']}
      />
      <Footer />
    </main>
  );
}

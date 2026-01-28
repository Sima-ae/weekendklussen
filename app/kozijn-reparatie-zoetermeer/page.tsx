import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KozijnReparatieContent } from '@/components/pages/KozijnReparatieContent';

export const metadata: Metadata = {
  title: 'Kozijn Reparatie Zoetermeer | Weekend Klussen Kozijn Reparatie Zoetermeer',
  description:
    'Professionele kozijn reparatie in Zoetermeer. Weekend Klussen verzorgt kozijn reparatie, houtrot reparatie, scharnieren en sloten repareren in Zoetermeer. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KozijnReparatieZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KozijnReparatieContent
        location="Zoetermeer"
        title="Kozijn Reparatie Zoetermeer"
        description="Weekend Klussen is uw specialist voor kozijn reparatie in Zoetermeer. Wij detecteren kozijn problemen vroegtijdig en voeren professionele reparaties uit om verdere schade te voorkomen in Zoetermeer en omgeving."
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp']}
      />
      <Footer />
    </main>
  );
}

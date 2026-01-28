import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KozijnReparatieContent } from '@/components/pages/KozijnReparatieContent';

export const metadata: Metadata = {
  title: 'Kozijn Reparatie Dordrecht | Weekend Klussen Kozijn Reparatie Dordrecht',
  description:
    'Professionele kozijn reparatie in Dordrecht. Weekend Klussen verzorgt kozijn reparatie, houtrot reparatie, scharnieren en sloten repareren in Dordrecht. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KozijnReparatieDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KozijnReparatieContent
        location="Dordrecht"
        title="Kozijn Reparatie Dordrecht"
        description="Weekend Klussen is uw specialist voor kozijn reparatie in Dordrecht. Wij detecteren kozijn problemen vroegtijdig en voeren professionele reparaties uit om verdere schade te voorkomen in Dordrecht en omgeving."
        nearbyCities={['Rotterdam', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht', 'Gorinchem']}
      />
      <Footer />
    </main>
  );
}

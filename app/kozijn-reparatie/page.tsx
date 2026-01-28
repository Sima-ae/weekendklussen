import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KozijnReparatieContent } from '@/components/pages/KozijnReparatieContent';

export const metadata: Metadata = {
  title: 'Kozijn Reparatie | Weekend Klussen Kozijn Reparatie Specialist',
  description:
    'Professionele kozijn reparatie in Zuid-Holland. Weekend Klussen verzorgt kozijn reparatie, houtrot reparatie, scharnieren en sloten repareren. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KozijnReparatiePage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KozijnReparatieContent
        location="Zuid-Holland"
        title="Kozijn Reparatie"
        description="Weekend Klussen is uw specialist voor kozijn reparatie in Zuid-Holland. Wij detecteren kozijn problemen vroegtijdig en voeren professionele reparaties uit om verdere schade te voorkomen."
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Leiden', 'Dordrecht', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn']}
      />
      <Footer />
    </main>
  );
}

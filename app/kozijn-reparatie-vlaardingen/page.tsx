import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KozijnReparatieContent } from '@/components/pages/KozijnReparatieContent';

export const metadata: Metadata = {
  title: 'Kozijn Reparatie Vlaardingen | Weekend Klussen Kozijn Reparatie Vlaardingen',
  description:
    'Professionele kozijn reparatie in Vlaardingen. Weekend Klussen verzorgt kozijn reparatie, houtrot reparatie, scharnieren en sloten repareren in Vlaardingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KozijnReparatieVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KozijnReparatieContent
        location="Vlaardingen"
        title="Kozijn Reparatie Vlaardingen"
        description="Weekend Klussen is uw specialist voor kozijn reparatie in Vlaardingen. Wij detecteren kozijn problemen vroegtijdig en voeren professionele reparaties uit om verdere schade te voorkomen in Vlaardingen en omgeving."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

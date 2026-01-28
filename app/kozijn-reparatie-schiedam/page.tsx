import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KozijnReparatieContent } from '@/components/pages/KozijnReparatieContent';

export const metadata: Metadata = {
  title: 'Kozijn Reparatie Schiedam | Weekend Klussen Kozijn Reparatie Schiedam',
  description:
    'Professionele kozijn reparatie in Schiedam. Weekend Klussen verzorgt kozijn reparatie, houtrot reparatie, scharnieren en sloten repareren in Schiedam. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KozijnReparatieSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KozijnReparatieContent
        location="Schiedam"
        title="Kozijn Reparatie Schiedam"
        description="Weekend Klussen is uw specialist voor kozijn reparatie in Schiedam. Wij detecteren kozijn problemen vroegtijdig en voeren professionele reparaties uit om verdere schade te voorkomen in Schiedam en omgeving."
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

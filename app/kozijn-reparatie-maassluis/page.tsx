import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KozijnReparatieContent } from '@/components/pages/KozijnReparatieContent';

export const metadata: Metadata = {
  title: 'Kozijn Reparatie Maassluis | Weekend Klussen Kozijn Reparatie Maassluis',
  description:
    'Professionele kozijn reparatie in Maassluis. Weekend Klussen verzorgt kozijn reparatie, houtrot reparatie, scharnieren en sloten repareren in Maassluis. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KozijnReparatieMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KozijnReparatieContent
        location="Maassluis"
        title="Kozijn Reparatie Maassluis"
        description="Weekend Klussen is uw specialist voor kozijn reparatie in Maassluis. Wij detecteren kozijn problemen vroegtijdig en voeren professionele reparaties uit om verdere schade te voorkomen in Maassluis en omgeving."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

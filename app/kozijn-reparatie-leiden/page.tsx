import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KozijnReparatieContent } from '@/components/pages/KozijnReparatieContent';

export const metadata: Metadata = {
  title: 'Kozijn Reparatie Leiden | Weekend Klussen Kozijn Reparatie Leiden',
  description:
    'Professionele kozijn reparatie in Leiden. Weekend Klussen verzorgt kozijn reparatie, houtrot reparatie, scharnieren en sloten repareren in Leiden. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KozijnReparatieLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KozijnReparatieContent
        location="Leiden"
        title="Kozijn Reparatie Leiden"
        description="Weekend Klussen is uw specialist voor kozijn reparatie in Leiden. Wij detecteren kozijn problemen vroegtijdig en voeren professionele reparaties uit om verdere schade te voorkomen in Leiden en omgeving."
        nearbyCities={['Den Haag', 'Zoetermeer', 'Alphen aan den Rijn', 'Katwijk', 'Oegstgeest']}
      />
      <Footer />
    </main>
  );
}

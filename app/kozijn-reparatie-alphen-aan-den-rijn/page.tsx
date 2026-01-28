import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KozijnReparatieContent } from '@/components/pages/KozijnReparatieContent';

export const metadata: Metadata = {
  title: 'Kozijn Reparatie Alphen aan den Rijn | Weekend Klussen Kozijn Reparatie Alphen aan den Rijn',
  description:
    'Professionele kozijn reparatie in Alphen aan den Rijn. Weekend Klussen verzorgt kozijn reparatie, houtrot reparatie, scharnieren en sloten repareren in Alphen aan den Rijn. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KozijnReparatieAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KozijnReparatieContent
        location="Alphen aan den Rijn"
        title="Kozijn Reparatie Alphen aan den Rijn"
        description="Weekend Klussen is uw specialist voor kozijn reparatie in Alphen aan den Rijn. Wij detecteren kozijn problemen vroegtijdig en voeren professionele reparaties uit om verdere schade te voorkomen in Alphen aan den Rijn en omgeving."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Waddinxveen']}
      />
      <Footer />
    </main>
  );
}

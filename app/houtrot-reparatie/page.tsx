import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HoutrotReparatieContent } from '@/components/pages/HoutrotReparatieContent';

export const metadata: Metadata = {
  title: 'Houtrot Reparatie | Weekend Klussen Houtrot Reparatie Specialist',
  description:
    'Professionele houtrot reparatie in Zuid-Holland. Weekend Klussen verzorgt houtrot detectie, reparatie van kozijnen, deuren, daken en gevels. Preventieve behandeling en duurzame oplossingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function HoutrotReparatiePage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <HoutrotReparatieContent
        location="Zuid-Holland"
        title="Houtrot Reparatie"
        description="Weekend Klussen is uw specialist voor houtrot reparatie in Zuid-Holland. Wij detecteren houtrot vroegtijdig en voeren professionele reparaties uit om verdere schade te voorkomen."
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Leiden', 'Dordrecht', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn']}
      />
      <Footer />
    </main>
  );
}

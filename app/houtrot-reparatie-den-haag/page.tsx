import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HoutrotReparatieContent } from '@/components/pages/HoutrotReparatieContent';

export const metadata: Metadata = {
  title: 'Houtrot Reparatie Den Haag | Weekend Klussen Houtrot Reparatie Den Haag',
  description:
    'Professionele houtrot reparatie in Den Haag. Weekend Klussen verzorgt houtrot detectie, reparatie van kozijnen, deuren, daken en gevels in Den Haag. Preventieve behandeling en duurzame oplossingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function HoutrotReparatieDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <HoutrotReparatieContent
        location="Den Haag"
        title="Houtrot Reparatie Den Haag"
        description="Weekend Klussen is uw specialist voor houtrot reparatie in Den Haag. Wij detecteren houtrot vroegtijdig en voeren professionele reparaties uit om verdere schade te voorkomen in Den Haag en omgeving."
        nearbyCities={['Rijswijk', 'Delft', 'Zoetermeer', 'Leiden', 'Voorburg']}
      />
      <Footer />
    </main>
  );
}

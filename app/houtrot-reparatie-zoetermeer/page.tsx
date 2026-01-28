import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HoutrotReparatieContent } from '@/components/pages/HoutrotReparatieContent';

export const metadata: Metadata = {
  title: 'Houtrot Reparatie Zoetermeer | Weekend Klussen Houtrot Reparatie Zoetermeer',
  description:
    'Professionele houtrot reparatie in Zoetermeer. Weekend Klussen verzorgt houtrot detectie, reparatie van kozijnen, deuren, daken en gevels in Zoetermeer. Preventieve behandeling en duurzame oplossingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function HoutrotReparatieZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <HoutrotReparatieContent
        location="Zoetermeer"
        title="Houtrot Reparatie Zoetermeer"
        description="Weekend Klussen is uw specialist voor houtrot reparatie in Zoetermeer. Wij detecteren houtrot vroegtijdig en voeren professionele reparaties uit om verdere schade te voorkomen in Zoetermeer en omgeving."
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp']}
      />
      <Footer />
    </main>
  );
}

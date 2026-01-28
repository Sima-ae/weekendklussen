import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HoutrotReparatieContent } from '@/components/pages/HoutrotReparatieContent';

export const metadata: Metadata = {
  title: 'Houtrot Reparatie Leiden | Weekend Klussen Houtrot Reparatie Leiden',
  description:
    'Professionele houtrot reparatie in Leiden. Weekend Klussen verzorgt houtrot detectie, reparatie van kozijnen, deuren, daken en gevels in Leiden. Preventieve behandeling en duurzame oplossingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function HoutrotReparatieLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <HoutrotReparatieContent
        location="Leiden"
        title="Houtrot Reparatie Leiden"
        description="Weekend Klussen is uw specialist voor houtrot reparatie in Leiden. Wij detecteren houtrot vroegtijdig en voeren professionele reparaties uit om verdere schade te voorkomen in Leiden en omgeving."
        nearbyCities={['Den Haag', 'Zoetermeer', 'Alphen aan den Rijn', 'Katwijk', 'Oegstgeest']}
      />
      <Footer />
    </main>
  );
}

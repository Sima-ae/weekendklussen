import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HoutrotReparatieContent } from '@/components/pages/HoutrotReparatieContent';

export const metadata: Metadata = {
  title: 'Houtrot Reparatie Maassluis | Weekend Klussen Houtrot Reparatie Maassluis',
  description:
    'Professionele houtrot reparatie in Maassluis. Weekend Klussen verzorgt houtrot detectie, reparatie van kozijnen, deuren, daken en gevels in Maassluis. Preventieve behandeling en duurzame oplossingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function HoutrotReparatieMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <HoutrotReparatieContent
        location="Maassluis"
        title="Houtrot Reparatie Maassluis"
        description="Weekend Klussen is uw specialist voor houtrot reparatie in Maassluis. Wij detecteren houtrot vroegtijdig en voeren professionele reparaties uit om verdere schade te voorkomen in Maassluis en omgeving."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

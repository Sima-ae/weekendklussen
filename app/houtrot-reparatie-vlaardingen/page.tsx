import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HoutrotReparatieContent } from '@/components/pages/HoutrotReparatieContent';

export const metadata: Metadata = {
  title: 'Houtrot Reparatie Vlaardingen | Weekend Klussen Houtrot Reparatie Vlaardingen',
  description:
    'Professionele houtrot reparatie in Vlaardingen. Weekend Klussen verzorgt houtrot detectie, reparatie van kozijnen, deuren, daken en gevels in Vlaardingen. Preventieve behandeling en duurzame oplossingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function HoutrotReparatieVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <HoutrotReparatieContent
        location="Vlaardingen"
        title="Houtrot Reparatie Vlaardingen"
        description="Weekend Klussen is uw specialist voor houtrot reparatie in Vlaardingen. Wij detecteren houtrot vroegtijdig en voeren professionele reparaties uit om verdere schade te voorkomen in Vlaardingen en omgeving."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

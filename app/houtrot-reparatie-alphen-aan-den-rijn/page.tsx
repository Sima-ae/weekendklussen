import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HoutrotReparatieContent } from '@/components/pages/HoutrotReparatieContent';

export const metadata: Metadata = {
  title: 'Houtrot Reparatie Alphen aan den Rijn | Weekend Klussen Houtrot Reparatie Alphen aan den Rijn',
  description:
    'Professionele houtrot reparatie in Alphen aan den Rijn. Weekend Klussen verzorgt houtrot detectie, reparatie van kozijnen, deuren, daken en gevels in Alphen aan den Rijn. Preventieve behandeling en duurzame oplossingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function HoutrotReparatieAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <HoutrotReparatieContent
        location="Alphen aan den Rijn"
        title="Houtrot Reparatie Alphen aan den Rijn"
        description="Weekend Klussen is uw specialist voor houtrot reparatie in Alphen aan den Rijn. Wij detecteren houtrot vroegtijdig en voeren professionele reparaties uit om verdere schade te voorkomen in Alphen aan den Rijn en omgeving."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Waddinxveen']}
      />
      <Footer />
    </main>
  );
}

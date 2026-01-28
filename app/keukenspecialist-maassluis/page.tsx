import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenspecialistContent } from '@/components/pages/KeukenspecialistContent';

export const metadata: Metadata = {
  title: 'Keukenspecialist Maassluis | Weekend Klussen Keukenspecialist Maassluis',
  description:
    'Professionele keukenspecialist in Maassluis. Weekend Klussen verzorgt keukenrenovatie, keuken plaatsen, keukenontwerp, apparatuur aansluiten en complete keukenprojecten in Maassluis. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenspecialistMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenspecialistContent
        location="Maassluis"
        title="Keukenspecialist Maassluis"
        description="Weekend Klussen is uw betrouwbare keukenspecialist in Maassluis. Wij verzorgen alle aspecten van uw keukenproject, van advies en ontwerp tot plaatsing, montage en afwerking in Maassluis en omgeving."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

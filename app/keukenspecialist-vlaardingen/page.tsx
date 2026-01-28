import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenspecialistContent } from '@/components/pages/KeukenspecialistContent';

export const metadata: Metadata = {
  title: 'Keukenspecialist Vlaardingen | Weekend Klussen Keukenspecialist Vlaardingen',
  description:
    'Professionele keukenspecialist in Vlaardingen. Weekend Klussen verzorgt keukenrenovatie, keuken plaatsen, keukenontwerp, apparatuur aansluiten en complete keukenprojecten in Vlaardingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenspecialistVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenspecialistContent
        location="Vlaardingen"
        title="Keukenspecialist Vlaardingen"
        description="Weekend Klussen is uw betrouwbare keukenspecialist in Vlaardingen. Wij verzorgen alle aspecten van uw keukenproject, van advies en ontwerp tot plaatsing, montage en afwerking in Vlaardingen en omgeving."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

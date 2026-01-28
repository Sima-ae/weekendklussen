import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenspecialistContent } from '@/components/pages/KeukenspecialistContent';

export const metadata: Metadata = {
  title: 'Keukenspecialist Dordrecht | Weekend Klussen Keukenspecialist Dordrecht',
  description:
    'Professionele keukenspecialist in Dordrecht. Weekend Klussen verzorgt keukenrenovatie, keuken plaatsen, keukenontwerp, apparatuur aansluiten en complete keukenprojecten in Dordrecht. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenspecialistDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenspecialistContent
        location="Dordrecht"
        title="Keukenspecialist Dordrecht"
        description="Weekend Klussen is uw betrouwbare keukenspecialist in Dordrecht. Wij verzorgen alle aspecten van uw keukenproject, van advies en ontwerp tot plaatsing, montage en afwerking in Dordrecht en omgeving."
        nearbyCities={['Rotterdam', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht', 'Gorinchem']}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenspecialistContent } from '@/components/pages/KeukenspecialistContent';

export const metadata: Metadata = {
  title: 'Keukenspecialist Den Haag | Weekend Klussen Keukenspecialist Den Haag',
  description:
    'Professionele keukenspecialist in Den Haag. Weekend Klussen verzorgt keukenrenovatie, keuken plaatsen, keukenontwerp, apparatuur aansluiten en complete keukenprojecten in Den Haag. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenspecialistDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenspecialistContent
        location="Den Haag"
        title="Keukenspecialist Den Haag"
        description="Weekend Klussen is uw betrouwbare keukenspecialist in Den Haag. Wij verzorgen alle aspecten van uw keukenproject, van advies en ontwerp tot plaatsing, montage en afwerking in Den Haag en omgeving."
        nearbyCities={['Rijswijk', 'Delft', 'Zoetermeer', 'Leiden', 'Voorburg']}
      />
      <Footer />
    </main>
  );
}

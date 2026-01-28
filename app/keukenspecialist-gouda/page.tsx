import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenspecialistContent } from '@/components/pages/KeukenspecialistContent';

export const metadata: Metadata = {
  title: 'Keukenspecialist Gouda | Weekend Klussen Keukenspecialist Gouda',
  description:
    'Professionele keukenspecialist in Gouda. Weekend Klussen verzorgt keukenrenovatie, keuken plaatsen, keukenontwerp, apparatuur aansluiten en complete keukenprojecten in Gouda. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenspecialistGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenspecialistContent
        location="Gouda"
        title="Keukenspecialist Gouda"
        description="Weekend Klussen is uw betrouwbare keukenspecialist in Gouda. Wij verzorgen alle aspecten van uw keukenproject, van advies en ontwerp tot plaatsing, montage en afwerking in Gouda en omgeving."
        nearbyCities={['Zoetermeer', 'Rotterdam', 'Utrecht', 'Woerden', 'Waddinxveen']}
      />
      <Footer />
    </main>
  );
}

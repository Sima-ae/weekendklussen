import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenspecialistContent } from '@/components/pages/KeukenspecialistContent';

export const metadata: Metadata = {
  title: 'Keukenspecialist Zoetermeer | Weekend Klussen Keukenspecialist Zoetermeer',
  description:
    'Professionele keukenspecialist in Zoetermeer. Weekend Klussen verzorgt keukenrenovatie, keuken plaatsen, keukenontwerp, apparatuur aansluiten en complete keukenprojecten in Zoetermeer. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenspecialistZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenspecialistContent
        location="Zoetermeer"
        title="Keukenspecialist Zoetermeer"
        description="Weekend Klussen is uw betrouwbare keukenspecialist in Zoetermeer. Wij verzorgen alle aspecten van uw keukenproject, van advies en ontwerp tot plaatsing, montage en afwerking in Zoetermeer en omgeving."
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp']}
      />
      <Footer />
    </main>
  );
}

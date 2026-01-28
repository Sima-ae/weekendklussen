import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenMonteurContent } from '@/components/pages/KeukenMonteurContent';

export const metadata: Metadata = {
  title: 'Keuken Monteur Zoetermeer | Weekend Klussen Keuken Monteur Zoetermeer',
  description:
    'Professionele keuken monteur in Zoetermeer. Weekend Klussen verzorgt keuken plaatsen, monteren, apparatuur aansluiten en keukenrenovatie in Zoetermeer. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenMonteurZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenMonteurContent
        location="Zoetermeer"
        title="Keuken Monteur Zoetermeer"
        description="Weekend Klussen is uw betrouwbare keuken monteur in Zoetermeer. Wij verzorgen alle keukenmontage werkzaamheden van plaatsing tot apparatuur aansluiten, inclusief complete keukenrenovatie in Zoetermeer en omgeving."
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp']}
      />
      <Footer />
    </main>
  );
}

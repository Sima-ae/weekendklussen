import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenMonteurContent } from '@/components/pages/KeukenMonteurContent';

export const metadata: Metadata = {
  title: 'Keuken Monteur Delft | Weekend Klussen Keuken Monteur Delft',
  description:
    'Professionele keuken monteur in Delft. Weekend Klussen verzorgt keuken plaatsen, monteren, apparatuur aansluiten en keukenrenovatie in Delft. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenMonteurDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenMonteurContent
        location="Delft"
        title="Keuken Monteur Delft"
        description="Weekend Klussen is uw betrouwbare keuken monteur in Delft. Wij verzorgen alle keukenmontage werkzaamheden van plaatsing tot apparatuur aansluiten, inclusief complete keukenrenovatie in Delft en omgeving."
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer']}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenMonteurContent } from '@/components/pages/KeukenMonteurContent';

export const metadata: Metadata = {
  title: 'Keuken Monteur | Weekend Klussen Keuken Monteur Specialist',
  description:
    'Professionele keuken monteur in Zuid-Holland. Weekend Klussen verzorgt keuken plaatsen, monteren, apparatuur aansluiten en keukenrenovatie. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenMonteurPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenMonteurContent
        location="Zuid-Holland"
        title="Keuken Monteur"
        description="Weekend Klussen is uw betrouwbare keuken monteur in Zuid-Holland. Wij verzorgen alle keukenmontage werkzaamheden van plaatsing tot apparatuur aansluiten, inclusief complete keukenrenovatie."
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Leiden', 'Dordrecht', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn']}
      />
      <Footer />
    </main>
  );
}

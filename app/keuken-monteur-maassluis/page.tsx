import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenMonteurContent } from '@/components/pages/KeukenMonteurContent';

export const metadata: Metadata = {
  title: 'Keuken Monteur Maassluis | Weekend Klussen Keuken Monteur Maassluis',
  description:
    'Professionele keuken monteur in Maassluis. Weekend Klussen verzorgt keuken plaatsen, monteren, apparatuur aansluiten en keukenrenovatie in Maassluis. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenMonteurMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenMonteurContent
        location="Maassluis"
        title="Keuken Monteur Maassluis"
        description="Weekend Klussen is uw betrouwbare keuken monteur in Maassluis. Wij verzorgen alle keukenmontage werkzaamheden van plaatsing tot apparatuur aansluiten, inclusief complete keukenrenovatie in Maassluis en omgeving."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}

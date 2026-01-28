import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenMonteurContent } from '@/components/pages/KeukenMonteurContent';

export const metadata: Metadata = {
  title: 'Keuken Monteur Gouda | Weekend Klussen Keuken Monteur Gouda',
  description:
    'Professionele keuken monteur in Gouda. Weekend Klussen verzorgt keuken plaatsen, monteren, apparatuur aansluiten en keukenrenovatie in Gouda. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenMonteurGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenMonteurContent
        location="Gouda"
        title="Keuken Monteur Gouda"
        description="Weekend Klussen is uw betrouwbare keuken monteur in Gouda. Wij verzorgen alle keukenmontage werkzaamheden van plaatsing tot apparatuur aansluiten, inclusief complete keukenrenovatie in Gouda en omgeving."
        nearbyCities={['Zoetermeer', 'Rotterdam', 'Utrecht', 'Woerden', 'Waddinxveen']}
      />
      <Footer />
    </main>
  );
}

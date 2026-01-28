import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Tuin Aanleg Alphen aan den Rijn | Weekend Klussen Tuinaanleg',
  description:
    'Tuin aanleg en tuinontwerp in Alphen aan den Rijn. Weekend Klussen verzorgt complete tuinaanleg in Alphen aan den Rijn en omgeving. Van ontwerp tot aanleg, bestrating, beplanting en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function TuinAanlegAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Alphen aan den Rijn"
        title="Tuin Aanleg Alphen aan den Rijn"
        description="Weekend Klussen is gespecialiseerd in tuin aanleg en tuinontwerp in Alphen aan den Rijn. Wij verzorgen complete tuinaanleg van ontwerp tot realisatie, met aandacht voor bestrating, beplanting, verlichting en tuinmeubilair."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Waddinxveen']}
        services={[
          'Complete tuinaanleg en tuinontwerp',
          'Tuinbestrating en terras aanleg',
          'Beplanting en gazon aanleg',
          'Tuinverlichting en waterpartijen',
          'Schuttingen en tuinafscheiding',
          'Tuinmeubilair en pergola\'s',
          'Tuinonderhoud en onderhoudscontracten'
        ]}
      />
      <Footer />
    </main>
  );
}

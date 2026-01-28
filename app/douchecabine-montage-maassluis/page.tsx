import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchecabine Monteren Maassluis | Weekend Klussen Douchecabine Montage Maassluis',
  description:
    'Douchecabine monteren en plaatsen in Maassluis. Weekend Klussen verzorgt professionele douchecabine montage en installatie in Maassluis. Alle types douchecabines, van inbouw tot opbouw. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DouchecabineMontageMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Maassluis"
        title="Douchecabine Monteren Maassluis"
        description="Weekend Klussen verzorgt professionele douchecabine montage en installatie in Maassluis. Wij monteren alle types douchecabines, van inbouw tot opbouw, met aandacht voor detail en kwaliteit. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag']}
        services={[
          'Douchecabine monteren en plaatsen',
          'Inbouw douchecabine installatie',
          'Opbouw douchecabine montage',
          'Douchecabine vervanging en demontage',
          'Douchedeur monteren en installeren',
          'Douchecabine afkitten en afdichten',
          'Douchecabine advies en meting',
          'Alle merken en types douchecabines'
        ]}
      />
      <Footer />
    </main>
  );
}

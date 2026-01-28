import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchecabine Monteren Gouda | Weekend Klussen Douchecabine Montage Gouda',
  description:
    'Douchecabine monteren en installeren in Gouda. Weekend Klussen verzorgt professionele douchecabine montage en installatie in Gouda. Alle types douchecabines, van inbouw tot opbouw. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DouchecabineMonterenGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Gouda"
        title="Douchecabine Monteren Gouda"
        description="Weekend Klussen verzorgt professionele douchecabine montage en installatie in Gouda. Wij monteren alle types douchecabines, van inbouw tot opbouw, met aandacht voor detail en kwaliteit. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Rotterdam', 'Leiden', 'Zoetermeer', 'Utrecht', 'Woerden']}
        services={[
          'Douchecabine monteren en installeren',
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

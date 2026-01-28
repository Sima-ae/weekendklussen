import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchescherm Monteren Den Haag | Weekend Klussen Douchescherm Montage Den Haag',
  description:
    'Douchescherm monteren en installeren in Den Haag. Weekend Klussen verzorgt professionele douchescherm montage en installatie in Den Haag. Alle types doucheschermen, van schuifdeuren tot vaste panelen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DoucheschermMonterenDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Den Haag"
        title="Douchescherm Monteren Den Haag"
        description="Weekend Klussen verzorgt professionele douchescherm montage en installatie in Den Haag. Wij monteren alle types doucheschermen, van schuifdeuren tot vaste panelen, met aandacht voor detail en kwaliteit. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Rijswijk', 'Delft', 'Rotterdam', 'Zoetermeer', 'Leiden']}
        services={[
          'Douchescherm monteren en installeren',
          'Schuifdeur douchescherm montage',
          'Vast douchescherm plaatsen',
          'Douchescherm vervanging en demontage',
          'Douchedeur monteren en installeren',
          'Douchescherm kitten en afdichten',
          'Douchescherm advies en meting',
          'Alle merken en types doucheschermen'
        ]}
      />
      <Footer />
    </main>
  );
}

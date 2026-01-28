import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchescherm Monteren Alphen aan den Rijn | Weekend Klussen Douchescherm Montage Alphen aan den Rijn',
  description:
    'Douchescherm monteren en installeren in Alphen aan den Rijn. Weekend Klussen verzorgt professionele douchescherm montage en installatie in Alphen aan den Rijn. Alle types doucheschermen, van schuifdeuren tot vaste panelen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DoucheschermMonterenAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Alphen aan den Rijn"
        title="Douchescherm Monteren Alphen aan den Rijn"
        description="Weekend Klussen verzorgt professionele douchescherm montage en installatie in Alphen aan den Rijn. Wij monteren alle types doucheschermen, van schuifdeuren tot vaste panelen, met aandacht voor detail en kwaliteit. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Utrecht', 'Woerden']}
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

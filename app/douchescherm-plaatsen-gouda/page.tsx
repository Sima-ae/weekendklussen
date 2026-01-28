import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchescherm Plaatsen Gouda | Weekend Klussen Douchescherm Installatie Gouda',
  description:
    'Douchescherm plaatsen en installeren in Gouda. Weekend Klussen verzorgt professionele douchescherm plaatsing en installatie in Gouda. Alle types doucheschermen, van schuifdeuren tot vaste panelen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DoucheschermPlaatsenGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Gouda"
        title="Douchescherm Plaatsen Gouda"
        description="Weekend Klussen verzorgt professionele douchescherm plaatsing en installatie in Gouda. Wij plaatsen alle types doucheschermen, van schuifdeuren tot vaste panelen, met aandacht voor detail en kwaliteit. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Rotterdam', 'Leiden', 'Zoetermeer', 'Utrecht', 'Woerden']}
        services={[
          'Douchescherm plaatsen en installeren',
          'Schuifdeur douchescherm plaatsing',
          'Vast douchescherm plaatsen',
          'Douchescherm vervanging en verwijdering',
          'Douchedeur plaatsen en installeren',
          'Douchescherm kitten en afdichten',
          'Douchescherm advies en meting',
          'Alle merken en types doucheschermen'
        ]}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchescherm Plaatsen Zoetermeer | Weekend Klussen Douchescherm Installatie Zoetermeer',
  description:
    'Douchescherm plaatsen en installeren in Zoetermeer. Weekend Klussen verzorgt professionele douchescherm plaatsing en installatie in Zoetermeer. Alle types doucheschermen, van schuifdeuren tot vaste panelen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DoucheschermPlaatsenZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zoetermeer"
        title="Douchescherm Plaatsen Zoetermeer"
        description="Weekend Klussen verzorgt professionele douchescherm plaatsing en installatie in Zoetermeer. Wij plaatsen alle types doucheschermen, van schuifdeuren tot vaste panelen, met aandacht voor detail en kwaliteit. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Den Haag', 'Leiden', 'Gouda', 'Delft', 'Pijnacker-Nootdorp']}
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

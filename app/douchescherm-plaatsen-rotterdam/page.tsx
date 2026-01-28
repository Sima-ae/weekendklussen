import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchescherm Plaatsen Rotterdam | Weekend Klussen Douchescherm Installatie Rotterdam',
  description:
    'Douchescherm plaatsen en installeren in Rotterdam. Weekend Klussen verzorgt professionele douchescherm plaatsing en installatie in Rotterdam. Alle types doucheschermen, van schuifdeuren tot vaste panelen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DoucheschermPlaatsenRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Rotterdam"
        title="Douchescherm Plaatsen Rotterdam"
        description="Weekend Klussen verzorgt professionele douchescherm plaatsing en installatie in Rotterdam. Wij plaatsen alle types doucheschermen, van schuifdeuren tot vaste panelen, met aandacht voor detail en kwaliteit. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Maassluis', 'Capelle aan den IJssel', 'Spijkenisse']}
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

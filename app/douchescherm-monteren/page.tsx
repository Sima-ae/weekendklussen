import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchescherm Monteren | Weekend Klussen Douchescherm Montage Zuid-Holland',
  description:
    'Douchescherm monteren en installeren in Zuid-Holland en omgeving. Weekend Klussen verzorgt professionele douchescherm montage en installatie. Alle types doucheschermen, van schuifdeuren tot vaste panelen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DoucheschermMonterenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zuid-Holland"
        title="Douchescherm Monteren"
        description="Weekend Klussen verzorgt professionele douchescherm montage en installatie in Zuid-Holland. Wij monteren alle types doucheschermen, van schuifdeuren tot vaste panelen, met aandacht voor detail en kwaliteit. Vakkundig uitgevoerd met garantie."
        nearbyCities={[
          'Rotterdam', 'Den Haag', 'Leiden', 'Dordrecht', 'Gouda', 'Delft', 
          'Zoetermeer', 'Schiedam', 'Vlaardingen', 'Westland', 'Rijswijk',
          'Capelle aan den IJssel', 'Spijkenisse', 'Katwijk', 'Voorburg',
          'Pijnacker-Nootdorp', 'Barendrecht', 'Ridderkerk', 'Alphen aan den Rijn',
          'Maassluis', 'Hellevoetsluis', 'Papendrecht', 'Sliedrecht'
        ]}
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

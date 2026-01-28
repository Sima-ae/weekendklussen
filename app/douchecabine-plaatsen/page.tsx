import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchecabine Plaatsen | Weekend Klussen Douchecabine Installatie Zuid-Holland',
  description:
    'Douchecabine plaatsen en installeren in Zuid-Holland en omgeving. Weekend Klussen verzorgt professionele douchecabine plaatsing en installatie. Alle types douchecabines, van inbouw tot opbouw. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DouchecabinePlaatsenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zuid-Holland"
        title="Douchecabine Plaatsen"
        description="Weekend Klussen verzorgt professionele douchecabine plaatsing en installatie in Zuid-Holland. Wij plaatsen alle types douchecabines, van inbouw tot opbouw, met aandacht voor detail en kwaliteit. Vakkundig uitgevoerd met garantie."
        nearbyCities={[
          'Rotterdam', 'Den Haag', 'Leiden', 'Dordrecht', 'Gouda', 'Delft', 
          'Zoetermeer', 'Schiedam', 'Vlaardingen', 'Westland', 'Rijswijk',
          'Capelle aan den IJssel', 'Spijkenisse', 'Katwijk', 'Voorburg',
          'Pijnacker-Nootdorp', 'Barendrecht', 'Ridderkerk', 'Alphen aan den Rijn',
          'Maassluis', 'Hellevoetsluis', 'Papendrecht', 'Sliedrecht'
        ]}
        services={[
          'Douchecabine plaatsen en installeren',
          'Inbouw douchecabine installatie',
          'Opbouw douchecabine plaatsing',
          'Douchecabine vervanging en demontage',
          'Douchedeur plaatsen en installeren',
          'Douchecabine afkitten en afdichten',
          'Douchecabine advies en meting',
          'Alle merken en types douchecabines'
        ]}
      />
      <Footer />
    </main>
  );
}

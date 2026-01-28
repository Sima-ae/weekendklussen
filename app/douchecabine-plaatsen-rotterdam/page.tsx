import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchecabine Plaatsen Rotterdam | Weekend Klussen Douchecabine Installatie Rotterdam',
  description:
    'Douchecabine plaatsen en installeren in Rotterdam. Weekend Klussen verzorgt professionele douchecabine plaatsing en installatie in Rotterdam. Alle types douchecabines, van inbouw tot opbouw. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DouchecabinePlaatsenRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Rotterdam"
        title="Douchecabine Plaatsen Rotterdam"
        description="Weekend Klussen verzorgt professionele douchecabine plaatsing en installatie in Rotterdam. Wij plaatsen alle types douchecabines, van inbouw tot opbouw, met aandacht voor detail en kwaliteit. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Maassluis', 'Capelle aan den IJssel', 'Spijkenisse']}
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

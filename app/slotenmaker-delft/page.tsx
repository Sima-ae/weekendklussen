import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Slotenmaker Delft | Weekend Klussen 24/7 Slotenmaker Delft',
  description: '24/7 slotenmaker service in Delft. Slotenmaker voor sloten reparatie, sleutels maken, inbraakbeveiliging en meer. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Delft',
  service: 'slotenmaker',
  keywords: ['slotenmaker Delft', '24/7 slotenmaker Delft', 'slotenmaker service Delft', 'slot reparatie Delft'],
});

export default function SlotenmakerDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Delft"
        service="Slotenmaker"
        title="Slotenmaker Delft 24/7"
        description="24/7 slotenmaker service in Delft. Weekend Klussen staat dag en nacht voor u klaar bij sloten en sleutel problemen in Delft. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 slotenmaker service in Delft. Of u nu buitengesloten bent, een slot kapot is, nieuwe sleutels nodig heeft, of inbraakbeveiliging wilt - onze ervaren slotenmakers staan dag en nacht voor u klaar in Delft. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Delft',
          'Buitensluiting verhelpen en slot openen',
          'Slot reparatie en slot vervanging Delft',
          'Sleutels maken en kopiëren',
          'Inbraakbeveiliging installeren Delft',
          'Cilindersloten installeren en repareren',
          'Hangsloten en kluisjes openen',
          'Deursloten en raamsloten reparatie',
        ]}
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer', 'Leiden']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren slotenmakers met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle slotenmaker werkzaamheden',
          'Lokale kennis van Delft',
        ]}
      />
      <Footer />
    </main>
  );
}

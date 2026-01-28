import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Slotenmaker Den Haag | Weekend Klussen 24/7 Slotenmaker Den Haag',
  description: '24/7 slotenmaker service in Den Haag. Slotenmaker voor sloten reparatie, sleutels maken, inbraakbeveiliging en meer. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Den Haag',
  service: 'slotenmaker',
  keywords: ['slotenmaker Den Haag', '24/7 slotenmaker Den Haag', 'slotenmaker service Den Haag', 'slot reparatie Den Haag'],
});

export default function SlotenmakerDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Den Haag"
        service="Slotenmaker"
        title="Slotenmaker Den Haag 24/7"
        description="24/7 slotenmaker service in Den Haag. Weekend Klussen staat dag en nacht voor u klaar bij sloten en sleutel problemen in Den Haag. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 slotenmaker service in Den Haag. Of u nu buitengesloten bent, een slot kapot is, nieuwe sleutels nodig heeft, of inbraakbeveiliging wilt - onze ervaren slotenmakers staan dag en nacht voor u klaar in Den Haag. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Den Haag',
          'Buitensluiting verhelpen en slot openen',
          'Slot reparatie en slot vervanging Den Haag',
          'Sleutels maken en kopiëren',
          'Inbraakbeveiliging installeren Den Haag',
          'Cilindersloten installeren en repareren',
          'Hangsloten en kluisjes openen',
          'Deursloten en raamsloten reparatie',
        ]}
        nearbyCities={['Delft', 'Rijswijk', 'Rotterdam', 'Zoetermeer', 'Leiden', 'Voorburg']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren slotenmakers met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle slotenmaker werkzaamheden',
          'Lokale kennis van Den Haag',
        ]}
      />
      <Footer />
    </main>
  );
}

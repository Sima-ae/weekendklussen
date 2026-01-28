import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Slotenmaker Schiedam | Weekend Klussen 24/7 Slotenmaker Schiedam',
  description: '24/7 slotenmaker service in Schiedam. Slotenmaker voor sloten reparatie, sleutels maken, inbraakbeveiliging en meer. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Schiedam',
  service: 'slotenmaker',
  keywords: ['slotenmaker Schiedam', '24/7 slotenmaker Schiedam', 'slotenmaker service Schiedam', 'slot reparatie Schiedam'],
});

export default function SlotenmakerSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Schiedam"
        service="Slotenmaker"
        title="Slotenmaker Schiedam 24/7"
        description="24/7 slotenmaker service in Schiedam. Weekend Klussen staat dag en nacht voor u klaar bij sloten en sleutel problemen in Schiedam. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 slotenmaker service in Schiedam. Of u nu buitengesloten bent, een slot kapot is, nieuwe sleutels nodig heeft, of inbraakbeveiliging wilt - onze ervaren slotenmakers staan dag en nacht voor u klaar in Schiedam. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Schiedam',
          'Buitensluiting verhelpen en slot openen',
          'Slot reparatie en slot vervanging Schiedam',
          'Sleutels maken en kopiëren',
          'Inbraakbeveiliging installeren Schiedam',
          'Cilindersloten installeren en repareren',
          'Hangsloten en kluisjes openen',
          'Deursloten en raamsloten reparatie',
        ]}
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Dordrecht']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren slotenmakers met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle slotenmaker werkzaamheden',
          'Lokale kennis van Schiedam',
        ]}
      />
      <Footer />
    </main>
  );
}

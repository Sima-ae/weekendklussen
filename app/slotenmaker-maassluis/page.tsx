import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Slotenmaker Maassluis | Weekend Klussen 24/7 Slotenmaker Maassluis',
  description: '24/7 slotenmaker service in Maassluis. Slotenmaker voor sloten reparatie, sleutels maken, inbraakbeveiliging en meer. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Maassluis',
  service: 'slotenmaker',
  keywords: ['slotenmaker Maassluis', '24/7 slotenmaker Maassluis', 'slotenmaker service Maassluis', 'slot reparatie Maassluis'],
});

export default function SlotenmakerMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Maassluis"
        service="Slotenmaker"
        title="Slotenmaker Maassluis 24/7"
        description="24/7 slotenmaker service in Maassluis. Weekend Klussen staat dag en nacht voor u klaar bij sloten en sleutel problemen in Maassluis. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 slotenmaker service in Maassluis. Of u nu buitengesloten bent, een slot kapot is, nieuwe sleutels nodig heeft, of inbraakbeveiliging wilt - onze ervaren slotenmakers staan dag en nacht voor u klaar in Maassluis. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Maassluis',
          'Buitensluiting verhelpen en slot openen',
          'Slot reparatie en slot vervanging Maassluis',
          'Sleutels maken en kopiëren',
          'Inbraakbeveiliging installeren Maassluis',
          'Cilindersloten installeren en repareren',
          'Hangsloten en kluisjes openen',
          'Deursloten en raamsloten reparatie',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren slotenmakers met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle slotenmaker werkzaamheden',
          'Lokale kennis van Maassluis',
        ]}
      />
      <Footer />
    </main>
  );
}

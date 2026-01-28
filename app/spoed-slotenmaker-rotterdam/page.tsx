import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Slotenmaker Rotterdam | Weekend Klussen 24/7 Spoed Slotenmaker Rotterdam',
  description: '24/7 spoed slotenmaker service in Rotterdam. Spoed slotenmaker voor buitensluiting, sloten reparatie en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Rotterdam',
  service: 'spoed slotenmaker',
  keywords: ['spoed slotenmaker Rotterdam', '24/7 slotenmaker Rotterdam', 'spoed slotenmaker service Rotterdam', 'slotenmaker spoed Rotterdam'],
});

export default function SpoedSlotenmakerRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Rotterdam"
        service="Spoed Slotenmaker"
        title="Spoed Slotenmaker Rotterdam 24/7"
        description="24/7 spoed slotenmaker service in Rotterdam. Weekend Klussen staat dag en nacht voor u klaar bij buitensluiting, sloten reparatie en andere spoedgevallen in Rotterdam. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed slotenmaker service in Rotterdam. Of u nu buitengesloten bent, een slot kapot is, nieuwe sleutels nodig heeft, of inbraakbeveiliging wilt - onze ervaren slotenmakers staan dag en nacht voor u klaar in Rotterdam. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Rotterdam',
          'Buitensluiting verhelpen en slot openen',
          'Slot reparatie en slot vervanging Rotterdam',
          'Sleutels maken en kopiëren',
          'Inbraakbeveiliging installeren Rotterdam',
          'Cilindersloten installeren en repareren',
          'Hangsloten en kluisjes openen',
          'Deursloten en raamsloten reparatie',
        ]}
        nearbyCities={['Schiedam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Capelle aan den IJssel', 'Ridderkerk']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren slotenmakers met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle slotenmaker werkzaamheden',
          'Lokale kennis van Rotterdam',
        ]}
      />
      <Footer />
    </main>
  );
}

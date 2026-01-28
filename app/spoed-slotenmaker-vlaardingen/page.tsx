import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Slotenmaker Vlaardingen | Weekend Klussen 24/7 Spoed Slotenmaker Vlaardingen',
  description: '24/7 spoed slotenmaker service in Vlaardingen. Spoed slotenmaker voor buitensluiting, sloten reparatie en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Vlaardingen',
  service: 'spoed slotenmaker',
  keywords: ['spoed slotenmaker Vlaardingen', '24/7 slotenmaker Vlaardingen', 'spoed slotenmaker service Vlaardingen', 'slotenmaker spoed Vlaardingen'],
});

export default function SpoedSlotenmakerVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Vlaardingen"
        service="Spoed Slotenmaker"
        title="Spoed Slotenmaker Vlaardingen 24/7"
        description="24/7 spoed slotenmaker service in Vlaardingen. Weekend Klussen staat dag en nacht voor u klaar bij buitensluiting, sloten reparatie en andere spoedgevallen in Vlaardingen. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed slotenmaker service in Vlaardingen. Of u nu buitengesloten bent, een slot kapot is, nieuwe sleutels nodig heeft, of inbraakbeveiliging wilt - onze ervaren slotenmakers staan dag en nacht voor u klaar in Vlaardingen. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Vlaardingen',
          'Buitensluiting verhelpen en slot openen',
          'Slot reparatie en slot vervanging Vlaardingen',
          'Sleutels maken en kopiëren',
          'Inbraakbeveiliging installeren Vlaardingen',
          'Cilindersloten installeren en repareren',
          'Hangsloten en kluisjes openen',
          'Deursloten en raamsloten reparatie',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren slotenmakers met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle slotenmaker werkzaamheden',
          'Lokale kennis van Vlaardingen',
        ]}
      />
      <Footer />
    </main>
  );
}

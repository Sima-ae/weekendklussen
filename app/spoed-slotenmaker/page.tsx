import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Slotenmaker | Weekend Klussen 24/7 Spoed Slotenmaker Service',
  description: '24/7 spoed slotenmaker service in Zuid-Holland. Spoed slotenmaker voor buitensluiting, sloten reparatie en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  service: 'spoed slotenmaker',
  keywords: ['spoed slotenmaker', '24/7 slotenmaker', 'spoed slotenmaker service', 'slotenmaker spoed', 'spoed slotenmaker 24/7', 'buitensluiting'],
});

export default function SpoedSlotenmakerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zuid-Holland"
        service="Spoed Slotenmaker"
        title="Spoed Slotenmaker 24/7"
        description="24/7 spoed slotenmaker service voor alle sloten en sleutel problemen. Weekend Klussen staat dag en nacht voor u klaar bij buitensluiting, sloten reparatie en andere spoedgevallen. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed slotenmaker service in heel Zuid-Holland. Of u nu buitengesloten bent, een slot kapot is, nieuwe sleutels nodig heeft, of inbraakbeveiliging wilt - onze ervaren slotenmakers staan dag en nacht voor u klaar. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen',
          'Buitensluiting verhelpen en slot openen',
          'Slot reparatie en slot vervanging',
          'Sleutels maken en kopiëren',
          'Inbraakbeveiliging installeren',
          'Cilindersloten installeren en repareren',
          'Hangsloten en kluisjes openen',
          'Deursloten en raamsloten reparatie',
        ]}
        nearbyCities={['Rotterdam', 'Den Haag', 'Delft', 'Leiden', 'Dordrecht', 'Gouda', 'Zoetermeer']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren slotenmakers met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle slotenmaker werkzaamheden',
          'Lokale service in heel Zuid-Holland',
        ]}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Ontstopper | Weekend Klussen 24/7 Spoed Ontstopper Service',
  description: '24/7 spoed ontstopper service in Zuid-Holland. Spoed ontstopper voor verstoppingen, riool ontstoppen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  service: 'spoed ontstopper',
  keywords: ['spoed ontstopper', '24/7 ontstopper', 'spoed ontstopper service', 'ontstopper spoed', 'spoed ontstoppen', 'riool ontstoppen spoed'],
});

export default function SpoedOntstopperPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zuid-Holland"
        service="Spoed Ontstopper"
        title="Spoed Ontstopper 24/7"
        description="24/7 spoed ontstopper service voor alle verstopping problemen. Weekend Klussen staat dag en nacht voor u klaar bij verstoppingen, riool ontstoppen en andere spoedgevallen. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed ontstopper service in heel Zuid-Holland. Of u nu een verstopping heeft die niet kan wachten, een riool dat dicht zit, of een andere spoedsituatie - onze ervaren ontstopper specialisten staan dag en nacht voor u klaar. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen',
          'Afvoer ontstoppen (keuken, badkamer, douche)',
          'Riolering ontstoppen en reinigen',
          'Toilet ontstoppen en reparatie',
          'Gootsteen ontstoppen',
          'Riool ontstoppen met hogedrukreiniging',
          'Vaatwasser afvoer ontstoppen',
          'Wasmachine afvoer ontstoppen',
        ]}
        nearbyCities={['Rotterdam', 'Den Haag', 'Delft', 'Leiden', 'Dordrecht', 'Gouda', 'Zoetermeer']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren ontstopper specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle ontstoppings werkzaamheden',
          'Lokale service in heel Zuid-Holland',
        ]}
      />
      <Footer />
    </main>
  );
}

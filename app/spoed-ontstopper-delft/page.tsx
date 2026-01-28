import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Ontstopper Delft | Weekend Klussen 24/7 Spoed Ontstopper Delft',
  description: '24/7 spoed ontstopper service in Delft. Spoed ontstopper voor verstoppingen, riool ontstoppen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Delft',
  service: 'spoed ontstopper',
  keywords: ['spoed ontstopper Delft', '24/7 ontstopper Delft', 'spoed ontstopper service Delft', 'ontstopper spoed Delft'],
});

export default function SpoedOntstopperDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Delft"
        service="Spoed Ontstopper"
        title="Spoed Ontstopper Delft 24/7"
        description="24/7 spoed ontstopper service in Delft. Weekend Klussen staat dag en nacht voor u klaar bij verstoppingen, riool ontstoppen en andere spoedgevallen in Delft. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed ontstopper service in Delft. Of u nu een verstopping heeft die niet kan wachten, een riool dat dicht zit, of een andere spoedsituatie - onze ervaren ontstopper specialisten staan dag en nacht voor u klaar in Delft. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Delft',
          'Afvoer ontstoppen (keuken, badkamer, douche)',
          'Riolering ontstoppen en reinigen Delft',
          'Toilet ontstoppen en reparatie',
          'Gootsteen ontstoppen',
          'Riool ontstoppen met hogedrukreiniging',
          'Vaatwasser afvoer ontstoppen',
          'Wasmachine afvoer ontstoppen',
        ]}
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer', 'Leiden']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren ontstopper specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle ontstoppings werkzaamheden',
          'Lokale kennis van Delft',
        ]}
      />
      <Footer />
    </main>
  );
}

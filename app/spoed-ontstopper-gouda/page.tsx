import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Ontstopper Gouda | Weekend Klussen 24/7 Spoed Ontstopper Gouda',
  description: '24/7 spoed ontstopper service in Gouda. Spoed ontstopper voor verstoppingen, riool ontstoppen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Gouda',
  service: 'spoed ontstopper',
  keywords: ['spoed ontstopper Gouda', '24/7 ontstopper Gouda', 'spoed ontstopper service Gouda', 'ontstopper spoed Gouda'],
});

export default function SpoedOntstopperGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Gouda"
        service="Spoed Ontstopper"
        title="Spoed Ontstopper Gouda 24/7"
        description="24/7 spoed ontstopper service in Gouda. Weekend Klussen staat dag en nacht voor u klaar bij verstoppingen, riool ontstoppen en andere spoedgevallen in Gouda. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed ontstopper service in Gouda. Of u nu een verstopping heeft die niet kan wachten, een riool dat dicht zit, of een andere spoedsituatie - onze ervaren ontstopper specialisten staan dag en nacht voor u klaar in Gouda. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Gouda',
          'Afvoer ontstoppen (keuken, badkamer, douche)',
          'Riolering ontstoppen en reinigen Gouda',
          'Toilet ontstoppen en reparatie',
          'Gootsteen ontstoppen',
          'Riool ontstoppen met hogedrukreiniging',
          'Vaatwasser afvoer ontstoppen',
          'Wasmachine afvoer ontstoppen',
        ]}
        nearbyCities={['Rotterdam', 'Dordrecht', 'Leiden', 'Zoetermeer', 'Utrecht', 'Woerden']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren ontstopper specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle ontstoppings werkzaamheden',
          'Lokale kennis van Gouda',
        ]}
      />
      <Footer />
    </main>
  );
}

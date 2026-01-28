import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Ontstopper Maassluis | Weekend Klussen 24/7 Spoed Ontstopper Maassluis',
  description: '24/7 spoed ontstopper service in Maassluis. Spoed ontstopper voor verstoppingen, riool ontstoppen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Maassluis',
  service: 'spoed ontstopper',
  keywords: ['spoed ontstopper Maassluis', '24/7 ontstopper Maassluis', 'spoed ontstopper service Maassluis', 'ontstopper spoed Maassluis'],
});

export default function SpoedOntstopperMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Maassluis"
        service="Spoed Ontstopper"
        title="Spoed Ontstopper Maassluis 24/7"
        description="24/7 spoed ontstopper service in Maassluis. Weekend Klussen staat dag en nacht voor u klaar bij verstoppingen, riool ontstoppen en andere spoedgevallen in Maassluis. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed ontstopper service in Maassluis. Of u nu een verstopping heeft die niet kan wachten, een riool dat dicht zit, of een andere spoedsituatie - onze ervaren ontstopper specialisten staan dag en nacht voor u klaar in Maassluis. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Maassluis',
          'Afvoer ontstoppen (keuken, badkamer, douche)',
          'Riolering ontstoppen en reinigen Maassluis',
          'Toilet ontstoppen en reparatie',
          'Gootsteen ontstoppen',
          'Riool ontstoppen met hogedrukreiniging',
          'Vaatwasser afvoer ontstoppen',
          'Wasmachine afvoer ontstoppen',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren ontstopper specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle ontstoppings werkzaamheden',
          'Lokale kennis van Maassluis',
        ]}
      />
      <Footer />
    </main>
  );
}

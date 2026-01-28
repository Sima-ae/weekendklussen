import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Ontstopper Alphen aan den Rijn | Weekend Klussen 24/7 Spoed Ontstopper Alphen aan den Rijn',
  description: '24/7 spoed ontstopper service in Alphen aan den Rijn. Spoed ontstopper voor verstoppingen, riool ontstoppen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Alphen aan den Rijn',
  service: 'spoed ontstopper',
  keywords: ['spoed ontstopper Alphen aan den Rijn', '24/7 ontstopper Alphen aan den Rijn', 'spoed ontstopper service Alphen aan den Rijn', 'ontstopper spoed Alphen aan den Rijn'],
});

export default function SpoedOntstopperAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Alphen aan den Rijn"
        service="Spoed Ontstopper"
        title="Spoed Ontstopper Alphen aan den Rijn 24/7"
        description="24/7 spoed ontstopper service in Alphen aan den Rijn. Weekend Klussen staat dag en nacht voor u klaar bij verstoppingen, riool ontstoppen en andere spoedgevallen in Alphen aan den Rijn. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed ontstopper service in Alphen aan den Rijn. Of u nu een verstopping heeft die niet kan wachten, een riool dat dicht zit, of een andere spoedsituatie - onze ervaren ontstopper specialisten staan dag en nacht voor u klaar in Alphen aan den Rijn. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Alphen aan den Rijn',
          'Afvoer ontstoppen (keuken, badkamer, douche)',
          'Riolering ontstoppen en reinigen Alphen aan den Rijn',
          'Toilet ontstoppen en reparatie',
          'Gootsteen ontstoppen',
          'Riool ontstoppen met hogedrukreiniging',
          'Vaatwasser afvoer ontstoppen',
          'Wasmachine afvoer ontstoppen',
        ]}
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Woerden', 'Utrecht']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren ontstopper specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle ontstoppings werkzaamheden',
          'Lokale kennis van Alphen aan den Rijn',
        ]}
      />
      <Footer />
    </main>
  );
}

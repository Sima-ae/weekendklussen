import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Verstopping Verhelpen Schiedam | Weekend Klussen Verstopping Verhelpen Schiedam',
  description: 'Professioneel verstopping verhelpen in Schiedam. Verstopping oplossen van afvoeren, riolering, toilet en meer. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Schiedam',
  service: 'verstopping verhelpen',
  keywords: ['verstopping verhelpen Schiedam', 'verstopping oplossen Schiedam', 'riool ontstoppen Schiedam', 'afvoer ontstoppen Schiedam'],
});

export default function VerstoppingVerhelpenSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Schiedam"
        service="Verstopping Verhelpen"
        title="Verstopping Verhelpen Schiedam"
        description="Professioneel verstopping verhelpen in Schiedam. Weekend Klussen lost verstoppingen in afvoeren, riolering, toilet en meer snel en effectief op in Schiedam met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen verzorgt professioneel verstopping verhelpen in Schiedam. Of u nu een verstopping heeft in uw afvoer, riolering, toilet, douche of gootsteen - onze ervaren specialisten lossen het probleem snel en effectief op in Schiedam. Wij gebruiken moderne technieken en apparatuur voor het beste resultaat."
        serviceDetails={[
          'Afvoer ontstoppen in Schiedam (keuken, badkamer, douche)',
          'Riolering ontstoppen en reinigen Schiedam',
          'Toilet ontstoppen en reparatie',
          'Gootsteen ontstoppen',
          'Vaatwasser afvoer ontstoppen',
          'Wasmachine afvoer ontstoppen',
          'Riool ontstoppen met hogedrukreiniging',
          'Preventief onderhoud en inspectie',
        ]}
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Dordrecht']}
        serviceBenefits={[
          'Snelle service, vaak dezelfde dag',
          'Ervaren specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle ontstoppings werkzaamheden',
          '24/7 beschikbaar voor spoedgevallen',
          'Lokale kennis van Schiedam',
        ]}
      />
      <Footer />
    </main>
  );
}

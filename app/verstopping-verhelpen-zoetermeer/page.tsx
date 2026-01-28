import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Verstopping Verhelpen Zoetermeer | Weekend Klussen Verstopping Verhelpen Zoetermeer',
  description: 'Professioneel verstopping verhelpen in Zoetermeer. Verstopping oplossen van afvoeren, riolering, toilet en meer. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Zoetermeer',
  service: 'verstopping verhelpen',
  keywords: ['verstopping verhelpen Zoetermeer', 'verstopping oplossen Zoetermeer', 'riool ontstoppen Zoetermeer', 'afvoer ontstoppen Zoetermeer'],
});

export default function VerstoppingVerhelpenZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zoetermeer"
        service="Verstopping Verhelpen"
        title="Verstopping Verhelpen Zoetermeer"
        description="Professioneel verstopping verhelpen in Zoetermeer. Weekend Klussen lost verstoppingen in afvoeren, riolering, toilet en meer snel en effectief op in Zoetermeer met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen verzorgt professioneel verstopping verhelpen in Zoetermeer. Of u nu een verstopping heeft in uw afvoer, riolering, toilet, douche of gootsteen - onze ervaren specialisten lossen het probleem snel en effectief op in Zoetermeer. Wij gebruiken moderne technieken en apparatuur voor het beste resultaat."
        serviceDetails={[
          'Afvoer ontstoppen in Zoetermeer (keuken, badkamer, douche)',
          'Riolering ontstoppen en reinigen Zoetermeer',
          'Toilet ontstoppen en reparatie',
          'Gootsteen ontstoppen',
          'Vaatwasser afvoer ontstoppen',
          'Wasmachine afvoer ontstoppen',
          'Riool ontstoppen met hogedrukreiniging',
          'Preventief onderhoud en inspectie',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Rijswijk']}
        serviceBenefits={[
          'Snelle service, vaak dezelfde dag',
          'Ervaren specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle ontstoppings werkzaamheden',
          '24/7 beschikbaar voor spoedgevallen',
          'Lokale kennis van Zoetermeer',
        ]}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Verstopping Verhelpen Maassluis | Weekend Klussen Verstopping Verhelpen Maassluis',
  description: 'Professioneel verstopping verhelpen in Maassluis. Verstopping oplossen van afvoeren, riolering, toilet en meer. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Maassluis',
  service: 'verstopping verhelpen',
  keywords: ['verstopping verhelpen Maassluis', 'verstopping oplossen Maassluis', 'riool ontstoppen Maassluis', 'afvoer ontstoppen Maassluis'],
});

export default function VerstoppingVerhelpenMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Maassluis"
        service="Verstopping Verhelpen"
        title="Verstopping Verhelpen Maassluis"
        description="Professioneel verstopping verhelpen in Maassluis. Weekend Klussen lost verstoppingen in afvoeren, riolering, toilet en meer snel en effectief op in Maassluis met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen verzorgt professioneel verstopping verhelpen in Maassluis. Of u nu een verstopping heeft in uw afvoer, riolering, toilet, douche of gootsteen - onze ervaren specialisten lossen het probleem snel en effectief op in Maassluis. Wij gebruiken moderne technieken en apparatuur voor het beste resultaat."
        serviceDetails={[
          'Afvoer ontstoppen in Maassluis (keuken, badkamer, douche)',
          'Riolering ontstoppen en reinigen Maassluis',
          'Toilet ontstoppen en reparatie',
          'Gootsteen ontstoppen',
          'Vaatwasser afvoer ontstoppen',
          'Wasmachine afvoer ontstoppen',
          'Riool ontstoppen met hogedrukreiniging',
          'Preventief onderhoud en inspectie',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          'Snelle service, vaak dezelfde dag',
          'Ervaren specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle ontstoppings werkzaamheden',
          '24/7 beschikbaar voor spoedgevallen',
          'Lokale kennis van Maassluis',
        ]}
      />
      <Footer />
    </main>
  );
}

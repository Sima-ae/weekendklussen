import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Verstopping Verhelpen Vlaardingen | Weekend Klussen Verstopping Verhelpen Vlaardingen',
  description: 'Professioneel verstopping verhelpen in Vlaardingen. Verstopping oplossen van afvoeren, riolering, toilet en meer. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Vlaardingen',
  service: 'verstopping verhelpen',
  keywords: ['verstopping verhelpen Vlaardingen', 'verstopping oplossen Vlaardingen', 'riool ontstoppen Vlaardingen', 'afvoer ontstoppen Vlaardingen'],
});

export default function VerstoppingVerhelpenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Vlaardingen"
        service="Verstopping Verhelpen"
        title="Verstopping Verhelpen Vlaardingen"
        description="Professioneel verstopping verhelpen in Vlaardingen. Weekend Klussen lost verstoppingen in afvoeren, riolering, toilet en meer snel en effectief op in Vlaardingen met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen verzorgt professioneel verstopping verhelpen in Vlaardingen. Of u nu een verstopping heeft in uw afvoer, riolering, toilet, douche of gootsteen - onze ervaren specialisten lossen het probleem snel en effectief op in Vlaardingen. Wij gebruiken moderne technieken en apparatuur voor het beste resultaat."
        serviceDetails={[
          'Afvoer ontstoppen in Vlaardingen (keuken, badkamer, douche)',
          'Riolering ontstoppen en reinigen Vlaardingen',
          'Toilet ontstoppen en reparatie',
          'Gootsteen ontstoppen',
          'Vaatwasser afvoer ontstoppen',
          'Wasmachine afvoer ontstoppen',
          'Riool ontstoppen met hogedrukreiniging',
          'Preventief onderhoud en inspectie',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          'Snelle service, vaak dezelfde dag',
          'Ervaren specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle ontstoppings werkzaamheden',
          '24/7 beschikbaar voor spoedgevallen',
          'Lokale kennis van Vlaardingen',
        ]}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Ontstoppen Zoetermeer | Weekend Klussen Ontstoppings Service Zoetermeer',
  description: 'Professionele ontstoppings service in Zoetermeer. Verstopping verhelpen van afvoeren, riolering, toilet en meer. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Zoetermeer',
  service: 'ontstoppen',
  keywords: ['ontstoppen Zoetermeer', 'verstopping verhelpen Zoetermeer', 'riool ontstoppen Zoetermeer', 'afvoer ontstoppen Zoetermeer'],
});

export default function OntstoppenZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zoetermeer"
        service="Ontstoppen"
        title="Ontstoppen Zoetermeer"
        description="Professionele ontstoppings service in Zoetermeer. Weekend Klussen lost verstoppingen in afvoeren, riolering, toilet en meer snel en effectief op in Zoetermeer met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen verzorgt professionele ontstoppings diensten in Zoetermeer. Of u nu een verstopping heeft in uw afvoer, riolering, toilet, douche of gootsteen - onze ervaren specialisten lossen het probleem snel en effectief op in Zoetermeer. Wij gebruiken moderne technieken en apparatuur voor het beste resultaat."
        serviceDetails={[
          'Afvoer ontstoppen in Zoetermeer (keuken, badkamer, douche)',
          'Riolering ontstoppen en reinigen Zoetermeer',
          'Toilet ontstoppen en reparatie',
          'Gootsteen ontstoppen Zoetermeer',
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

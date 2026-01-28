import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Ontstoppen Leiden | Weekend Klussen Ontstoppings Service Leiden',
  description: 'Professionele ontstoppings service in Leiden. Verstopping verhelpen van afvoeren, riolering, toilet en meer. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Leiden',
  service: 'ontstoppen',
  keywords: ['ontstoppen Leiden', 'verstopping verhelpen Leiden', 'riool ontstoppen Leiden', 'afvoer ontstoppen Leiden'],
});

export default function OntstoppenLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Leiden"
        service="Ontstoppen"
        title="Ontstoppen Leiden"
        description="Professionele ontstoppings service in Leiden. Weekend Klussen lost verstoppingen in afvoeren, riolering, toilet en meer snel en effectief op in Leiden met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen verzorgt professionele ontstoppings diensten in Leiden. Of u nu een verstopping heeft in uw afvoer, riolering, toilet, douche of gootsteen - onze ervaren specialisten lossen het probleem snel en effectief op in Leiden. Wij gebruiken moderne technieken en apparatuur voor het beste resultaat."
        serviceDetails={[
          'Afvoer ontstoppen in Leiden (keuken, badkamer, douche)',
          'Riolering ontstoppen en reinigen Leiden',
          'Toilet ontstoppen en reparatie',
          'Gootsteen ontstoppen Leiden',
          'Vaatwasser afvoer ontstoppen',
          'Wasmachine afvoer ontstoppen',
          'Riool ontstoppen met hogedrukreiniging',
          'Preventief onderhoud en inspectie',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn', 'Katwijk']}
        serviceBenefits={[
          'Snelle service, vaak dezelfde dag',
          'Ervaren specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle ontstoppings werkzaamheden',
          '24/7 beschikbaar voor spoedgevallen',
          'Lokale kennis van Leiden',
        ]}
      />
      <Footer />
    </main>
  );
}

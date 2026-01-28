import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Ontstoppen | Weekend Klussen Ontstoppings Service',
  description: 'Professionele ontstoppings service in Zuid-Holland. Verstopping verhelpen van afvoeren, riolering, toilet en meer. Snelle service, vaste prijzen. Gratis offerte.',
  service: 'ontstoppen',
  keywords: ['ontstoppen', 'verstopping verhelpen', 'riool ontstoppen', 'afvoer ontstoppen', 'toilet ontstoppen', 'ontstoppings service'],
});

export default function OntstoppenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zuid-Holland"
        service="Ontstoppen"
        title="Ontstoppings Service"
        description="Professionele ontstoppings service voor verstoppingen in afvoeren, riolering, toilet en meer. Weekend Klussen lost uw verstopping snel en effectief op met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen verzorgt professionele ontstoppings diensten in heel Zuid-Holland. Of u nu een verstopping heeft in uw afvoer, riolering, toilet, douche of gootsteen - onze ervaren specialisten lossen het probleem snel en effectief op. Wij gebruiken moderne technieken en apparatuur voor het beste resultaat."
        serviceDetails={[
          'Afvoer ontstoppen (keuken, badkamer, douche)',
          'Riolering ontstoppen en reinigen',
          'Toilet ontstoppen en reparatie',
          'Gootsteen ontstoppen',
          'Vaatwasser afvoer ontstoppen',
          'Wasmachine afvoer ontstoppen',
          'Riool ontstoppen met hogedrukreiniging',
          'Preventief onderhoud en inspectie',
        ]}
        nearbyCities={['Rotterdam', 'Den Haag', 'Delft', 'Leiden', 'Dordrecht', 'Gouda', 'Zoetermeer']}
        serviceBenefits={[
          'Snelle service, vaak dezelfde dag',
          'Ervaren specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle ontstoppings werkzaamheden',
          '24/7 beschikbaar voor spoedgevallen',
          'Lokale service in heel Zuid-Holland',
        ]}
      />
      <Footer />
    </main>
  );
}

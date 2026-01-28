import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Ontstoppen Den Haag | Weekend Klussen Ontstoppings Service Den Haag',
  description: 'Professionele ontstoppings service in Den Haag. Verstopping verhelpen van afvoeren, riolering, toilet en meer. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Den Haag',
  service: 'ontstoppen',
  keywords: ['ontstoppen Den Haag', 'verstopping verhelpen Den Haag', 'riool ontstoppen Den Haag', 'afvoer ontstoppen Den Haag'],
});

export default function OntstoppenDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Den Haag"
        service="Ontstoppen"
        title="Ontstoppen Den Haag"
        description="Professionele ontstoppings service in Den Haag. Weekend Klussen lost verstoppingen in afvoeren, riolering, toilet en meer snel en effectief op in Den Haag met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen verzorgt professionele ontstoppings diensten in Den Haag. Of u nu een verstopping heeft in uw afvoer, riolering, toilet, douche of gootsteen - onze ervaren specialisten lossen het probleem snel en effectief op in Den Haag. Wij gebruiken moderne technieken en apparatuur voor het beste resultaat."
        serviceDetails={[
          'Afvoer ontstoppen in Den Haag (keuken, badkamer, douche)',
          'Riolering ontstoppen en reinigen Den Haag',
          'Toilet ontstoppen en reparatie',
          'Gootsteen ontstoppen Den Haag',
          'Vaatwasser afvoer ontstoppen',
          'Wasmachine afvoer ontstoppen',
          'Riool ontstoppen met hogedrukreiniging',
          'Preventief onderhoud en inspectie',
        ]}
        nearbyCities={['Delft', 'Rijswijk', 'Rotterdam', 'Zoetermeer', 'Leiden', 'Voorburg']}
        serviceBenefits={[
          'Snelle service, vaak dezelfde dag',
          'Ervaren specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle ontstoppings werkzaamheden',
          '24/7 beschikbaar voor spoedgevallen',
          'Lokale kennis van Den Haag',
        ]}
      />
      <Footer />
    </main>
  );
}

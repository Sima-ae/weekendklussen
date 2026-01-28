import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Ontstoppen Dordrecht | Weekend Klussen Ontstoppings Service Dordrecht',
  description: 'Professionele ontstoppings service in Dordrecht. Verstopping verhelpen van afvoeren, riolering, toilet en meer. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Dordrecht',
  service: 'ontstoppen',
  keywords: ['ontstoppen Dordrecht', 'verstopping verhelpen Dordrecht', 'riool ontstoppen Dordrecht', 'afvoer ontstoppen Dordrecht'],
});

export default function OntstoppenDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Dordrecht"
        service="Ontstoppen"
        title="Ontstoppen Dordrecht"
        description="Professionele ontstoppings service in Dordrecht. Weekend Klussen lost verstoppingen in afvoeren, riolering, toilet en meer snel en effectief op in Dordrecht met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen verzorgt professionele ontstoppings diensten in Dordrecht. Of u nu een verstopping heeft in uw afvoer, riolering, toilet, douche of gootsteen - onze ervaren specialisten lossen het probleem snel en effectief op in Dordrecht. Wij gebruiken moderne technieken en apparatuur voor het beste resultaat."
        serviceDetails={[
          'Afvoer ontstoppen in Dordrecht (keuken, badkamer, douche)',
          'Riolering ontstoppen en reinigen Dordrecht',
          'Toilet ontstoppen en reparatie',
          'Gootsteen ontstoppen Dordrecht',
          'Vaatwasser afvoer ontstoppen',
          'Wasmachine afvoer ontstoppen',
          'Riool ontstoppen met hogedrukreiniging',
          'Preventief onderhoud en inspectie',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Gouda', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht']}
        serviceBenefits={[
          'Snelle service, vaak dezelfde dag',
          'Ervaren specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle ontstoppings werkzaamheden',
          '24/7 beschikbaar voor spoedgevallen',
          'Lokale kennis van Dordrecht',
        ]}
      />
      <Footer />
    </main>
  );
}

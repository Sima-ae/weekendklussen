import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Ontstoppen Gouda | Weekend Klussen Ontstoppings Service Gouda',
  description: 'Professionele ontstoppings service in Gouda. Verstopping verhelpen van afvoeren, riolering, toilet en meer. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Gouda',
  service: 'ontstoppen',
  keywords: ['ontstoppen Gouda', 'verstopping verhelpen Gouda', 'riool ontstoppen Gouda', 'afvoer ontstoppen Gouda'],
});

export default function OntstoppenGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Gouda"
        service="Ontstoppen"
        title="Ontstoppen Gouda"
        description="Professionele ontstoppings service in Gouda. Weekend Klussen lost verstoppingen in afvoeren, riolering, toilet en meer snel en effectief op in Gouda met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen verzorgt professionele ontstoppings diensten in Gouda. Of u nu een verstopping heeft in uw afvoer, riolering, toilet, douche of gootsteen - onze ervaren specialisten lossen het probleem snel en effectief op in Gouda. Wij gebruiken moderne technieken en apparatuur voor het beste resultaat."
        serviceDetails={[
          'Afvoer ontstoppen in Gouda (keuken, badkamer, douche)',
          'Riolering ontstoppen en reinigen Gouda',
          'Toilet ontstoppen en reparatie',
          'Gootsteen ontstoppen Gouda',
          'Vaatwasser afvoer ontstoppen',
          'Wasmachine afvoer ontstoppen',
          'Riool ontstoppen met hogedrukreiniging',
          'Preventief onderhoud en inspectie',
        ]}
        nearbyCities={['Rotterdam', 'Dordrecht', 'Leiden', 'Zoetermeer', 'Utrecht', 'Woerden']}
        serviceBenefits={[
          'Snelle service, vaak dezelfde dag',
          'Ervaren specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle ontstoppings werkzaamheden',
          '24/7 beschikbaar voor spoedgevallen',
          'Lokale kennis van Gouda',
        ]}
      />
      <Footer />
    </main>
  );
}

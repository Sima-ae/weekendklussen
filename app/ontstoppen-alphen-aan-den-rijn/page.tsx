import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Ontstoppen Alphen aan den Rijn | Weekend Klussen Ontstoppings Service Alphen aan den Rijn',
  description: 'Professionele ontstoppings service in Alphen aan den Rijn. Verstopping verhelpen van afvoeren, riolering, toilet en meer. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Alphen aan den Rijn',
  service: 'ontstoppen',
  keywords: ['ontstoppen Alphen aan den Rijn', 'verstopping verhelpen Alphen aan den Rijn', 'riool ontstoppen Alphen aan den Rijn', 'afvoer ontstoppen Alphen aan den Rijn'],
});

export default function OntstoppenAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Alphen aan den Rijn"
        service="Ontstoppen"
        title="Ontstoppen Alphen aan den Rijn"
        description="Professionele ontstoppings service in Alphen aan den Rijn. Weekend Klussen lost verstoppingen in afvoeren, riolering, toilet en meer snel en effectief op in Alphen aan den Rijn met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen verzorgt professionele ontstoppings diensten in Alphen aan den Rijn. Of u nu een verstopping heeft in uw afvoer, riolering, toilet, douche of gootsteen - onze ervaren specialisten lossen het probleem snel en effectief op in Alphen aan den Rijn. Wij gebruiken moderne technieken en apparatuur voor het beste resultaat."
        serviceDetails={[
          'Afvoer ontstoppen in Alphen aan den Rijn (keuken, badkamer, douche)',
          'Riolering ontstoppen en reinigen Alphen aan den Rijn',
          'Toilet ontstoppen en reparatie',
          'Gootsteen ontstoppen Alphen aan den Rijn',
          'Vaatwasser afvoer ontstoppen',
          'Wasmachine afvoer ontstoppen',
          'Riool ontstoppen met hogedrukreiniging',
          'Preventief onderhoud en inspectie',
        ]}
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Woerden', 'Utrecht']}
        serviceBenefits={[
          'Snelle service, vaak dezelfde dag',
          'Ervaren specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle ontstoppings werkzaamheden',
          '24/7 beschikbaar voor spoedgevallen',
          'Lokale kennis van Alphen aan den Rijn',
        ]}
      />
      <Footer />
    </main>
  );
}

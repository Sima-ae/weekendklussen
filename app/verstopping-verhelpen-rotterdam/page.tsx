import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Verstopping Verhelpen Rotterdam | Weekend Klussen Verstopping Verhelpen Rotterdam',
  description: 'Professioneel verstopping verhelpen in Rotterdam. Verstopping oplossen van afvoeren, riolering, toilet en meer. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Rotterdam',
  service: 'verstopping verhelpen',
  keywords: ['verstopping verhelpen Rotterdam', 'verstopping oplossen Rotterdam', 'riool ontstoppen Rotterdam', 'afvoer ontstoppen Rotterdam'],
});

export default function VerstoppingVerhelpenRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Rotterdam"
        service="Verstopping Verhelpen"
        title="Verstopping Verhelpen Rotterdam"
        description="Professioneel verstopping verhelpen in Rotterdam. Weekend Klussen lost verstoppingen in afvoeren, riolering, toilet en meer snel en effectief op in Rotterdam met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen verzorgt professioneel verstopping verhelpen in Rotterdam. Of u nu een verstopping heeft in uw afvoer, riolering, toilet, douche of gootsteen - onze ervaren specialisten lossen het probleem snel en effectief op in Rotterdam. Wij gebruiken moderne technieken en apparatuur voor het beste resultaat."
        serviceDetails={[
          'Afvoer ontstoppen in Rotterdam (keuken, badkamer, douche)',
          'Riolering ontstoppen en reinigen Rotterdam',
          'Toilet ontstoppen en reparatie',
          'Gootsteen ontstoppen',
          'Vaatwasser afvoer ontstoppen',
          'Wasmachine afvoer ontstoppen',
          'Riool ontstoppen met hogedrukreiniging',
          'Preventief onderhoud en inspectie',
        ]}
        nearbyCities={['Schiedam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Capelle aan den IJssel', 'Ridderkerk']}
        serviceBenefits={[
          'Snelle service, vaak dezelfde dag',
          'Ervaren specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle ontstoppings werkzaamheden',
          '24/7 beschikbaar voor spoedgevallen',
          'Lokale kennis van Rotterdam',
        ]}
      />
      <Footer />
    </main>
  );
}

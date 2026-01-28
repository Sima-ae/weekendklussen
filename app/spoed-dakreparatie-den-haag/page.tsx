import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Dakreparatie Den Haag | Weekend Klussen 24/7 Spoed Dakreparatie Den Haag',
  description: '24/7 spoed dakreparatie service in Den Haag. Spoed dakreparatie voor lekkages, stormschade en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Den Haag',
  service: 'spoed dakreparatie',
  keywords: ['spoed dakreparatie Den Haag', '24/7 dakreparatie Den Haag', 'spoed dakreparatie service Den Haag', 'dakreparatie spoed Den Haag'],
});

export default function SpoedDakreparatieDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Den Haag"
        service="Spoed Dakreparatie"
        title="Spoed Dakreparatie Den Haag 24/7"
        description="24/7 spoed dakreparatie service in Den Haag. Weekend Klussen staat dag en nacht voor u klaar bij lekkages, stormschade en andere spoedgevallen in Den Haag. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed dakreparatie service in Den Haag. Of u nu een lekkage heeft, stormschade aan uw dak, losse dakpannen, of een andere spoedsituatie - onze ervaren dakreparatie specialisten staan dag en nacht voor u klaar in Den Haag. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Den Haag',
          'Dak lekkage reparatie en verhelpen',
          'Stormschade dak reparatie Den Haag',
          'Losse dakpannen repareren en vervangen',
          'Dakgoten reparatie en reiniging',
          'Dakbedekking reparatie Den Haag',
          'Plat dak reparatie en onderhoud',
          'Dak isolatie reparatie',
        ]}
        nearbyCities={['Delft', 'Rijswijk', 'Rotterdam', 'Zoetermeer', 'Leiden', 'Voorburg']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren dakreparatie specialisten met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle dakreparatie werkzaamheden',
          'Lokale kennis van Den Haag',
        ]}
      />
      <Footer />
    </main>
  );
}

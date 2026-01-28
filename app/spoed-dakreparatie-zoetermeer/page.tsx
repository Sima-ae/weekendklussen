import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Dakreparatie Zoetermeer | Weekend Klussen 24/7 Spoed Dakreparatie Zoetermeer',
  description: '24/7 spoed dakreparatie service in Zoetermeer. Spoed dakreparatie voor lekkages, stormschade en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Zoetermeer',
  service: 'spoed dakreparatie',
  keywords: ['spoed dakreparatie Zoetermeer', '24/7 dakreparatie Zoetermeer', 'spoed dakreparatie service Zoetermeer', 'dakreparatie spoed Zoetermeer'],
});

export default function SpoedDakreparatieZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zoetermeer"
        service="Spoed Dakreparatie"
        title="Spoed Dakreparatie Zoetermeer 24/7"
        description="24/7 spoed dakreparatie service in Zoetermeer. Weekend Klussen staat dag en nacht voor u klaar bij lekkages, stormschade en andere spoedgevallen in Zoetermeer. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed dakreparatie service in Zoetermeer. Of u nu een lekkage heeft, stormschade aan uw dak, losse dakpannen, of een andere spoedsituatie - onze ervaren dakreparatie specialisten staan dag en nacht voor u klaar in Zoetermeer. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Zoetermeer',
          'Dak lekkage reparatie en verhelpen',
          'Stormschade dak reparatie Zoetermeer',
          'Losse dakpannen repareren en vervangen',
          'Dakgoten reparatie en reiniging',
          'Dakbedekking reparatie Zoetermeer',
          'Plat dak reparatie en onderhoud',
          'Dak isolatie reparatie',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Rijswijk']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren dakreparatie specialisten met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle dakreparatie werkzaamheden',
          'Lokale kennis van Zoetermeer',
        ]}
      />
      <Footer />
    </main>
  );
}

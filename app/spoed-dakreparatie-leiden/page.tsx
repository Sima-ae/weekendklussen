import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Dakreparatie Leiden | Weekend Klussen 24/7 Spoed Dakreparatie Leiden',
  description: '24/7 spoed dakreparatie service in Leiden. Spoed dakreparatie voor lekkages, stormschade en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Leiden',
  service: 'spoed dakreparatie',
  keywords: ['spoed dakreparatie Leiden', '24/7 dakreparatie Leiden', 'spoed dakreparatie service Leiden', 'dakreparatie spoed Leiden'],
});

export default function SpoedDakreparatieLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Leiden"
        service="Spoed Dakreparatie"
        title="Spoed Dakreparatie Leiden 24/7"
        description="24/7 spoed dakreparatie service in Leiden. Weekend Klussen staat dag en nacht voor u klaar bij lekkages, stormschade en andere spoedgevallen in Leiden. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed dakreparatie service in Leiden. Of u nu een lekkage heeft, stormschade aan uw dak, losse dakpannen, of een andere spoedsituatie - onze ervaren dakreparatie specialisten staan dag en nacht voor u klaar in Leiden. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Leiden',
          'Dak lekkage reparatie en verhelpen',
          'Stormschade dak reparatie Leiden',
          'Losse dakpannen repareren en vervangen',
          'Dakgoten reparatie en reiniging',
          'Dakbedekking reparatie Leiden',
          'Plat dak reparatie en onderhoud',
          'Dak isolatie reparatie',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn', 'Katwijk']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren dakreparatie specialisten met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle dakreparatie werkzaamheden',
          'Lokale kennis van Leiden',
        ]}
      />
      <Footer />
    </main>
  );
}

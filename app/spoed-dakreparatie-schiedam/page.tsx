import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Dakreparatie Schiedam | Weekend Klussen 24/7 Spoed Dakreparatie Schiedam',
  description: '24/7 spoed dakreparatie service in Schiedam. Spoed dakreparatie voor lekkages, stormschade en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Schiedam',
  service: 'spoed dakreparatie',
  keywords: ['spoed dakreparatie Schiedam', '24/7 dakreparatie Schiedam', 'spoed dakreparatie service Schiedam', 'dakreparatie spoed Schiedam'],
});

export default function SpoedDakreparatieSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Schiedam"
        service="Spoed Dakreparatie"
        title="Spoed Dakreparatie Schiedam 24/7"
        description="24/7 spoed dakreparatie service in Schiedam. Weekend Klussen staat dag en nacht voor u klaar bij lekkages, stormschade en andere spoedgevallen in Schiedam. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed dakreparatie service in Schiedam. Of u nu een lekkage heeft, stormschade aan uw dak, losse dakpannen, of een andere spoedsituatie - onze ervaren dakreparatie specialisten staan dag en nacht voor u klaar in Schiedam. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Schiedam',
          'Dak lekkage reparatie en verhelpen',
          'Stormschade dak reparatie Schiedam',
          'Losse dakpannen repareren en vervangen',
          'Dakgoten reparatie en reiniging',
          'Dakbedekking reparatie Schiedam',
          'Plat dak reparatie en onderhoud',
          'Dak isolatie reparatie',
        ]}
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Dordrecht']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren dakreparatie specialisten met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle dakreparatie werkzaamheden',
          'Lokale kennis van Schiedam',
        ]}
      />
      <Footer />
    </main>
  );
}

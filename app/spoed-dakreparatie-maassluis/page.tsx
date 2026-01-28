import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Dakreparatie Maassluis | Weekend Klussen 24/7 Spoed Dakreparatie Maassluis',
  description: '24/7 spoed dakreparatie service in Maassluis. Spoed dakreparatie voor lekkages, stormschade en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Maassluis',
  service: 'spoed dakreparatie',
  keywords: ['spoed dakreparatie Maassluis', '24/7 dakreparatie Maassluis', 'spoed dakreparatie service Maassluis', 'dakreparatie spoed Maassluis'],
});

export default function SpoedDakreparatieMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Maassluis"
        service="Spoed Dakreparatie"
        title="Spoed Dakreparatie Maassluis 24/7"
        description="24/7 spoed dakreparatie service in Maassluis. Weekend Klussen staat dag en nacht voor u klaar bij lekkages, stormschade en andere spoedgevallen in Maassluis. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed dakreparatie service in Maassluis. Of u nu een lekkage heeft, stormschade aan uw dak, losse dakpannen, of een andere spoedsituatie - onze ervaren dakreparatie specialisten staan dag en nacht voor u klaar in Maassluis. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Maassluis',
          'Dak lekkage reparatie en verhelpen',
          'Stormschade dak reparatie Maassluis',
          'Losse dakpannen repareren en vervangen',
          'Dakgoten reparatie en reiniging',
          'Dakbedekking reparatie Maassluis',
          'Plat dak reparatie en onderhoud',
          'Dak isolatie reparatie',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren dakreparatie specialisten met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle dakreparatie werkzaamheden',
          'Lokale kennis van Maassluis',
        ]}
      />
      <Footer />
    </main>
  );
}

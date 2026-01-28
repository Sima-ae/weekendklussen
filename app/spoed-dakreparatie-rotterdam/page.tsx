import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Dakreparatie Rotterdam | Weekend Klussen 24/7 Spoed Dakreparatie Rotterdam',
  description: '24/7 spoed dakreparatie service in Rotterdam. Spoed dakreparatie voor lekkages, stormschade en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Rotterdam',
  service: 'spoed dakreparatie',
  keywords: ['spoed dakreparatie Rotterdam', '24/7 dakreparatie Rotterdam', 'spoed dakreparatie service Rotterdam', 'dakreparatie spoed Rotterdam'],
});

export default function SpoedDakreparatieRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Rotterdam"
        service="Spoed Dakreparatie"
        title="Spoed Dakreparatie Rotterdam 24/7"
        description="24/7 spoed dakreparatie service in Rotterdam. Weekend Klussen staat dag en nacht voor u klaar bij lekkages, stormschade en andere spoedgevallen in Rotterdam. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed dakreparatie service in Rotterdam. Of u nu een lekkage heeft, stormschade aan uw dak, losse dakpannen, of een andere spoedsituatie - onze ervaren dakreparatie specialisten staan dag en nacht voor u klaar in Rotterdam. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Rotterdam',
          'Dak lekkage reparatie en verhelpen',
          'Stormschade dak reparatie Rotterdam',
          'Losse dakpannen repareren en vervangen',
          'Dakgoten reparatie en reiniging',
          'Dakbedekking reparatie Rotterdam',
          'Plat dak reparatie en onderhoud',
          'Dak isolatie reparatie',
        ]}
        nearbyCities={['Schiedam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Capelle aan den IJssel', 'Ridderkerk']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren dakreparatie specialisten met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle dakreparatie werkzaamheden',
          'Lokale kennis van Rotterdam',
        ]}
      />
      <Footer />
    </main>
  );
}

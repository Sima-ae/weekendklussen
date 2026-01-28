import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Loodgieter Vlaardingen | Weekend Klussen 24/7 Spoed Loodgieter Vlaardingen',
  description: '24/7 spoed loodgieter service in Vlaardingen. Spoed loodgieter voor lekkages, verstoppingen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Vlaardingen',
  service: 'spoed loodgieter',
  keywords: ['spoed loodgieter Vlaardingen', '24/7 loodgieter Vlaardingen', 'spoed loodgieter service Vlaardingen', 'loodgieter spoed Vlaardingen'],
});

export default function SpoedLoodgieterVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Vlaardingen"
        service="Spoed Loodgieter"
        title="Spoed Loodgieter Vlaardingen 24/7"
        description="24/7 spoed loodgieter service in Vlaardingen. Weekend Klussen staat dag en nacht voor u klaar bij lekkages, verstoppingen en andere spoedgevallen in Vlaardingen. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed loodgieter service in Vlaardingen. Of u nu midden in de nacht een lekkage heeft, een verstopping die niet kan wachten, of een andere spoedsituatie - onze ervaren loodgieters staan dag en nacht voor u klaar in Vlaardingen. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Vlaardingen',
          'Lekkage reparatie en lekkage detectie',
          'Verstopping verhelpen en ontstoppen',
          'Kraan reparatie en kraan vervanging',
          'CV ketel storing en reparatie',
          'Waterleiding reparatie Vlaardingen',
          'Riolering problemen oplossen',
          'Sanitair reparatie en vervanging',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren loodgieters met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle reparaties',
          'Lokale kennis van Vlaardingen',
        ]}
      />
      <Footer />
    </main>
  );
}

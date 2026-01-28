import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Nacht Loodgieter | Weekend Klussen 24/7 Nacht Loodgieter Service',
  description: '24/7 nacht loodgieter service in Zuid-Holland. Spoed loodgieter voor lekkages, verstoppingen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  service: 'nacht loodgieter',
  keywords: ['nacht loodgieter', '24/7 loodgieter', 'spoed loodgieter', 'nacht loodgieter service', 'loodgieter spoed'],
});

export default function NachtLoodgieterPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zuid-Holland"
        service="Nacht Loodgieter"
        title="Nacht Loodgieter 24/7"
        description="24/7 nacht loodgieter service voor spoedgevallen. Weekend Klussen staat dag en nacht voor u klaar bij lekkages, verstoppingen en andere spoedgevallen. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 nacht loodgieter service in heel Zuid-Holland. Of u nu midden in de nacht een lekkage heeft, een verstopping die niet kan wachten, of een andere spoedsituatie - onze ervaren loodgieters staan dag en nacht voor u klaar. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen',
          'Lekkage reparatie en lekkage detectie',
          'Verstopping verhelpen en ontstoppen',
          'Kraan reparatie en kraan vervanging',
          'CV ketel storing en reparatie',
          'Waterleiding reparatie',
          'Riolering problemen oplossen',
          'Sanitair reparatie en vervanging',
        ]}
        nearbyCities={['Rotterdam', 'Den Haag', 'Delft', 'Leiden', 'Dordrecht', 'Gouda', 'Zoetermeer']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren loodgieters met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle reparaties',
          'Lokale service in heel Zuid-Holland',
        ]}
      />
      <Footer />
    </main>
  );
}

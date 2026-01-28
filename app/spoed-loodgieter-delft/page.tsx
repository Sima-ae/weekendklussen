import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Loodgieter Delft | Weekend Klussen 24/7 Spoed Loodgieter Delft',
  description: '24/7 spoed loodgieter service in Delft. Spoed loodgieter voor lekkages, verstoppingen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Delft',
  service: 'spoed loodgieter',
  keywords: ['spoed loodgieter Delft', '24/7 loodgieter Delft', 'spoed loodgieter service Delft', 'loodgieter spoed Delft'],
});

export default function SpoedLoodgieterDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Delft"
        service="Spoed Loodgieter"
        title="Spoed Loodgieter Delft 24/7"
        description="24/7 spoed loodgieter service in Delft. Weekend Klussen staat dag en nacht voor u klaar bij lekkages, verstoppingen en andere spoedgevallen in Delft. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed loodgieter service in Delft. Of u nu midden in de nacht een lekkage heeft, een verstopping die niet kan wachten, of een andere spoedsituatie - onze ervaren loodgieters staan dag en nacht voor u klaar in Delft. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Delft',
          'Lekkage reparatie en lekkage detectie',
          'Verstopping verhelpen en ontstoppen',
          'Kraan reparatie en kraan vervanging',
          'CV ketel storing en reparatie',
          'Waterleiding reparatie Delft',
          'Riolering problemen oplossen',
          'Sanitair reparatie en vervanging',
        ]}
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer', 'Leiden']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren loodgieters met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle reparaties',
          'Lokale kennis van Delft',
        ]}
      />
      <Footer />
    </main>
  );
}

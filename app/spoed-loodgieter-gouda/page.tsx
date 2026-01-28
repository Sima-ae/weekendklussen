import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Loodgieter Gouda | Weekend Klussen 24/7 Spoed Loodgieter Gouda',
  description: '24/7 spoed loodgieter service in Gouda. Spoed loodgieter voor lekkages, verstoppingen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Gouda',
  service: 'spoed loodgieter',
  keywords: ['spoed loodgieter Gouda', '24/7 loodgieter Gouda', 'spoed loodgieter service Gouda', 'loodgieter spoed Gouda'],
});

export default function SpoedLoodgieterGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Gouda"
        service="Spoed Loodgieter"
        title="Spoed Loodgieter Gouda 24/7"
        description="24/7 spoed loodgieter service in Gouda. Weekend Klussen staat dag en nacht voor u klaar bij lekkages, verstoppingen en andere spoedgevallen in Gouda. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed loodgieter service in Gouda. Of u nu midden in de nacht een lekkage heeft, een verstopping die niet kan wachten, of een andere spoedsituatie - onze ervaren loodgieters staan dag en nacht voor u klaar in Gouda. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Gouda',
          'Lekkage reparatie en lekkage detectie',
          'Verstopping verhelpen en ontstoppen',
          'Kraan reparatie en kraan vervanging',
          'CV ketel storing en reparatie',
          'Waterleiding reparatie Gouda',
          'Riolering problemen oplossen',
          'Sanitair reparatie en vervanging',
        ]}
        nearbyCities={['Rotterdam', 'Dordrecht', 'Leiden', 'Zoetermeer', 'Utrecht', 'Woerden']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren loodgieters met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle reparaties',
          'Lokale kennis van Gouda',
        ]}
      />
      <Footer />
    </main>
  );
}

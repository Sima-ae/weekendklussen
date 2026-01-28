import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Nacht Loodgieter Alphen aan den Rijn | Weekend Klussen 24/7 Nacht Loodgieter Alphen aan den Rijn',
  description: '24/7 nacht loodgieter service in Alphen aan den Rijn. Spoed loodgieter voor lekkages, verstoppingen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Alphen aan den Rijn',
  service: 'nacht loodgieter',
  keywords: ['nacht loodgieter Alphen aan den Rijn', '24/7 loodgieter Alphen aan den Rijn', 'spoed loodgieter Alphen aan den Rijn', 'nacht loodgieter service Alphen aan den Rijn'],
});

export default function NachtLoodgieterAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Alphen aan den Rijn"
        service="Nacht Loodgieter"
        title="Nacht Loodgieter Alphen aan den Rijn 24/7"
        description="24/7 nacht loodgieter service in Alphen aan den Rijn. Weekend Klussen staat dag en nacht voor u klaar bij lekkages, verstoppingen en andere spoedgevallen in Alphen aan den Rijn. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 nacht loodgieter service in Alphen aan den Rijn. Of u nu midden in de nacht een lekkage heeft, een verstopping die niet kan wachten, of een andere spoedsituatie - onze ervaren loodgieters staan dag en nacht voor u klaar in Alphen aan den Rijn. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Alphen aan den Rijn',
          'Lekkage reparatie en lekkage detectie',
          'Verstopping verhelpen en ontstoppen',
          'Kraan reparatie en kraan vervanging',
          'CV ketel storing en reparatie',
          'Waterleiding reparatie Alphen aan den Rijn',
          'Riolering problemen oplossen',
          'Sanitair reparatie en vervanging',
        ]}
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Woerden', 'Utrecht']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren loodgieters met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle reparaties',
          'Lokale kennis van Alphen aan den Rijn',
        ]}
      />
      <Footer />
    </main>
  );
}

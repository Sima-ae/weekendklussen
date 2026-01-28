import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Slotenmaker Gouda | Weekend Klussen 24/7 Slotenmaker Gouda',
  description: '24/7 slotenmaker service in Gouda. Slotenmaker voor sloten reparatie, sleutels maken, inbraakbeveiliging en meer. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Gouda',
  service: 'slotenmaker',
  keywords: ['slotenmaker Gouda', '24/7 slotenmaker Gouda', 'slotenmaker service Gouda', 'slot reparatie Gouda'],
});

export default function SlotenmakerGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Gouda"
        service="Slotenmaker"
        title="Slotenmaker Gouda 24/7"
        description="24/7 slotenmaker service in Gouda. Weekend Klussen staat dag en nacht voor u klaar bij sloten en sleutel problemen in Gouda. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 slotenmaker service in Gouda. Of u nu buitengesloten bent, een slot kapot is, nieuwe sleutels nodig heeft, of inbraakbeveiliging wilt - onze ervaren slotenmakers staan dag en nacht voor u klaar in Gouda. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Gouda',
          'Buitensluiting verhelpen en slot openen',
          'Slot reparatie en slot vervanging Gouda',
          'Sleutels maken en kopiëren',
          'Inbraakbeveiliging installeren Gouda',
          'Cilindersloten installeren en repareren',
          'Hangsloten en kluisjes openen',
          'Deursloten en raamsloten reparatie',
        ]}
        nearbyCities={['Rotterdam', 'Dordrecht', 'Leiden', 'Zoetermeer', 'Utrecht', 'Woerden']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren slotenmakers met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle slotenmaker werkzaamheden',
          'Lokale kennis van Gouda',
        ]}
      />
      <Footer />
    </main>
  );
}

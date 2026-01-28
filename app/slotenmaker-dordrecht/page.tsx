import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Slotenmaker Dordrecht | Weekend Klussen 24/7 Slotenmaker Dordrecht',
  description: '24/7 slotenmaker service in Dordrecht. Slotenmaker voor sloten reparatie, sleutels maken, inbraakbeveiliging en meer. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Dordrecht',
  service: 'slotenmaker',
  keywords: ['slotenmaker Dordrecht', '24/7 slotenmaker Dordrecht', 'slotenmaker service Dordrecht', 'slot reparatie Dordrecht'],
});

export default function SlotenmakerDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Dordrecht"
        service="Slotenmaker"
        title="Slotenmaker Dordrecht 24/7"
        description="24/7 slotenmaker service in Dordrecht. Weekend Klussen staat dag en nacht voor u klaar bij sloten en sleutel problemen in Dordrecht. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 slotenmaker service in Dordrecht. Of u nu buitengesloten bent, een slot kapot is, nieuwe sleutels nodig heeft, of inbraakbeveiliging wilt - onze ervaren slotenmakers staan dag en nacht voor u klaar in Dordrecht. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Dordrecht',
          'Buitensluiting verhelpen en slot openen',
          'Slot reparatie en slot vervanging Dordrecht',
          'Sleutels maken en kopiëren',
          'Inbraakbeveiliging installeren Dordrecht',
          'Cilindersloten installeren en repareren',
          'Hangsloten en kluisjes openen',
          'Deursloten en raamsloten reparatie',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Gouda', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren slotenmakers met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle slotenmaker werkzaamheden',
          'Lokale kennis van Dordrecht',
        ]}
      />
      <Footer />
    </main>
  );
}

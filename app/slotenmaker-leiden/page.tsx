import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Slotenmaker Leiden | Weekend Klussen 24/7 Slotenmaker Leiden',
  description: '24/7 slotenmaker service in Leiden. Slotenmaker voor sloten reparatie, sleutels maken, inbraakbeveiliging en meer. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Leiden',
  service: 'slotenmaker',
  keywords: ['slotenmaker Leiden', '24/7 slotenmaker Leiden', 'slotenmaker service Leiden', 'slot reparatie Leiden'],
});

export default function SlotenmakerLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Leiden"
        service="Slotenmaker"
        title="Slotenmaker Leiden 24/7"
        description="24/7 slotenmaker service in Leiden. Weekend Klussen staat dag en nacht voor u klaar bij sloten en sleutel problemen in Leiden. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 slotenmaker service in Leiden. Of u nu buitengesloten bent, een slot kapot is, nieuwe sleutels nodig heeft, of inbraakbeveiliging wilt - onze ervaren slotenmakers staan dag en nacht voor u klaar in Leiden. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Leiden',
          'Buitensluiting verhelpen en slot openen',
          'Slot reparatie en slot vervanging Leiden',
          'Sleutels maken en kopiëren',
          'Inbraakbeveiliging installeren Leiden',
          'Cilindersloten installeren en repareren',
          'Hangsloten en kluisjes openen',
          'Deursloten en raamsloten reparatie',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn', 'Katwijk']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren slotenmakers met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle slotenmaker werkzaamheden',
          'Lokale kennis van Leiden',
        ]}
      />
      <Footer />
    </main>
  );
}

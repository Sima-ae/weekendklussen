import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Slotenmaker Alphen aan den Rijn | Weekend Klussen 24/7 Spoed Slotenmaker Alphen aan den Rijn',
  description: '24/7 spoed slotenmaker service in Alphen aan den Rijn. Spoed slotenmaker voor buitensluiting, sloten reparatie en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Alphen aan den Rijn',
  service: 'spoed slotenmaker',
  keywords: ['spoed slotenmaker Alphen aan den Rijn', '24/7 slotenmaker Alphen aan den Rijn', 'spoed slotenmaker service Alphen aan den Rijn', 'slotenmaker spoed Alphen aan den Rijn'],
});

export default function SpoedSlotenmakerAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Alphen aan den Rijn"
        service="Spoed Slotenmaker"
        title="Spoed Slotenmaker Alphen aan den Rijn 24/7"
        description="24/7 spoed slotenmaker service in Alphen aan den Rijn. Weekend Klussen staat dag en nacht voor u klaar bij buitensluiting, sloten reparatie en andere spoedgevallen in Alphen aan den Rijn. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed slotenmaker service in Alphen aan den Rijn. Of u nu buitengesloten bent, een slot kapot is, nieuwe sleutels nodig heeft, of inbraakbeveiliging wilt - onze ervaren slotenmakers staan dag en nacht voor u klaar in Alphen aan den Rijn. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Alphen aan den Rijn',
          'Buitensluiting verhelpen en slot openen',
          'Slot reparatie en slot vervanging Alphen aan den Rijn',
          'Sleutels maken en kopiëren',
          'Inbraakbeveiliging installeren Alphen aan den Rijn',
          'Cilindersloten installeren en repareren',
          'Hangsloten en kluisjes openen',
          'Deursloten en raamsloten reparatie',
        ]}
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Woerden', 'Utrecht']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren slotenmakers met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle slotenmaker werkzaamheden',
          'Lokale kennis van Alphen aan den Rijn',
        ]}
      />
      <Footer />
    </main>
  );
}

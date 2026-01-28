import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'PVC Vloeren Vlaardingen | Weekend Klussen PVC Vloeren Leggen Vlaardingen',
  description: 'Professioneel PVC vloeren leggen in Vlaardingen. PVC vloer installatie, renovatie en onderhoud. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Vlaardingen',
  service: 'pvc-vloeren',
  keywords: ['pvc vloeren Vlaardingen', 'pvc vloer leggen Vlaardingen', 'pvc vloer installatie Vlaardingen', 'pvc vloeren leggen Vlaardingen'],
});

export default function PvcVloerenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Vlaardingen"
        service="PVC Vloeren"
        title="PVC Vloeren Vlaardingen"
        description="Professioneel PVC vloeren leggen in Vlaardingen. Weekend Klussen verzorgt PVC vloer installatie, renovatie en onderhoud in Vlaardingen met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel PVC vloeren leggen in Vlaardingen. Of u nu een nieuwe PVC vloer wilt laten leggen, een bestaande PVC vloer wilt renoveren, of onderhoud nodig heeft - onze ervaren vakmannen zorgen voor een perfecte uitvoering in Vlaardingen. Wij werken met alle bekende PVC vloer merken en soorten."
        serviceDetails={[
          'PVC vloer leggen en installatie Vlaardingen',
          'PVC vloer renovatie en reparatie',
          'PVC vloer voorbereiding en egaliseren',
          'PVC vloer plinten plaatsen Vlaardingen',
          'PVC vloer onderhoud en reiniging',
          'PVC vloer verwijderen en vervangen',
          'PVC vloer advies en keuze begeleiding',
          'PVC vloer voor alle ruimtes (woonkamer, keuken, badkamer)',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle PVC vloer werkzaamheden',
          'Werken met alle bekende PVC vloer merken',
          'Lokale kennis van Vlaardingen',
        ]}
      />
      <Footer />
    </main>
  );
}

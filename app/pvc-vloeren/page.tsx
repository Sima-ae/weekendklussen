import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'PVC Vloeren | Weekend Klussen PVC Vloeren Leggen en Renoveren',
  description: 'Professioneel PVC vloeren leggen in Zuid-Holland. PVC vloer installatie, renovatie en onderhoud. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  service: 'pvc-vloeren',
  keywords: ['pvc vloeren', 'pvc vloer leggen', 'pvc vloer installatie', 'pvc vloeren leggen', 'pvc vloer renovatie'],
});

export default function PvcVloerenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zuid-Holland"
        service="PVC Vloeren"
        title="PVC Vloeren Leggen"
        description="Professioneel PVC vloeren leggen en installeren in heel Zuid-Holland. Weekend Klussen verzorgt PVC vloer installatie, renovatie en onderhoud met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel PVC vloeren leggen in heel Zuid-Holland. Of u nu een nieuwe PVC vloer wilt laten leggen, een bestaande PVC vloer wilt renoveren, of onderhoud nodig heeft - onze ervaren vakmannen zorgen voor een perfecte uitvoering. Wij werken met alle bekende PVC vloer merken en soorten."
        serviceDetails={[
          'PVC vloer leggen en installatie',
          'PVC vloer renovatie en reparatie',
          'PVC vloer voorbereiding en egaliseren',
          'PVC vloer plinten plaatsen',
          'PVC vloer onderhoud en reiniging',
          'PVC vloer verwijderen en vervangen',
          'PVC vloer advies en keuze begeleiding',
          'PVC vloer voor alle ruimtes (woonkamer, keuken, badkamer)',
        ]}
        nearbyCities={['Rotterdam', 'Den Haag', 'Delft', 'Leiden', 'Dordrecht', 'Gouda', 'Zoetermeer']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle PVC vloer werkzaamheden',
          'Werken met alle bekende PVC vloer merken',
          'Lokale service in heel Zuid-Holland',
        ]}
      />
      <Footer />
    </main>
  );
}

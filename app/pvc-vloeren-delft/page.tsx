import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'PVC Vloeren Delft | Weekend Klussen PVC Vloeren Leggen Delft',
  description: 'Professioneel PVC vloeren leggen in Delft. PVC vloer installatie, renovatie en onderhoud. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Delft',
  service: 'pvc-vloeren',
  keywords: ['pvc vloeren Delft', 'pvc vloer leggen Delft', 'pvc vloer installatie Delft', 'pvc vloeren leggen Delft'],
});

export default function PvcVloerenDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Delft"
        service="PVC Vloeren"
        title="PVC Vloeren Delft"
        description="Professioneel PVC vloeren leggen in Delft. Weekend Klussen verzorgt PVC vloer installatie, renovatie en onderhoud in Delft met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel PVC vloeren leggen in Delft. Of u nu een nieuwe PVC vloer wilt laten leggen, een bestaande PVC vloer wilt renoveren, of onderhoud nodig heeft - onze ervaren vakmannen zorgen voor een perfecte uitvoering in Delft. Wij werken met alle bekende PVC vloer merken en soorten."
        serviceDetails={[
          'PVC vloer leggen en installatie Delft',
          'PVC vloer renovatie en reparatie',
          'PVC vloer voorbereiding en egaliseren',
          'PVC vloer plinten plaatsen Delft',
          'PVC vloer onderhoud en reiniging',
          'PVC vloer verwijderen en vervangen',
          'PVC vloer advies en keuze begeleiding',
          'PVC vloer voor alle ruimtes (woonkamer, keuken, badkamer)',
        ]}
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer', 'Leiden']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle PVC vloer werkzaamheden',
          'Werken met alle bekende PVC vloer merken',
          'Lokale kennis van Delft',
        ]}
      />
      <Footer />
    </main>
  );
}

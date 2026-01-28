import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'PVC Vloeren Dordrecht | Weekend Klussen PVC Vloeren Leggen Dordrecht',
  description: 'Professioneel PVC vloeren leggen in Dordrecht. PVC vloer installatie, renovatie en onderhoud. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Dordrecht',
  service: 'pvc-vloeren',
  keywords: ['pvc vloeren Dordrecht', 'pvc vloer leggen Dordrecht', 'pvc vloer installatie Dordrecht', 'pvc vloeren leggen Dordrecht'],
});

export default function PvcVloerenDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Dordrecht"
        service="PVC Vloeren"
        title="PVC Vloeren Dordrecht"
        description="Professioneel PVC vloeren leggen in Dordrecht. Weekend Klussen verzorgt PVC vloer installatie, renovatie en onderhoud in Dordrecht met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel PVC vloeren leggen in Dordrecht. Of u nu een nieuwe PVC vloer wilt laten leggen, een bestaande PVC vloer wilt renoveren, of onderhoud nodig heeft - onze ervaren vakmannen zorgen voor een perfecte uitvoering in Dordrecht. Wij werken met alle bekende PVC vloer merken en soorten."
        serviceDetails={[
          'PVC vloer leggen en installatie Dordrecht',
          'PVC vloer renovatie en reparatie',
          'PVC vloer voorbereiding en egaliseren',
          'PVC vloer plinten plaatsen Dordrecht',
          'PVC vloer onderhoud en reiniging',
          'PVC vloer verwijderen en vervangen',
          'PVC vloer advies en keuze begeleiding',
          'PVC vloer voor alle ruimtes (woonkamer, keuken, badkamer)',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Gouda', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle PVC vloer werkzaamheden',
          'Werken met alle bekende PVC vloer merken',
          'Lokale kennis van Dordrecht',
        ]}
      />
      <Footer />
    </main>
  );
}

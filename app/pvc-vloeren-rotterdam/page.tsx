import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'PVC Vloeren Rotterdam | Weekend Klussen PVC Vloeren Leggen Rotterdam',
  description: 'Professioneel PVC vloeren leggen in Rotterdam. PVC vloer installatie, renovatie en onderhoud. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Rotterdam',
  service: 'pvc-vloeren',
  keywords: ['pvc vloeren Rotterdam', 'pvc vloer leggen Rotterdam', 'pvc vloer installatie Rotterdam', 'pvc vloeren leggen Rotterdam'],
});

export default function PvcVloerenRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Rotterdam"
        service="PVC Vloeren"
        title="PVC Vloeren Rotterdam"
        description="Professioneel PVC vloeren leggen in Rotterdam. Weekend Klussen verzorgt PVC vloer installatie, renovatie en onderhoud in Rotterdam met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel PVC vloeren leggen in Rotterdam. Of u nu een nieuwe PVC vloer wilt laten leggen, een bestaande PVC vloer wilt renoveren, of onderhoud nodig heeft - onze ervaren vakmannen zorgen voor een perfecte uitvoering in Rotterdam. Wij werken met alle bekende PVC vloer merken en soorten."
        serviceDetails={[
          'PVC vloer leggen en installatie Rotterdam',
          'PVC vloer renovatie en reparatie',
          'PVC vloer voorbereiding en egaliseren',
          'PVC vloer plinten plaatsen Rotterdam',
          'PVC vloer onderhoud en reiniging',
          'PVC vloer verwijderen en vervangen',
          'PVC vloer advies en keuze begeleiding',
          'PVC vloer voor alle ruimtes (woonkamer, keuken, badkamer)',
        ]}
        nearbyCities={['Schiedam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Capelle aan den IJssel', 'Ridderkerk']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle PVC vloer werkzaamheden',
          'Werken met alle bekende PVC vloer merken',
          'Lokale kennis van Rotterdam',
        ]}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Vloeren Egaliseren Zoetermeer | Weekend Klussen Vloeren Egaliseren Zoetermeer',
  description: 'Professioneel vloeren egaliseren in Zoetermeer. Vloer egaliseren voor een vlakke ondergrond. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Zoetermeer',
  service: 'vloeren egaliseren',
  keywords: ['vloeren egaliseren Zoetermeer', 'vloer egaliseren Zoetermeer', 'vloer egalisatie Zoetermeer', 'vloer vlak maken Zoetermeer'],
});

export default function VloerenEgaliserenZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zoetermeer"
        service="Vloeren Egaliseren"
        title="Vloeren Egaliseren Zoetermeer"
        description="Professioneel vloeren egaliseren in Zoetermeer. Weekend Klussen verzorgt vloer egalisatie in Zoetermeer met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel vloeren egaliseren in Zoetermeer. Of u nu een nieuwe vloer wilt leggen, bestaande oneffenheden wilt oplossen, of een perfect vlakke ondergrond nodig heeft - onze ervaren vakmannen egaliseren uw vloer met hoogwaardige egalisatie materialen in Zoetermeer. Wij zorgen voor een perfect vlakke, stevige ondergrond voor uw nieuwe vloer."
        serviceDetails={[
          'Vloer egaliseren met egalisatie mortel Zoetermeer',
          'Oneffenheden in vloer oplossen',
          'Vloer voorbereiden voor nieuwe vloerbedekking',
          'Vloer egaliseren voor laminaat, PVC en parket',
          'Vloer egaliseren voor tegels',
          'Vloer schuren en voorbehandelen',
          'Vloer isolatie en ondervloer',
          'Garantie op alle egalisatie werkzaamheden',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Rijswijk']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige egalisatie materialen',
          'Garantie op alle egalisatie werkzaamheden',
          'Lokale kennis van Zoetermeer',
        ]}
      />
      <Footer />
    </main>
  );
}

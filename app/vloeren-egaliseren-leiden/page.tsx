import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Vloeren Egaliseren Leiden | Weekend Klussen Vloeren Egaliseren Leiden',
  description: 'Professioneel vloeren egaliseren in Leiden. Vloer egaliseren voor een vlakke ondergrond. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Leiden',
  service: 'vloeren egaliseren',
  keywords: ['vloeren egaliseren Leiden', 'vloer egaliseren Leiden', 'vloer egalisatie Leiden', 'vloer vlak maken Leiden'],
});

export default function VloerenEgaliserenLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Leiden"
        service="Vloeren Egaliseren"
        title="Vloeren Egaliseren Leiden"
        description="Professioneel vloeren egaliseren in Leiden. Weekend Klussen verzorgt vloer egalisatie in Leiden met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel vloeren egaliseren in Leiden. Of u nu een nieuwe vloer wilt leggen, bestaande oneffenheden wilt oplossen, of een perfect vlakke ondergrond nodig heeft - onze ervaren vakmannen egaliseren uw vloer met hoogwaardige egalisatie materialen in Leiden. Wij zorgen voor een perfect vlakke, stevige ondergrond voor uw nieuwe vloer."
        serviceDetails={[
          'Vloer egaliseren met egalisatie mortel Leiden',
          'Oneffenheden in vloer oplossen',
          'Vloer voorbereiden voor nieuwe vloerbedekking',
          'Vloer egaliseren voor laminaat, PVC en parket',
          'Vloer egaliseren voor tegels',
          'Vloer schuren en voorbehandelen',
          'Vloer isolatie en ondervloer',
          'Garantie op alle egalisatie werkzaamheden',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn', 'Katwijk']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige egalisatie materialen',
          'Garantie op alle egalisatie werkzaamheden',
          'Lokale kennis van Leiden',
        ]}
      />
      <Footer />
    </main>
  );
}

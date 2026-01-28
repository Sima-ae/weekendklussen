import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Vloeren Egaliseren Gouda | Weekend Klussen Vloeren Egaliseren Gouda',
  description: 'Professioneel vloeren egaliseren in Gouda. Vloer egaliseren voor een vlakke ondergrond. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Gouda',
  service: 'vloeren egaliseren',
  keywords: ['vloeren egaliseren Gouda', 'vloer egaliseren Gouda', 'vloer egalisatie Gouda', 'vloer vlak maken Gouda'],
});

export default function VloerenEgaliserenGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Gouda"
        service="Vloeren Egaliseren"
        title="Vloeren Egaliseren Gouda"
        description="Professioneel vloeren egaliseren in Gouda. Weekend Klussen verzorgt vloer egalisatie in Gouda met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel vloeren egaliseren in Gouda. Of u nu een nieuwe vloer wilt leggen, bestaande oneffenheden wilt oplossen, of een perfect vlakke ondergrond nodig heeft - onze ervaren vakmannen egaliseren uw vloer met hoogwaardige egalisatie materialen in Gouda. Wij zorgen voor een perfect vlakke, stevige ondergrond voor uw nieuwe vloer."
        serviceDetails={[
          'Vloer egaliseren met egalisatie mortel Gouda',
          'Oneffenheden in vloer oplossen',
          'Vloer voorbereiden voor nieuwe vloerbedekking',
          'Vloer egaliseren voor laminaat, PVC en parket',
          'Vloer egaliseren voor tegels',
          'Vloer schuren en voorbehandelen',
          'Vloer isolatie en ondervloer',
          'Garantie op alle egalisatie werkzaamheden',
        ]}
        nearbyCities={['Rotterdam', 'Dordrecht', 'Leiden', 'Zoetermeer', 'Utrecht', 'Woerden']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige egalisatie materialen',
          'Garantie op alle egalisatie werkzaamheden',
          'Lokale kennis van Gouda',
        ]}
      />
      <Footer />
    </main>
  );
}

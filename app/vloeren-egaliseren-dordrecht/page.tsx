import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Vloeren Egaliseren Dordrecht | Weekend Klussen Vloeren Egaliseren Dordrecht',
  description: 'Professioneel vloeren egaliseren in Dordrecht. Vloer egaliseren voor een vlakke ondergrond. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Dordrecht',
  service: 'vloeren egaliseren',
  keywords: ['vloeren egaliseren Dordrecht', 'vloer egaliseren Dordrecht', 'vloer egalisatie Dordrecht', 'vloer vlak maken Dordrecht'],
});

export default function VloerenEgaliserenDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Dordrecht"
        service="Vloeren Egaliseren"
        title="Vloeren Egaliseren Dordrecht"
        description="Professioneel vloeren egaliseren in Dordrecht. Weekend Klussen verzorgt vloer egalisatie in Dordrecht met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel vloeren egaliseren in Dordrecht. Of u nu een nieuwe vloer wilt leggen, bestaande oneffenheden wilt oplossen, of een perfect vlakke ondergrond nodig heeft - onze ervaren vakmannen egaliseren uw vloer met hoogwaardige egalisatie materialen in Dordrecht. Wij zorgen voor een perfect vlakke, stevige ondergrond voor uw nieuwe vloer."
        serviceDetails={[
          'Vloer egaliseren met egalisatie mortel Dordrecht',
          'Oneffenheden in vloer oplossen',
          'Vloer voorbereiden voor nieuwe vloerbedekking',
          'Vloer egaliseren voor laminaat, PVC en parket',
          'Vloer egaliseren voor tegels',
          'Vloer schuren en voorbehandelen',
          'Vloer isolatie en ondervloer',
          'Garantie op alle egalisatie werkzaamheden',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Gouda', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige egalisatie materialen',
          'Garantie op alle egalisatie werkzaamheden',
          'Lokale kennis van Dordrecht',
        ]}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Vloeren Egaliseren Alphen aan den Rijn | Weekend Klussen Vloeren Egaliseren Alphen aan den Rijn',
  description: 'Professioneel vloeren egaliseren in Alphen aan den Rijn. Vloer egaliseren voor een vlakke ondergrond. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Alphen aan den Rijn',
  service: 'vloeren egaliseren',
  keywords: ['vloeren egaliseren Alphen aan den Rijn', 'vloer egaliseren Alphen aan den Rijn', 'vloer egalisatie Alphen aan den Rijn', 'vloer vlak maken Alphen aan den Rijn'],
});

export default function VloerenEgaliserenAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Alphen aan den Rijn"
        service="Vloeren Egaliseren"
        title="Vloeren Egaliseren Alphen aan den Rijn"
        description="Professioneel vloeren egaliseren in Alphen aan den Rijn. Weekend Klussen verzorgt vloer egalisatie in Alphen aan den Rijn met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel vloeren egaliseren in Alphen aan den Rijn. Of u nu een nieuwe vloer wilt leggen, bestaande oneffenheden wilt oplossen, of een perfect vlakke ondergrond nodig heeft - onze ervaren vakmannen egaliseren uw vloer met hoogwaardige egalisatie materialen in Alphen aan den Rijn. Wij zorgen voor een perfect vlakke, stevige ondergrond voor uw nieuwe vloer."
        serviceDetails={[
          'Vloer egaliseren met egalisatie mortel Alphen aan den Rijn',
          'Oneffenheden in vloer oplossen',
          'Vloer voorbereiden voor nieuwe vloerbedekking',
          'Vloer egaliseren voor laminaat, PVC en parket',
          'Vloer egaliseren voor tegels',
          'Vloer schuren en voorbehandelen',
          'Vloer isolatie en ondervloer',
          'Garantie op alle egalisatie werkzaamheden',
        ]}
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Woerden', 'Utrecht']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige egalisatie materialen',
          'Garantie op alle egalisatie werkzaamheden',
          'Lokale kennis van Alphen aan den Rijn',
        ]}
      />
      <Footer />
    </main>
  );
}

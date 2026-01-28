import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Vloeren Leiden | Weekend Klussen Vloeren Leiden',
  description: 'Professionele vloeren service in Leiden. Vloeren leggen, renoveren en onderhouden. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Leiden',
  service: 'vloeren',
  keywords: ['vloeren Leiden', 'vloeren leggen Leiden', 'vloeren renovatie Leiden', 'vloerbedekking Leiden'],
});

export default function VloerenLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Leiden"
        service="Vloeren"
        title="Vloeren Leiden"
        description="Professionele vloeren service in Leiden. Weekend Klussen verzorgt vloeren leggen, renoveren en onderhouden in Leiden met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professionele vloeren service in Leiden. Of u nu nieuwe vloeren wilt laten leggen, bestaande vloeren wilt renoveren, of vloeronderhoud nodig heeft - onze ervaren vakmannen zorgen voor een perfecte uitvoering in Leiden. Wij werken met diverse vloermaterialen en zorgen voor een vlakke, duurzame vloer."
        serviceDetails={[
          'Vloeren leggen in Leiden (laminaat, PVC, parket, tegels)',
          'Vloeren renoveren en opknappen',
          'Vloer egaliseren en voorbereiden Leiden',
          'Vloerbedekking verwijderen en plaatsen',
          'Vloer isolatie en ondervloer',
          'Vloer reparatie en onderhoud',
          'Vloer schuren en behandelen',
          'Vloer afwerking en plinten',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn', 'Katwijk']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle vloer werkzaamheden',
          'Werk met diverse vloermaterialen',
          'Lokale kennis van Leiden',
        ]}
      />
      <Footer />
    </main>
  );
}

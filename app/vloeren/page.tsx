import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Vloeren | Weekend Klussen Vloeren Service',
  description: 'Professionele vloeren service in Zuid-Holland. Vloeren leggen, renoveren en onderhouden. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  service: 'vloeren',
  keywords: ['vloeren', 'vloeren leggen', 'vloeren renovatie', 'vloerbedekking', 'vloeren service'],
});

export default function VloerenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zuid-Holland"
        service="Vloeren"
        title="Vloeren"
        description="Professionele vloeren service voor alle vloerwerkzaamheden. Weekend Klussen verzorgt vloeren leggen, renoveren en onderhouden met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professionele vloeren service in heel Zuid-Holland. Of u nu nieuwe vloeren wilt laten leggen, bestaande vloeren wilt renoveren, of vloeronderhoud nodig heeft - onze ervaren vakmannen zorgen voor een perfecte uitvoering. Wij werken met diverse vloermaterialen en zorgen voor een vlakke, duurzame vloer."
        serviceDetails={[
          'Vloeren leggen (laminaat, PVC, parket, tegels)',
          'Vloeren renoveren en opknappen',
          'Vloer egaliseren en voorbereiden',
          'Vloerbedekking verwijderen en plaatsen',
          'Vloer isolatie en ondervloer',
          'Vloer reparatie en onderhoud',
          'Vloer schuren en behandelen',
          'Vloer afwerking en plinten',
        ]}
        nearbyCities={['Rotterdam', 'Den Haag', 'Delft', 'Leiden', 'Dordrecht', 'Gouda', 'Zoetermeer']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle vloer werkzaamheden',
          'Werk met diverse vloermaterialen',
          'Lokale service in heel Zuid-Holland',
        ]}
      />
      <Footer />
    </main>
  );
}

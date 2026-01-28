import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Vloeren Gouda | Weekend Klussen Vloeren Gouda',
  description: 'Professionele vloeren service in Gouda. Vloeren leggen, renoveren en onderhouden. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Gouda',
  service: 'vloeren',
  keywords: ['vloeren Gouda', 'vloeren leggen Gouda', 'vloeren renovatie Gouda', 'vloerbedekking Gouda'],
});

export default function VloerenGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Gouda"
        service="Vloeren"
        title="Vloeren Gouda"
        description="Professionele vloeren service in Gouda. Weekend Klussen verzorgt vloeren leggen, renoveren en onderhouden in Gouda met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professionele vloeren service in Gouda. Of u nu nieuwe vloeren wilt laten leggen, bestaande vloeren wilt renoveren, of vloeronderhoud nodig heeft - onze ervaren vakmannen zorgen voor een perfecte uitvoering in Gouda. Wij werken met diverse vloermaterialen en zorgen voor een vlakke, duurzame vloer."
        serviceDetails={[
          'Vloeren leggen in Gouda (laminaat, PVC, parket, tegels)',
          'Vloeren renoveren en opknappen',
          'Vloer egaliseren en voorbereiden Gouda',
          'Vloerbedekking verwijderen en plaatsen',
          'Vloer isolatie en ondervloer',
          'Vloer reparatie en onderhoud',
          'Vloer schuren en behandelen',
          'Vloer afwerking en plinten',
        ]}
        nearbyCities={['Rotterdam', 'Dordrecht', 'Leiden', 'Zoetermeer', 'Utrecht', 'Woerden']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle vloer werkzaamheden',
          'Werk met diverse vloermaterialen',
          'Lokale kennis van Gouda',
        ]}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Vloeren Schiedam | Weekend Klussen Vloeren Schiedam',
  description: 'Professionele vloeren service in Schiedam. Vloeren leggen, renoveren en onderhouden. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Schiedam',
  service: 'vloeren',
  keywords: ['vloeren Schiedam', 'vloeren leggen Schiedam', 'vloeren renovatie Schiedam', 'vloerbedekking Schiedam'],
});

export default function VloerenSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Schiedam"
        service="Vloeren"
        title="Vloeren Schiedam"
        description="Professionele vloeren service in Schiedam. Weekend Klussen verzorgt vloeren leggen, renoveren en onderhouden in Schiedam met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professionele vloeren service in Schiedam. Of u nu nieuwe vloeren wilt laten leggen, bestaande vloeren wilt renoveren, of vloeronderhoud nodig heeft - onze ervaren vakmannen zorgen voor een perfecte uitvoering in Schiedam. Wij werken met diverse vloermaterialen en zorgen voor een vlakke, duurzame vloer."
        serviceDetails={[
          'Vloeren leggen in Schiedam (laminaat, PVC, parket, tegels)',
          'Vloeren renoveren en opknappen',
          'Vloer egaliseren en voorbereiden Schiedam',
          'Vloerbedekking verwijderen en plaatsen',
          'Vloer isolatie en ondervloer',
          'Vloer reparatie en onderhoud',
          'Vloer schuren en behandelen',
          'Vloer afwerking en plinten',
        ]}
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Dordrecht']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle vloer werkzaamheden',
          'Werk met diverse vloermaterialen',
          'Lokale kennis van Schiedam',
        ]}
      />
      <Footer />
    </main>
  );
}

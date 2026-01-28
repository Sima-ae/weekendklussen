import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Vloeren Rotterdam | Weekend Klussen Vloeren Rotterdam',
  description: 'Professionele vloeren service in Rotterdam. Vloeren leggen, renoveren en onderhouden. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Rotterdam',
  service: 'vloeren',
  keywords: ['vloeren Rotterdam', 'vloeren leggen Rotterdam', 'vloeren renovatie Rotterdam', 'vloerbedekking Rotterdam'],
});

export default function VloerenRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Rotterdam"
        service="Vloeren"
        title="Vloeren Rotterdam"
        description="Professionele vloeren service in Rotterdam. Weekend Klussen verzorgt vloeren leggen, renoveren en onderhouden in Rotterdam met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professionele vloeren service in Rotterdam. Of u nu nieuwe vloeren wilt laten leggen, bestaande vloeren wilt renoveren, of vloeronderhoud nodig heeft - onze ervaren vakmannen zorgen voor een perfecte uitvoering in Rotterdam. Wij werken met diverse vloermaterialen en zorgen voor een vlakke, duurzame vloer."
        serviceDetails={[
          'Vloeren leggen in Rotterdam (laminaat, PVC, parket, tegels)',
          'Vloeren renoveren en opknappen',
          'Vloer egaliseren en voorbereiden Rotterdam',
          'Vloerbedekking verwijderen en plaatsen',
          'Vloer isolatie en ondervloer',
          'Vloer reparatie en onderhoud',
          'Vloer schuren en behandelen',
          'Vloer afwerking en plinten',
        ]}
        nearbyCities={['Schiedam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Capelle aan den IJssel', 'Ridderkerk']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle vloer werkzaamheden',
          'Werk met diverse vloermaterialen',
          'Lokale kennis van Rotterdam',
        ]}
      />
      <Footer />
    </main>
  );
}

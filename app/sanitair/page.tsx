import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sanitair | Weekend Klussen Sanitair Installatie en Reparatie',
  description: 'Professionele sanitair service in Zuid-Holland. Sanitair installatie, reparatie en vervanging. Ervaren loodgieters met vaste prijzen. Gratis offerte.',
  service: 'sanitair',
  keywords: ['sanitair', 'sanitair installatie', 'sanitair reparatie', 'sanitair vervanging', 'badkamer sanitair', 'toilet sanitair'],
});

export default function SanitairPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zuid-Holland"
        service="Sanitair"
        title="Sanitair Service"
        description="Professionele sanitair installatie, reparatie en vervanging in heel Zuid-Holland. Weekend Klussen verzorgt alle sanitair werkzaamheden met ervaren loodgieters en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professionele sanitair diensten in heel Zuid-Holland. Of u nu een nieuwe badkamer wilt inrichten, sanitair wilt vervangen, of reparatie nodig heeft - onze ervaren loodgieters zorgen voor een perfecte uitvoering. Wij werken met alle bekende sanitair merken en soorten."
        serviceDetails={[
          'Sanitair installatie (toilet, wastafel, douche, bad)',
          'Sanitair reparatie en onderhoud',
          'Sanitair vervanging en renovatie',
          'Badkamer sanitair installatie',
          'Toilet installatie en reparatie',
          'Wastafel installatie en montage',
          'Douche installatie en montage',
          'Kraan installatie en reparatie',
        ]}
        nearbyCities={['Rotterdam', 'Den Haag', 'Delft', 'Leiden', 'Dordrecht', 'Gouda', 'Zoetermeer']}
        serviceBenefits={[
          'Ervaren loodgieters met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle sanitair werkzaamheden',
          'Werken met alle bekende sanitair merken',
          'Lokale service in heel Zuid-Holland',
        ]}
      />
      <Footer />
    </main>
  );
}

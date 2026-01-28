import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sanitair Den Haag | Weekend Klussen Sanitair Installatie Den Haag',
  description: 'Professionele sanitair service in Den Haag. Sanitair installatie, reparatie en vervanging. Ervaren loodgieters met vaste prijzen. Gratis offerte.',
  location: 'Den Haag',
  service: 'sanitair',
  keywords: ['sanitair Den Haag', 'sanitair installatie Den Haag', 'sanitair reparatie Den Haag', 'badkamer sanitair Den Haag'],
});

export default function SanitairDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Den Haag"
        service="Sanitair"
        title="Sanitair Den Haag"
        description="Professionele sanitair installatie, reparatie en vervanging in Den Haag. Weekend Klussen verzorgt alle sanitair werkzaamheden in Den Haag met ervaren loodgieters en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professionele sanitair diensten in Den Haag. Of u nu een nieuwe badkamer wilt inrichten, sanitair wilt vervangen, of reparatie nodig heeft - onze ervaren loodgieters zorgen voor een perfecte uitvoering in Den Haag. Wij werken met alle bekende sanitair merken en soorten."
        serviceDetails={[
          'Sanitair installatie in Den Haag (toilet, wastafel, douche, bad)',
          'Sanitair reparatie en onderhoud Den Haag',
          'Sanitair vervanging en renovatie',
          'Badkamer sanitair installatie Den Haag',
          'Toilet installatie en reparatie',
          'Wastafel installatie en montage',
          'Douche installatie en montage',
          'Kraan installatie en reparatie',
        ]}
        nearbyCities={['Delft', 'Rijswijk', 'Rotterdam', 'Zoetermeer', 'Leiden', 'Voorburg']}
        serviceBenefits={[
          'Ervaren loodgieters met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle sanitair werkzaamheden',
          'Werken met alle bekende sanitair merken',
          'Lokale kennis van Den Haag',
        ]}
      />
      <Footer />
    </main>
  );
}

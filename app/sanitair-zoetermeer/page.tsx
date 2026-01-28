import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sanitair Zoetermeer | Weekend Klussen Sanitair Installatie Zoetermeer',
  description: 'Professionele sanitair service in Zoetermeer. Sanitair installatie, reparatie en vervanging. Ervaren loodgieters met vaste prijzen. Gratis offerte.',
  location: 'Zoetermeer',
  service: 'sanitair',
  keywords: ['sanitair Zoetermeer', 'sanitair installatie Zoetermeer', 'sanitair reparatie Zoetermeer', 'badkamer sanitair Zoetermeer'],
});

export default function SanitairZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zoetermeer"
        service="Sanitair"
        title="Sanitair Zoetermeer"
        description="Professionele sanitair installatie, reparatie en vervanging in Zoetermeer. Weekend Klussen verzorgt alle sanitair werkzaamheden in Zoetermeer met ervaren loodgieters en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professionele sanitair diensten in Zoetermeer. Of u nu een nieuwe badkamer wilt inrichten, sanitair wilt vervangen, of reparatie nodig heeft - onze ervaren loodgieters zorgen voor een perfecte uitvoering in Zoetermeer. Wij werken met alle bekende sanitair merken en soorten."
        serviceDetails={[
          'Sanitair installatie in Zoetermeer (toilet, wastafel, douche, bad)',
          'Sanitair reparatie en onderhoud Zoetermeer',
          'Sanitair vervanging en renovatie',
          'Badkamer sanitair installatie Zoetermeer',
          'Toilet installatie en reparatie',
          'Wastafel installatie en montage',
          'Douche installatie en montage',
          'Kraan installatie en reparatie',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Rijswijk']}
        serviceBenefits={[
          'Ervaren loodgieters met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle sanitair werkzaamheden',
          'Werken met alle bekende sanitair merken',
          'Lokale kennis van Zoetermeer',
        ]}
      />
      <Footer />
    </main>
  );
}

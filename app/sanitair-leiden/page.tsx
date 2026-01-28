import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sanitair Leiden | Weekend Klussen Sanitair Installatie Leiden',
  description: 'Professionele sanitair service in Leiden. Sanitair installatie, reparatie en vervanging. Ervaren loodgieters met vaste prijzen. Gratis offerte.',
  location: 'Leiden',
  service: 'sanitair',
  keywords: ['sanitair Leiden', 'sanitair installatie Leiden', 'sanitair reparatie Leiden', 'badkamer sanitair Leiden'],
});

export default function SanitairLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Leiden"
        service="Sanitair"
        title="Sanitair Leiden"
        description="Professionele sanitair installatie, reparatie en vervanging in Leiden. Weekend Klussen verzorgt alle sanitair werkzaamheden in Leiden met ervaren loodgieters en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professionele sanitair diensten in Leiden. Of u nu een nieuwe badkamer wilt inrichten, sanitair wilt vervangen, of reparatie nodig heeft - onze ervaren loodgieters zorgen voor een perfecte uitvoering in Leiden. Wij werken met alle bekende sanitair merken en soorten."
        serviceDetails={[
          'Sanitair installatie in Leiden (toilet, wastafel, douche, bad)',
          'Sanitair reparatie en onderhoud Leiden',
          'Sanitair vervanging en renovatie',
          'Badkamer sanitair installatie Leiden',
          'Toilet installatie en reparatie',
          'Wastafel installatie en montage',
          'Douche installatie en montage',
          'Kraan installatie en reparatie',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn', 'Katwijk']}
        serviceBenefits={[
          'Ervaren loodgieters met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle sanitair werkzaamheden',
          'Werken met alle bekende sanitair merken',
          'Lokale kennis van Leiden',
        ]}
      />
      <Footer />
    </main>
  );
}

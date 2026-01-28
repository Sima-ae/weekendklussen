import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sanitair Maassluis | Weekend Klussen Sanitair Installatie Maassluis',
  description: 'Professionele sanitair service in Maassluis. Sanitair installatie, reparatie en vervanging. Ervaren loodgieters met vaste prijzen. Gratis offerte.',
  location: 'Maassluis',
  service: 'sanitair',
  keywords: ['sanitair Maassluis', 'sanitair installatie Maassluis', 'sanitair reparatie Maassluis', 'badkamer sanitair Maassluis'],
});

export default function SanitairMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Maassluis"
        service="Sanitair"
        title="Sanitair Maassluis"
        description="Professionele sanitair installatie, reparatie en vervanging in Maassluis. Weekend Klussen verzorgt alle sanitair werkzaamheden in Maassluis met ervaren loodgieters en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professionele sanitair diensten in Maassluis. Of u nu een nieuwe badkamer wilt inrichten, sanitair wilt vervangen, of reparatie nodig heeft - onze ervaren loodgieters zorgen voor een perfecte uitvoering in Maassluis. Wij werken met alle bekende sanitair merken en soorten."
        serviceDetails={[
          'Sanitair installatie in Maassluis (toilet, wastafel, douche, bad)',
          'Sanitair reparatie en onderhoud Maassluis',
          'Sanitair vervanging en renovatie',
          'Badkamer sanitair installatie Maassluis',
          'Toilet installatie en reparatie',
          'Wastafel installatie en montage',
          'Douche installatie en montage',
          'Kraan installatie en reparatie',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          'Ervaren loodgieters met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle sanitair werkzaamheden',
          'Werken met alle bekende sanitair merken',
          'Lokale kennis van Maassluis',
        ]}
      />
      <Footer />
    </main>
  );
}

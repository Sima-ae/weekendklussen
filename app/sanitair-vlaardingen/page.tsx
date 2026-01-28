import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sanitair Vlaardingen | Weekend Klussen Sanitair Installatie Vlaardingen',
  description: 'Professionele sanitair service in Vlaardingen. Sanitair installatie, reparatie en vervanging. Ervaren loodgieters met vaste prijzen. Gratis offerte.',
  location: 'Vlaardingen',
  service: 'sanitair',
  keywords: ['sanitair Vlaardingen', 'sanitair installatie Vlaardingen', 'sanitair reparatie Vlaardingen', 'badkamer sanitair Vlaardingen'],
});

export default function SanitairVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Vlaardingen"
        service="Sanitair"
        title="Sanitair Vlaardingen"
        description="Professionele sanitair installatie, reparatie en vervanging in Vlaardingen. Weekend Klussen verzorgt alle sanitair werkzaamheden in Vlaardingen met ervaren loodgieters en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professionele sanitair diensten in Vlaardingen. Of u nu een nieuwe badkamer wilt inrichten, sanitair wilt vervangen, of reparatie nodig heeft - onze ervaren loodgieters zorgen voor een perfecte uitvoering in Vlaardingen. Wij werken met alle bekende sanitair merken en soorten."
        serviceDetails={[
          'Sanitair installatie in Vlaardingen (toilet, wastafel, douche, bad)',
          'Sanitair reparatie en onderhoud Vlaardingen',
          'Sanitair vervanging en renovatie',
          'Badkamer sanitair installatie Vlaardingen',
          'Toilet installatie en reparatie',
          'Wastafel installatie en montage',
          'Douche installatie en montage',
          'Kraan installatie en reparatie',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          'Ervaren loodgieters met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle sanitair werkzaamheden',
          'Werken met alle bekende sanitair merken',
          'Lokale kennis van Vlaardingen',
        ]}
      />
      <Footer />
    </main>
  );
}

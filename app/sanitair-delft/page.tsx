import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sanitair Delft | Weekend Klussen Sanitair Installatie Delft',
  description: 'Professionele sanitair service in Delft. Sanitair installatie, reparatie en vervanging. Ervaren loodgieters met vaste prijzen. Gratis offerte.',
  location: 'Delft',
  service: 'sanitair',
  keywords: ['sanitair Delft', 'sanitair installatie Delft', 'sanitair reparatie Delft', 'badkamer sanitair Delft'],
});

export default function SanitairDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Delft"
        service="Sanitair"
        title="Sanitair Delft"
        description="Professionele sanitair installatie, reparatie en vervanging in Delft. Weekend Klussen verzorgt alle sanitair werkzaamheden in Delft met ervaren loodgieters en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professionele sanitair diensten in Delft. Of u nu een nieuwe badkamer wilt inrichten, sanitair wilt vervangen, of reparatie nodig heeft - onze ervaren loodgieters zorgen voor een perfecte uitvoering in Delft. Wij werken met alle bekende sanitair merken en soorten."
        serviceDetails={[
          'Sanitair installatie in Delft (toilet, wastafel, douche, bad)',
          'Sanitair reparatie en onderhoud Delft',
          'Sanitair vervanging en renovatie',
          'Badkamer sanitair installatie Delft',
          'Toilet installatie en reparatie',
          'Wastafel installatie en montage',
          'Douche installatie en montage',
          'Kraan installatie en reparatie',
        ]}
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer', 'Leiden']}
        serviceBenefits={[
          'Ervaren loodgieters met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle sanitair werkzaamheden',
          'Werken met alle bekende sanitair merken',
          'Lokale kennis van Delft',
        ]}
      />
      <Footer />
    </main>
  );
}

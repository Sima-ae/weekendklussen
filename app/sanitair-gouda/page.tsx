import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sanitair Gouda | Weekend Klussen Sanitair Installatie Gouda',
  description: 'Professionele sanitair service in Gouda. Sanitair installatie, reparatie en vervanging. Ervaren loodgieters met vaste prijzen. Gratis offerte.',
  location: 'Gouda',
  service: 'sanitair',
  keywords: ['sanitair Gouda', 'sanitair installatie Gouda', 'sanitair reparatie Gouda', 'badkamer sanitair Gouda'],
});

export default function SanitairGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Gouda"
        service="Sanitair"
        title="Sanitair Gouda"
        description="Professionele sanitair installatie, reparatie en vervanging in Gouda. Weekend Klussen verzorgt alle sanitair werkzaamheden in Gouda met ervaren loodgieters en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professionele sanitair diensten in Gouda. Of u nu een nieuwe badkamer wilt inrichten, sanitair wilt vervangen, of reparatie nodig heeft - onze ervaren loodgieters zorgen voor een perfecte uitvoering in Gouda. Wij werken met alle bekende sanitair merken en soorten."
        serviceDetails={[
          'Sanitair installatie in Gouda (toilet, wastafel, douche, bad)',
          'Sanitair reparatie en onderhoud Gouda',
          'Sanitair vervanging en renovatie',
          'Badkamer sanitair installatie Gouda',
          'Toilet installatie en reparatie',
          'Wastafel installatie en montage',
          'Douche installatie en montage',
          'Kraan installatie en reparatie',
        ]}
        nearbyCities={['Rotterdam', 'Dordrecht', 'Leiden', 'Zoetermeer', 'Utrecht', 'Woerden']}
        serviceBenefits={[
          'Ervaren loodgieters met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle sanitair werkzaamheden',
          'Werken met alle bekende sanitair merken',
          'Lokale kennis van Gouda',
        ]}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sanitair Alphen aan den Rijn | Weekend Klussen Sanitair Installatie Alphen aan den Rijn',
  description: 'Professionele sanitair service in Alphen aan den Rijn. Sanitair installatie, reparatie en vervanging. Ervaren loodgieters met vaste prijzen. Gratis offerte.',
  location: 'Alphen aan den Rijn',
  service: 'sanitair',
  keywords: ['sanitair Alphen aan den Rijn', 'sanitair installatie Alphen aan den Rijn', 'sanitair reparatie Alphen aan den Rijn', 'badkamer sanitair Alphen aan den Rijn'],
});

export default function SanitairAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Alphen aan den Rijn"
        service="Sanitair"
        title="Sanitair Alphen aan den Rijn"
        description="Professionele sanitair installatie, reparatie en vervanging in Alphen aan den Rijn. Weekend Klussen verzorgt alle sanitair werkzaamheden in Alphen aan den Rijn met ervaren loodgieters en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professionele sanitair diensten in Alphen aan den Rijn. Of u nu een nieuwe badkamer wilt inrichten, sanitair wilt vervangen, of reparatie nodig heeft - onze ervaren loodgieters zorgen voor een perfecte uitvoering in Alphen aan den Rijn. Wij werken met alle bekende sanitair merken en soorten."
        serviceDetails={[
          'Sanitair installatie in Alphen aan den Rijn (toilet, wastafel, douche, bad)',
          'Sanitair reparatie en onderhoud Alphen aan den Rijn',
          'Sanitair vervanging en renovatie',
          'Badkamer sanitair installatie Alphen aan den Rijn',
          'Toilet installatie en reparatie',
          'Wastafel installatie en montage',
          'Douche installatie en montage',
          'Kraan installatie en reparatie',
        ]}
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Woerden', 'Utrecht']}
        serviceBenefits={[
          'Ervaren loodgieters met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle sanitair werkzaamheden',
          'Werken met alle bekende sanitair merken',
          'Lokale kennis van Alphen aan den Rijn',
        ]}
      />
      <Footer />
    </main>
  );
}

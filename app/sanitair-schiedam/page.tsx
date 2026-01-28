import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sanitair Schiedam | Weekend Klussen Sanitair Installatie Schiedam',
  description: 'Professionele sanitair service in Schiedam. Sanitair installatie, reparatie en vervanging. Ervaren loodgieters met vaste prijzen. Gratis offerte.',
  location: 'Schiedam',
  service: 'sanitair',
  keywords: ['sanitair Schiedam', 'sanitair installatie Schiedam', 'sanitair reparatie Schiedam', 'badkamer sanitair Schiedam'],
});

export default function SanitairSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Schiedam"
        service="Sanitair"
        title="Sanitair Schiedam"
        description="Professionele sanitair installatie, reparatie en vervanging in Schiedam. Weekend Klussen verzorgt alle sanitair werkzaamheden in Schiedam met ervaren loodgieters en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professionele sanitair diensten in Schiedam. Of u nu een nieuwe badkamer wilt inrichten, sanitair wilt vervangen, of reparatie nodig heeft - onze ervaren loodgieters zorgen voor een perfecte uitvoering in Schiedam. Wij werken met alle bekende sanitair merken en soorten."
        serviceDetails={[
          'Sanitair installatie in Schiedam (toilet, wastafel, douche, bad)',
          'Sanitair reparatie en onderhoud Schiedam',
          'Sanitair vervanging en renovatie',
          'Badkamer sanitair installatie Schiedam',
          'Toilet installatie en reparatie',
          'Wastafel installatie en montage',
          'Douche installatie en montage',
          'Kraan installatie en reparatie',
        ]}
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Dordrecht']}
        serviceBenefits={[
          'Ervaren loodgieters met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle sanitair werkzaamheden',
          'Werken met alle bekende sanitair merken',
          'Lokale kennis van Schiedam',
        ]}
      />
      <Footer />
    </main>
  );
}

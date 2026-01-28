import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sanitair Rotterdam | Weekend Klussen Sanitair Installatie Rotterdam',
  description: 'Professionele sanitair service in Rotterdam. Sanitair installatie, reparatie en vervanging. Ervaren loodgieters met vaste prijzen. Gratis offerte.',
  location: 'Rotterdam',
  service: 'sanitair',
  keywords: ['sanitair Rotterdam', 'sanitair installatie Rotterdam', 'sanitair reparatie Rotterdam', 'badkamer sanitair Rotterdam'],
});

export default function SanitairRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Rotterdam"
        service="Sanitair"
        title="Sanitair Rotterdam"
        description="Professionele sanitair installatie, reparatie en vervanging in Rotterdam. Weekend Klussen verzorgt alle sanitair werkzaamheden in Rotterdam met ervaren loodgieters en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professionele sanitair diensten in Rotterdam. Of u nu een nieuwe badkamer wilt inrichten, sanitair wilt vervangen, of reparatie nodig heeft - onze ervaren loodgieters zorgen voor een perfecte uitvoering in Rotterdam. Wij werken met alle bekende sanitair merken en soorten."
        serviceDetails={[
          'Sanitair installatie in Rotterdam (toilet, wastafel, douche, bad)',
          'Sanitair reparatie en onderhoud Rotterdam',
          'Sanitair vervanging en renovatie',
          'Badkamer sanitair installatie Rotterdam',
          'Toilet installatie en reparatie',
          'Wastafel installatie en montage',
          'Douche installatie en montage',
          'Kraan installatie en reparatie',
        ]}
        nearbyCities={['Schiedam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Capelle aan den IJssel', 'Ridderkerk']}
        serviceBenefits={[
          'Ervaren loodgieters met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle sanitair werkzaamheden',
          'Werken met alle bekende sanitair merken',
          'Lokale kennis van Rotterdam',
        ]}
      />
      <Footer />
    </main>
  );
}

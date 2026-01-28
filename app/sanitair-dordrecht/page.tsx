import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sanitair Dordrecht | Weekend Klussen Sanitair Installatie Dordrecht',
  description: 'Professionele sanitair service in Dordrecht. Sanitair installatie, reparatie en vervanging. Ervaren loodgieters met vaste prijzen. Gratis offerte.',
  location: 'Dordrecht',
  service: 'sanitair',
  keywords: ['sanitair Dordrecht', 'sanitair installatie Dordrecht', 'sanitair reparatie Dordrecht', 'badkamer sanitair Dordrecht'],
});

export default function SanitairDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Dordrecht"
        service="Sanitair"
        title="Sanitair Dordrecht"
        description="Professionele sanitair installatie, reparatie en vervanging in Dordrecht. Weekend Klussen verzorgt alle sanitair werkzaamheden in Dordrecht met ervaren loodgieters en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professionele sanitair diensten in Dordrecht. Of u nu een nieuwe badkamer wilt inrichten, sanitair wilt vervangen, of reparatie nodig heeft - onze ervaren loodgieters zorgen voor een perfecte uitvoering in Dordrecht. Wij werken met alle bekende sanitair merken en soorten."
        serviceDetails={[
          'Sanitair installatie in Dordrecht (toilet, wastafel, douche, bad)',
          'Sanitair reparatie en onderhoud Dordrecht',
          'Sanitair vervanging en renovatie',
          'Badkamer sanitair installatie Dordrecht',
          'Toilet installatie en reparatie',
          'Wastafel installatie en montage',
          'Douche installatie en montage',
          'Kraan installatie en reparatie',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Gouda', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht']}
        serviceBenefits={[
          'Ervaren loodgieters met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle sanitair werkzaamheden',
          'Werken met alle bekende sanitair merken',
          'Lokale kennis van Dordrecht',
        ]}
      />
      <Footer />
    </main>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totale Renovatie Den Haag | Weekend Klussen Totale Renovatie Den Haag',
  description: 'Totale renovatie van uw woning in Den Haag. Complete woningverbouwing van A tot Z. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Den Haag',
  service: 'totale renovatie',
  keywords: ['totale renovatie Den Haag', 'complete renovatie Den Haag', 'totaalrenovatie Den Haag', 'woningverbouwing Den Haag'],
});

export default function TotaleRenovatieDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Den Haag"
        service="Totale Renovatie"
        title="Totale Renovatie Den Haag"
        description="Totale renovatie van uw woning in Den Haag. Weekend Klussen verzorgt complete woningverbouwingen van A tot Z in Den Haag met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt totale renovatie in Den Haag. Of u nu uw hele woning wilt renoveren, een totaalverbouwing nodig heeft, of een complete make-over wilt - wij verzorgen alles uit één hand in Den Haag. Van het eerste ontwerp tot de uiteindelijke oplevering, wij zorgen voor een perfecte uitvoering van uw totale renovatie project."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie Den Haag',
          'Badkamer renovatie en keuken renovatie',
          'Vloeren, muren, plafonds en deuren',
          'Elektra, verwarming en sanitair Den Haag',
          'Isolatie en energiebesparende maatregelen',
          'Schilderwerk, behang en vloerbedekking',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Delft', 'Rijswijk', 'Rotterdam', 'Zoetermeer', 'Leiden', 'Voorburg']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren vaklieden met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle renovatie werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Den Haag',
        ]}
      />
      <Footer />
    </main>
  );
}

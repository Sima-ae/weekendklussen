import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totale Renovatie Leiden | Weekend Klussen Totale Renovatie Leiden',
  description: 'Totale renovatie van uw woning in Leiden. Complete woningverbouwing van A tot Z. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Leiden',
  service: 'totale renovatie',
  keywords: ['totale renovatie Leiden', 'complete renovatie Leiden', 'totaalrenovatie Leiden', 'woningverbouwing Leiden'],
});

export default function TotaleRenovatieLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Leiden"
        service="Totale Renovatie"
        title="Totale Renovatie Leiden"
        description="Totale renovatie van uw woning in Leiden. Weekend Klussen verzorgt complete woningverbouwingen van A tot Z in Leiden met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt totale renovatie in Leiden. Of u nu uw hele woning wilt renoveren, een totaalverbouwing nodig heeft, of een complete make-over wilt - wij verzorgen alles uit één hand in Leiden. Van het eerste ontwerp tot de uiteindelijke oplevering, wij zorgen voor een perfecte uitvoering van uw totale renovatie project."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie Leiden',
          'Badkamer renovatie en keuken renovatie',
          'Vloeren, muren, plafonds en deuren',
          'Elektra, verwarming en sanitair Leiden',
          'Isolatie en energiebesparende maatregelen',
          'Schilderwerk, behang en vloerbedekking',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn', 'Katwijk']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren vaklieden met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle renovatie werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Leiden',
        ]}
      />
      <Footer />
    </main>
  );
}

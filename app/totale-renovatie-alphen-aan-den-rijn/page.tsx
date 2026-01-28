import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totale Renovatie Alphen aan den Rijn | Weekend Klussen Totale Renovatie Alphen aan den Rijn',
  description: 'Totale renovatie van uw woning in Alphen aan den Rijn. Complete woningverbouwing van A tot Z. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Alphen aan den Rijn',
  service: 'totale renovatie',
  keywords: ['totale renovatie Alphen aan den Rijn', 'complete renovatie Alphen aan den Rijn', 'totaalrenovatie Alphen aan den Rijn', 'woningverbouwing Alphen aan den Rijn'],
});

export default function TotaleRenovatieAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Alphen aan den Rijn"
        service="Totale Renovatie"
        title="Totale Renovatie Alphen aan den Rijn"
        description="Totale renovatie van uw woning in Alphen aan den Rijn. Weekend Klussen verzorgt complete woningverbouwingen van A tot Z in Alphen aan den Rijn met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt totale renovatie in Alphen aan den Rijn. Of u nu uw hele woning wilt renoveren, een totaalverbouwing nodig heeft, of een complete make-over wilt - wij verzorgen alles uit één hand in Alphen aan den Rijn. Van het eerste ontwerp tot de uiteindelijke oplevering, wij zorgen voor een perfecte uitvoering van uw totale renovatie project."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie Alphen aan den Rijn',
          'Badkamer renovatie en keuken renovatie',
          'Vloeren, muren, plafonds en deuren',
          'Elektra, verwarming en sanitair Alphen aan den Rijn',
          'Isolatie en energiebesparende maatregelen',
          'Schilderwerk, behang en vloerbedekking',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Woerden', 'Utrecht']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren vaklieden met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle renovatie werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Alphen aan den Rijn',
        ]}
      />
      <Footer />
    </main>
  );
}

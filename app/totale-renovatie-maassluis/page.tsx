import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totale Renovatie Maassluis | Weekend Klussen Totale Renovatie Maassluis',
  description: 'Totale renovatie van uw woning in Maassluis. Complete woningverbouwing van A tot Z. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Maassluis',
  service: 'totale renovatie',
  keywords: ['totale renovatie Maassluis', 'complete renovatie Maassluis', 'totaalrenovatie Maassluis', 'woningverbouwing Maassluis'],
});

export default function TotaleRenovatieMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Maassluis"
        service="Totale Renovatie"
        title="Totale Renovatie Maassluis"
        description="Totale renovatie van uw woning in Maassluis. Weekend Klussen verzorgt complete woningverbouwingen van A tot Z in Maassluis met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt totale renovatie in Maassluis. Of u nu uw hele woning wilt renoveren, een totaalverbouwing nodig heeft, of een complete make-over wilt - wij verzorgen alles uit één hand in Maassluis. Van het eerste ontwerp tot de uiteindelijke oplevering, wij zorgen voor een perfecte uitvoering van uw totale renovatie project."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie Maassluis',
          'Badkamer renovatie en keuken renovatie',
          'Vloeren, muren, plafonds en deuren',
          'Elektra, verwarming en sanitair Maassluis',
          'Isolatie en energiebesparende maatregelen',
          'Schilderwerk, behang en vloerbedekking',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren vaklieden met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle renovatie werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Maassluis',
        ]}
      />
      <Footer />
    </main>
  );
}

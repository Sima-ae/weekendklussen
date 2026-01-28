import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totale Renovatie Vlaardingen | Weekend Klussen Totale Renovatie Vlaardingen',
  description: 'Totale renovatie van uw woning in Vlaardingen. Complete woningverbouwing van A tot Z. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Vlaardingen',
  service: 'totale renovatie',
  keywords: ['totale renovatie Vlaardingen', 'complete renovatie Vlaardingen', 'totaalrenovatie Vlaardingen', 'woningverbouwing Vlaardingen'],
});

export default function TotaleRenovatieVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Vlaardingen"
        service="Totale Renovatie"
        title="Totale Renovatie Vlaardingen"
        description="Totale renovatie van uw woning in Vlaardingen. Weekend Klussen verzorgt complete woningverbouwingen van A tot Z in Vlaardingen met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt totale renovatie in Vlaardingen. Of u nu uw hele woning wilt renoveren, een totaalverbouwing nodig heeft, of een complete make-over wilt - wij verzorgen alles uit één hand in Vlaardingen. Van het eerste ontwerp tot de uiteindelijke oplevering, wij zorgen voor een perfecte uitvoering van uw totale renovatie project."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie Vlaardingen',
          'Badkamer renovatie en keuken renovatie',
          'Vloeren, muren, plafonds en deuren',
          'Elektra, verwarming en sanitair Vlaardingen',
          'Isolatie en energiebesparende maatregelen',
          'Schilderwerk, behang en vloerbedekking',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren vaklieden met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle renovatie werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Vlaardingen',
        ]}
      />
      <Footer />
    </main>
  );
}

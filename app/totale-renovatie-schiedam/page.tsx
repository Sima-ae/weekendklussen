import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totale Renovatie Schiedam | Weekend Klussen Totale Renovatie Schiedam',
  description: 'Totale renovatie van uw woning in Schiedam. Complete woningverbouwing van A tot Z. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Schiedam',
  service: 'totale renovatie',
  keywords: ['totale renovatie Schiedam', 'complete renovatie Schiedam', 'totaalrenovatie Schiedam', 'woningverbouwing Schiedam'],
});

export default function TotaleRenovatieSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Schiedam"
        service="Totale Renovatie"
        title="Totale Renovatie Schiedam"
        description="Totale renovatie van uw woning in Schiedam. Weekend Klussen verzorgt complete woningverbouwingen van A tot Z in Schiedam met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt totale renovatie in Schiedam. Of u nu uw hele woning wilt renoveren, een totaalverbouwing nodig heeft, of een complete make-over wilt - wij verzorgen alles uit één hand in Schiedam. Van het eerste ontwerp tot de uiteindelijke oplevering, wij zorgen voor een perfecte uitvoering van uw totale renovatie project."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie Schiedam',
          'Badkamer renovatie en keuken renovatie',
          'Vloeren, muren, plafonds en deuren',
          'Elektra, verwarming en sanitair Schiedam',
          'Isolatie en energiebesparende maatregelen',
          'Schilderwerk, behang en vloerbedekking',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Dordrecht']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren vaklieden met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle renovatie werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Schiedam',
        ]}
      />
      <Footer />
    </main>
  );
}

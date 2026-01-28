import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totale Renovatie Rotterdam | Weekend Klussen Totale Renovatie Rotterdam',
  description: 'Totale renovatie van uw woning in Rotterdam. Complete woningverbouwing van A tot Z. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Rotterdam',
  service: 'totale renovatie',
  keywords: ['totale renovatie Rotterdam', 'complete renovatie Rotterdam', 'totaalrenovatie Rotterdam', 'woningverbouwing Rotterdam'],
});

export default function TotaleRenovatieRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Rotterdam"
        service="Totale Renovatie"
        title="Totale Renovatie Rotterdam"
        description="Totale renovatie van uw woning in Rotterdam. Weekend Klussen verzorgt complete woningverbouwingen van A tot Z in Rotterdam met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt totale renovatie in Rotterdam. Of u nu uw hele woning wilt renoveren, een totaalverbouwing nodig heeft, of een complete make-over wilt - wij verzorgen alles uit één hand in Rotterdam. Van het eerste ontwerp tot de uiteindelijke oplevering, wij zorgen voor een perfecte uitvoering van uw totale renovatie project."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie Rotterdam',
          'Badkamer renovatie en keuken renovatie',
          'Vloeren, muren, plafonds en deuren',
          'Elektra, verwarming en sanitair Rotterdam',
          'Isolatie en energiebesparende maatregelen',
          'Schilderwerk, behang en vloerbedekking',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Schiedam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Capelle aan den IJssel', 'Ridderkerk']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren vaklieden met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle renovatie werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Rotterdam',
        ]}
      />
      <Footer />
    </main>
  );
}

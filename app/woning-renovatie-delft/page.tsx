import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Woning Renovatie Delft | Weekend Klussen Woning Renovatie Delft',
  description: 'Woning renovatie in Delft. Complete woningverbouwing en renovatie van uw woning. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Delft',
  service: 'woning renovatie',
  keywords: ['woning renovatie Delft', 'woning verbouwing Delft', 'woningrenovatie Delft', 'woning verbouwen Delft'],
});

export default function WoningRenovatieDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Delft"
        service="Woning Renovatie"
        title="Woning Renovatie Delft"
        description="Woning renovatie in Delft. Weekend Klussen verzorgt complete woningrenovatie en woningverbouwing in Delft van A tot Z met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt woning renovatie in Delft. Of u nu uw hele woning wilt renoveren, een woningverbouwing nodig heeft, of uw woning wilt opknappen - wij verzorgen alles uit één hand in Delft. Van het eerste ontwerp tot de uiteindelijke oplevering, wij zorgen voor een perfecte uitvoering van uw woning renovatie project."
        serviceDetails={[
          'Complete woningverbouwing en woningrenovatie Delft',
          'Badkamer renovatie en keuken renovatie',
          'Vloeren, muren, plafonds en deuren',
          'Elektra, verwarming en sanitair Delft',
          'Isolatie en energiebesparende maatregelen',
          'Schilderwerk, behang en vloerbedekking',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer', 'Leiden']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren vaklieden met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle renovatie werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Delft',
        ]}
      />
      <Footer />
    </main>
  );
}

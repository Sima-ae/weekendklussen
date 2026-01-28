import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Woning Renovatie | Weekend Klussen Woning Renovatie Service',
  description: 'Woning renovatie in Zuid-Holland. Complete woningverbouwing en renovatie van uw woning. Ervaren aannemer met vaste prijzen. Gratis offerte.',
  service: 'woning renovatie',
  keywords: ['woning renovatie', 'woning verbouwing', 'woningrenovatie', 'woning verbouwen', 'woning opknappen'],
});

export default function WoningRenovatiePage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zuid-Holland"
        service="Woning Renovatie"
        title="Woning Renovatie"
        description="Woning renovatie en verbouwing. Weekend Klussen verzorgt complete woningrenovatie en woningverbouwing van A tot Z met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt woning renovatie in heel Zuid-Holland. Of u nu uw hele woning wilt renoveren, een woningverbouwing nodig heeft, of uw woning wilt opknappen - wij verzorgen alles uit één hand. Van het eerste ontwerp tot de uiteindelijke oplevering, wij zorgen voor een perfecte uitvoering van uw woning renovatie project."
        serviceDetails={[
          'Complete woningverbouwing en woningrenovatie',
          'Badkamer renovatie en keuken renovatie',
          'Vloeren, muren, plafonds en deuren',
          'Elektra, verwarming en sanitair',
          'Isolatie en energiebesparende maatregelen',
          'Schilderwerk, behang en vloerbedekking',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Rotterdam', 'Den Haag', 'Delft', 'Leiden', 'Dordrecht', 'Gouda', 'Zoetermeer']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren aannemer met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle renovatie werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale service in heel Zuid-Holland',
        ]}
      />
      <Footer />
    </main>
  );
}

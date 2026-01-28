import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Woning Renovatie Den Haag | Weekend Klussen Woning Renovatie Den Haag',
  description: 'Woning renovatie in Den Haag. Complete woningverbouwing en renovatie van uw woning. Ervaren aannemer met vaste prijzen. Gratis offerte.',
  location: 'Den Haag',
  service: 'woning renovatie',
  keywords: ['woning renovatie Den Haag', 'woning verbouwing Den Haag', 'woningrenovatie Den Haag', 'woning verbouwen Den Haag'],
});

export default function WoningRenovatieDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Den Haag"
        service="Woning Renovatie"
        title="Woning Renovatie Den Haag"
        description="Woning renovatie in Den Haag. Weekend Klussen verzorgt complete woningrenovatie en woningverbouwing in Den Haag van A tot Z met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt woning renovatie in Den Haag. Of u nu uw hele woning wilt renoveren, een woningverbouwing nodig heeft, of uw woning wilt opknappen - wij verzorgen alles uit één hand in Den Haag. Van het eerste ontwerp tot de uiteindelijke oplevering, wij zorgen voor een perfecte uitvoering van uw woning renovatie project."
        serviceDetails={[
          'Complete woningverbouwing en woningrenovatie Den Haag',
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
          'Ervaren aannemer met jarenlange expertise',
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

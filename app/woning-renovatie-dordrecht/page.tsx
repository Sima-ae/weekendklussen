import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Woning Renovatie Dordrecht | Weekend Klussen Woning Renovatie Dordrecht',
  description: 'Woning renovatie in Dordrecht. Complete woningverbouwing en renovatie van uw woning. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Dordrecht',
  service: 'woning renovatie',
  keywords: ['woning renovatie Dordrecht', 'woning verbouwing Dordrecht', 'woningrenovatie Dordrecht', 'woning verbouwen Dordrecht'],
});

export default function WoningRenovatieDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Dordrecht"
        service="Woning Renovatie"
        title="Woning Renovatie Dordrecht"
        description="Woning renovatie in Dordrecht. Weekend Klussen verzorgt complete woningrenovatie en woningverbouwing in Dordrecht van A tot Z met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt woning renovatie in Dordrecht. Of u nu uw hele woning wilt renoveren, een woningverbouwing nodig heeft, of uw woning wilt opknappen - wij verzorgen alles uit één hand in Dordrecht. Van het eerste ontwerp tot de uiteindelijke oplevering, wij zorgen voor een perfecte uitvoering van uw woning renovatie project."
        serviceDetails={[
          'Complete woningverbouwing en woningrenovatie Dordrecht',
          'Badkamer renovatie en keuken renovatie',
          'Vloeren, muren, plafonds en deuren',
          'Elektra, verwarming en sanitair Dordrecht',
          'Isolatie en energiebesparende maatregelen',
          'Schilderwerk, behang en vloerbedekking',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Gouda', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren vaklieden met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle renovatie werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Dordrecht',
        ]}
      />
      <Footer />
    </main>
  );
}

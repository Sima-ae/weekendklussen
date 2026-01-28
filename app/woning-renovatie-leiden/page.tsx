import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Woning Renovatie Leiden | Weekend Klussen Woning Renovatie Leiden',
  description: 'Woning renovatie in Leiden. Complete woningverbouwing en renovatie van uw woning. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Leiden',
  service: 'woning renovatie',
  keywords: ['woning renovatie Leiden', 'woning verbouwing Leiden', 'woningrenovatie Leiden', 'woning verbouwen Leiden'],
});

export default function WoningRenovatieLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Leiden"
        service="Woning Renovatie"
        title="Woning Renovatie Leiden"
        description="Woning renovatie in Leiden. Weekend Klussen verzorgt complete woningrenovatie en woningverbouwing in Leiden van A tot Z met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt woning renovatie in Leiden. Of u nu uw hele woning wilt renoveren, een woningverbouwing nodig heeft, of uw woning wilt opknappen - wij verzorgen alles uit één hand in Leiden. Van het eerste ontwerp tot de uiteindelijke oplevering, wij zorgen voor een perfecte uitvoering van uw woning renovatie project."
        serviceDetails={[
          'Complete woningverbouwing en woningrenovatie Leiden',
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

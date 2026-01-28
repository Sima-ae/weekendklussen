import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Woning Renovatie Alphen aan den Rijn | Weekend Klussen Woning Renovatie Alphen aan den Rijn',
  description: 'Woning renovatie in Alphen aan den Rijn. Complete woningverbouwing en renovatie van uw woning. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Alphen aan den Rijn',
  service: 'woning renovatie',
  keywords: ['woning renovatie Alphen aan den Rijn', 'woning verbouwing Alphen aan den Rijn', 'woningrenovatie Alphen aan den Rijn', 'woning verbouwen Alphen aan den Rijn'],
});

export default function WoningRenovatieAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Alphen aan den Rijn"
        service="Woning Renovatie"
        title="Woning Renovatie Alphen aan den Rijn"
        description="Woning renovatie in Alphen aan den Rijn. Weekend Klussen verzorgt complete woningrenovatie en woningverbouwing in Alphen aan den Rijn van A tot Z met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt woning renovatie in Alphen aan den Rijn. Of u nu uw hele woning wilt renoveren, een woningverbouwing nodig heeft, of uw woning wilt opknappen - wij verzorgen alles uit één hand in Alphen aan den Rijn. Van het eerste ontwerp tot de uiteindelijke oplevering, wij zorgen voor een perfecte uitvoering van uw woning renovatie project."
        serviceDetails={[
          'Complete woningverbouwing en woningrenovatie Alphen aan den Rijn',
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
